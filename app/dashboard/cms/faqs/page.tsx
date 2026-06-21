import { faqs } from "@/lib/data";
import { Card } from "@/components/ui/card";

export default function CmsFaqsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {faqs.map((faq) => (
        <Card key={faq.id}>
          <p className="text-xl font-bold text-black">{faq.question}</p>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{faq.answer}</p>
        </Card>
      ))}
    </div>
  );
}
