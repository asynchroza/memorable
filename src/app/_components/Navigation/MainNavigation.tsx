import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNavigation({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard/reviews"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Reviews
      </Link>
      <Link
        href="/dashboard/places"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Places
      </Link>
    </nav>
  )
}