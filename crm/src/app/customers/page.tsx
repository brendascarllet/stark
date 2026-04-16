import { prisma } from "@/lib/prisma";
import { CustomersClient } from "./CustomersClient";

export const dynamic = "force-dynamic";

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      jobs: { select: { id: true, jobType: true, status: true } },
      invoices: { select: { id: true, amount: true, amountPaid: true, status: true } },
    },
  });

  const plain = customers.map((c) => ({
    id: c.id,
    name: c.name,
    phone: c.phone,
    email: c.email,
    address: c.address,
    city: c.city,
    notes: c.notes,
    totalRevenue: c.totalRevenue,
    createdAt: c.createdAt.toISOString(),
    jobs: c.jobs,
    invoices: c.invoices,
  }));
  return <CustomersClient initial={plain} />;
}
