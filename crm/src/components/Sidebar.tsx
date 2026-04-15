"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Dashboard", icon: "▦" },
  { href: "/leads", label: "Leads", icon: "◉" },
  { href: "/customers", label: "Customers", icon: "♟" },
  { href: "/jobs", label: "Jobs", icon: "⚒" },
  { href: "/estimates", label: "Estimates", icon: "§" },
  { href: "/invoices", label: "Invoices", icon: "$" },
  { href: "/schedule", label: "Schedule", icon: "▣" },
  { href: "/crew", label: "Crew", icon: "☗" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-3 left-3 z-50 bg-ink-700 text-gold border border-ink-500 rounded-lg px-3 py-2 text-sm font-semibold"
      >
        {open ? "✕" : "☰"} Menu
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-ink-900 border-r border-ink-600 transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-5 border-b border-ink-600">
          <Link href="/" onClick={() => setOpen(false)} className="block">
            <div className="font-display text-3xl text-gold leading-none">STARK</div>
            <div className="text-xs uppercase tracking-[0.25em] text-gray-400 mt-1">
              Roofing & Renovation
            </div>
          </Link>
          <div className="mt-3 text-[10px] uppercase tracking-widest text-gold-600">
            Internal CRM
          </div>
        </div>

        <nav className="p-3 space-y-1">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-gold text-ink-900"
                    : "text-gray-300 hover:bg-ink-700 hover:text-gold-200"
                }`}
              >
                <span className="text-lg leading-none w-5 text-center">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-ink-600 text-xs text-gray-500">
          <div className="text-gold font-semibold mb-0.5">Stark HQ</div>
          <div>(206) 739-8232</div>
          <div>Greater Seattle</div>
        </div>
      </aside>

      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
    </>
  );
}
