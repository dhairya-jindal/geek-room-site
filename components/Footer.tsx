import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-foreground/5 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="md:min-w-0">
            <Link href="/" className="text-sm font-bold sm:text-lg">
              GeekRoom JEMTEC
            </Link>
            <p className="mt-1 hidden text-sm text-foreground/70 max-w-xs sm:block">
              Tech Society at JEMTEC — Building, learning, and innovating together.
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-1.5 text-xs text-foreground/70 transition hover:text-foreground sm:py-0 sm:text-sm sm:inline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 border-t border-foreground/10 pt-3 text-center text-[11px] text-foreground/60 sm:mt-12 sm:pt-8 sm:text-sm">
          © {new Date().getFullYear()} GeekRoom JEMTEC
        </div>
      </div>
    </footer>
  );
}
