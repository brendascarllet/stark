import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const invoices = await prisma.invoice.findMany({
    include: { customer: true, estimate: true, job: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(invoices);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const count = await prisma.invoice.count();
  const number = body.number || `INV-${2001 + count}`;
  const invoice = await prisma.invoice.create({
    data: {
      number,
      customerId: body.customerId,
      jobId: body.jobId || null,
      amount: Number(body.amount || 0),
      amountPaid: Number(body.amountPaid || 0),
      status: body.status || "Unpaid",
      paymentMethod: body.paymentMethod || null,
      issueDate: body.issueDate ? new Date(body.issueDate) : new Date(),
      dueDate: body.dueDate ? new Date(body.dueDate) : null,
    },
  });
  return NextResponse.json(invoice);
}
