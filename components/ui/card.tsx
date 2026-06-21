import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-3xl border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]", className)} {...props} />;
}
