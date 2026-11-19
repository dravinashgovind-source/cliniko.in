"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Accent, Eyebrow, Reveal } from "../ui/Reveal";
import { ArrowRight } from "../ui/Icons";

const steps = [
  {
    n: "01", title: "Discover",
    text: "We understand the doctor, the clinic and the patients you want to reach — your specialty, your city, your voice.",
    out: ["Practice audit", "Audience & competitor map", "Brand positioning"],
  },
  {
    n: "02", title: "Build",
    text: "We create the branding, website and digital identity that make your expertise visible and credible.",
    out: ["Identity & photography", "Website & booking", "Profiles across platforms"],
  },
  {
    n: "03", title: "Promote",
    text: "We improve visibility across Google and social platforms with content patients actually find useful.",
    out: ["Local SEO & Maps", "Reels & video", "Review programme"],
  },
  {
    n: "04", title: "Grow",
    text: "We track performance, report transparently and keep refining — so your presence compounds over time.",
    out: ["Monthly reporting", "Quarterly strategy", "Continuous improvement"],
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container process__grid">
        <div className="process__aside">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 id="process-title" className="h2">A clear strategy.<br /><Accent>A stronger presence.</Accent></h2>
            <p className="lead">
              No guesswork, no vanity metrics. A calm, four-stage process designed around the realities of running a practice.
            </p>
            <a href="#contact" className="btn btn--outline">Start with a discovery call <ArrowRight /></a>
          </Reveal>
        </div>

        <div className="process__steps" ref={ref}>
          <div className="process__rail" aria-hidden="true">
            <motion.span style={{ scaleY }} />
          </div>
          {steps.map((s) => (
            <motion.article
              key={s.n}
              className="step"
              initial={{ opacity: 0.35 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-35% 0px -35% 0px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="step__dot" aria-hidden="true" />
              <p className="step__num">{s.n}</p>
              <div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
                <ul className="step__out">
                  {s.out.map((o) => <li key={o}>{o}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
