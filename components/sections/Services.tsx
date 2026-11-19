"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Accent, Eyebrow, Reveal, ease } from "../ui/Reveal";
import { ArrowRight, Check, MapsMark, Star } from "../ui/Icons";
import { LogoMark } from "../ui/Logo";

const services = [
  {
    title: "Doctor personal branding",
    blurb: "Build a trusted name — online and offline.",
    points: ["Professional identity", "Doctor profile development", "Social media strategy", "Authority building"],
  },
  {
    title: "Google & local visibility",
    blurb: "Get found on Google Search and Maps.",
    points: ["Google Business Profile", "Local SEO", "Google Maps optimisation", "Review management"],
  },
  {
    title: "Websites that convert",
    blurb: "Turn visitors into appointments.",
    points: ["Premium clinic websites", "Appointment booking", "Mobile-first design", "Local SEO"],
  },
  {
    title: "Video & content production",
    blurb: "Show your expertise with cinematic content.",
    points: ["Doctor introduction videos", "Clinic walkthroughs", "Educational reels", "Social media content"],
  },
];

function Visual({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <>
          <Image src="/images/derm-doctor.jpg" alt="Dermatologist portrait in a bright clinic" fill sizes="(max-width: 900px) 92vw, 52vw" style={{ objectFit: "cover", objectPosition: "50% 25%" }} />
          <div className="sv-card sv-card--profile glass">
            <p className="sv-kicker">Doctor profile</p>
            <p className="sv-name">Dr. Your Name</p>
            <p className="sv-role">Consultant Dermatologist</p>
            <div className="sv-tags"><span>Identity</span><span>Story</span><span>Authority</span></div>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <Image src="/images/lobby.jpg" alt="Premium clinic reception lobby" fill sizes="(max-width: 900px) 92vw, 52vw" style={{ objectFit: "cover" }} />
          <div className="sv-card sv-card--search glass">
            <div className="sv-search">clinic near me</div>
            {[0, 1, 2].map((r) => (
              <div key={r} className={`sv-result${r === 0 ? " is-top" : ""}`}>
                <MapsMark width={16} height={16} />
                {r === 0 ? (
                  <div>
                    <p className="sv-result__name">Your Clinic</p>
                    <p className="sv-meta">5.0 <span className="stars stars--gold">{[...Array(5)].map((_, i) => <Star key={i} width={9} height={9} />)}</span> · Open now</p>
                  </div>
                ) : (
                  <div className="sv-skel-wrap">
                    <span className="sv-skel" style={{ width: 70 + r * 18 }} />
                    <span className="sv-skel sv-skel--sm" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      );
    case 2:
      return (
        <div className="sv-site">
          <div className="sv-site__chrome"><span /><span /><span /><em>yourclinic.in</em></div>
          <div className="sv-site__body">
            <div className="sv-site__nav"><span className="ui-brand"><LogoMark size={12} /> Your Clinic</span><i /><i /><i /><b>Book</b></div>
            <div className="sv-site__hero">
              <div>
                <p className="sv-site__h">Expert care,<br />closer to you.</p>
                <p className="sv-site__p">Same-week appointments with experienced specialists.</p>
                <span className="ui-chip ui-chip--blue">Book appointment</span>
              </div>
              <div className="sv-site__img"><Image src="/images/consult-room.jpg" alt="" fill sizes="300px" style={{ objectFit: "cover" }} /></div>
            </div>
            <div className="sv-site__row"><i /><i /><i /></div>
          </div>
        </div>
      );
    default:
      return (
        <>
          <Image src="/images/film-interview.jpg" alt="Doctor interview being filmed" fill sizes="(max-width: 900px) 92vw, 52vw" style={{ objectFit: "cover", objectPosition: "60% 50%" }} />
          <div className="sv-rec"><span /> REC 00:01:24</div>
          <div className="sv-card sv-card--timeline glass">
            <p className="sv-kicker">Doctor introduction film</p>
            <div className="sv-track">
              {[34, 18, 26, 12, 22].map((w, i) => <i key={i} style={{ flexGrow: w }} />)}
            </div>
          </div>
        </>
      );
  }
}

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <Eyebrow>What we do</Eyebrow>
          <h2 id="services-title" className="h2">
            From first impression to <Accent>first appointment.</Accent>
          </h2>
        </Reveal>

        <div className="services__grid">
          <Reveal className="services__list">
            {services.map((s, i) => {
              const on = i === active;
              return (
                <div key={s.title} className={`svc${on ? " is-active" : ""}`}>
                  <button
                    className="svc__head"
                    aria-expanded={on}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => window.matchMedia("(pointer: fine)").matches && setActive(i)}
                  >
                    <span className="svc__num">0{i + 1}</span>
                    <span className="svc__text">
                      <span className="svc__title">{s.title}</span>
                      <span className="svc__blurb">{s.blurb}</span>
                    </span>
                    <ArrowRight className="svc__arrow" />
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.ul
                        className="svc__points"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                      >
                        {s.points.map((p) => <li key={p}><Check width={14} height={14} /> {p}</li>)}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>

          <Reveal className="services__stage" delay={0.1}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active}
                className={`services__visual services__visual--${active}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease }}
              >
                <Visual index={active} />
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
