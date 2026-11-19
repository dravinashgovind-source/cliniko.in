"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  GoogleMark, InstagramMark, MapsMark, ReviewMark, WebMark, YouTubeMark,
} from "../ui/Icons";
import { Accent, Reveal, ease } from "../ui/Reveal";

const platforms = [
  {
    name: "Google Search", Mark: GoogleMark,
    line: "When a patient searches your name or condition, you appear — with authority.",
    does: ["Knowledge panel & profile", "Search-ready doctor bio", "Condition-led content"],
  },
  {
    name: "Google Maps", Mark: MapsMark,
    line: "Be the clinic that shows up first when someone nearby needs care.",
    does: ["Business Profile optimisation", "Local ranking signals", "Photos, posts & Q&A"],
  },
  {
    name: "Website", Mark: WebMark,
    line: "A calm, fast, mobile-first home that turns visitors into appointments.",
    does: ["Premium clinic website", "Online booking", "Local SEO structure"],
  },
  {
    name: "Instagram", Mark: InstagramMark,
    line: "Educational reels that make your expertise easy to understand — and share.",
    does: ["Content strategy", "Reels production", "Consistent visual identity"],
  },
  {
    name: "YouTube", Mark: YouTubeMark,
    line: "Long-form answers that patients watch before they decide where to go.",
    does: ["Doctor-led explainers", "Channel branding", "Search-optimised titles"],
  },
  {
    name: "Patient Reviews", Mark: ReviewMark,
    line: "A steady, genuine reputation — collected thoughtfully, answered professionally.",
    does: ["Ethical review requests", "Response guidelines", "Reputation monitoring"],
  },
];

const CYCLE = 5000;

export function Ecosystem() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });

  useEffect(() => {
    if (!auto || !inView) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % platforms.length), CYCLE);
    return () => clearTimeout(t);
  }, [active, auto, inView]);

  const p = platforms[active];

  return (
    <section className="ecosystem" aria-labelledby="eco-title">
      <div className="container">
        <Reveal className="eco" ref={ref}>
          <h2 id="eco-title" className="eco__title">
            One connected presence. <Accent>Every patient touchpoint.</Accent>
          </h2>

          <div className="eco__tabs" role="tablist" aria-label="Platforms">
            {platforms.map(({ name, Mark }, i) => (
              <button
                key={name}
                role="tab"
                aria-selected={i === active}
                className={`eco__tab${i === active ? " is-active" : ""}`}
                onClick={() => { setActive(i); setAuto(false); }}
              >
                <span className="eco__mark"><Mark /></span>
                <span className="eco__name">{name}</span>
                <span className="eco__bar">
                  {i === active && auto && inView && (
                    <motion.span
                      key={active}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: CYCLE / 1000, ease: "linear" }}
                    />
                  )}
                  {i === active && !auto && <span style={{ transform: "scaleX(1)" }} />}
                </span>
              </button>
            ))}
          </div>

          <div className="eco__detail" role="tabpanel" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.name}
                className="eco__detail-inner"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease }}
              >
                <p className="eco__line">{p.line}</p>
                <ul className="eco__does">
                  {p.does.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
