import Link from "next/link";
import { ArrowRight, Gift, Megaphone, MonitorCog, Package, Palette, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Service } from "@/lib/types";

const icons = {
  Palette,
  Package,
  Megaphone,
  MonitorCog,
  Gift,
  Truck,
};

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = icons[service.icon as keyof typeof icons] ?? Palette;
        return (
          <Card key={service.id} className="flex h-full flex-col gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c400]/20 text-black">
              <Icon className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-black">{service.name}</h3>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-neutral-600">{service.heroStat}</span>
              </div>
              <p className="text-sm leading-7 text-neutral-600">{service.summary}</p>
            </div>
            <ul className="grid gap-2 text-sm text-neutral-700">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f4c400]" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pt-2">
              <p className="text-sm font-semibold text-black">{service.priceGuide}</p>
              <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-black">
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
