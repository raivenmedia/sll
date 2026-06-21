import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#f4c400] text-black hover:bg-[#ddb000]",
        secondary: "bg-black text-white hover:bg-neutral-800",
        outline: "border border-black/15 bg-white text-black hover:bg-black/5",
        ghost: "text-black hover:bg-black/5",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-5",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, ...props },
  ref,
) {
  return <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});

export { Button };
