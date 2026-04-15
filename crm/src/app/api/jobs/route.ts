import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    include: { customer: true },
  });
  return NextResponse.json(jobs);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const job = await prisma.job.create({
    data: {
      customerId: body.customerId,
      jobType: body.jobType,
      status: body.status || "Scheduled",
      startDate: body.startDate ? new Date(body.startDate) : null,
      endDate: body.endDate ? new Date(body.endDate) : null,
      address: body.address || null,
      assignedCrew: body.assignedCrew || null,
      notes: body.notes || null,
    },
  });
  await prisma.activity.create({
    data: { type: "job_created", message: `Job created: ${job.jobType}` },
  });
  return NextResponse.json(job);
}
