import Link from "next/link";
import { company, services } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-3xl font-black text-[#f4c400]">{company.name}</p>
          <p className="max-w-xl text-sm text-white/75">{company.description}</p>
          <div className="space-y-1 text-sm text-white/80">
            <p>{company.email}</p>
            <p>{company.phone}</p>
            <p>{company.address}</p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Services</p>
          <div className="space-y-2 text-sm text-white/80">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="block transition hover:text-[#f4c400]">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Platform</p>
          <div className="space-y-2 text-sm text-white/80">
            <Link href="/blog" className="block transition hover:text-[#f4c400]">Blog</Link>
            <Link href="/portfolio" className="block transition hover:text-[#f4c400]">Portfolio</Link>
            <Link href="/dashboard" className="block transition hover:text-[#f4c400]">Staff Portal</Link>
            <Link href="/contact" className="block transition hover:text-[#f4c400]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
