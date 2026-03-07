"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur supports-[padding:env(safe-area-inset-top)]:pt-[env(safe-area-inset-top)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="text-lg font-bold sm:text-xl min-h-[44px] min-w-[44px] flex items-center -ml-2 pl-2"
        >
          GeekRoom JEMTEC
        </Link>

        {/* Desktop nav - hidden on mobile */}
        <ul className="hidden md:flex md:items-center md:gap-5 lg:gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-foreground/80 transition hover:text-foreground py-2 block min-h-[44px] flex items-center"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-lg -mr-2 active:bg-foreground/5 [-webkit-tap-highlight-color:transparent]"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground rounded-full transition-transform ${
              menuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground rounded-full my-1.5 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground rounded-full transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile nav drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
          menuOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col border-t border-foreground/10 px-4 pb-4 pt-2">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-4 text-base font-medium text-foreground/90 hover:text-foreground min-h-[48px] flex items-center active:bg-foreground/5 -mx-2 px-2 rounded-lg [-webkit-tap-highlight-color:transparent]"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
