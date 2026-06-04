"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "INICIO" },
    { href: "/servicios", label: "SERVICIOS" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/sobre-mi", label: "SOBRE MI" },
    { href: "/contacto", label: "CONTACTO" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-[#f8f8f8]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <span className="text-[2rem] font-medium tracking-tight text-zinc-900">
              AV Drone
            </span>
          </div>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-zinc-400 transition hover:text-zinc-700"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir o cerrar menu de navegacion"
            aria-expanded={isOpen}
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 p-2 text-zinc-600 transition hover:bg-zinc-100 md:hidden"
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
          <div className="space-y-1 border-t border-zinc-200 py-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
