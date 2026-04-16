export function formatMoney(n: number | null | undefined): string {
  const v = Number(n ?? 0);
  return v.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function formatDate(d: Date | string | null | undefined): string {
  if (!d) return "-";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function formatDateInput(d: Date | string | null | undefined): string {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toISOString().slice(0, 10);
}

export const LEAD_STATUSES = ["New", "Contacted", "Qualified", "Lost"] as const;
export const LEAD_SOURCES = ["Google", "Nextdoor", "Referral", "Facebook", "Door Knock", "Bing", "Other"] as const;
export const JOB_TYPES = ["Roofing", "Siding", "Drywall", "Painting", "Flooring", "Tile", "Commercial Roof"] as const;
export const JOB_STATUSES = ["Scheduled", "In Progress", "Complete", "On Hold"] as const;
export const ESTIMATE_STATUSES = ["Draft", "Sent", "Approved", "Declined"] as const;
export const INVOICE_STATUSES = ["Unpaid", "Paid", "Partial"] as const;
export const CREW_ROLES = ["Foreman", "Crew", "Sales", "Admin"] as const;
export const PAYMENT_METHODS = ["Cash", "Check", "Credit Card", "ACH/Bank Transfer", "Other"] as const;
export const MATERIALS = [
  "GAF HDZ",
  "GAF Grand Sequoia",
  "GAF Natural Shadow",
  "GAF EverGuard PVC",
  "Uniflex Silicone",
  "Synthetic Underlayment",
  "Ice & Water Shield",
  "Fiber Cement Siding",
  "Drywall 5/8\"",
  "Porcelain Tile",
  "Sherwin Williams Paint",
] as const;

export function statusColor(status: string): string {
  switch (status) {
    case "New":
    case "Scheduled":
    case "Draft":
    case "Unpaid":
      return "bg-ink-500 text-gold-200 border border-ink-400";
    case "Contacted":
    case "Sent":
    case "In Progress":
    case "Partial":
      return "bg-blue-500/15 text-blue-300 border border-blue-500/30";
    case "Qualified":
    case "Approved":
    case "Complete":
    case "Paid":
      return "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30";
    case "Lost":
    case "Declined":
    case "On Hold":
      return "bg-rose-500/15 text-rose-300 border border-rose-500/30";
    default:
      return "bg-ink-500 text-gray-300 border border-ink-400";
  }
}
