import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    (<textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-white/10 bg-background px-4xl py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:right-1 focus-visible:ring-luke focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} />)
  );
}

export { Textarea }
