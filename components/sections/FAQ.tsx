"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../../content/site";
import { Accent, Eyebrow, Reveal, ease } from "../ui/Reveal";
import { Plus } from "../ui/Icons";

const faqs = [
  {
    q: "Why does a doctor need personal branding?",
    a: "Patients increasingly research the doctor, not just the clinic. A clear, professional personal brand — consistent photography, a well-written profile and helpful content — builds trust before the first consultation and makes referrals easier to act on.",
  },
  {
    q: "How can Cliniko improve Google visibility?",
    a: "We optimise your Google Business Profile, strengthen local SEO signals, structure your website for search, publish condition-focused content and help you build a steady flow of genuine patient reviews — all within healthcare advertising guidelines.",
  },
  {
    q: "Do you create complete clinic websites?",
    a: "Yes. We design and build fast, mobile-first clinic websites with doctor profiles, service pages, location pages and appointment booking — then keep them updated as your practice grows.",
  },
  {
    q: "Do you manage Instagram and YouTube?",
    a: "Yes. We plan the content calendar, produce reels and long-form videos, design a consistent visual identity, and handle publishing — with your review and approval at every step.",
  },
  {
    q: "Do you provide video production?",
    a: "We script, shoot and edit doctor introduction films, clinic walkthroughs, patient education videos and short-form social content, either at your clinic or in a studio setting.",
  },
  {
    q: "How does the onboarding process work?",
    a: "It starts with a discovery call and a practice audit. We then share a strategy and proposal, schedule a brand and photography session, and begin building. Most practices see their new foundations in place within the first few weeks.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <Reveal className="faq__aside">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-title" className="h2">Questions, <Accent>answered.</Accent></h2>
          <p className="lead">Can&rsquo;t find what you&rsquo;re looking for? Write to us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            {site.whatsapp && <> or WhatsApp <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">{site.whatsappDisplay}</a></>}.</p>
        </Reveal>

        <Reveal className="faq__list" delay={0.1}>
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q} className={`qa${on ? " is-open" : ""}`}>
                <h3>
                  <button aria-expanded={on} aria-controls={`qa-${i}`} id={`qa-btn-${i}`} onClick={() => setOpen(on ? null : i)}>
                    {f.q}
                    <span className="qa__icon"><Plus /></span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      id={`qa-${i}`}
                      role="region"
                      aria-labelledby={`qa-btn-${i}`}
                      className="qa__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
