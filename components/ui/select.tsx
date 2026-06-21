import * as React from "react";
import { cn } from "@/lib/utils";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(function Select(
  { className, ...props },
  ref,
) {
  return (
    <select
      ref={ref}
      className={cn("h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-black outline-none focus:border-black/30", className)}
      {...props}
    />
  );
});
