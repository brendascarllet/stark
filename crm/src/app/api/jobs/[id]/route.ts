import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const data: any = {};
  if ("customerId" in body) data.customerId = body.customerId;
  if ("jobType" in body) data.jobType = body.jobType;
  if ("status" in body) data.status = body.status;
  if ("startDate" in body) data.startDate = body.startDate ? new Date(body.startDate) : null;
  if ("endDate" in body) data.endDate = body.endDate ? new Date(body.endDate) : null;
  if ("address" in body) data.address = body.address || null;
  if ("assignedCrew" in body) data.assignedCrew = body.assignedCrew || null;
  if ("notes" in body) data.notes = body.notes || null;

  const job = await prisma.job.update({ where: { id: params.id }, data });

  if (body.status === "Complete") {
    await prisma.activity.create({
      data: { type: "job_complete", message: `Job completed: ${job.jobType}` },
    });
  }
  return NextResponse.json(job);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.job.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
