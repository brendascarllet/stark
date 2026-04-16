"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CREW_ROLES } from "@/lib/utils";

type Member = {
  id: string;
  name: string;
  role: string;
  phone: string | null;
  email: string | null;
};

const EMPTY: Partial<Member> = { name: "", role: "Crew", phone: "", email: "" };

const ROLE_COLORS: Record<string, string> = {
  Foreman: "bg-gold/20 text-gold border-gold-700",
  Crew: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  Sales: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Admin: "bg-purple-500/15 text-purple-300 border-purple-500/30",
};

export function CrewClient({ initial }: { initial: Member[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<Partial<Member> | null>(null);
  const [busy, setBusy] = useState(false);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setBusy(true);
    const isEdit = !!editing.id;
    await fetch(isEdit ? `/api/crew/${editing.id}` : "/api/crew", {
      method: isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });
    setBusy(false);
    setEditing(null);
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Remove this crew member?")) return;
    await fetch(`/api/crew/${id}`, { method: "DELETE" });
    router.refresh();
  }

  const byRole = CREW_ROLES.map((r) => ({ role: r, members: initial.filter((m) => m.role === r) }));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-400">
          {initial.length} crew & staff members
        </div>
        <button className="btn-primary" onClick={() => setEditing({ ...EMPTY })}>
          + Add Member
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {byRole.map(({ role, members }) => (
          <div key={role} className="card-padded">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-2xl text-gray-100">{role}</h2>
              <span className={`badge border ${ROLE_COLORS[role]}`}>{members.length}</span>
            </div>
            <div className="space-y-2">
              {members.length === 0 && (
                <div className="text-sm text-gray-500 text-center py-6">No {role.toLowerCase()} yet.</div>
              )}
              {members.map((m) => (
                <div key={m.id} className="bg-ink-700 border border-ink-500 rounded-lg p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-gold text-ink-900 font-bold flex items-center justify-center flex-shrink-0">
                      {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-100">{m.name}</div>
                      <div className="text-xs text-gray-400 truncate">
                        {m.phone || "-"} · {m.email || "no email"}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button className="text-xs text-gray-300 hover:text-gold" onClick={() => setEditing(m)}>Edit</button>
                    <button className="text-xs text-rose-400 hover:text-rose-300" onClick={() => remove(m.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setEditing(null)}>
          <form onClick={(e) => e.stopPropagation()} onSubmit={save} className="card-padded w-full max-w-lg space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl text-gold">
                {editing.id ? "Edit Member" : "Add Member"}
              </h2>
              <button type="button" className="text-gray-400" onClick={() => setEditing(null)}>✕</button>
            </div>

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
              <label className="label">Role *</label>
              <div className="flex gap-2 flex-wrap">
                {CREW_ROLES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setEditing({ ...editing, role: r })}
                    className={`btn ${editing.role === r ? "bg-gold text-ink-900" : "btn-ghost"}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
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

            <div className="flex justify-end gap-2 pt-2 border-t border-ink-600">
              <button type="button" className="btn-ghost" onClick={() => setEditing(null)}>Cancel</button>
              <button type="submit" disabled={busy} className="btn-primary">
                {busy ? "Saving..." : editing.id ? "Save Changes" : "Add Member"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
