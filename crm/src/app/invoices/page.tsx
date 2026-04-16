import { prisma } from "@/lib/prisma";
import { InvoicesClient } from "./InvoicesClient";

export const dynamic = "force-dynamic";

export default async function InvoicesPage() {
  const [invoices, customers] = await Promise.all([
    prisma.invoice.findMany({
      include: { customer: true, estimate: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.customer.findMany({ select: { id: true, name: true } }),
  ]);

  const plain = invoices.map((i) => ({
    id: i.id,
    number: i.number,
    customerId: i.customerId,
    customerName: i.customer.name,
    estimateNumber: i.estimate?.number || null,
    amount: i.amount,
    amountPaid: i.amountPaid,
    status: i.status,
    paymentMethod: i.paymentMethod,
    issueDate: i.issueDate.toISOString(),
    dueDate: i.dueDate?.toISOString() || null,
  }));
  return <InvoicesClient initial={plain} customers={customers} />;
}
