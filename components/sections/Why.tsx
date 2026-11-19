"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Accent, Eyebrow, Reveal, ease } from "../ui/Reveal";

const statement =
  "Doctors are not brands built on hype. They are built on trust, earned one patient at a time. We only work in healthcare, so every word, image and campaign we create respects that.";

const principles = [
  { t: "Healthcare-focused strategy", d: "We only work with doctors and clinics. We understand patient journeys, sensitivities and professional ethics." },
  { t: "Consistent brand identity", d: "One voice and one visual system — from your clinic signage to your Instagram grid." },
  { t: "Complete digital presence", d: "Search, Maps, website, social, video and reviews, working as a single connected system." },
  { t: "Transparent reporting", d: "Plain-language monthly reports on what we did, what changed and what comes next." },
  { t: "Long-term partnerships", d: "Reputation compounds. We build for years, not for a single campaign." },
];

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

export function Why() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = statement.split(" ");

  return (
    <section className="section why" id="why" aria-labelledby="why-title">
      <div className="container">
        <Reveal className="section-head">
          <Eyebrow>Why Cliniko</Eyebrow>
          <h2 id="why-title" className="h2 why__title">
            Healthcare deserves a <Accent>different kind</Accent> of marketing.
          </h2>
        </Reveal>

        <p className="why__statement" ref={ref}>
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </p>

        <div className="why__grid">
          <Reveal className="why__image">
            <Image src="/images/education.jpg" alt="Doctor explaining a spine model to a patient" fill sizes="(max-width: 900px) 92vw, 40vw" style={{ objectFit: "cover" }} />
            <p className="why__caption">Clarity builds confidence — in the consultation room and online.</p>
          </Reveal>

          <ol className="why__list">
            {principles.map((p, i) => (
              <motion.li
                key={p.t}
                className="principle"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.8, ease, delay: i * 0.05 }}
              >
                <span className="principle__n">0{i + 1}</span>
                <div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
