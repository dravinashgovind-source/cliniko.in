"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { Accent, Eyebrow, Reveal, ease } from "../ui/Reveal";
import { Check, MapsMark, Star } from "../ui/Icons";
import { LogoMark } from "../ui/Logo";

const pairs = [
  { id: "website", label: "Clinic website", before: "Outdated, slow, no booking", after: "Modern, mobile-first, books appointments" },
  { id: "profile", label: "Doctor profile", before: "A name and a phone number", after: "A professional personal brand" },
  { id: "google", label: "Google profile", before: "Incomplete and unmanaged", after: "Optimised and trusted locally" },
  { id: "social", label: "Social content", before: "Random, inconsistent posts", after: "A consistent content strategy" },
] as const;

type PairId = (typeof pairs)[number]["id"];

/* ---------------- BEFORE states: deliberately dated ---------------- */
function Before({ id }: { id: PairId }) {
  if (id === "website")
    return (
      <div className="old old--site">
        <div className="old__banner">WELCOME TO CITY HEALTH CARE CLINIC !!!</div>
        <div className="old__nav"><u>Home</u> | <u>About Us</u> | <u>Services</u> | <u>Gallery</u> | <u>Contact</u></div>
        <div className="old__body">
          <div className="old__img" />
          <div>
            <p className="old__h">Best Treatment Available Here</p>
            <p>We provide all types of treatment at reasonable rates. Timings 10 to 1 and 5 to 9. Sunday closed.</p>
            <p className="old__blink">Call for appointment : 98XXX XXXXX</p>
          </div>
        </div>
        <div className="old__counter">Visitors: 000417</div>
      </div>
    );
  if (id === "profile")
    return (
      <div className="old old--profile">
        <div className="old__avatar" />
        <p className="old__h">Dr. Name</p>
        <p>MBBS, MD</p>
        <p>Ph: 98XXX XXXXX</p>
        <p className="old__muted">No photo · No bio · No specialty focus</p>
      </div>
    );
  if (id === "google")
    return (
      <div className="old old--gbp">
        <p className="old__h">Clinic</p>
        <p className="old__muted">No reviews</p>
        <p className="old__muted">Hours not listed</p>
        <p className="old__muted">Add a website</p>
        <div className="old__map" />
        <p className="old__muted">Photos (1) — blurry entrance photo</p>
      </div>
    );
  return (
    <div className="old old--social">
      {["#bfbfbf", "#e9d36c", "#9fc1d9", "#d8a0a0", "#a3c49b", "#c9c9c9"].map((c, i) => (
        <div key={i} className="old__post" style={{ background: c }}>
          {["GOOD MORNING", "HAPPY DIWALI", "OFFER!!", "CAMP", "QUOTE", "WE R OPEN"][i]}
        </div>
      ))}
    </div>
  );
}

/* ---------------- AFTER states: Cliniko standard ---------------- */
function After({ id }: { id: PairId }) {
  if (id === "website")
    return (
      <div className="new new--site">
        <div className="new__nav"><span className="ui-brand"><LogoMark size={12} /> Your Clinic</span><span className="new__links"><i>Doctors</i><i>Treatments</i><i>Contact</i></span></div>
        <div className="new__hero">
          <div className="new__img"><Image src="/images/consult-room.jpg" alt="" fill sizes="400px" style={{ objectFit: "cover" }} /></div>
          <div>
            <p className="new__h">Expert care,<br /><em>closer to you.</em></p>
            <p className="new__p">Specialist consultations, same-week availability and care that listens.</p>
            <div className="new__chips"><span><Check width={12} height={12} /> Online booking</span><span><Check width={12} height={12} /> Mobile-first</span></div>
            <span className="ui-chip ui-chip--blue new__cta">Book appointment</span>
          </div>
        </div>
      </div>
    );
  if (id === "profile")
    return (
      <div className="new new--profile">
        <div className="new__portrait"><Image src="/images/derm-doctor.jpg" alt="" fill sizes="300px" style={{ objectFit: "cover", objectPosition: "50% 20%" }} /></div>
        <div>
          <p className="sv-kicker">Consultant Dermatologist</p>
          <p className="new__h">Dr. Your Name</p>
          <p className="new__p">A clear story, professional portraits and a voice patients recognise across every platform.</p>
          <div className="sv-tags"><span>Bio & story</span><span>Portraits</span><span>Media kit</span></div>
        </div>
      </div>
    );
  if (id === "google")
    return (
      <div className="new new--gbp">
        <div className="new__gbp-img"><Image src="/images/lobby.jpg" alt="" fill sizes="400px" style={{ objectFit: "cover" }} /></div>
        <div className="new__gbp-body">
          <p className="new__h"><MapsMark width={18} height={18} /> Your Clinic</p>
          <p className="sv-meta">5.0 <span className="stars stars--gold">{[...Array(5)].map((_, i) => <Star key={i} width={10} height={10} />)}</span> · Specialist clinic</p>
          <p className="new__p"><b className="open">Open</b> · Closes 9 PM · Website · Directions</p>
          <div className="new__chips"><span>Photos</span><span>Services</span><span>Q&amp;A</span><span>Posts</span></div>
        </div>
      </div>
    );
  return (
    <div className="new new--social">
      {["/images/reel-physio.jpg", "/images/education.jpg", "/images/dental.jpg", "/images/film-corridor.jpg", "/images/physio.jpg", "/images/dentist.jpg"].map((src, i) => (
        <div key={src} className="new__post">
          <Image src={src} alt="" fill sizes="160px" style={{ objectFit: "cover" }} />
          <span>{["Reel", "Explainer", "Treatment room", "Clinic tour", "Recovery", "Meet the team"][i]}</span>
        </div>
      ))}
    </div>
  );
}

export function Transformation() {
  const [tab, setTab] = useState<PairId>("website");
  // Position lives in a motion value: dragging updates the DOM directly, no React re-render per frame.
  const pos = useMotionValue(50);
  const [val, setVal] = useState(50); // mirrored for the accessible range input
  const clip = useMotionTemplate`inset(0 ${useTransform(pos, (v) => 100 - v)}% 0 0)`;
  const left = useMotionTemplate`${pos}%`;
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const clamp = (v: number) => Math.min(96, Math.max(4, v));
  const update = useCallback((clientX: number) => {
    const r = frame.current?.getBoundingClientRect();
    if (!r || !r.width) return;
    pos.set(clamp(((clientX - r.left) / r.width) * 100));
  }, [pos]);
  const endDrag = () => {
    if (!dragging.current) return;
    dragging.current = false;
    setVal(Math.round(pos.get()));
  };
  const setTo = (v: number, smooth = false) => {
    setVal(v);
    if (smooth) animate(pos, v, { duration: 0.6, ease });
    else pos.set(v);
  };

  const pair = pairs.find((p) => p.id === tab)!;

  return (
    <section className="section transform" id="transformation" aria-labelledby="transform-title">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <Eyebrow>The transformation</Eyebrow>
            <h2 id="transform-title" className="h2">Your clinic has a story.<br /><Accent>Let&rsquo;s make the world see it.</Accent></h2>
          </div>
          <p className="lead">Drag to compare the presence most practices have today with the one we build.</p>
        </Reveal>

        <Reveal className="compare-tabs" role="tablist" aria-label="Comparison">
          {pairs.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={tab === p.id}
              className={`ctab${tab === p.id ? " is-active" : ""}`}
              onClick={() => { setTab(p.id); setTo(50, true); }}
            >
              {tab === p.id && <motion.span layoutId="ctab-bg" className="ctab__bg" transition={{ duration: 0.5, ease }} />}
              <span className="ctab__label">{p.label}</span>
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={frame}
            className="compare"
            onPointerDown={(e) => {
              if (e.button !== 0) return;
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              update(e.clientX);
            }}
            onPointerMove={(e) => { if (dragging.current) update(e.clientX); }}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onLostPointerCapture={endDrag}
            onDragStart={(e) => e.preventDefault()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                className="compare__layers"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="compare__side compare__side--after"><After id={tab} /></div>
                <motion.div className="compare__side compare__side--before" style={{ clipPath: clip }}>
                  <Before id={tab} />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <span className="compare__tag compare__tag--before">Before</span>
            <span className="compare__tag compare__tag--after">With Cliniko</span>

            <motion.div className="compare__handle" style={{ left }}>
              <input
                type="range"
                min={4}
                max={96}
                value={val}
                onChange={(e) => setTo(Number(e.target.value))}
                aria-label={`Compare before and after: ${pair.label}`}
              />
              <span className="compare__knob" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m9 7-5 5 5 5M15 7l5 5-5 5" /></svg>
              </span>
            </motion.div>
          </div>

          <div className="compare__captions">
            <p><span>Before</span>{pair.before}</p>
            <p><span>After</span>{pair.after}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
