"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ESTIMATE_STATUSES, MATERIALS, formatDate, formatMoney } from "@/lib/utils";
import { StatusBadge } from "@/components/StatusBadge";

type LineItem = {
  id?: string;
  category: string;
  description: string;
  qty: number;
  unitPrice: number;
  total?: number;
};

type Estimate = {
  id: string;
  number: string;
  customerId: string;
  customerName: string;
  jobId: string | null;
  status: string;
  subtotal: number;
  taxRate: number;
  tax: number;
  total: number;
  notes: string | null;
  hasInvoice: boolean;
  lineItems: LineItem[];
  createdAt: string;
};

type Customer = { id: string; name: string };
type Job = { id: string; jobType: string; customerId: string };

function emptyLineItem(category: string): LineItem {
  return { category, description: "", qty: 1, unitPrice: 0 };
}

export function EstimatesClient({
  initial,
  customers,
  jobs,
}: {
  initial: Estimate[];
  customers: Customer[];
  jobs: Job[];
}) {
  const router = useRouter();
  const [editing, setEditing] = useState<Partial<Estimate> | null>(null);
  const [busy, setBusy] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filtered = useMemo(
    () => (statusFilter === "All" ? initial : initial.filter((e) => e.status === statusFilter)),
    [initial, statusFilter]
  );

  const totals = useMemo(() => {
    const li = editing?.lineItems || [];
    const subtotal = li.reduce((s, x) => s + Number(x.qty || 0) * Number(x.unitPrice || 0), 0);
    const taxRate = Number(editing?.taxRate ?? 10.1);
    const tax = +(subtotal * (taxRate / 100)).toFixed(2);
    return { subtotal: +subtotal.toFixed(2), tax, total: +(subtotal + tax).toFixed(2) };
  }, [editing]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!editing?.customerId) return;
    setBusy(true);
    const isEdit = !!editing.id;
    await fetch(isEdit ? `/api/estimates/${editing.id}` : "/api/estimates", {
      method: isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });
    setBusy(false);
    setEditing(null);
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this estimate?")) return;
    await fetch(`/api/estimates/${id}`, { method: "DELETE" });
    router.refresh();
  }

  async function generateInvoice(id: string) {
    const res = await fetch(`/api/estimates/${id}/invoice`, { method: "POST" });
    const data = await res.json();
    if (res.ok) {
      alert(`Invoice ${data.number} generated.`);
      router.push("/invoices");
    } else {
      alert(data.error || "Could not generate invoice");
    }
  }

  function startNew() {
    if (customers.length === 0) {
      alert("Create a customer first.");
      return;
    }
    setEditing({
      customerId: customers[0].id,
      status: "Draft",
      taxRate: 10.1,
      notes: "",
      lineItems: [emptyLineItem("material"), emptyLineItem("labor")],
    });
  }

  function updateLineItem(idx: number, patch: Partial<LineItem>) {
    const items = [...(editing?.lineItems || [])];
    items[idx] = { ...items[idx], ...patch };
    setEditing({ ...editing!, lineItems: items });
  }

  function removeLineItem(idx: number) {
    const items = [...(editing?.lineItems || [])];
    items.splice(idx, 1);
    setEditing({ ...editing!, lineItems: items });
  }

  const materialItems = editing?.lineItems?.filter((li) => li.category === "material") || [];
  const laborItems = editing?.lineItems?.filter((li) => li.category === "labor") || [];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            className={`btn ${statusFilter === "All" ? "bg-gold text-ink-900" : "btn-ghost"}`}
            onClick={() => setStatusFilter("All")}
          >
            All ({initial.length})
          </button>
          {ESTIMATE_STATUSES.map((s) => {
            const count = initial.filter((e) => e.status === s).length;
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
        <button className="btn-primary" onClick={startNew}>+ New Estimate</button>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="th">#</th>
              <th className="th">Customer</th>
              <th className="th">Items</th>
              <th className="th">Total</th>
              <th className="th">Status</th>
              <th className="th">Date</th>
              <th className="th text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => (
              <tr key={e.id} className="hover:bg-ink-700/50">
                <td className="td font-mono text-gold">{e.number}</td>
                <td className="td font-medium text-gray-100">{e.customerName}</td>
                <td className="td text-xs text-gray-400">{e.lineItems.length} line items</td>
                <td className="td font-semibold">{formatMoney(e.total)}</td>
                <td className="td"><StatusBadge status={e.status} /></td>
                <td className="td">{formatDate(e.createdAt)}</td>
                <td className="td text-right space-x-2 whitespace-nowrap">
                  {e.status === "Approved" && !e.hasInvoice && (
                    <button className="text-xs text-gold hover:underline" onClick={() => generateInvoice(e.id)}>
                      → Invoice
                    </button>
                  )}
                  {e.hasInvoice && <span className="text-xs text-emerald-400">Invoiced</span>}
                  <button className="text-xs text-gray-300 hover:text-gold" onClick={() => setEditing(e)}>
                    Edit
                  </button>
                  <button className="text-xs text-rose-400 hover:text-rose-300" onClick={() => remove(e.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td className="td text-center text-gray-500" colSpan={7}>No estimates.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setEditing(null)}>
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={save}
            className="card-padded w-full max-w-4xl space-y-4 max-h-[95vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl text-gold">
                {editing.id ? `Edit ${editing.number || "Estimate"}` : "New Estimate"}
              </h2>
              <button type="button" className="text-gray-400" onClick={() => setEditing(null)}>✕</button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="label">Customer *</label>
                <select
                  required
                  className="input"
                  value={editing.customerId || ""}
                  onChange={(e) => setEditing({ ...editing, customerId: e.target.value, jobId: null })}
                >
                  <option value="">Select customer</option>
                  {customers.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Job (optional)</label>
                <select
                  className="input"
                  value={editing.jobId || ""}
                  onChange={(e) => setEditing({ ...editing, jobId: e.target.value || null })}
                >
                  <option value="">— None —</option>
                  {jobs
                    .filter((j) => j.customerId === editing.customerId)
                    .map((j) => <option key={j.id} value={j.id}>{j.jobType}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Status</label>
                <select
                  className="input"
                  value={editing.status || "Draft"}
                  onChange={(e) => setEditing({ ...editing, status: e.target.value })}
                >
                  {ESTIMATE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <LineItemSection
              title="Materials"
              items={materialItems}
              onChange={(idx, patch) => {
                const globalIdx = editing.lineItems!.findIndex((li, i) => li.category === "material" && materialItems.indexOf(li) === idx);
                updateLineItem(globalIdx, patch);
              }}
              onRemove={(idx) => {
                const globalIdx = editing.lineItems!.findIndex((li, i) => li.category === "material" && materialItems.indexOf(li) === idx);
                removeLineItem(globalIdx);
              }}
              onAdd={() => setEditing({ ...editing, lineItems: [...(editing.lineItems || []), emptyLineItem("material")] })}
              suggestions={MATERIALS as readonly string[]}
            />

            <LineItemSection
              title="Labor"
              items={laborItems}
              onChange={(idx, patch) => {
                const globalIdx = editing.lineItems!.findIndex((li, i) => li.category === "labor" && laborItems.indexOf(li) === idx);
                updateLineItem(globalIdx, patch);
              }}
              onRemove={(idx) => {
                const globalIdx = editing.lineItems!.findIndex((li, i) => li.category === "labor" && laborItems.indexOf(li) === idx);
                removeLineItem(globalIdx);
              }}
              onAdd={() => setEditing({ ...editing, lineItems: [...(editing.lineItems || []), emptyLineItem("labor")] })}
            />

            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-ink-600">
              <div>
                <label className="label">Notes</label>
                <textarea
                  className="input min-h-[100px]"
                  value={editing.notes || ""}
                  onChange={(e) => setEditing({ ...editing, notes: e.target.value })}
                />
                <div className="mt-3">
                  <label className="label">Tax Rate (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="input w-32"
                    value={editing.taxRate ?? 10.1}
                    onChange={(e) => setEditing({ ...editing, taxRate: Number(e.target.value) })}
                  />
                </div>
              </div>
              <div className="bg-ink-900 border border-ink-600 rounded-lg p-4 space-y-2 h-fit">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span>{formatMoney(totals.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tax ({editing.taxRate ?? 10.1}%)</span>
                  <span>{formatMoney(totals.tax)}</span>
                </div>
                <div className="flex justify-between font-display text-2xl pt-2 border-t border-ink-600">
                  <span className="text-gray-200">Total</span>
                  <span className="text-gold">{formatMoney(totals.total)}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t border-ink-600">
              <button type="button" className="btn-ghost" onClick={() => setEditing(null)}>Cancel</button>
              <button type="submit" disabled={busy} className="btn-primary">
                {busy ? "Saving..." : editing.id ? "Save Changes" : "Create Estimate"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

function LineItemSection({
  title,
  items,
  onChange,
  onRemove,
  onAdd,
  suggestions,
}: {
  title: string;
  items: LineItem[];
  onChange: (idx: number, patch: Partial<LineItem>) => void;
  onRemove: (idx: number) => void;
  onAdd: () => void;
  suggestions?: readonly string[];
}) {
  return (
    <div className="border border-ink-600 rounded-lg overflow-hidden">
      <div className="bg-ink-700 px-4 py-2 flex justify-between items-center">
        <div className="font-display text-xl text-gold">{title}</div>
        <button type="button" className="text-xs text-gold hover:underline" onClick={onAdd}>
          + Add line
        </button>
      </div>
      <div className="divide-y divide-ink-700">
        {items.length === 0 && (
          <div className="text-xs text-gray-500 text-center py-4">No items. Click "Add line".</div>
        )}
        {items.map((li, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-2 p-3 items-center">
            <div className="col-span-12 md:col-span-6">
              <input
                className="input"
                placeholder="Description"
                list={suggestions ? `${title}-sugg` : undefined}
                value={li.description}
                onChange={(e) => onChange(idx, { description: e.target.value })}
              />
              {suggestions && (
                <datalist id={`${title}-sugg`}>
                  {suggestions.map((s) => <option key={s} value={s} />)}
                </datalist>
              )}
            </div>
            <div className="col-span-3 md:col-span-1">
              <input
                className="input"
                type="number"
                step="0.01"
                placeholder="Qty"
                value={li.qty}
                onChange={(e) => onChange(idx, { qty: Number(e.target.value) })}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <input
                className="input"
                type="number"
                step="0.01"
                placeholder="Unit $"
                value={li.unitPrice}
                onChange={(e) => onChange(idx, { unitPrice: Number(e.target.value) })}
              />
            </div>
            <div className="col-span-4 md:col-span-2 text-right font-semibold text-gold">
              ${(Number(li.qty || 0) * Number(li.unitPrice || 0)).toFixed(2)}
            </div>
            <div className="col-span-1 text-right">
              <button
                type="button"
                className="text-rose-400 hover:text-rose-300 text-sm"
                onClick={() => onRemove(idx)}
                aria-label="Remove line"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
