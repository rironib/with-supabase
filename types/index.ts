import type { badgeVariants } from "@/components/ui/badge";
import type { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import type React from "react";

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
