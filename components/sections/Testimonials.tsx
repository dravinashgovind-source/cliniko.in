"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../../content/site";
import { Accent, Eyebrow, Reveal, ease } from "../ui/Reveal";
import { Play } from "../ui/Icons";

/**
 * Only verified testimonials from content/site.ts are rendered.
 * Until those exist, the section shows video-story placeholders and
 * Cliniko's own promise — never invented quotes.
 */
export function Testimonials() {
  const verified = testimonials.filter((t) => t.verified);
  const [i, setI] = useState(0);
  const current = verified[i];

  return (
    <section className="section stories" aria-labelledby="stories-title">
      <div className="container stories__grid">
        <Reveal className="stories__copy">
          <Eyebrow>Doctor stories</Eyebrow>
          <h2 id="stories-title" className="h2">In their <Accent>own words.</Accent></h2>

          <figure className="quote">
            <span className="quote__mark" aria-hidden="true">&ldquo;</span>
            <AnimatePresence mode="wait">
              {current ? (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.5, ease }}>
                  <blockquote>{current.quote}</blockquote>
                  <figcaption><b>{current.name}</b> · {current.role}</figcaption>
                </motion.div>
              ) : (
                <motion.div key="promise" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <blockquote>
                    Every testimonial you read here will come from a real doctor we have worked with —
                    filmed, approved and published with their consent.
                  </blockquote>
                  <figcaption><b>The Cliniko promise</b> · No stock quotes. No invented reviews.</figcaption>
                </motion.div>
              )}
            </AnimatePresence>
          </figure>

          {verified.length > 1 && (
            <div className="quote__dots" role="tablist" aria-label="Testimonials">
              {verified.map((t, n) => (
                <button key={t.name} role="tab" aria-selected={n === i} aria-label={t.name} onClick={() => setI(n)} className={n === i ? "is-active" : ""} />
              ))}
            </div>
          )}
        </Reveal>

        <div className="stories__reels">
          {[
            { src: "/images/story-pediatrician.jpg", kind: "Pediatrics", pos: "50% 20%" },
            { src: "/images/story-cardiologist.jpg", kind: "Cardiology", pos: "50% 18%" },
          ].map((c, n) => (
            <Reveal key={c.src} className={`story story--${n}`} delay={n * 0.12}>
              <Image src={c.src} alt="" fill sizes="(max-width: 900px) 45vw, 22vw" style={{ objectFit: "cover", objectPosition: c.pos }} />
              <span className="story__shade" />
              <span className="story__play"><Play width={14} height={14} /></span>
              <span className="story__meta">
                <span className="story__kind">Video testimonial</span>
                <span className="story__label">{c.kind} · in production</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
