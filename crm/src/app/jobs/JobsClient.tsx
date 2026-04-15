"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDate, JOB_STATUSES, JOB_TYPES, formatDateInput } from "@/lib/utils";
import { StatusBadge } from "@/components/StatusBadge";

type Job = {
  id: string;
  customerId: string;
  customerName: string;
  jobType: string;
  status: string;
  startDate: string | null;
  endDate: string | null;
  address: string | null;
  assignedCrew: string | null;
  notes: string | null;
};

type Customer = { id: string; name: string; address: string | null; city: string | null };
type Crew = { id: string; name: string; role: string };

const EMPTY: Partial<Job> = {
  customerId: "",
  jobType: "Roofing",
  status: "Scheduled",
  startDate: null,
  endDate: null,
  address: "",
  assignedCrew: "",
  notes: "",
};

export function JobsClient({
  initialJobs,
  customers,
  crew,
}: {
  initialJobs: Job[];
  customers: Customer[];
  crew: Crew[];
}) {
  const router = useRouter();
  const [jobs, setJobs] = useState(initialJobs);
  const [view, setView] = useState<"board" | "list">("board");
  const [editing, setEditing] = useState<Partial<Job> | null>(null);
  const [busy, setBusy] = useState(false);
  const [dragId, setDragId] = useState<string | null>(null);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!editing?.customerId || !editing.jobType) return;
    setBusy(true);
    const isEdit = !!editing.id;
    const res = await fetch(isEdit ? `/api/jobs/${editing.id}` : "/api/jobs", {
      method: isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });
    setBusy(false);
    if (res.ok) {
      setEditing(null);
      router.refresh();
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this job?")) return;
    await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    router.refresh();
  }

  async function updateStatus(id: string, status: string) {
    setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, status } : j)));
    await fetch(`/api/jobs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="flex gap-2">
          <button
            className={`btn ${view === "board" ? "bg-gold text-ink-900" : "btn-ghost"}`}
            onClick={() => setView("board")}
          >
            Kanban Board
          </button>
          <button
            className={`btn ${view === "list" ? "bg-gold text-ink-900" : "btn-ghost"}`}
            onClick={() => setView("list")}
          >
            List
          </button>
        </div>
        <button
          className="btn-primary"
          onClick={() => {
            if (customers.length === 0) {
              alert("Create a customer first.");
              return;
            }
            setEditing({ ...EMPTY, customerId: customers[0].id });
          }}
        >
          + New Job
        </button>
      </div>

      {view === "board" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {JOB_STATUSES.map((status) => {
            const col = jobs.filter((j) => j.status === status);
            return (
              <div
                key={status}
                className="kanban-col"
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => {
                  if (dragId) {
                    updateStatus(dragId, status);
                    setDragId(null);
                  }
                }}
              >
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="font-display text-xl text-gray-100">{status}</div>
                  <span className="text-xs text-gold font-semibold">{col.length}</span>
                </div>
                {col.map((j) => (
                  <div
                    key={j.id}
                    draggable
                    onDragStart={() => setDragId(j.id)}
                    onClick={() => setEditing(j)}
                    className="kanban-card"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <div className="font-semibold text-gray-100 text-sm">{j.customerName}</div>
                      <span className="text-[10px] px-2 py-0.5 bg-gold/20 text-gold-200 border border-gold-700 rounded-full">
                        {j.jobType}
                      </span>
                    </div>
                    {j.address && <div className="text-xs text-gray-400 line-clamp-1">{j.address}</div>}
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>{formatDate(j.startDate)}</span>
                      {j.assignedCrew && <span className="line-clamp-1 max-w-[60%] text-right">{j.assignedCrew}</span>}
                    </div>
                  </div>
                ))}
                {col.length === 0 && (
                  <div className="text-xs text-gray-600 text-center py-4">
                    Drop jobs here
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="th">Customer</th>
                <th className="th">Type</th>
                <th className="th">Dates</th>
                <th className="th">Address</th>
                <th className="th">Crew</th>
                <th className="th">Status</th>
                <th className="th text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((j) => (
                <tr key={j.id} className="hover:bg-ink-700/50">
                  <td className="td font-medium text-gray-100">{j.customerName}</td>
                  <td className="td">{j.jobType}</td>
                  <td className="td">
                    <div>{formatDate(j.startDate)}</div>
                    <div className="text-xs text-gray-500">→ {formatDate(j.endDate)}</div>
                  </td>
                  <td className="td">{j.address || "-"}</td>
                  <td className="td">{j.assignedCrew || "-"}</td>
                  <td className="td"><StatusBadge status={j.status} /></td>
                  <td className="td text-right space-x-2 whitespace-nowrap">
                    <button className="text-xs text-gray-300 hover:text-gold" onClick={() => setEditing(j)}>Edit</button>
                    <button className="text-xs text-rose-400 hover:text-rose-300" onClick={() => remove(j.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr><td className="td text-center text-gray-500" colSpan={7}>No jobs yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setEditing(null)}>
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={save}
            className="card-padded w-full max-w-2xl space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl text-gold">{editing.id ? "Edit Job" : "New Job"}</h2>
              <button type="button" className="text-gray-400" onClick={() => setEditing(null)}>✕</button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="label">Customer *</label>
                <select
                  required
                  className="input"
                  value={editing.customerId || ""}
                  onChange={(e) => {
                    const cust = customers.find((c) => c.id === e.target.value);
                    setEditing({
                      ...editing,
                      customerId: e.target.value,
                      address: editing.address || (cust ? `${cust.address ?? ""}${cust.city ? `, ${cust.city}` : ""}`.trim() : ""),
                    });
                  }}
                >
                  <option value="">Select customer</option>
                  {customers.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">Job Type *</label>
                <select
                  className="input"
                  value={editing.jobType || ""}
                  onChange={(e) => setEditing({ ...editing, jobType: e.target.value })}
                >
                  {JOB_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Status</label>
                <select
                  className="input"
                  value={editing.status || "Scheduled"}
                  onChange={(e) => setEditing({ ...editing, status: e.target.value })}
                >
                  {JOB_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Start Date</label>
                <input
                  type="date"
                  className="input"
                  value={formatDateInput(editing.startDate)}
                  onChange={(e) => setEditing({ ...editing, startDate: e.target.value || null })}
                />
              </div>
              <div>
                <label className="label">End Date</label>
                <input
                  type="date"
                  className="input"
                  value={formatDateInput(editing.endDate)}
                  onChange={(e) => setEditing({ ...editing, endDate: e.target.value || null })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="label">Job Address</label>
                <input
                  className="input"
                  value={editing.address || ""}
                  onChange={(e) => setEditing({ ...editing, address: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="label">Assigned Crew</label>
                <input
                  className="input"
                  placeholder="Comma-separated names"
                  value={editing.assignedCrew || ""}
                  onChange={(e) => setEditing({ ...editing, assignedCrew: e.target.value })}
                />
                <div className="flex flex-wrap gap-1 mt-2">
                  {crew.map((cm) => (
                    <button
                      type="button"
                      key={cm.id}
                      onClick={() => {
                        const cur = editing.assignedCrew || "";
                        const names = cur.split(",").map((s) => s.trim()).filter(Boolean);
                        if (names.includes(cm.name)) {
                          setEditing({
                            ...editing,
                            assignedCrew: names.filter((n) => n !== cm.name).join(", "),
                          });
                        } else {
                          setEditing({ ...editing, assignedCrew: [...names, cm.name].join(", ") });
                        }
                      }}
                      className={`text-xs px-2 py-1 rounded-full border ${
                        (editing.assignedCrew || "").includes(cm.name)
                          ? "bg-gold text-ink-900 border-gold"
                          : "bg-ink-700 border-ink-500 text-gray-300"
                      }`}
                    >
                      {cm.name}
                      <span className="opacity-60 ml-1">({cm.role})</span>
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
              <button type="button" className="btn-ghost" onClick={() => setEditing(null)}>Cancel</button>
              <button type="submit" disabled={busy} className="btn-primary">
                {busy ? "Saving..." : editing.id ? "Save Changes" : "Create Job"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
