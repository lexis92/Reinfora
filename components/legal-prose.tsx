export function LegalProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-legal mx-auto max-w-3xl px-6 py-16 md:py-20 text-neutral-700 dark:text-neutral-300 leading-relaxed">
      {children}
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-3 space-y-4 text-[15px]">{children}</div>
    </section>
  );
}
