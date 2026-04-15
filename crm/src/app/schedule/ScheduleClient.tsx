"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDate, statusColor } from "@/lib/utils";

type Job = {
  id: string;
  customerName: string;
  jobType: string;
  status: string;
  startDate: string | null;
  endDate: string | null;
  assignedCrew: string | null;
  address: string | null;
};

type Crew = { id: string; name: string; role: string };

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}
function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isWithin(day: Date, start: Date, end?: Date | null) {
  const d = new Date(day.getFullYear(), day.getMonth(), day.getDate()).getTime();
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  if (!end) return d === s;
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  return d >= s && d <= e;
}

export function ScheduleClient({ jobs, crew }: { jobs: Job[]; crew: Crew[] }) {
  const router = useRouter();
  const [cursor, setCursor] = useState(new Date());
  const [crewFilter, setCrewFilter] = useState<string>("All");
  const [selected, setSelected] = useState<string | null>(null);

  const month = startOfMonth(cursor);
  const last = endOfMonth(cursor);
  const days: Date[] = [];
  const leadingBlanks = month.getDay();
  for (let i = 0; i < leadingBlanks; i++) days.push(new Date(month.getTime() - (leadingBlanks - i) * 86400000));
  for (let d = 1; d <= last.getDate(); d++) days.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
  while (days.length % 7 !== 0) days.push(new Date(days[days.length - 1].getTime() + 86400000));

  const visibleJobs = useMemo(() => {
    return jobs.filter((j) => {
      if (crewFilter === "All") return true;
      return (j.assignedCrew || "").includes(crewFilter);
    });
  }, [jobs, crewFilter]);

  function jobsOn(day: Date) {
    return visibleJobs.filter((j) => j.startDate && isWithin(day, new Date(j.startDate), j.endDate ? new Date(j.endDate) : null));
  }

  async function setJobDate(jobId: string, field: "startDate" | "endDate", value: string) {
    await fetch(`/api/jobs/${jobId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    });
    router.refresh();
  }

  const selectedJob = jobs.find((j) => j.id === selected);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <button
            className="btn-ghost"
            onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
          >
            ← Prev
          </button>
          <div className="font-display text-3xl text-gold px-4">
            {cursor.toLocaleString("en-US", { month: "long", year: "numeric" })}
          </div>
          <button
            className="btn-ghost"
            onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
          >
            Next →
          </button>
          <button className="btn-ghost ml-2" onClick={() => setCursor(new Date())}>
            Today
          </button>
        </div>
        <div className="flex gap-2 items-center text-xs">
          <span className="text-gray-400">Filter crew:</span>
          <select className="input w-48" value={crewFilter} onChange={(e) => setCrewFilter(e.target.value)}>
            <option value="All">All Crew</option>
            {crew.map((c) => (
              <option key={c.id} value={c.name}>{c.name} ({c.role})</option>
            ))}
          </select>
          <Link href="/jobs" className="btn-primary">+ New Job</Link>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="grid grid-cols-7 border-b border-ink-600">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-center text-xs uppercase tracking-widest text-gray-400 py-3 border-r border-ink-600 last:border-r-0">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((d, i) => {
            const inMonth = d.getMonth() === cursor.getMonth();
            const jobsToday = jobsOn(d);
            const today = sameDay(d, new Date());
            return (
              <div
                key={i}
                className={`min-h-[110px] p-2 border-r border-b border-ink-700 last:border-r-0 ${
                  inMonth ? "bg-ink-800" : "bg-ink-900 opacity-50"
                } ${today ? "ring-1 ring-gold ring-inset" : ""}`}
              >
                <div className={`text-xs mb-1 ${today ? "text-gold font-bold" : "text-gray-400"}`}>
                  {d.getDate()}
                </div>
                <div className="space-y-1">
                  {jobsToday.slice(0, 3).map((j) => (
                    <button
                      key={j.id}
                      onClick={() => setSelected(j.id)}
                      className={`w-full text-left text-[11px] leading-tight px-1.5 py-1 rounded ${statusColor(j.status)} truncate`}
                    >
                      <span className="font-semibold">{j.jobType}</span> · {j.customerName}
                    </button>
                  ))}
                  {jobsToday.length > 3 && (
                    <div className="text-[10px] text-gray-500 px-1">+{jobsToday.length - 3} more</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card-padded">
        <h2 className="font-display text-2xl text-gray-100 mb-3">All Scheduled Jobs</h2>
        <div className="space-y-2">
          {visibleJobs.length === 0 && <div className="text-sm text-gray-500">No jobs scheduled.</div>}
          {visibleJobs.map((j) => (
            <div key={j.id} className="flex items-center justify-between bg-ink-700 border border-ink-500 rounded-lg p-3 text-sm">
              <div>
                <div className="font-semibold text-gray-100">
                  {j.jobType} · {j.customerName}
                </div>
                <div className="text-xs text-gray-400">
                  {formatDate(j.startDate)} → {formatDate(j.endDate)} · {j.assignedCrew || "No crew"}
                </div>
              </div>
              <span className={`badge ${statusColor(j.status)}`}>{j.status}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div onClick={(e) => e.stopPropagation()} className="card-padded w-full max-w-lg space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-display text-3xl text-gold">{selectedJob.jobType}</div>
                <div className="text-sm text-gray-400">{selectedJob.customerName}</div>
              </div>
              <button className="text-gray-400" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="text-sm space-y-2">
              <div><span className="text-gray-400">Address:</span> {selectedJob.address || "-"}</div>
              <div><span className="text-gray-400">Crew:</span> {selectedJob.assignedCrew || "-"}</div>
              <div><span className="text-gray-400">Status:</span> <span className={`badge ${statusColor(selectedJob.status)}`}>{selectedJob.status}</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Start</label>
                <input
                  type="date"
                  className="input"
                  defaultValue={selectedJob.startDate?.slice(0, 10) || ""}
                  onChange={(e) => setJobDate(selectedJob.id, "startDate", e.target.value)}
                />
              </div>
              <div>
                <label className="label">End</label>
                <input
                  type="date"
                  className="input"
                  defaultValue={selectedJob.endDate?.slice(0, 10) || ""}
                  onChange={(e) => setJobDate(selectedJob.id, "endDate", e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end pt-2 border-t border-ink-600">
              <Link href="/jobs" className="btn-ghost">Open in Jobs →</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
