import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Stark Roofing CRM...");

  // Clear existing data
  await prisma.activity.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.lineItem.deleteMany();
  await prisma.estimate.deleteMany();
  await prisma.job.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.crewMember.deleteMany();

  // Crew
  const crew = await Promise.all([
    prisma.crewMember.create({
      data: { name: "Marcus Stark", role: "Foreman", phone: "(206) 739-8232", email: "marcus@starkroofing.com" },
    }),
    prisma.crewMember.create({
      data: { name: "Diego Ramirez", role: "Foreman", phone: "(206) 555-0142", email: "diego@starkroofing.com" },
    }),
    prisma.crewMember.create({
      data: { name: "Tyler Nguyen", role: "Crew", phone: "(206) 555-0177", email: "tyler@starkroofing.com" },
    }),
    prisma.crewMember.create({
      data: { name: "Aaron Pike", role: "Crew", phone: "(206) 555-0199", email: "aaron@starkroofing.com" },
    }),
    prisma.crewMember.create({
      data: { name: "Sienna Holt", role: "Sales", phone: "(206) 555-0123", email: "sienna@starkroofing.com" },
    }),
    prisma.crewMember.create({
      data: { name: "Renee Park", role: "Admin", phone: "(206) 555-0110", email: "renee@starkroofing.com" },
    }),
  ]);
  console.log(`Created ${crew.length} crew members`);

  // Leads
  const leadsData = [
    {
      name: "Jennifer Whitaker",
      phone: "(425) 555-2011",
      email: "jwhitaker@example.com",
      address: "14203 NE 178th St",
      city: "Woodinville",
      serviceType: "Roofing",
      leadSource: "Google",
      status: "New",
      notes: "Hail damage on north slope. Wants GAF HDZ quote.",
    },
    {
      name: "David Okafor",
      phone: "(425) 555-1847",
      email: "dokafor@example.com",
      address: "822 NW Gilman Blvd",
      city: "Issaquah",
      serviceType: "Siding",
      leadSource: "Nextdoor",
      status: "Contacted",
      notes: "Wood rot around garage. Considering fiber cement.",
    },
    {
      name: "Priya Shah",
      phone: "(425) 555-3320",
      email: "pshah@example.com",
      address: "2117 Bellevue Way NE",
      city: "Bellevue",
      serviceType: "Roofing",
      leadSource: "Referral",
      status: "Qualified",
      notes: "Referred by Whitaker. Ready to schedule.",
    },
    {
      name: "Robert Chen",
      phone: "(425) 555-4418",
      email: "rchen@example.com",
      address: "501 S 3rd St",
      city: "Renton",
      serviceType: "Drywall",
      leadSource: "Facebook",
      status: "New",
      notes: "Water damage after storm. Needs full bedroom redo.",
    },
    {
      name: "Melissa Tate",
      phone: "(425) 555-5502",
      email: "mtate@example.com",
      address: "3040 228th Ave SE",
      city: "Sammamish",
      serviceType: "Painting",
      leadSource: "Door Knock",
      status: "Contacted",
      notes: "Exterior repaint, colonial. Wants color consult.",
    },
    {
      name: "Kai Thompson",
      phone: "(425) 555-6630",
      email: "kthompson@example.com",
      address: "19512 144th Ave NE",
      city: "Woodinville",
      serviceType: "Flooring",
      leadSource: "Bing",
      status: "Lost",
      notes: "Went with competitor. Price.",
    },
    {
      name: "Helena Vasquez",
      phone: "(425) 555-7744",
      email: "hvasquez@example.com",
      address: "1800 136th Pl NE",
      city: "Bellevue",
      serviceType: "Tile",
      leadSource: "Referral",
      status: "Qualified",
      notes: "Master bath remodel. Porcelain plank tile.",
    },
    {
      name: "Brandon Lee",
      phone: "(425) 555-8801",
      email: "blee@example.com",
      address: "330 SW Sunset Blvd",
      city: "Renton",
      serviceType: "Commercial Roof",
      leadSource: "Google",
      status: "New",
      notes: "20k sqft warehouse, wants EverGuard PVC assessment.",
    },
  ];

  const leads = [];
  for (const l of leadsData) leads.push(await prisma.lead.create({ data: l }));
  console.log(`Created ${leads.length} leads`);

  // Convert a couple of leads to customers
  const customer1 = await prisma.customer.create({
    data: {
      name: "Priya Shah",
      phone: "(425) 555-3320",
      email: "pshah@example.com",
      address: "2117 Bellevue Way NE",
      city: "Bellevue",
      totalRevenue: 18420,
      leadId: leads[2].id,
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: "Helena Vasquez",
      phone: "(425) 555-7744",
      email: "hvasquez@example.com",
      address: "1800 136th Pl NE",
      city: "Bellevue",
      totalRevenue: 9750,
      leadId: leads[6].id,
    },
  });

  const customer3 = await prisma.customer.create({
    data: {
      name: "Westlake Medical Group",
      phone: "(206) 555-9090",
      email: "facilities@westlakemed.example",
      address: "450 Lake Washington Blvd",
      city: "Renton",
      totalRevenue: 74200,
    },
  });

  const customer4 = await prisma.customer.create({
    data: {
      name: "The Harlow Residence",
      phone: "(425) 555-6621",
      email: "harlow@example.com",
      address: "22810 SE 8th St",
      city: "Sammamish",
      totalRevenue: 4600,
    },
  });

  console.log("Created 4 customers");

  // Jobs
  const job1 = await prisma.job.create({
    data: {
      customerId: customer1.id,
      jobType: "Roofing",
      status: "In Progress",
      startDate: new Date("2026-04-10"),
      endDate: new Date("2026-04-17"),
      address: "2117 Bellevue Way NE, Bellevue",
      assignedCrew: "Marcus Stark, Tyler Nguyen, Aaron Pike",
      notes: "GAF HDZ Charcoal. 32 sq. Full tear-off.",
    },
  });

  const job2 = await prisma.job.create({
    data: {
      customerId: customer2.id,
      jobType: "Tile",
      status: "Scheduled",
      startDate: new Date("2026-04-22"),
      endDate: new Date("2026-04-28"),
      address: "1800 136th Pl NE, Bellevue",
      assignedCrew: "Diego Ramirez, Tyler Nguyen",
      notes: "Master bath porcelain plank. 180 sqft.",
    },
  });

  const job3 = await prisma.job.create({
    data: {
      customerId: customer3.id,
      jobType: "Commercial Roof",
      status: "Scheduled",
      startDate: new Date("2026-05-04"),
      endDate: new Date("2026-05-20"),
      address: "450 Lake Washington Blvd, Renton",
      assignedCrew: "Marcus Stark, Diego Ramirez, Aaron Pike",
      notes: "EverGuard PVC 60mil. Recoat w/ Uniflex Silicone 7500 sqft.",
    },
  });

  const job4 = await prisma.job.create({
    data: {
      customerId: customer4.id,
      jobType: "Painting",
      status: "Complete",
      startDate: new Date("2026-03-18"),
      endDate: new Date("2026-03-24"),
      address: "22810 SE 8th St, Sammamish",
      assignedCrew: "Aaron Pike",
      notes: "Interior 3-room repaint. Sherwin Williams Agreeable Gray.",
    },
  });

  const job5 = await prisma.job.create({
    data: {
      customerId: customer1.id,
      jobType: "Siding",
      status: "On Hold",
      address: "2117 Bellevue Way NE, Bellevue",
      assignedCrew: "Diego Ramirez",
      notes: "Waiting on HOA approval for color.",
    },
  });

  console.log("Created 5 jobs");

  // Estimates
  const est1 = await prisma.estimate.create({
    data: {
      number: "EST-1001",
      customerId: customer1.id,
      jobId: job1.id,
      status: "Approved",
      subtotal: 16730,
      taxRate: 10.1,
      tax: 1689.73,
      total: 18419.73,
      notes: "Full roof replacement, GAF HDZ w/ Golden Pledge warranty.",
      lineItems: {
        create: [
          { category: "material", description: "GAF HDZ Shingles - Charcoal", qty: 32, unitPrice: 135, total: 4320 },
          { category: "material", description: "GAF Grand Sequoia Hip/Ridge", qty: 6, unitPrice: 85, total: 510 },
          { category: "material", description: "Synthetic Underlayment", qty: 32, unitPrice: 28, total: 896 },
          { category: "material", description: "Ice & Water Shield", qty: 8, unitPrice: 72, total: 576 },
          { category: "labor", description: "Tear-off & disposal", qty: 1, unitPrice: 3400, total: 3400 },
          { category: "labor", description: "Installation labor", qty: 1, unitPrice: 6200, total: 6200 },
          { category: "labor", description: "Flashing & vent boots", qty: 1, unitPrice: 828, total: 828 },
        ],
      },
    },
  });

  const est2 = await prisma.estimate.create({
    data: {
      number: "EST-1002",
      customerId: customer2.id,
      jobId: job2.id,
      status: "Sent",
      subtotal: 8850,
      taxRate: 10.1,
      tax: 893.85,
      total: 9743.85,
      notes: "Master bath tile install with waterproofing.",
      lineItems: {
        create: [
          { category: "material", description: "Porcelain plank tile 12x24", qty: 180, unitPrice: 6.5, total: 1170 },
          { category: "material", description: "Schluter Kerdi waterproofing", qty: 1, unitPrice: 520, total: 520 },
          { category: "material", description: "Thinset mortar & grout", qty: 1, unitPrice: 260, total: 260 },
          { category: "labor", description: "Demo & prep", qty: 1, unitPrice: 1400, total: 1400 },
          { category: "labor", description: "Tile install labor", qty: 1, unitPrice: 5500, total: 5500 },
        ],
      },
    },
  });

  const est3 = await prisma.estimate.create({
    data: {
      number: "EST-1003",
      customerId: customer3.id,
      jobId: job3.id,
      status: "Approved",
      subtotal: 67400,
      taxRate: 10.1,
      tax: 6807.4,
      total: 74207.4,
      notes: "Commercial flat roof recoat + partial EverGuard overlay.",
      lineItems: {
        create: [
          { category: "material", description: "GAF EverGuard PVC 60mil", qty: 3000, unitPrice: 4.2, total: 12600 },
          { category: "material", description: "Uniflex Silicone Roof Coating", qty: 4500, unitPrice: 2.1, total: 9450 },
          { category: "material", description: "Fasteners, plates, flashing kit", qty: 1, unitPrice: 3800, total: 3800 },
          { category: "labor", description: "Surface prep & power wash", qty: 1, unitPrice: 6200, total: 6200 },
          { category: "labor", description: "PVC install labor", qty: 1, unitPrice: 21500, total: 21500 },
          { category: "labor", description: "Silicone coating labor", qty: 1, unitPrice: 13850, total: 13850 },
        ],
      },
    },
  });

  const est4 = await prisma.estimate.create({
    data: {
      number: "EST-1004",
      customerId: customer4.id,
      jobId: job4.id,
      status: "Approved",
      subtotal: 4175,
      taxRate: 10.1,
      tax: 421.68,
      total: 4596.68,
      notes: "Interior repaint.",
      lineItems: {
        create: [
          { category: "material", description: "SW Agreeable Gray - 8 gal", qty: 8, unitPrice: 62, total: 496 },
          { category: "material", description: "Primer, caulk, supplies", qty: 1, unitPrice: 279, total: 279 },
          { category: "labor", description: "3-room repaint labor", qty: 1, unitPrice: 3400, total: 3400 },
        ],
      },
    },
  });

  const est5 = await prisma.estimate.create({
    data: {
      number: "EST-1005",
      customerId: customer1.id,
      status: "Draft",
      subtotal: 12400,
      taxRate: 10.1,
      tax: 1252.4,
      total: 13652.4,
      notes: "Siding refresh - pending HOA approval.",
      lineItems: {
        create: [
          { category: "material", description: "Fiber cement lap siding", qty: 1200, unitPrice: 4.2, total: 5040 },
          { category: "material", description: "Trim, fasteners, caulk", qty: 1, unitPrice: 860, total: 860 },
          { category: "labor", description: "Siding install labor", qty: 1, unitPrice: 6500, total: 6500 },
        ],
      },
    },
  });

  console.log("Created 5 estimates");

  // Invoices
  await prisma.invoice.create({
    data: {
      number: "INV-2001",
      customerId: customer1.id,
      jobId: job1.id,
      estimateId: est1.id,
      amount: 18419.73,
      amountPaid: 9209.86,
      status: "Partial",
      paymentMethod: "Check",
      issueDate: new Date("2026-04-10"),
      dueDate: new Date("2026-04-25"),
    },
  });

  await prisma.invoice.create({
    data: {
      number: "INV-2002",
      customerId: customer4.id,
      jobId: job4.id,
      estimateId: est4.id,
      amount: 4596.68,
      amountPaid: 4596.68,
      status: "Paid",
      paymentMethod: "Credit Card",
      issueDate: new Date("2026-03-25"),
      dueDate: new Date("2026-04-08"),
    },
  });

  await prisma.invoice.create({
    data: {
      number: "INV-2003",
      customerId: customer3.id,
      jobId: job3.id,
      estimateId: est3.id,
      amount: 74207.4,
      amountPaid: 0,
      status: "Unpaid",
      issueDate: new Date("2026-04-02"),
      dueDate: new Date("2026-05-02"),
    },
  });

  console.log("Created 3 invoices");

  // Activity feed
  const activities = [
    { type: "lead_created", message: "New lead: Brandon Lee (Commercial Roof)" },
    { type: "estimate_approved", message: "EST-1003 approved by Westlake Medical Group" },
    { type: "invoice_paid", message: "INV-2002 paid in full by The Harlow Residence" },
    { type: "job_started", message: "Job started: Priya Shah - Roofing" },
    { type: "lead_qualified", message: "Lead qualified: Helena Vasquez (Tile)" },
    { type: "invoice_sent", message: "INV-2003 sent to Westlake Medical Group" },
  ];
  for (const a of activities) {
    await prisma.activity.create({ data: a });
  }
  console.log(`Created ${activities.length} activity entries`);

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
