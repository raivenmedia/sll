import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
