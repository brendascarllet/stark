import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const crew = await prisma.crewMember.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(crew);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const member = await prisma.crewMember.create({
    data: {
      name: body.name,
      role: body.role || "Crew",
      phone: body.phone || null,
      email: body.email || null,
    },
  });
  return NextResponse.json(member);
}
