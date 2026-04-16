import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(leads);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const lead = await prisma.lead.create({
    data: {
      name: body.name,
      phone: body.phone || null,
      email: body.email || null,
      address: body.address || null,
      city: body.city || null,
      serviceType: body.serviceType || null,
      leadSource: body.leadSource || null,
      status: body.status || "New",
      notes: body.notes || null,
    },
  });
  await prisma.activity.create({
    data: { type: "lead_created", message: `New lead: ${lead.name}${lead.serviceType ? ` (${lead.serviceType})` : ""}` },
  });
  return NextResponse.json(lead);
}
