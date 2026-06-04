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
    <div className="bg-zinc-50">
      <main className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
            {description}
          </p>
        </header>

        {children}
      </main>
    </div>
  );
}
