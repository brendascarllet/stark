import { prisma } from "@/lib/prisma";
import { ScheduleClient } from "./ScheduleClient";

export const dynamic = "force-dynamic";

export default async function SchedulePage() {
  const [jobs, crew] = await Promise.all([
    prisma.job.findMany({
      where: { startDate: { not: null } },
      include: { customer: true },
    }),
    prisma.crewMember.findMany(),
  ]);

  const plain = jobs.map((j) => ({
    id: j.id,
    customerName: j.customer.name,
    jobType: j.jobType,
    status: j.status,
    startDate: j.startDate?.toISOString() || null,
    endDate: j.endDate?.toISOString() || null,
    assignedCrew: j.assignedCrew,
    address: j.address,
  }));

  return <ScheduleClient jobs={plain} crew={crew.map((c) => ({ id: c.id, name: c.name, role: c.role }))} />;
}
