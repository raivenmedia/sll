import type { ReactNode } from "react";
import Link from "next/link";
import { BarChart3, BookOpenText, FolderKanban, Images, LayoutDashboard, LogOut, MessageSquareText, Settings, ShieldCheck, Sparkles } from "lucide-react";

const navigation = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/visitors", label: "Visitors", icon: BarChart3 },
  { href: "/dashboard/crm/messages", label: "CRM Messages", icon: MessageSquareText },
  { href: "/dashboard/crm/quotes", label: "CRM Quotes", icon: FolderKanban },
  { href: "/dashboard/crm/leads", label: "CRM Leads", icon: FolderKanban },
  { href: "/dashboard/cms/homepage", label: "CMS Homepage", icon: Sparkles },
  { href: "/dashboard/cms/services", label: "CMS Services", icon: Sparkles },
  { href: "/dashboard/cms/portfolio", label: "CMS Portfolio", icon: Sparkles },
  { href: "/dashboard/cms/blog", label: "CMS Blog", icon: BookOpenText },
  { href: "/dashboard/cms/testimonials", label: "CMS Testimonials", icon: Sparkles },
  { href: "/dashboard/cms/faqs", label: "CMS FAQs", icon: Sparkles },
  { href: "/dashboard/media-library", label: "Media Library", icon: Images },
  { href: "/dashboard/seo", label: "SEO Center", icon: ShieldCheck },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-black/5 bg-black px-5 py-8 text-white">
          <Link href="/dashboard" className="text-2xl font-black text-[#f4c400]">Yolic</Link>
          <p className="mt-2 text-sm text-white/60">Staff operations hub</p>
          <nav className="mt-8 grid gap-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/api/auth/sign-out" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white/75 transition hover:text-white">
            <LogOut className="h-4 w-4" />
            Sign out
          </Link>
        </aside>
        <div>
          <header className="border-b border-black/5 bg-white px-6 py-5 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Dashboard</p>
                <h1 className="text-2xl font-black text-black">Yolic Platform</h1>
              </div>
              <div className="rounded-full bg-[#f4c400]/20 px-4 py-2 text-sm font-semibold text-black">Authenticated workspace</div>
            </div>
          </header>
          <div className="p-6 lg:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
