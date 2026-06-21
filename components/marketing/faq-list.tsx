import { Card } from "@/components/ui/card";
import type { FAQItem } from "@/lib/types";

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <Card key={item.id}>
          <h3 className="text-lg font-bold text-black">{item.question}</h3>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{item.answer}</p>
        </Card>
      ))}
    </div>
  );
}
