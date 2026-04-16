# Stark Roofing & Renovation — CRM

Internal CRM for **Stark Roofing & Renovation** (Greater Seattle area — Woodinville,
Issaquah, Bellevue, Renton, Sammamish).

Covers the full pipeline: **Leads → Customers → Jobs → Estimates → Invoices**,
with a kanban job board, calendar scheduling, crew roster, and a live dashboard.

- **Stack**: Next.js 14 (App Router) · React 18 · Prisma · SQLite · Tailwind CSS · TypeScript
- **Design**: Dark theme · gold accents (`#B8960C`) · Bebas Neue display font · mobile-friendly sidebar

## Quick start

```bash
cd crm
npm install
npm run setup        # generates Prisma client, creates SQLite db, seeds sample data
npm run dev          # http://localhost:3001
```

That's it — open `http://localhost:3001` and everything is pre-populated with
realistic Stark Roofing sample records so you can click through every module
immediately.

### Manual step-by-step (equivalent of `npm run setup`)

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start dev server on port 3001 |
| `npm run build` | Build for production |
| `npm run start` | Run production build on port 3001 |
| `npm run db:push` | Push Prisma schema to SQLite |
| `npm run db:seed` | Re-seed sample data (wipes existing) |
| `npm run db:studio` | Open Prisma Studio to browse the DB |
| `npm run setup` | Generate + push + seed in one shot |

## Modules

### Dashboard (`/`)
KPI cards (open leads, active jobs, revenue this month, unpaid invoices),
upcoming jobs, and a live activity feed.

### Leads (`/leads`)
- Fields: name, phone, email, address, city, service type, lead source,
  status, notes, date added.
- Sources: Google · Nextdoor · Referral · Facebook · Door Knock · Bing · Other.
- Statuses: New · Contacted · Qualified · Lost (filter tabs).
- One-click **Convert to Customer**.

### Customers (`/customers`)
- Created manually or auto-linked from a converted lead.
- Shows lifetime revenue, related jobs, and outstanding invoice balance.

### Jobs / Projects (`/jobs`)
- Kanban-style board (drag-and-drop between Scheduled → In Progress → Complete → On Hold).
- List view toggle.
- Job types: Roofing · Siding · Drywall · Painting · Flooring · Tile · Commercial Roof.
- Assign crew members (multi-select chips).

### Estimates & Proposals (`/estimates`)
- Auto-numbered `EST-####`.
- Separate **Materials** and **Labor** line-item sections with the Stark
  material library pre-loaded (GAF HDZ, Grand Sequoia, Natural Shadow,
  EverGuard PVC, Uniflex Silicone, Ice & Water Shield, Fiber Cement, etc.).
- Auto-calculated subtotal · tax (10.1% default for WA) · total.
- Statuses: Draft · Sent · Approved · Declined.
- **One-click "→ Invoice"** generation from an approved estimate.

### Invoices (`/invoices`)
- Auto-numbered `INV-####`, linked back to estimate/customer/job.
- Totals summary (billed, paid, outstanding).
- Status auto-computes from amount paid (Unpaid / Partial / Paid).
- Payment method field (Cash · Check · Credit Card · ACH · Other).
- "Mark Paid" quick action — updates customer lifetime revenue.

### Schedule (`/schedule`)
- Monthly calendar showing every job spanning its start → end dates.
- Color-coded by status.
- Filter by crew member.
- Click a job on the calendar to reschedule start/end dates inline.

### Crew / Contacts (`/crew`)
- Roles: Foreman · Crew · Sales · Admin.
- Grouped cards per role with initials avatars.

## Project structure

```
crm/
├── prisma/
│   ├── schema.prisma         # data model
│   └── seed.ts               # realistic Stark sample data
├── src/
│   ├── app/
│   │   ├── layout.tsx        # sidebar + topbar shell
│   │   ├── page.tsx          # Dashboard
│   │   ├── globals.css       # dark+gold theme tokens
│   │   ├── leads/            # leads module (list + modal CRUD)
│   │   ├── customers/
│   │   ├── jobs/             # kanban + list views
│   │   ├── estimates/        # line-item builder
│   │   ├── invoices/
│   │   ├── schedule/         # calendar view
│   │   ├── crew/
│   │   └── api/              # Next.js Route Handlers (REST-ish)
│   │       ├── leads/         (+ /[id], /[id]/convert)
│   │       ├── customers/     (+ /[id])
│   │       ├── jobs/          (+ /[id])
│   │       ├── estimates/     (+ /[id], /[id]/invoice)
│   │       ├── invoices/      (+ /[id])
│   │       └── crew/          (+ /[id])
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── Topbar.tsx
│   │   └── StatusBadge.tsx
│   └── lib/
│       ├── prisma.ts         # singleton Prisma client
│       └── utils.ts          # formatting + status + enum constants
├── .env                      # DATABASE_URL="file:./dev.db"
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Data model (Prisma)

- `Lead` — pre-sale pipeline, optional one-to-one link to `Customer`
- `Customer` — post-conversion, rolls up `jobs`, `estimates`, `invoices` and `totalRevenue`
- `Job` — one customer, many estimates/invoices, kanban `status`
- `Estimate` — `lineItems` split by `category` (`material` | `labor`), auto totals
- `LineItem` — `Estimate` child, cascade delete
- `Invoice` — optional link to `Estimate` + `Job`, status computed from `amountPaid`
- `CrewMember` — roster with `role`
- `Activity` — auto-populated feed (leads created, estimates approved, invoices paid, etc.)

See `prisma/schema.prisma` for the authoritative definition.

## Theme

Dark ink (`#0A0B0D` → `#15181C`) with Stark gold (`#B8960C`) accents.

- **Display font**: Bebas Neue (loaded from Google Fonts)
- **Body font**: Inter
- Tailwind tokens: `gold`, `gold-{50..900}`, `ink-{300..900}`
- Reusable utilities in `globals.css`: `.card`, `.card-padded`, `.btn-primary`,
  `.btn-ghost`, `.btn-danger`, `.input`, `.label`, `.badge`, `.th`, `.td`,
  `.kanban-col`, `.kanban-card`.

## Contact

Stark Roofing & Renovation
(206) 739-8232
Greater Seattle · Woodinville · Issaquah · Bellevue · Renton · Sammamish
