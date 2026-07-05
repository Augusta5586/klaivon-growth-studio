import { Instagram, Linkedin, Youtube, Mail, Phone, MessageCircle } from "lucide-react";
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
