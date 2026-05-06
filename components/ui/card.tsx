import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "default" | "interactive" | "accent" | "subtle";
type Size = "sm" | "md" | "lg" | "xl";
type Radius = "2xl" | "3xl";

const base = "relative";

const variants: Record<Variant, string> = {
  default:
    "border border-black/5 bg-white dark:border-white/10 dark:bg-neutral-900/60",
  interactive:
    "border border-black/5 bg-white dark:border-white/10 dark:bg-neutral-900/60 transition hover:border-brand-300 dark:hover:border-brand-400/40",
  accent:
    "border border-brand-300/60 bg-gradient-to-br from-brand-50 to-white dark:border-brand-400/30 dark:from-brand-400/10 dark:to-neutral-900/60",
  subtle:
    "border border-black/5 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900/40",
};

const sizes: Record<Size, string> = {
  sm: "p-6",
  md: "p-8",
  lg: "p-10 md:p-12",
  xl: "p-10 md:p-16",
};

const radii: Record<Radius, string> = {
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  radius?: Radius;
  className?: string;
  children: React.ReactNode;
};

type CardAsDiv = CommonProps & {
  href?: undefined;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className" | "children">;

type CardAsLink = CommonProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Card(props: CardAsDiv | CardAsLink) {
  const {
    variant = "default",
    size = "sm",
    radius = "2xl",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, radii[radius], variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as CardAsLink;
    return (
      <Link href={href} className={cn("group block", classes)} {...linkRest}>
        {children}
      </Link>
    );
  }
  return (
    <div className={classes} {...(rest as CardAsDiv)}>
      {children}
    </div>
  );
}
