import { ReactNode } from "react";

interface PageShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function PageShell({
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <div className="bg-background">
      <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-10">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-text-soft sm:text-base">
            {description}
          </p>
        </header>

        {children}
      </main>
    </div>
  );
}
