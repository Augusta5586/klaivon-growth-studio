import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  Mail,
  Phone,
  Search,
  Sparkles,
  Video,
  Palette,
  BarChart3,
  Users,
  Compass,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  Shirt,
  HeartPulse,
  Briefcase,
  Gem,
  PlayCircle,
  Star,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { FlyingBirds, BirdSvg } from "@/components/site/Birds";
import socialCollage from "@/assets/social-collage.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Klaivon Agency — Marketing Built for the Modern Internet" },
      {
        name: "description",
        content:
          "Klaivon Agency is a Gen-Z digital marketing agency in Kolkata, India helping brands grow through content, social media, performance marketing, influencer campaigns, and AI-era SEO/AEO/GEO optimization.",
      },
      { property: "og:title", content: "Klaivon Agency — Marketing Built for the Modern Internet" },
      {
        property: "og:description",
        content:
          "Gen-Z digital marketing agency helping businesses grow through content, social, performance & AI-era search optimization.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/918420716523";
const wa = (plan: string) =>
  `${WHATSAPP}?text=${encodeURIComponent(`Hi KLAIVON Team, I would like to know more about the ${plan} package.`)}`;

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <FlyingBirds />
      <Nav />
      <main>
        <Hero />
        <About />
        <ModernMarketing />
        <Results />
        <Services />
        <Industries />
        <Plans />
        <Workflow />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* soft background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, color-mix(in oklab, var(--sage) 55%, transparent), transparent 60%), radial-gradient(50% 40% at 90% 10%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 60%)",
        }}
      />
      <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--olive)]/10 px-3.5 py-1.5 text-xs font-medium text-[var(--olive-deep)] ring-1 ring-[var(--olive)]/15"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--maroon)]" />
            Marketing Built for the Modern Internet
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 text-4xl leading-[1.05] text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            Digital marketing agency for{" "}
            <span className="relative italic text-[var(--olive-deep)]">
              businesses
              <BirdSvg className="absolute -top-6 right-0 h-5 w-10 text-[var(--maroon)]" />
            </span>{" "}
            ready to grow online.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            KLAIVON Agency helps businesses increase visibility, engagement, authority, and customer
            acquisition through strategic content creation, social media management, performance
            marketing, influencer campaigns, and AI-era search optimization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--olive)] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[var(--olive)]/20 transition hover:bg-[var(--olive-deep)]"
            >
              Book a Free Consultation
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--olive)]/20 bg-white px-6 py-3.5 text-sm font-medium text-[var(--olive-deep)] transition hover:border-[var(--olive)]/40"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span>Trusted by ambitious brands across India & beyond</span>
          </div>
        </div>

        <div className="relative">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <SectionEyebrow>About Klaivon</SectionEyebrow>
            <h2 className="mt-3 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              Marketing built for the <em className="text-[var(--maroon)]">modern internet</em>.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Klaivon is a Gen-Z marketing agency based in Kolkata, India, helping businesses adapt
                to the rapidly evolving digital landscape.
              </p>
              <p>
                The way people discover brands is changing. Search engines are no longer the only
                gateway to visibility. Consumers now find businesses through social media, AI
                assistants, online communities, influencers, and recommendation engines.
              </p>
              <p>
                Our team combines creativity, data, audience psychology, and modern digital
                strategies to help brands stay ahead of changing trends and consumer behavior.
              </p>
              <p>
                While we proudly operate from India, our vision extends beyond borders — helping
                ambitious businesses achieve national growth and global recognition.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <WorldMap />
        </Reveal>
      </div>
    </section>
  );
}

function WorldMap() {
  const nodes = [
    { x: 20, y: 40, label: "USA" },
    { x: 45, y: 35, label: "UK" },
    { x: 52, y: 42, label: "UAE" },
    { x: 68, y: 55, label: "India", primary: true },
    { x: 82, y: 50, label: "Singapore" },
    { x: 88, y: 68, label: "Australia" },
  ];
  const india = nodes.find((n) => n.primary)!;
  return (
    <div className="relative aspect-[5/4] w-full rounded-3xl bg-gradient-to-br from-[var(--sage-soft)] to-white p-8 ring-1 ring-black/5 shadow-xl">
      <svg viewBox="0 0 100 80" className="h-full w-full">
        {/* dotted world silhouette */}
        {Array.from({ length: 240 }).map((_, i) => {
          const x = (i * 37) % 100;
          const y = ((i * 13) % 60) + 8;
          return <circle key={i} cx={x} cy={y} r={0.4} fill="var(--olive)" opacity={0.18} />;
        })}
        {nodes.map((n) =>
          n.primary ? null : (
            <line
              key={n.label}
              x1={n.x}
              y1={n.y}
              x2={india.x}
              y2={india.y}
              stroke="var(--maroon)"
              strokeWidth={0.3}
              strokeDasharray="1 1"
              opacity={0.6}
            />
          )
        )}
        {nodes.map((n) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.primary ? 1.6 : 1}
              fill={n.primary ? "var(--maroon)" : "var(--olive)"}
            />
            {n.primary && (
              <circle
                cx={n.x}
                cy={n.y}
                r={3.5}
                fill="none"
                stroke="var(--maroon)"
                strokeWidth={0.25}
                opacity={0.6}
              >
                <animate attributeName="r" from="1.6" to="5" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
            <text
              x={n.x}
              y={n.y - 2.5}
              fontSize={2}
              textAnchor="middle"
              fill="var(--ink)"
              fontWeight={n.primary ? 700 : 500}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 shadow-md backdrop-blur ring-1 ring-black/5">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Based in</div>
        <div className="text-sm font-semibold text-[var(--ink)]">Kolkata, India</div>
        <div className="text-[11px] text-muted-foreground">Serving brands worldwide</div>
      </div>
    </div>
  );
}

/* ---------------- MODERN MARKETING ---------------- */
function ModernMarketing() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <SectionEyebrow>Why It Matters</SectionEyebrow>
            <h2 className="mt-3 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              Why modern businesses need modern marketing.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Consumers discover brands through Instagram, Google, ChatGPT, Gemini, Perplexity,
                YouTube, influencer recommendations, and online reviews.
              </p>
              <p>
                Without a strategic digital presence, businesses risk losing potential customers to
                competitors who are easier to find, trust, and engage with.
              </p>
              <p>
                Klaivon helps businesses build visibility, authority, and audience trust through
                data-backed content and growth systems.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Be discovered on Google, ChatGPT, Gemini & Perplexity",
                "Build trust through consistent, high-quality content",
                "Turn attention into measurable business growth",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-[var(--olive)] text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[var(--ink)]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-[var(--sage-soft)] p-4 shadow-xl ring-1 ring-black/5">
              <img
                src={socialCollage.url}
                alt="Social media platforms driving brand discovery"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
            {/* floating platform pills */}
            {[
              { text: "+240% Reach", top: "-4%", left: "-6%", color: "var(--maroon)" },
              { text: "New Follower", top: "8%", right: "-8%", color: "var(--olive)" },
              { text: "★ 4.9 Rating", bottom: "12%", left: "-8%", color: "var(--gold)" },
              { text: "🔥 Trending Reel", bottom: "-4%", right: "-4%", color: "var(--olive-deep)" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{ y: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute z-10 rounded-2xl bg-white px-3.5 py-2 text-xs font-semibold shadow-lg ring-1 ring-black/5"
                style={{
                  top: p.top,
                  left: p.left,
                  right: p.right,
                  bottom: p.bottom,
                  color: p.color,
                }}
              >
                {p.text}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- RESULTS ---------------- */
function Results() {
  const stats: { n: number; suffix: string; label: string; sub: string }[] = [
    { n: 3, suffix: "×", label: "Increase in Reach & Visibility", sub: "up to" },
    { n: 87, suffix: "%", label: "Improved Audience Engagement", sub: "avg" },
    { n: 92, suffix: "%", label: "Stronger Brand Recall", sub: "reported" },
    { n: 4, suffix: "×", label: "Better Content Performance", sub: "avg lift" },
    { n: 60, suffix: "%", label: "Consistent Social Growth", sub: "MoM" },
    { n: 5, suffix: "×", label: "Improved Search Discoverability", sub: "SEO+AEO" },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow center>Results</SectionEyebrow>
          <h2 className="mt-3 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Real growth. <em className="text-[var(--maroon)]">Measurable impact.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Numbers that reflect the kind of outcomes we build for the brands we work with.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.sub}
                </div>
                <div className="mt-2 text-5xl font-semibold text-[var(--olive-deep)]">
                  <Counter to={s.n} />
                  <span className="text-[var(--maroon)]">{s.suffix}</span>
                </div>
                <div className="mt-3 text-sm font-medium text-[var(--ink)]">{s.label}</div>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[var(--sage)] opacity-0 blur-2xl transition group-hover:opacity-60" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    {
      icon: Search,
      title: "SEO + AEO + GEO + EEAT Optimization",
      body:
        "Traditional SEO isn't enough. We optimize for Search Engines, Answer Engines, Generative Engines, and Experience/Expertise/Authority/Trust — so you're discoverable across Google, ChatGPT, Gemini, Perplexity & more.",
      bullets: [
        "Search Engine Optimization",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "E-E-A-T Signals",
      ],
    },
    {
      icon: Sparkles,
      title: "Social Media Management",
      body:
        "Show up consistently with content that converts casual viewers into a loyal audience.",
      bullets: [
        "Content Planning & Calendar",
        "Caption Writing",
        "Profile Optimization",
        "Reporting & Community Engagement",
      ],
    },
    {
      icon: Video,
      title: "Video Editing & Content Production",
      body:
        "Scroll-stopping reels and premium video content optimized for every platform.",
      bullets: ["Reels Editing", "Promotional Videos", "Motion Graphics", "Platform Optimization"],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      body:
        "On-brand visuals that make your feed instantly recognizable and worth following.",
      bullets: ["Carousels & Creatives", "Banners & Thumbnails", "Cover Designs", "Promotional Graphics"],
    },
    {
      icon: BarChart3,
      title: "Performance Marketing",
      body:
        "Meta & Google Ads engineered around your funnel — not vanity metrics.",
      bullets: ["Meta Ads", "Google Ads", "Audience Research", "Campaign Monitoring"],
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      body:
        "Right creators, right audience, right message — end-to-end coordination.",
      bullets: ["Influencer Research", "Outreach", "Campaign Coordination", "Reporting"],
    },
    {
      icon: Compass,
      title: "Competitor Research & Strategy",
      body:
        "A clear roadmap for growth, informed by data — not guesswork.",
      bullets: ["SWOT & Competitor Analysis", "Trend Research", "Strategic Recommendations", "Growth Roadmaps"],
    },
  ];

  return (
    <section id="services" className="relative bg-[var(--sage-soft)] py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow center>Services</SectionEyebrow>
          <h2 className="mt-3 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Everything you need to grow, under <em className="text-[var(--maroon)]">one roof</em>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A full-stack marketing team — strategy, content, media, and design — working as an
            extension of yours.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  s,
}: {
  s: { icon: typeof Search; title: string; body: string; bullets: string[] };
}) {
  const Icon = s.icon;
  return (
    <div className="group relative flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[var(--olive)]/10 text-[var(--olive-deep)] transition group-hover:bg-[var(--olive)] group-hover:text-white">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-semibold text-[var(--ink)]">{s.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
      <ul className="mt-5 space-y-2 border-t border-border pt-5">
        {s.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm text-[var(--ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--maroon)]" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function Industries() {
  const items = [
    { icon: Building2, name: "Real Estate", tag: "Listings that sell" },
    { icon: GraduationCap, name: "Education & EdTech", tag: "Admissions & authority" },
    { icon: UtensilsCrossed, name: "Restaurants & Hospitality", tag: "Full tables, full feeds" },
    { icon: Shirt, name: "Fashion & Lifestyle", tag: "Cult-brand storytelling" },
    { icon: HeartPulse, name: "Healthcare & Wellness", tag: "Trust-first content" },
    { icon: Briefcase, name: "Corporate & Professional", tag: "Authority marketing" },
    { icon: Gem, name: "Luxury & Premium Brands", tag: "Elevated presence" },
  ];
  return (
    <section id="industries" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow center>Industries</SectionEyebrow>
          <h2 className="mt-3 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Industries we <em className="text-[var(--maroon)]">specialize</em> in.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--olive)]/30 hover:shadow-xl">
                <div className="mb-6 grid h-11 w-11 place-items-center rounded-xl bg-[var(--maroon)]/10 text-[var(--maroon)]">
                  <it.icon size={20} />
                </div>
                <div className="text-lg font-semibold text-[var(--ink)]">{it.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{it.tag}</div>
                <ArrowRight
                  size={16}
                  className="mt-6 text-[var(--olive)] transition group-hover:translate-x-1"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PLANS ---------------- */
function Plans() {
  const plans = [
    {
      name: "Basic",
      tagline: "Get your presence right.",
      price: "Starter",
      features: [
        "12 static posts / month",
        "8 reels / month (edited)",
        "Content calendar",
        "Caption writing",
        "Monthly reporting",
      ],
    },
    {
      name: "Professional",
      tagline: "Most popular — for growing brands.",
      price: "Growth",
      popular: true,
      features: [
        "16 posts + 12 reels / month",
        "Full content strategy",
        "Community management",
        "Profile optimization (SEO/AEO)",
        "Bi-weekly reporting & strategy calls",
        "Trend & competitor research",
      ],
    },
    {
      name: "Premium Growth",
      tagline: "Scale reach, authority & sales.",
      price: "Scale",
      features: [
        "Everything in Professional",
        "20+ posts + 16 reels / month",
        "Motion graphics & premium edits",
        "SEO + AEO + GEO content pillars",
        "Ads-ready creative direction",
        "Weekly performance reviews",
      ],
    },
    {
      name: "Performance Marketing",
      tagline: "Turn ad spend into revenue.",
      price: "Ads",
      features: [
        "Meta & Google Ads management",
        "Audience research & funnels",
        "Creative direction for ads",
        "Weekly campaign optimization",
        "ROAS-focused reporting",
      ],
    },
    {
      name: "Influencer Marketing",
      tagline: "Right creators, real results.",
      price: "Reach",
      features: [
        "Curated influencer research",
        "Outreach & negotiation",
        "Campaign coordination",
        "Content approvals",
        "Performance reporting",
      ],
    },
    {
      name: "Custom",
      tagline: "Built around your goals.",
      price: "Bespoke",
      features: [
        "Fully tailored scope",
        "Multi-channel strategy",
        "Dedicated growth lead",
        "Priority support",
        "Custom KPI framework",
      ],
    },
  ];

  return (
    <section id="plans" className="relative bg-[var(--sage-soft)] py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow center>Plans</SectionEyebrow>
          <h2 className="mt-3 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Simple plans, <em className="text-[var(--maroon)]">serious growth.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every plan is customizable. Talk to us — we'll recommend what actually fits your brand.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 shadow-sm ring-1 transition hover:-translate-y-1 hover:shadow-xl ${
                  p.popular
                    ? "bg-[var(--olive-deep)] text-white ring-[var(--gold)]/40"
                    : "bg-white text-[var(--ink)] ring-black/5"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 right-6 rounded-full bg-[var(--gold)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--olive-deep)] shadow">
                    Most Popular
                  </div>
                )}
                <div
                  className={`text-[11px] uppercase tracking-widest ${
                    p.popular ? "text-[var(--gold)]" : "text-muted-foreground"
                  }`}
                >
                  {p.price}
                </div>
                <div className="mt-1 text-2xl font-semibold">{p.name}</div>
                <div
                  className={`mt-1 text-sm ${
                    p.popular ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {p.tagline}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={p.popular ? "text-[var(--gold)]" : "text-[var(--olive)]"}
                      />
                      <span className={p.popular ? "text-white/85" : "text-[var(--ink)]"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(p.name)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${
                    p.popular
                      ? "bg-[var(--gold)] text-[var(--olive-deep)] hover:brightness-95"
                      : "bg-[var(--olive)] text-white hover:bg-[var(--olive-deep)]"
                  }`}
                >
                  <MessageCircle size={16} />
                  WhatsApp Inquiry
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORKFLOW ---------------- */
function Workflow() {
  const steps = [
    { n: "01", t: "Discovery Call", d: "Understand your brand, goals & audience." },
    { n: "02", t: "Strategy Planning", d: "Blueprint for content, channels & KPIs." },
    { n: "03", t: "Content Calendar", d: "Structured monthly plan, aligned to goals." },
    { n: "04", t: "Client Approval", d: "You review; we refine until it's right." },
    { n: "05", t: "Content Creation", d: "Design, video, copy — production-ready." },
    { n: "06", t: "Publishing", d: "Cross-platform, optimized per channel." },
    { n: "07", t: "Reporting & Optimization", d: "Data in → smarter decisions out." },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow center>How We Work</SectionEyebrow>
          <h2 className="mt-3 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            A clean, transparent <em className="text-[var(--maroon)]">workflow</em>.
          </h2>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div
                  className={`relative grid gap-6 md:grid-cols-2 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div className="relative pl-16 md:pl-0">
                    <div className="absolute left-0 top-2 grid h-12 w-12 place-items-center rounded-full bg-[var(--olive)] text-sm font-semibold text-white shadow-lg ring-4 ring-white md:left-1/2 md:-translate-x-1/2">
                      {s.n}
                    </div>
                    <div
                      className={`rounded-3xl border border-border bg-white p-6 shadow-sm md:${
                        i % 2 === 0 ? "mr-16 text-right" : "ml-16"
                      }`}
                    >
                      <div className="text-lg font-semibold text-[var(--ink)]">{s.t}</div>
                      <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Where is Klaivon Agency based?",
      a: "We are based in Kolkata, India, and work with brands across India and internationally.",
    },
    {
      q: "What kinds of businesses do you work with?",
      a: "Real estate, education & EdTech, restaurants & hospitality, fashion & lifestyle, healthcare & wellness, corporate & professional services, and luxury & premium brands.",
    },
    {
      q: "How is Klaivon different from other agencies?",
      a: "We're a Gen-Z team that treats AI-era search (AEO/GEO), social, and content as one system — not separate channels. Every deliverable ladders back to measurable business growth.",
    },
    {
      q: "Do you handle content creation end-to-end?",
      a: "Yes. Strategy, calendar, design, video editing, publishing, and reporting are all handled in-house so you get consistency and speed.",
    },
    {
      q: "What is AEO / GEO optimization?",
      a: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are strategies that make your brand discoverable inside AI assistants like ChatGPT, Gemini, and Perplexity — where an increasing share of buyer research now happens.",
    },
    {
      q: "How do I get started?",
      a: "Book a free consultation or WhatsApp us. We'll audit your presence and recommend the right starting point — no obligation.",
    },
    {
      q: "Do you work with international clients?",
      a: "Absolutely. Our operating base is India, but we work with businesses globally and offer high-quality marketing at accessible price points.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-[var(--sage-soft)] py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-3 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Answers to the things brands <em className="text-[var(--maroon)]">actually ask</em>.
          </h2>
          <p className="mt-6 text-sm text-muted-foreground">
            Can't find your question? WhatsApp us — we're happy to help.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--olive)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--olive-deep)]"
          >
            <MessageCircle size={16} /> Ask on WhatsApp
          </a>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] font-medium text-[var(--ink)]">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[var(--olive)] transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--olive-deep)] px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-24">
          <div
            aria-hidden
            className="absolute inset-0 -z-0 opacity-40"
            style={{
              background:
                "radial-gradient(50% 60% at 20% 20%, color-mix(in oklab, var(--gold) 40%, transparent), transparent 60%), radial-gradient(40% 50% at 80% 90%, color-mix(in oklab, var(--maroon) 45%, transparent), transparent 60%)",
            }}
          />
          <div className="relative">
            <BirdSvg className="mx-auto mb-6 h-6 w-14 text-[var(--gold)]" />
            <h2 className="mx-auto max-w-3xl text-4xl leading-tight md:text-6xl">
              Ready to grow your <em className="text-[var(--gold)]">brand?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75 md:text-lg">
              Let's build a marketing strategy that turns visibility into real business growth.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-[var(--olive-deep)] transition hover:brightness-95"
              >
                <PlayCircle size={16} /> Book Free Consultation
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href="mailto:klaivon.agency@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                <Mail size={16} /> Mail Us
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <Phone size={14} /> +91 84207 16523
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail size={14} /> klaivon.agency@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */
function SectionEyebrow({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-[var(--maroon)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--maroon)] ring-1 ring-[var(--maroon)]/15 ${
        center ? "" : ""
      }`}
    >
      <span className="h-1 w-1 rounded-full bg-[var(--maroon)]" />
      {children}
    </div>
  );
}
