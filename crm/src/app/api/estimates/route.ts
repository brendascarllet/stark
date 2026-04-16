import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function calc(lineItems: any[], taxRate: number) {
  const subtotal = lineItems.reduce((s, li) => s + Number(li.qty || 0) * Number(li.unitPrice || 0), 0);
  const tax = +(subtotal * (taxRate / 100)).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);
  return { subtotal: +subtotal.toFixed(2), tax, total };
}

export async function GET() {
  const estimates = await prisma.estimate.findMany({
    include: { customer: true, lineItems: true, job: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(estimates);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const count = await prisma.estimate.count();
  const number = body.number || `EST-${1001 + count}`;
  const { subtotal, tax, total } = calc(body.lineItems || [], Number(body.taxRate ?? 10.1));

  const estimate = await prisma.estimate.create({
    data: {
      number,
      customerId: body.customerId,
      jobId: body.jobId || null,
      status: body.status || "Draft",
      taxRate: Number(body.taxRate ?? 10.1),
      subtotal,
      tax,
      total,
      notes: body.notes || null,
      lineItems: {
        create: (body.lineItems || []).map((li: any) => ({
          category: li.category || "material",
          description: li.description,
          qty: Number(li.qty || 0),
          unitPrice: Number(li.unitPrice || 0),
          total: Number(li.qty || 0) * Number(li.unitPrice || 0),
        })),
      },
    },
    include: { lineItems: true },
  });
  return NextResponse.json(estimate);
}
