import { cn } from "@/lib/cn";

type Variant = "pill" | "compact";

const baseInput =
  "w-full appearance-none border bg-white text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-200/60 border-black/10 dark:border-white/15 dark:bg-neutral-950 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:ring-brand-400/20";

const variants: Record<Variant, string> = {
  pill: "h-14 rounded-full px-5 text-base leading-none",
  compact: "rounded-full px-4 py-3 text-sm",
};

type FieldProps = {
  label?: string;
  variant?: Variant;
  className?: string;
  textarea?: false;
} & React.InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = {
  label?: string;
  variant?: never;
  className?: string;
  textarea: true;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Field(props: FieldProps | TextareaProps) {
  if ("textarea" in props && props.textarea) {
    const { label, className, textarea: _t, ...rest } = props;
    return (
      <label className="block">
        {label && <FieldLabel>{label}</FieldLabel>}
        <textarea
          {...rest}
          className={cn(baseInput, "rounded-2xl px-4 py-3 text-sm", className)}
        />
      </label>
    );
  }

  const { label, variant = "compact", className, ...rest } = props as FieldProps;
  return (
    <label className="block">
      {label && <FieldLabel>{label}</FieldLabel>}
      <input {...rest} className={cn(baseInput, variants[variant], className)} />
    </label>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1.5 block text-xs font-medium text-neutral-700 dark:text-neutral-300">
      {children}
    </span>
  );
}
