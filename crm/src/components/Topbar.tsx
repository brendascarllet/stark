"use client";

import { usePathname } from "next/navigation";

const TITLES: Record<string, string> = {
  "/": "Dashboard",
  "/leads": "Leads",
  "/customers": "Customers",
  "/jobs": "Jobs & Projects",
  "/estimates": "Estimates & Proposals",
  "/invoices": "Invoices",
  "/schedule": "Schedule",
  "/crew": "Crew & Contacts",
};

export function Topbar() {
  const pathname = usePathname() || "/";
  const key = Object.keys(TITLES).find((k) => k !== "/" && pathname.startsWith(k)) || "/";
  const title = TITLES[key];

  return (
    <header className="sticky top-0 z-20 bg-ink-900/90 backdrop-blur border-b border-ink-600 px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="pl-12 md:pl-0">
        <h1 className="font-display text-3xl md:text-4xl text-gray-100 leading-none">{title}</h1>
        <div className="text-xs text-gray-500 mt-1">
          Stark Roofing & Renovation · Greater Seattle
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3 text-xs text-gray-400">
        <div className="text-right">
          <div className="text-gold font-semibold">(206) 739-8232</div>
          <div>Woodinville · Issaquah · Bellevue · Renton · Sammamish</div>
        </div>
      </div>
    </header>
  );
}
