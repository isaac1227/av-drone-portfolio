"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-principal-blanco-sin-fondo.png"
              alt="NATT Aerial Studio Logo"
              width={40}
              height={40}
              className="rounded-full object-contain ring-1 ring-white/10"
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-[0.72rem] uppercase tracking-[0.38em] text-white/55">
                NATT
              </span>
              <span className="text-sm font-medium tracking-[0.22em] text-foreground/90">
                Aerial Studio
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.22em] text-text-subtle transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground transition-all hover:-translate-y-0.5 hover:bg-[#49b8ff]"
            >
              Solicitar briefing
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir o cerrar menú de navegación"
            aria-expanded={isOpen}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-foreground transition hover:bg-white/10 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="space-y-2 border-t border-white/10 py-5 lg:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-text-subtle transition hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground transition-all hover:bg-[#49b8ff]"
            >
              Solicitar briefing
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
