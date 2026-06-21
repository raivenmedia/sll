import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${textAlign}`}>
      <Badge>{eyebrow}</Badge>
      <div className="space-y-3">
        <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-neutral-600">{description}</p>
      </div>
    </div>
  );
}
