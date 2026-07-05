import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, TrendingUp, Play } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] md:w-[340px]">
      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, opacity: { duration: 0.6 } }}
        className="absolute -left-16 top-10 z-20 hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5 sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--maroon)]/10 text-[var(--maroon)]">
            <Heart size={16} fill="currentColor" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--ink)]">+2,481 likes</div>
            <div className="text-[10px] text-muted-foreground">this week</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.6, delay: 0.2 } }}
        className="absolute -right-14 top-32 z-20 hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5 sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gold)]/25 text-[var(--olive-deep)]">
            <TrendingUp size={16} />
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--ink)]">Reach +312%</div>
            <div className="text-[10px] text-muted-foreground">last 30 days</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }, opacity: { duration: 0.6, delay: 0.4 } }}
        className="absolute -left-10 bottom-20 z-20 hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5 sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--sage)] text-[var(--olive-deep)]">
            <Play size={14} fill="currentColor" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--ink)]">Reels 1.2M views</div>
            <div className="text-[10px] text-muted-foreground">viral this week</div>
          </div>
        </div>
      </motion.div>

      {/* Phone */}
      <div className="relative rounded-[2.5rem] bg-[var(--olive-deep)] p-3 shadow-2xl">
        <div className="rounded-[2rem] bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--maroon)] via-[var(--gold)] to-[var(--olive)]" />
              <div>
                <div className="text-xs font-semibold">@yourbrand</div>
                <div className="text-[10px] text-muted-foreground">Kolkata · India</div>
              </div>
            </div>
            <div className="text-[10px] font-medium text-[var(--maroon)]">Following</div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              ["148", "Posts"],
              ["58.2K", "Followers"],
              ["312", "Following"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-sm font-bold text-[var(--ink)]">{v}</div>
                <div className="text-[10px] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-[var(--sage-soft)] p-3">
            <div className="flex items-center justify-between text-[10px] font-medium text-[var(--olive-deep)]">
              <span>Engagement Growth</span>
              <span>+312%</span>
            </div>
            <svg viewBox="0 0 200 60" className="mt-2 h-14 w-full">
              <motion.path
                d="M0 50 L30 45 L60 38 L90 30 L120 25 L150 15 L180 8 L200 4"
                stroke="var(--olive)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M0 50 L30 45 L60 38 L90 30 L120 25 L150 15 L180 8 L200 4 L200 60 L0 60 Z"
                fill="var(--olive)"
                opacity="0.12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.12 }}
                transition={{ duration: 2 }}
              />
            </svg>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg"
                style={{
                  background: i % 3 === 0
                    ? "linear-gradient(135deg, var(--olive), var(--sage))"
                    : i % 3 === 1
                    ? "linear-gradient(135deg, var(--maroon), var(--gold))"
                    : "linear-gradient(135deg, var(--sage), var(--cream))",
                }}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-around text-muted-foreground">
            <Heart size={16} />
            <MessageCircle size={16} />
            <Send size={16} />
            <div className="text-[10px] font-medium text-[var(--olive-deep)]">2.4K</div>
          </div>
        </div>
      </div>
    </div>
  );
}
