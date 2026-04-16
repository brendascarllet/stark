import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  const est = await prisma.estimate.findUnique({ where: { id: params.id }, include: { invoice: true } });
  if (!est) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (est.invoice) return NextResponse.json({ error: "Invoice already exists", invoice: est.invoice });
  if (est.status !== "Approved") {
    return NextResponse.json({ error: "Estimate must be approved before invoicing" }, { status: 400 });
  }

  const count = await prisma.invoice.count();
  const number = `INV-${2001 + count}`;
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 30);

  const invoice = await prisma.invoice.create({
    data: {
      number,
      customerId: est.customerId,
      jobId: est.jobId,
      estimateId: est.id,
      amount: est.total,
      status: "Unpaid",
      dueDate,
    },
  });
  await prisma.activity.create({
    data: { type: "invoice_created", message: `${invoice.number} generated from ${est.number}` },
  });
  return NextResponse.json(invoice);
}
