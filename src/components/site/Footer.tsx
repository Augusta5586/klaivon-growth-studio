import { Mail, Phone, MessageCircle } from "lucide-react";

const Instagram = (p: { size?: number }) => (
  <svg width={p.size ?? 18} height={p.size ?? 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const Linkedin = (p: { size?: number }) => (
  <svg width={p.size ?? 18} height={p.size ?? 18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.94 1.83-1.93 3.77-1.93 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z" />
  </svg>
);
const Youtube = (p: { size?: number }) => (
  <svg width={p.size ?? 18} height={p.size ?? 18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C17 3.6 12 3.6 12 3.6s-5 0-8 .3c-.4.1-1.3.1-2.1 1C1.2 5.6 1 7.2 1 7.2S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s5 0 8-.3c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 14.6V8.5l6.4 3.1z" />
  </svg>
);
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--olive-deep)] text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo className="h-8" chipClassName="bg-white/5 ring-1 ring-white/10" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Marketing Built for the Modern Internet. A Gen-Z agency helping brands grow through
              content, social, AI-era search & performance marketing.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 transition hover:bg-[var(--maroon)] hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-[var(--gold)]">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {["About", "Services", "Industries", "Plans", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-[var(--gold)]">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone size={15} /> +91 84207 16523
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} /> klaivon.agency@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={15} /> Kolkata, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} KLAIVON AGENCY. All rights reserved.</div>
          <div>Made with intention in Kolkata, India.</div>
        </div>
      </div>
    </footer>
  );
}
