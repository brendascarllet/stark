"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { INVOICE_STATUSES, PAYMENT_METHODS, formatDate, formatDateInput, formatMoney } from "@/lib/utils";
import { StatusBadge } from "@/components/StatusBadge";

type Invoice = {
  id: string;
  number: string;
  customerId: string;
  customerName: string;
  estimateNumber: string | null;
  amount: number;
  amountPaid: number;
  status: string;
  paymentMethod: string | null;
  issueDate: string;
  dueDate: string | null;
};

type Customer = { id: string; name: string };

export function InvoicesClient({ initial, customers }: { initial: Invoice[]; customers: Customer[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<Partial<Invoice> | null>(null);
  const [busy, setBusy] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filtered = useMemo(
    () => (statusFilter === "All" ? initial : initial.filter((i) => i.status === statusFilter)),
    [initial, statusFilter]
  );

  const metrics = useMemo(() => {
    const total = initial.reduce((s, i) => s + i.amount, 0);
    const paid = initial.reduce((s, i) => s + i.amountPaid, 0);
    const outstanding = total - paid;
    return { total, paid, outstanding };
  }, [initial]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!editing?.customerId) return;
    setBusy(true);
    const isEdit = !!editing.id;
    await fetch(isEdit ? `/api/invoices/${editing.id}` : "/api/invoices", {
      method: isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });
    setBusy(false);
    setEditing(null);
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this invoice?")) return;
    await fetch(`/api/invoices/${id}`, { method: "DELETE" });
    router.refresh();
  }

  async function markPaid(inv: Invoice) {
    await fetch(`/api/invoices/${inv.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amountPaid: inv.amount, status: "Paid" }),
    });
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="card-padded">
          <div className="label">Total Billed</div>
          <div className="font-display text-4xl text-gold">{formatMoney(metrics.total)}</div>
        </div>
        <div className="card-padded">
          <div className="label">Paid</div>
          <div className="font-display text-4xl text-emerald-400">{formatMoney(metrics.paid)}</div>
        </div>
        <div className="card-padded">
          <div className="label">Outstanding</div>
          <div className="font-display text-4xl text-rose-400">{formatMoney(metrics.outstanding)}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            className={`btn ${statusFilter === "All" ? "bg-gold text-ink-900" : "btn-ghost"}`}
            onClick={() => setStatusFilter("All")}
          >
            All ({initial.length})
          </button>
          {INVOICE_STATUSES.map((s) => {
            const count = initial.filter((i) => i.status === s).length;
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
        <button
          className="btn-primary"
          onClick={() => {
            if (customers.length === 0) {
              alert("Create a customer first.");
              return;
            }
            setEditing({
              customerId: customers[0].id,
              status: "Unpaid",
              amount: 0,
              amountPaid: 0,
              issueDate: new Date().toISOString(),
            });
          }}
        >
          + New Invoice
        </button>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="th">#</th>
              <th className="th">Customer</th>
              <th className="th">Estimate</th>
              <th className="th">Amount</th>
              <th className="th">Paid</th>
              <th className="th">Balance</th>
              <th className="th">Method</th>
              <th className="th">Due</th>
              <th className="th">Status</th>
              <th className="th text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((i) => {
              const balance = i.amount - i.amountPaid;
              return (
                <tr key={i.id} className="hover:bg-ink-700/50">
                  <td className="td font-mono text-gold">{i.number}</td>
                  <td className="td font-medium text-gray-100">{i.customerName}</td>
                  <td className="td font-mono text-xs text-gray-400">{i.estimateNumber || "-"}</td>
                  <td className="td">{formatMoney(i.amount)}</td>
                  <td className="td text-emerald-400">{formatMoney(i.amountPaid)}</td>
                  <td className="td font-semibold">{formatMoney(balance)}</td>
                  <td className="td text-xs">{i.paymentMethod || "-"}</td>
                  <td className="td">{formatDate(i.dueDate)}</td>
                  <td className="td"><StatusBadge status={i.status} /></td>
                  <td className="td text-right space-x-2 whitespace-nowrap">
                    {i.status !== "Paid" && (
                      <button className="text-xs text-emerald-400 hover:underline" onClick={() => markPaid(i)}>
                        Mark Paid
                      </button>
                    )}
                    <button className="text-xs text-gray-300 hover:text-gold" onClick={() => setEditing(i)}>Edit</button>
                    <button className="text-xs text-rose-400 hover:text-rose-300" onClick={() => remove(i.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr><td className="td text-center text-gray-500" colSpan={10}>No invoices.</td></tr>
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
                {editing.id ? `Edit ${editing.number || "Invoice"}` : "New Invoice"}
              </h2>
              <button type="button" className="text-gray-400" onClick={() => setEditing(null)}>✕</button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="label">Customer *</label>
                <select
                  required
                  className="input"
                  value={editing.customerId || ""}
                  onChange={(e) => setEditing({ ...editing, customerId: e.target.value })}
                >
                  <option value="">Select customer</option>
                  {customers.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Amount</label>
                <input
                  type="number"
                  step="0.01"
                  className="input"
                  value={editing.amount ?? 0}
                  onChange={(e) => setEditing({ ...editing, amount: Number(e.target.value) })}
                />
              </div>
              <div>
                <label className="label">Amount Paid</label>
                <input
                  type="number"
                  step="0.01"
                  className="input"
                  value={editing.amountPaid ?? 0}
                  onChange={(e) => setEditing({ ...editing, amountPaid: Number(e.target.value) })}
                />
              </div>
              <div>
                <label className="label">Payment Method</label>
                <select
                  className="input"
                  value={editing.paymentMethod || ""}
                  onChange={(e) => setEditing({ ...editing, paymentMethod: e.target.value })}
                >
                  <option value="">— None —</option>
                  {PAYMENT_METHODS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Status</label>
                <select
                  className="input"
                  value={editing.status || "Unpaid"}
                  onChange={(e) => setEditing({ ...editing, status: e.target.value })}
                >
                  {INVOICE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Issue Date</label>
                <input
                  type="date"
                  className="input"
                  value={formatDateInput(editing.issueDate)}
                  onChange={(e) => setEditing({ ...editing, issueDate: e.target.value })}
                />
              </div>
              <div>
                <label className="label">Due Date</label>
                <input
                  type="date"
                  className="input"
                  value={formatDateInput(editing.dueDate)}
                  onChange={(e) => setEditing({ ...editing, dueDate: e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-ink-600">
              <button type="button" className="btn-ghost" onClick={() => setEditing(null)}>Cancel</button>
              <button type="submit" disabled={busy} className="btn-primary">
                {busy ? "Saving..." : editing.id ? "Save Changes" : "Create Invoice"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
