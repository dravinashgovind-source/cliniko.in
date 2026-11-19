"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRight, Check, Pin } from "../ui/Icons";

/**
 * Featured live work: Govind's Advanced Pain Management & Physiotherapy Centre.
 * Every claim here is visible on the live site / app — keep it that way.
 * Screenshots live in /public/images/work (re-capture when the site changes).
 */
const client = {
  name: "Govind’s Advanced Pain Management & Physiotherapy Centre",
  short: "Govind’s Physiotherapy",
  place: "Kondhwa, Pune",
  sector: "Physiotherapy & pain management",
};

const website = {
  url: "https://dravinashgovind.com",
  label: "dravinashgovind.com",
  features: [
    "Interactive “Where does it hurt?” conditions guide",
    "Services from spine care to neuro rehab",
    "Doctor profile, Google reviews and booking",
    "Built mobile-first for local search",
  ],
};

const app = {
  url: "https://dravinashgovind.com/app",
  label: "dravinashgovind.com/app",
  features: [
    "Installs to the home screen — no app store",
    "Book on WhatsApp in seconds",
    "22 conditions explained, tap by tap",
    "Patient video stories, reviews, call & directions",
  ],
};

function BrowserScroll() {
  return (
    <div className="cs-browser">
      <div className="cs-browser__bar">
        <span className="cs-browser__dots"><i /><i /><i /></span>
        <span className="cs-browser__url">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
          {website.label}
        </span>
      </div>
      <div className="cs-browser__view">
        <div className="cs-browser__page">
          <Image
            src="/images/work/govinds-site-full.jpg"
            alt="The Govind’s Physiotherapy website, scrolling from the hero through services and conditions"
            width={1200}
            height={6000}
            sizes="(max-width: 960px) 92vw, 760px"
          />
        </div>
        <span className="cs-browser__hint" aria-hidden="true">Hover to scroll</span>
      </div>
    </div>
  );
}

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`cs-phone ${className}`}>
      <div className="cs-phone__screen">
        <Image src={src} alt={alt} fill sizes="(max-width: 960px) 40vw, 260px" style={{ objectFit: "cover", objectPosition: "top" }} />
      </div>
    </div>
  );
}

function AppStage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ySide = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const yMid = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div ref={ref} className="cs-app__stage">
      <div className="cs-app__glow" aria-hidden="true" />
      <motion.div className="cs-app__col cs-app__col--left" style={{ y: ySide }}>
        <Phone src="/images/work/govinds-app-conditions.jpg" alt="App screen: tap a condition to see where it’s felt" />
      </motion.div>
      <motion.div className="cs-app__col cs-app__col--mid" style={{ y: yMid }}>
        <Phone src="/images/work/govinds-app-home.jpg" alt="App home screen: Move Better. Live Better. with Book Appointment" className="cs-phone--front" />
      </motion.div>
      <motion.div className="cs-app__col cs-app__col--right" style={{ y: ySide }}>
        <Phone src="/images/work/govinds-app-stories.jpg" alt="App screen: patient video stories and Google reviews" />
      </motion.div>
    </div>
  );
}

export function CaseStudy() {
  return (
    <article className="cs" aria-labelledby="cs-title">
      <Reveal className="cs__head">
        <div className="cs__badge"><span className="cs__live" /> Live client work</div>
        <h3 id="cs-title" className="cs__client">{client.name}</h3>
        <p className="cs__meta"><Pin width={14} height={14} /> {client.place} <span>·</span> {client.sector}</p>
      </Reveal>

      {/* ---------- Website ---------- */}
      <div className="cs-row cs-row--site">
        <Reveal className="cs-copy">
          <p className="cs-copy__kicker"><span>01</span> Website</p>
          <h4 className="cs-copy__title">A clinic website patients <em className="accent">actually use.</em></h4>
          <p className="cs-copy__text">
            Assessment-led physiotherapy, explained clearly. Patients find their problem,
            see how it&rsquo;s treated and book — on any screen.
          </p>
          <ul className="cs-list">
            {website.features.map((f) => <li key={f}><Check width={14} height={14} /> {f}</li>)}
          </ul>
          <a href={website.url} target="_blank" rel="noopener noreferrer" className="cs-link">
            Visit {website.label} <ArrowUpRight width={16} height={16} />
          </a>
        </Reveal>

        <Reveal className="cs-site" delay={0.1}>
          <BrowserScroll />
          <Phone src="/images/work/govinds-site-mobile.jpg" alt="The Govind’s website on a phone" className="cs-phone--overlap" />
        </Reveal>
      </div>

      {/* ---------- App ---------- */}
      <div className="cs-row cs-row--app">
        <Reveal className="cs-app">
          <AppStage />
        </Reveal>

        <Reveal className="cs-copy cs-copy--app" delay={0.1}>
          <p className="cs-copy__kicker"><span>02</span> Patient app</p>
          <h4 className="cs-copy__title">The clinic, <em className="accent">in every pocket.</em></h4>
          <p className="cs-copy__text">
            An installable web app with its own home-screen icon. Booking, conditions,
            patient stories and directions — one tap away, without an app store.
          </p>
          <ul className="cs-list">
            {app.features.map((f) => <li key={f}><Check width={14} height={14} /> {f}</li>)}
          </ul>
          <a href={app.url} target="_blank" rel="noopener noreferrer" className="cs-link">
            Open {app.label} <ArrowUpRight width={16} height={16} />
          </a>
        </Reveal>
      </div>
    </article>
  );
}
