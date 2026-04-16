import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const customer = await prisma.customer.update({
    where: { id: params.id },
    data: {
      name: body.name,
      phone: body.phone ?? null,
      email: body.email ?? null,
      address: body.address ?? null,
      city: body.city ?? null,
      notes: body.notes ?? null,
    },
  });
  return NextResponse.json(customer);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.customer.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
