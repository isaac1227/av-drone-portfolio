import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-clip-padding text-sm font-medium transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_18px_44px_-20px_rgba(30,167,255,0.9)] hover:-translate-y-0.5 hover:bg-[#49b8ff] hover:shadow-[0_24px_52px_-20px_rgba(30,167,255,0.95)]",
        outline:
          "border border-border/80 bg-surface/80 text-foreground hover:border-brand/40 hover:bg-white/5 aria-expanded:border-brand/40 aria-expanded:bg-white/5",
        secondary:
          "bg-white/5 text-foreground hover:bg-white/10 aria-expanded:bg-white/10 aria-expanded:text-foreground",
        ghost:
          "bg-transparent text-text-subtle hover:bg-white/5 hover:text-foreground aria-expanded:bg-white/5 aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 px-5",
        xs: "h-8 rounded-full px-3 text-xs",
        sm: "h-10 rounded-full px-4 text-sm",
        lg: "h-12 rounded-full px-6 text-sm",
        icon: "size-11 rounded-full",
        "icon-xs": "size-8 rounded-full",
        "icon-sm": "size-10 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
