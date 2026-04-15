"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { StatusBadge } from "@/components/StatusBadge";
import { formatMoney } from "@/lib/utils";

type Customer = {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  notes: string | null;
  totalRevenue: number;
  createdAt: string;
  jobs: { id: string; jobType: string; status: string }[];
  invoices: { id: string; amount: number; amountPaid: number; status: string }[];
};

const EMPTY: Partial<Customer> = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  notes: "",
};

export function CustomersClient({ initial }: { initial: Customer[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<Partial<Customer> | null>(null);
  const [search, setSearch] = useState("");
  const [busy, setBusy] = useState(false);

  const filtered = useMemo(() => {
    if (!search) return initial;
    const s = search.toLowerCase();
    return initial.filter(
      (c) =>
        c.name.toLowerCase().includes(s) ||
        (c.phone || "").toLowerCase().includes(s) ||
        (c.email || "").toLowerCase().includes(s) ||
        (c.city || "").toLowerCase().includes(s)
    );
  }, [initial, search]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setBusy(true);
    const isEdit = !!editing.id;
    const url = isEdit ? `/api/customers/${editing.id}` : "/api/customers";
    await fetch(url, {
      method: isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });
    setBusy(false);
    setEditing(null);
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this customer? This will also remove related jobs, estimates, and invoices.")) return;
    const res = await fetch(`/api/customers/${id}`, { method: "DELETE" });
    if (!res.ok) {
      alert("Could not delete — customer has related records. Remove those first.");
      return;
    }
    router.refresh();
  }

  const totalRevenue = initial.reduce((sum, c) => sum + (c.totalRevenue || 0), 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="card-padded">
          <div className="label">Total Customers</div>
          <div className="font-display text-4xl text-gold">{initial.length}</div>
        </div>
        <div className="card-padded">
          <div className="label">Lifetime Revenue</div>
          <div className="font-display text-4xl text-gold">{formatMoney(totalRevenue)}</div>
        </div>
        <div className="card-padded">
          <div className="label">Active Jobs</div>
          <div className="font-display text-4xl text-gold">
            {initial.reduce((n, c) => n + c.jobs.filter((j) => j.status !== "Complete").length, 0)}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <input
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input w-64"
        />
        <button className="btn-primary" onClick={() => setEditing({ ...EMPTY })}>
          + New Customer
        </button>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="th">Customer</th>
              <th className="th">Contact</th>
              <th className="th">Location</th>
              <th className="th">Jobs</th>
              <th className="th">Invoices</th>
              <th className="th">Revenue</th>
              <th className="th text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => {
              const unpaid = c.invoices
                .filter((i) => i.status !== "Paid")
                .reduce((s, i) => s + (i.amount - i.amountPaid), 0);
              return (
                <tr key={c.id} className="hover:bg-ink-700/50">
                  <td className="td font-medium text-gray-100">{c.name}</td>
                  <td className="td">
                    <div>{c.phone || "-"}</div>
                    <div className="text-xs text-gray-500">{c.email || ""}</div>
                  </td>
                  <td className="td">
                    <div>{c.address || "-"}</div>
                    <div className="text-xs text-gray-500">{c.city || ""}</div>
                  </td>
                  <td className="td">
                    <div className="flex flex-wrap gap-1">
                      {c.jobs.length === 0 && <span className="text-gray-500">—</span>}
                      {c.jobs.map((j) => (
                        <span key={j.id} className="text-[10px] px-2 py-0.5 bg-ink-600 border border-ink-500 rounded-full">
                          {j.jobType}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="td">
                    <div className="text-sm">{c.invoices.length} total</div>
                    {unpaid > 0 && (
                      <div className="text-xs text-rose-400">{formatMoney(unpaid)} outstanding</div>
                    )}
                  </td>
                  <td className="td font-semibold text-gold">{formatMoney(c.totalRevenue)}</td>
                  <td className="td text-right space-x-2 whitespace-nowrap">
                    <button className="text-xs text-gray-300 hover:text-gold" onClick={() => setEditing(c)}>
                      Edit
                    </button>
                    <button className="text-xs text-rose-400 hover:text-rose-300" onClick={() => remove(c.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td className="td text-center text-gray-500" colSpan={7}>No customers yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setEditing(null)}>
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={save}
            className="card-padded w-full max-w-2xl space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl text-gold">
                {editing.id ? "Edit Customer" : "New Customer"}
              </h2>
              <button type="button" className="text-gray-400" onClick={() => setEditing(null)}>✕</button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">Name *</label>
                <input className="input" required value={editing.name || ""} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
              </div>
              <div>
                <label className="label">Phone</label>
                <input className="input" value={editing.phone || ""} onChange={(e) => setEditing({ ...editing, phone: e.target.value })} />
              </div>
              <div>
                <label className="label">Email</label>
                <input className="input" type="email" value={editing.email || ""} onChange={(e) => setEditing({ ...editing, email: e.target.value })} />
              </div>
              <div>
                <label className="label">City</label>
                <input className="input" value={editing.city || ""} onChange={(e) => setEditing({ ...editing, city: e.target.value })} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Address</label>
                <input className="input" value={editing.address || ""} onChange={(e) => setEditing({ ...editing, address: e.target.value })} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Notes</label>
                <textarea className="input min-h-[100px]" value={editing.notes || ""} onChange={(e) => setEditing({ ...editing, notes: e.target.value })} />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-ink-600">
              <button type="button" className="btn-ghost" onClick={() => setEditing(null)}>Cancel</button>
              <button type="submit" disabled={busy} className="btn-primary">
                {busy ? "Saving..." : editing.id ? "Save Changes" : "Create Customer"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
