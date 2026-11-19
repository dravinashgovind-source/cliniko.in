"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Accent, Eyebrow, Reveal } from "../ui/Reveal";
import { ArrowRight, ArrowUpRight } from "../ui/Icons";
import { CaseStudy } from "./CaseStudy";

type Project = {
  sector: string;
  title: string;
  image: string;
  alt: string;
  services: string[];
  scope: string;
  site: string;
  layout: "wide" | "narrow";
  focus?: string;
};

const projects: Project[] = [
  {
    sector: "Physiotherapy",
    title: "Physiotherapy clinic",
    image: "/images/physio.jpg",
    alt: "Physiotherapist guiding a patient's leg stretch in a modern clinic",
    services: ["Website", "Branding", "Content"],
    scope: "Brand identity, booking-first website and a monthly exercise-reel series.",
    site: "Move better.\nRecover faster.",
    layout: "wide",
    focus: "50% 30%",
  },
  {
    sector: "Dermatology",
    title: "Dermatologist personal brand",
    image: "/images/derma.jpg",
    alt: "Patient receiving a gentle skin treatment",
    services: ["Social media", "Video", "SEO"],
    scope: "Personal brand positioning, educational skin-care reels and search content.",
    site: "Skin science,\nexplained simply.",
    layout: "narrow",
    focus: "50% 35%",
  },
  {
    sector: "Dental",
    title: "Dental clinic",
    image: "/images/dental.jpg",
    alt: "Modern dental treatment room with a blue chair",
    services: ["Website", "Google Business"],
    scope: "Conversion-focused website, Google Business Profile and review workflow.",
    site: "Calm, modern\ndentistry.",
    layout: "narrow",
    focus: "50% 60%",
  },
  {
    sector: "Multi-specialty",
    title: "Multi-specialty clinic",
    image: "/images/lobby.jpg",
    alt: "Warm, premium multi-specialty clinic reception",
    services: ["Brand system", "Website", "Local SEO"],
    scope: "One brand system across departments, doctor profiles and location pages.",
    site: "Every specialist.\nOne trusted name.",
    layout: "wide",
    focus: "50% 55%",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <Reveal className={`project project--${p.layout}`} delay={(i % 2) * 0.08}>
      <article ref={ref} className="project__card" tabIndex={0}>
        <motion.div className="project__media" style={{ y }}>
          <Image src={p.image} alt={p.alt} fill sizes="(max-width: 900px) 92vw, 58vw" style={{ objectFit: "cover", objectPosition: p.focus }} />
        </motion.div>
        <div className="project__shade" />

        <div className="project__preview" aria-hidden="true">
          <div className="ui-browser ui-browser--light"><span /><span /><span /></div>
          <div className="project__preview-body">
            <p>{p.site.split("\n").map((l) => <span key={l}>{l}<br /></span>)}</p>
            <span className="ui-chip ui-chip--blue">Book a visit</span>
          </div>
        </div>

        <div className="project__info">
          <p className="project__sector">{p.sector}</p>
          <h3 className="project__title">{p.title}</h3>
          <p className="project__scope">{p.scope}</p>
          <ul className="project__tags">
            {p.services.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <span className="project__go"><ArrowUpRight /></span>
      </article>
    </Reveal>
  );
}

export function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="work__head">
          <Reveal>
            <Eyebrow>Our work</Eyebrow>
            <h2 id="work-title" className="h2">Real clinics.<br /><Accent>Real growth.</Accent></h2>
          </Reveal>
          <Reveal className="work__intro" delay={0.1}>
            <p className="lead">
              From sleek websites to cinematic video, we help healthcare professionals stand out —
              with work that looks as considered as the care they give.
            </p>
            <a href="#contact" className="btn btn--outline">Discuss your project <ArrowRight /></a>
          </Reveal>
        </div>

        <CaseStudy />

        <Reveal className="work__more">
          <p className="eyebrow">Concept directions</p>
          <p className="work__more-text">How we&rsquo;d bring the same craft to other specialties.</p>
        </Reveal>

        <div className="work__grid">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
