"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight text-black">
          {company.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-neutral-700 transition hover:text-black">
              {link.label}
            </Link>
          ))}
          <Link href="/quote" className={buttonVariants({ variant: "primary", size: "sm" })}>
            Get a quote
          </Link>
        </nav>
        <button className="rounded-full border border-black/10 p-3 md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-black/5 px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "justify-start")} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/quote" className={buttonVariants({ variant: "primary", size: "sm" })} onClick={() => setOpen(false)}>
              Get a quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
