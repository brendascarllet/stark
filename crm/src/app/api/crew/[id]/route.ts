import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const member = await prisma.crewMember.update({
    where: { id: params.id },
    data: {
      name: body.name,
      role: body.role,
      phone: body.phone || null,
      email: body.email || null,
    },
  });
  return NextResponse.json(member);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.crewMember.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
