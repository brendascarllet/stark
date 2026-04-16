import { prisma } from "@/lib/prisma";
import { EstimatesClient } from "./EstimatesClient";

export const dynamic = "force-dynamic";

export default async function EstimatesPage() {
  const [estimates, customers, jobs] = await Promise.all([
    prisma.estimate.findMany({
      include: { customer: true, lineItems: true, invoice: true, job: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.customer.findMany({ select: { id: true, name: true } }),
    prisma.job.findMany({ select: { id: true, jobType: true, customerId: true } }),
  ]);

  const plain = estimates.map((e) => ({
    id: e.id,
    number: e.number,
    customerId: e.customerId,
    customerName: e.customer.name,
    jobId: e.jobId,
    status: e.status,
    subtotal: e.subtotal,
    taxRate: e.taxRate,
    tax: e.tax,
    total: e.total,
    notes: e.notes,
    hasInvoice: !!e.invoice,
    lineItems: e.lineItems.map((li) => ({
      id: li.id,
      category: li.category,
      description: li.description,
      qty: li.qty,
      unitPrice: li.unitPrice,
      total: li.total,
    })),
    createdAt: e.createdAt.toISOString(),
  }));
  return <EstimatesClient initial={plain} customers={customers} jobs={jobs} />;
}
