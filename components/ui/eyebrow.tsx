import { cn } from "@/lib/cn";

type Variant = "pill" | "label";

const styles: Record<Variant, string> = {
  pill:
    "inline-flex items-center gap-2 rounded-full border border-brand-300/60 bg-brand-50/80 px-3 py-1 text-xs font-medium text-brand-800 backdrop-blur-md dark:border-brand-400/40 dark:bg-brand-400/10 dark:text-brand-300",
  label:
    "text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400",
};

export function Eyebrow({
  variant = "label",
  className,
  children,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn(styles[variant], className)}>{children}</div>;
}
