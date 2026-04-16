import { prisma } from "@/lib/prisma";
import { JobsClient } from "./JobsClient";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const [jobs, customers, crew] = await Promise.all([
    prisma.job.findMany({ include: { customer: true }, orderBy: { createdAt: "desc" } }),
    prisma.customer.findMany({ select: { id: true, name: true, address: true, city: true } }),
    prisma.crewMember.findMany({ select: { id: true, name: true, role: true } }),
  ]);

  const plain = jobs.map((j) => ({
    id: j.id,
    customerId: j.customerId,
    customerName: j.customer.name,
    jobType: j.jobType,
    status: j.status,
    startDate: j.startDate?.toISOString() || null,
    endDate: j.endDate?.toISOString() || null,
    address: j.address,
    assignedCrew: j.assignedCrew,
    notes: j.notes,
  }));
  return <JobsClient initialJobs={plain} customers={customers} crew={crew} />;
}
