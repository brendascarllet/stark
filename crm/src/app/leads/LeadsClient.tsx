"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { StatusBadge } from "@/components/StatusBadge";
import { LEAD_SOURCES, LEAD_STATUSES, JOB_TYPES, formatDate } from "@/lib/utils";

type Lead = {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  serviceType: string | null;
  leadSource: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
  isCustomer: boolean;
};

const EMPTY: Partial<Lead> = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  serviceType: "",
  leadSource: "",
  status: "New",
  notes: "",
};

export function LeadsClient({ initialLeads }: { initialLeads: Lead[] }) {
  const router = useRouter();
  const [leads] = useState(initialLeads);
  const [editing, setEditing] = useState<Partial<Lead> | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [busy, setBusy] = useState(false);

  const filtered = useMemo(() => {
    return leads.filter((l) => {
      if (statusFilter !== "All" && l.status !== statusFilter) return false;
      if (search) {
        const s = search.toLowerCase();
        return (
          l.name.toLowerCase().includes(s) ||
          (l.phone || "").toLowerCase().includes(s) ||
          (l.email || "").toLowerCase().includes(s) ||
          (l.city || "").toLowerCase().includes(s)
        );
      }
      return true;
    });
  }, [leads, statusFilter, search]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setBusy(true);
    const isEdit = !!editing.id;
    const url = isEdit ? `/api/leads/${editing.id}` : "/api/leads";
    const method = isEdit ? "PATCH" : "POST";
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });
    setBusy(false);
    setEditing(null);
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this lead?")) return;
    await fetch(`/api/leads/${id}`, { method: "DELETE" });
    router.refresh();
  }

  async function convert(id: string) {
    if (!confirm("Convert this lead into a customer?")) return;
    const res = await fetch(`/api/leads/${id}/convert`, { method: "POST" });
    if (res.ok) router.push("/customers");
    else alert((await res.json()).error || "Failed to convert");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            className={`btn ${statusFilter === "All" ? "bg-gold text-ink-900" : "btn-ghost"}`}
            onClick={() => setStatusFilter("All")}
          >
            All ({leads.length})
          </button>
          {LEAD_STATUSES.map((s) => {
            const count = leads.filter((l) => l.status === s).length;
            return (
              <button
                key={s}
                className={`btn ${statusFilter === s ? "bg-gold text-ink-900" : "btn-ghost"}`}
                onClick={() => setStatusFilter(s)}
              >
                {s} ({count})
              </button>
            );
          })}
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Search name, phone, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input w-64"
          />
          <button className="btn-primary" onClick={() => setEditing({ ...EMPTY })}>
            + New Lead
          </button>
        </div>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="th">Name</th>
              <th className="th">Contact</th>
              <th className="th">Address</th>
              <th className="th">Service</th>
              <th className="th">Source</th>
              <th className="th">Status</th>
              <th className="th">Added</th>
              <th className="th text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => (
              <tr key={l.id} className="hover:bg-ink-700/50">
                <td className="td font-medium text-gray-100">{l.name}</td>
                <td className="td">
                  <div>{l.phone || "-"}</div>
                  <div className="text-xs text-gray-500">{l.email || ""}</div>
                </td>
                <td className="td">
                  <div>{l.address || "-"}</div>
                  <div className="text-xs text-gray-500">{l.city || ""}</div>
                </td>
                <td className="td">{l.serviceType || "-"}</td>
                <td className="td">{l.leadSource || "-"}</td>
                <td className="td"><StatusBadge status={l.status} /></td>
                <td className="td">{formatDate(l.createdAt)}</td>
                <td className="td text-right space-x-2 whitespace-nowrap">
                  {!l.isCustomer && (
                    <button className="text-xs text-gold hover:underline" onClick={() => convert(l.id)}>
                      Convert
                    </button>
                  )}
                  <button className="text-xs text-gray-300 hover:text-gold" onClick={() => setEditing(l)}>
                    Edit
                  </button>
                  <button className="text-xs text-rose-400 hover:text-rose-300" onClick={() => remove(l.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td className="td text-center text-gray-500" colSpan={8}>
                  No leads match filter.
                </td>
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
                {editing.id ? "Edit Lead" : "New Lead"}
              </h2>
              <button type="button" className="text-gray-400" onClick={() => setEditing(null)}>✕</button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">Name *</label>
                <input
                  className="input"
                  required
                  value={editing.name || ""}
                  onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                />
              </div>
              <div>
                <label className="label">Phone</label>
                <input
                  className="input"
                  value={editing.phone || ""}
                  onChange={(e) => setEditing({ ...editing, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  value={editing.email || ""}
                  onChange={(e) => setEditing({ ...editing, email: e.target.value })}
                />
              </div>
              <div>
                <label className="label">City</label>
                <input
                  className="input"
                  value={editing.city || ""}
                  onChange={(e) => setEditing({ ...editing, city: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="label">Address</label>
                <input
                  className="input"
                  value={editing.address || ""}
                  onChange={(e) => setEditing({ ...editing, address: e.target.value })}
                />
              </div>
              <div>
                <label className="label">Service Type</label>
                <select
                  className="input"
                  value={editing.serviceType || ""}
                  onChange={(e) => setEditing({ ...editing, serviceType: e.target.value })}
                >
                  <option value="">Select service</option>
                  {JOB_TYPES.map((j) => <option key={j} value={j}>{j}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Lead Source</label>
                <select
                  className="input"
                  value={editing.leadSource || ""}
                  onChange={(e) => setEditing({ ...editing, leadSource: e.target.value })}
                >
                  <option value="">Select source</option>
                  {LEAD_SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="label">Status</label>
                <div className="flex gap-2 flex-wrap">
                  {LEAD_STATUSES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setEditing({ ...editing, status: s })}
                      className={`btn ${editing.status === s ? "bg-gold text-ink-900" : "btn-ghost"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="label">Notes</label>
                <textarea
                  className="input min-h-[100px]"
                  value={editing.notes || ""}
                  onChange={(e) => setEditing({ ...editing, notes: e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-ink-600">
              <button type="button" className="btn-ghost" onClick={() => setEditing(null)}>
                Cancel
              </button>
              <button type="submit" disabled={busy} className="btn-primary">
                {busy ? "Saving..." : editing.id ? "Save Changes" : "Create Lead"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
