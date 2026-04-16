import { prisma } from "@/lib/prisma";
import { CrewClient } from "./CrewClient";

export const dynamic = "force-dynamic";

export default async function CrewPage() {
  const crew = await prisma.crewMember.findMany({ orderBy: { role: "asc" } });
  const plain = crew.map((c) => ({
    id: c.id,
    name: c.name,
    role: c.role,
    phone: c.phone,
    email: c.email,
  }));
  return <CrewClient initial={plain} />;
}
