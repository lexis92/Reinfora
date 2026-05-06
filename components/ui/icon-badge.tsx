import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { box: string; icon: string }> = {
  sm: { box: "h-9 w-9 rounded-xl", icon: "h-4 w-4" },
  md: { box: "h-10 w-10 rounded-xl", icon: "h-5 w-5" },
  lg: { box: "h-12 w-12 rounded-2xl", icon: "h-6 w-6" },
};

export function IconBadge({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: Size;
  className?: string;
}) {
  const s = sizes[size];
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300",
        s.box,
        className,
      )}
    >
      <Icon className={s.icon} />
    </div>
  );
}
