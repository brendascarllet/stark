import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatMoney, formatDate } from "@/lib/utils";
import { StatusBadge } from "@/components/StatusBadge";

export const dynamic = "force-dynamic";

async function getData() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [openLeads, activeJobs, paidThisMonth, unpaidInvoices, activities, upcomingJobs] = await Promise.all([
    prisma.lead.count({ where: { status: { in: ["New", "Contacted", "Qualified"] } } }),
    prisma.job.count({ where: { status: { in: ["Scheduled", "In Progress"] } } }),
    prisma.invoice.aggregate({
      _sum: { amountPaid: true },
      where: { issueDate: { gte: startOfMonth } },
    }),
    prisma.invoice.aggregate({
      _sum: { amount: true, amountPaid: true },
      where: { status: { in: ["Unpaid", "Partial"] } },
    }),
    prisma.activity.findMany({ orderBy: { createdAt: "desc" }, take: 8 }),
    prisma.job.findMany({
      where: { status: { in: ["Scheduled", "In Progress"] } },
      include: { customer: true },
      orderBy: { startDate: "asc" },
      take: 5,
    }),
  ]);

  const unpaidTotal =
    (unpaidInvoices._sum.amount ?? 0) - (unpaidInvoices._sum.amountPaid ?? 0);

  return {
    openLeads,
    activeJobs,
    revenueMonth: paidThisMonth._sum.amountPaid ?? 0,
    unpaidTotal,
    activities,
    upcomingJobs,
  };
}

function Stat({
  label,
  value,
  hint,
  href,
}: {
  label: string;
  value: string;
  hint?: string;
  href?: string;
}) {
  const inner = (
    <div className="card-padded h-full hover:border-gold transition-colors">
      <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{label}</div>
      <div className="font-display text-5xl text-gold mt-2 leading-none">{value}</div>
      {hint && <div className="text-xs text-gray-500 mt-2">{hint}</div>}
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

export default async function DashboardPage() {
  const data = await getData();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Open Leads" value={String(data.openLeads)} hint="New · Contacted · Qualified" href="/leads" />
        <Stat label="Active Jobs" value={String(data.activeJobs)} hint="Scheduled + In Progress" href="/jobs" />
        <Stat label="Revenue This Month" value={formatMoney(data.revenueMonth)} hint="Payments received" href="/invoices" />
        <Stat label="Unpaid Invoices" value={formatMoney(data.unpaidTotal)} hint="Outstanding balance" href="/invoices" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-padded">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl text-gray-100">Upcoming Jobs</h2>
            <Link href="/jobs" className="text-xs text-gold hover:underline">View all →</Link>
          </div>
          {data.upcomingJobs.length === 0 ? (
            <div className="text-sm text-gray-500 py-10 text-center">No upcoming jobs scheduled.</div>
          ) : (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="th">Customer</th>
                  <th className="th">Type</th>
                  <th className="th">Start</th>
                  <th className="th">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.upcomingJobs.map((j) => (
                  <tr key={j.id}>
                    <td className="td">
                      <div className="font-medium">{j.customer.name}</div>
                      <div className="text-xs text-gray-500">{j.address || j.customer.city}</div>
                    </td>
                    <td className="td">{j.jobType}</td>
                    <td className="td">{formatDate(j.startDate)}</td>
                    <td className="td"><StatusBadge status={j.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="card-padded">
          <h2 className="font-display text-2xl text-gray-100 mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            {data.activities.map((a) => (
              <li key={a.id} className="flex gap-3 text-sm">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                <div>
                  <div className="text-gray-200">{a.message}</div>
                  <div className="text-xs text-gray-500">{formatDate(a.createdAt)}</div>
                </div>
              </li>
            ))}
            {data.activities.length === 0 && (
              <li className="text-sm text-gray-500">No recent activity.</li>
            )}
          </ul>
        </div>
      </div>

      <div className="card-padded">
        <h2 className="font-display text-2xl text-gray-100 mb-2">Welcome to Stark CRM</h2>
        <p className="text-sm text-gray-400 max-w-2xl">
          Track every lead, job, estimate, and invoice from first touch to final payment.
          Serving Woodinville, Issaquah, Bellevue, Renton, and Sammamish with roofing,
          siding, drywall, painting, flooring, and tile.
        </p>
      </div>
    </div>
  );
}
