import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

export const metadata: Metadata = {
  title: "Stark Roofing CRM",
  description: "Internal CRM for Stark Roofing & Renovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col md:ml-64">
            <Topbar />
            <main className="flex-1 p-4 md:p-8 max-w-[1600px] w-full mx-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
