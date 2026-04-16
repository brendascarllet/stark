import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function calc(lineItems: any[], taxRate: number) {
  const subtotal = lineItems.reduce((s, li) => s + Number(li.qty || 0) * Number(li.unitPrice || 0), 0);
  const tax = +(subtotal * (taxRate / 100)).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);
  return { subtotal: +subtotal.toFixed(2), tax, total };
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const existing = await prisma.estimate.findUnique({ where: { id: params.id } });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (body.lineItems) {
    const taxRate = Number(body.taxRate ?? existing.taxRate);
    const { subtotal, tax, total } = calc(body.lineItems, taxRate);
    await prisma.lineItem.deleteMany({ where: { estimateId: params.id } });
    const updated = await prisma.estimate.update({
      where: { id: params.id },
      data: {
        customerId: body.customerId ?? existing.customerId,
        jobId: body.jobId ?? existing.jobId,
        status: body.status ?? existing.status,
        taxRate,
        subtotal,
        tax,
        total,
        notes: body.notes ?? existing.notes,
        lineItems: {
          create: body.lineItems.map((li: any) => ({
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
    if (body.status === "Approved") {
      await prisma.activity.create({ data: { type: "estimate_approved", message: `${updated.number} approved` } });
    }
    return NextResponse.json(updated);
  }

  const updated = await prisma.estimate.update({
    where: { id: params.id },
    data: {
      status: body.status ?? existing.status,
      notes: body.notes ?? existing.notes,
    },
  });
  if (body.status === "Approved") {
    await prisma.activity.create({ data: { type: "estimate_approved", message: `${updated.number} approved` } });
  }
  return NextResponse.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.estimate.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
