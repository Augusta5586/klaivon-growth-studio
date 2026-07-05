import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function BirdSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 14 Q10 2 20 10 Q30 2 38 14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Small flock of maroon birds that drift across the viewport as the user scrolls. */
export function FlyingBirds() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-10vw", "110vw"]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["10vh", "60vh", "85vh"]);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-30 hidden md:block">
      <motion.div style={{ x, y }} className="text-[var(--maroon)]">
        <div className="relative">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <BirdSvg className="h-5 w-10 opacity-90" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute left-14 top-3"
          >
            <BirdSvg className="h-4 w-8 opacity-80" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute left-24 top-7"
          >
            <BirdSvg className="h-3 w-6 opacity-70" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export { BirdSvg };
