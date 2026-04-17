/**
 * @CodeCatalysts/UI-System
 * Refreshed: 2026-04-17
 */
import { cn } from "@/shared/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };



