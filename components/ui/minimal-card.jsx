import * as React from "react"

import { cn } from "@/lib/utils"

const MinimalCard = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[24px] bg-[#0E0E0E]  p-2 no-underline shadow-sm transition-colors hover:bg-[#0E0E0E]/60 ",
      "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
     "shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
      className
    )}
    {...props}>
    {children}
  </div>
))
MinimalCard.displayName = "MinimalCard"

const MinimalCardImage = React.forwardRef(({ className, alt, src, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-[190px]  w-full rounded-md ",

      className
    )}
    {...props}>
    <img
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="rounded-[16px] border border-neutral-900 object-cover absolute h-full w-full inset-0 " />
    <div className="absolute  inset-0 rounded-[16px]">
      <div
        className={cn(
          "absolute inset-0 rounded-[16px]",

        )} />
      <div
        className={cn(
          "absolute inset-0 rounded-[16px]",

        )} />
    </div>
  </div>
))






MinimalCardImage.displayName = "MinimalCardImage"

const MinimalCardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg  font-semibold leading-tight text-white ", className)}
    {...props} />
))
MinimalCardTitle.displayName = "MinimalCardTitle"

const MinimalCardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-500 pb-2 px-1", className)}
    {...props} />
))
MinimalCardDescription.displayName = "MinimalCardDescription"

const MinimalCardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
MinimalCardContent.displayName = "MinimalCardContent"

const MinimalCardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props} />
))
MinimalCardFooter.displayName = "MinimalCardFooter"

export {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
  MinimalCardContent,
  MinimalCardFooter,
}

export default MinimalCard
