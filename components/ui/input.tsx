import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn("h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-black outline-none ring-0 placeholder:text-neutral-500 focus:border-black/30", className)}
      {...props}
    />
  );
});
