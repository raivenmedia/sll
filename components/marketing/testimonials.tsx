import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/lib/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} className="flex h-full flex-col gap-5 bg-black text-white">
          <div className="flex gap-1 text-[#f4c400]">
            {Array.from({ length: item.rating }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-base leading-8 text-white/85">“{item.quote}”</p>
          <div className="mt-auto">
            <p className="font-semibold text-white">{item.name}</p>
            <p className="text-sm text-white/65">{item.role}, {item.company}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
