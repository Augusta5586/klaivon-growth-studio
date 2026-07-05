import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_var(--border)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Logo className="h-7" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-[var(--ink)]/80 transition hover:text-[var(--olive-deep)]
                after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--maroon)] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[var(--olive)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[var(--olive-deep)]"
          >
            Book Free Consultation
          </a>
        </div>
        <button
          className="lg:hidden rounded-full p-2 text-[var(--ink)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--olive)] px-5 py-3 text-sm font-medium text-white"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
