"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cursos", label: "Cursos Online" },
  { href: "/presenciales", label: "Cursos Presenciales" },
  { href: "/asesoria", label: "Asesoría" },
  { href: "/libros", label: "Libros" },
  { href: "https://www.youtube.com/@marcosdicesare", label: "YouTube", external: true },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt="Marcos Di Cesare"
              width={40}
              height={40}
            />
            <span className="font-serif text-xl text-brand-dark">
              Marcos Di Cesare
            </span>
          </Link>

          {/* Links desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-gray hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-gray hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/login"
              className="bg-brand-gold text-white text-sm font-semibold px-4 py-2 rounded hover:bg-brand-gold/90 transition-colors"
            >
              Iniciar Sesion
            </Link>
          </div>

          {/* Botón hamburguesa mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-dark"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="lg:hidden border-t border-brand-dark/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray hover:text-brand-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-gray hover:text-brand-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/login"
              className="bg-brand-gold text-white text-sm font-semibold px-4 py-2 rounded text-center hover:bg-brand-gold/90 transition-colors mt-2"
              onClick={() => setIsOpen(false)}
            >
              Iniciar Sesion
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}