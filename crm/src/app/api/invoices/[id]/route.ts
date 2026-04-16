import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const existing = await prisma.invoice.findUnique({ where: { id: params.id } });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const amount = Number(body.amount ?? existing.amount);
  const amountPaid = Number(body.amountPaid ?? existing.amountPaid);
  let status: string = body.status ?? existing.status;
  if (!body.status) {
    if (amountPaid >= amount) status = "Paid";
    else if (amountPaid > 0) status = "Partial";
    else status = "Unpaid";
  }

  const invoice = await prisma.invoice.update({
    where: { id: params.id },
    data: {
      customerId: body.customerId ?? existing.customerId,
      jobId: body.jobId ?? existing.jobId,
      amount,
      amountPaid,
      status,
      paymentMethod: body.paymentMethod ?? existing.paymentMethod,
      issueDate: body.issueDate ? new Date(body.issueDate) : existing.issueDate,
      dueDate: body.dueDate ? new Date(body.dueDate) : existing.dueDate,
    },
  });

  if (status === "Paid" && existing.status !== "Paid") {
    await prisma.activity.create({
      data: { type: "invoice_paid", message: `${invoice.number} paid in full` },
    });
    // Update customer lifetime revenue
    const customer = await prisma.customer.findUnique({ where: { id: invoice.customerId } });
    if (customer) {
      await prisma.customer.update({
        where: { id: customer.id },
        data: { totalRevenue: (customer.totalRevenue || 0) + amount },
      });
    }
  }

  return NextResponse.json(invoice);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.invoice.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
