import { testimonials } from "@/lib/data";
import { Card } from "@/components/ui/card";

export default function CmsTestimonialsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id}>
          <p className="text-2xl font-bold text-black">{testimonial.name}</p>
          <p className="mt-2 text-sm text-neutral-500">{testimonial.role} · {testimonial.company}</p>
          <p className="mt-4 text-sm leading-7 text-neutral-600">{testimonial.quote}</p>
        </Card>
      ))}
    </div>
  );
}
