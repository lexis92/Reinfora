import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-brand-400 dark:text-neutral-950 dark:hover:bg-brand-300",
  secondary:
    "rounded-full border border-black/10 bg-white text-neutral-800 hover:bg-neutral-50 dark:border-white/15 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10",
  ghost:
    "text-brand-700 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "lg",
    withArrow = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    base,
    // ghost variant skips size pill styling — render inline
    variant === "ghost" ? "text-sm font-medium" : sizes[size],
    variants[variant],
    className,
  );

  const inner = (
    <>
      <span className={variant === "ghost" ? "" : "relative z-10"}>{children}</span>
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {inner}
    </button>
  );
}
