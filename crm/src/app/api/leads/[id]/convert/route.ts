import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  const lead = await prisma.lead.findUnique({ where: { id: params.id }, include: { customer: true } });
  if (!lead) return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  if (lead.customer) return NextResponse.json({ error: "Already a customer" }, { status: 400 });

  const customer = await prisma.customer.create({
    data: {
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      address: lead.address,
      city: lead.city,
      leadId: lead.id,
    },
  });

  await prisma.lead.update({ where: { id: lead.id }, data: { status: "Qualified" } });
  await prisma.activity.create({
    data: { type: "lead_converted", message: `Converted lead to customer: ${customer.name}` },
  });

  return NextResponse.json(customer);
}
