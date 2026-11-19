"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import {
  ArrowRight, Calendar, Check, Directions, Globe, MapsMark, Phone, Play, Star,
} from "../ui/Icons";
import { LogoMark } from "../ui/Logo";
import { ease } from "../ui/Reveal";

const line = {
  hidden: { y: "105%" },
  show: (i: number) => ({ y: "0%", transition: { duration: 1.1, ease, delay: 0.15 + i * 0.09 } }),
};

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

/** Floating card: staged entrance + gentle depth parallax driven by the pointer. */
function Float({
  className, depth, delay, mx, my, children,
}: {
  className: string; depth: number; delay: number;
  mx: MotionValue<number>; my: MotionValue<number>; children: React.ReactNode;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div className={`float ${className}`} style={{ x, y }}>
      <motion.div
        className="glass"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 20 });
  const my = useSpring(rawY, { stiffness: 60, damping: 20 });
  const portraitX = useTransform(mx, (v) => v * -0.35);
  const portraitY = useTransform(my, (v) => v * -0.35);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 24);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 24);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [rawX, rawY]);

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p className="pill" {...fade(0.05)}>
            <span className="pill__dot" /> Healthcare marketing agency
          </motion.p>

          <h1 className="display hero__title">
            {["Great doctors", "deserve to be"].map((t, i) => (
              <span className="mask" key={t}>
                <motion.span className="mask__inner" variants={line} initial="hidden" animate="show" custom={i}>
                  {t}
                </motion.span>
              </span>
            ))}
            <span className="mask mask--accent">
              <motion.span className="mask__inner" variants={line} initial="hidden" animate="show" custom={2}>
                <em className="hero__seen">seen.</em>
              </motion.span>
              <svg className="swoosh" viewBox="0 0 320 24" preserveAspectRatio="none" aria-hidden="true">
                <motion.path
                  d="M4 18C70 8 170 4 316 10"
                  fill="none" stroke="#14B8A6" strokeWidth="5" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, ease, delay: 0.95 }}
                />
              </svg>
            </span>
          </h1>

          <motion.p className="lead hero__lead" {...fade(0.55)}>
            We build trusted doctor brands and help clinics get discovered, chosen and remembered.
          </motion.p>

          <motion.div className="hero__actions" {...fade(0.68)}>
            <a href="#contact" className="btn btn--primary">Build my presence <ArrowRight /></a>
            <a href="#work" className="btn btn--ghost">
              <span className="btn__play"><Play width={10} height={10} /></span> Explore our work
            </a>
          </motion.div>

          <motion.ul className="hero__proof" {...fade(0.8)} aria-label="What we do">
            <li>Personal branding</li>
            <li>Google visibility</li>
            <li>Websites</li>
            <li>Video</li>
          </motion.ul>
        </div>

        <div className="hero__stage" aria-hidden="true">
          <motion.div
            className="stage__halo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease }}
          />
          <motion.div
            className="stage__portrait"
            style={{ x: portraitX, y: portraitY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease, delay: 0.1 }}
          >
            <Image
              src="/images/doctor-hero.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 90vw, 46vw"
              style={{ objectFit: "cover", objectPosition: "50% 18%" }}
            />
          </motion.div>

          {/* Clinic website preview */}
          <Float className="float--site" depth={0.9} delay={0.55} mx={mx} my={my}>
            <div className="ui-browser">
              <span /><span /><span />
            </div>
            <div className="ui-site">
              <div className="ui-site__copy">
                <p className="ui-brand"><LogoMark size={11} /> Your Clinic</p>
                <p className="ui-site__title">Expert care.<br />Closer to you.</p>
                <span className="ui-chip ui-chip--blue">Book appointment</span>
              </div>
              <div className="ui-site__img">
                <Image src="/images/consult-room.jpg" alt="" fill sizes="160px" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </Float>

          {/* Google Business Profile */}
          <Float className="float--gbp" depth={1.3} delay={0.7} mx={mx} my={my}>
            <div className="ui-gbp">
              <div className="ui-gbp__head">
                <div>
                  <MapsMark width={20} height={20} />
                  <p className="ui-gbp__name">Your Clinic</p>
                  <p className="ui-gbp__rating">5.0 <span className="stars">{[...Array(5)].map((_, i) => <Star key={i} width={10} height={10} />)}</span></p>
                  <p className="ui-gbp__open"><b>Open</b> · Closes 9 PM</p>
                </div>
                <div className="ui-map"><span className="ui-map__pin" /></div>
              </div>
              <div className="ui-gbp__actions">
                <span><Phone width={13} height={13} />Call</span>
                <span><Directions width={13} height={13} />Directions</span>
                <span><Globe width={13} height={13} />Website</span>
              </div>
            </div>
          </Float>

          {/* Patient review */}
          <Float className="float--review" depth={1.7} delay={0.85} mx={mx} my={my}>
            <div className="ui-review">
              <span className="ui-avatar">A</span>
              <div>
                <span className="stars stars--gold">{[...Array(5)].map((_, i) => <Star key={i} width={11} height={11} />)}</span>
                <p>&ldquo;Excellent care and friendly staff.&rdquo;</p>
              </div>
            </div>
          </Float>

          {/* Instagram reel */}
          <Float className="float--reel" depth={1.5} delay={1.0} mx={mx} my={my}>
            <div className="ui-reel">
              <Image src="/images/reel-physio.jpg" alt="" fill sizes="160px" style={{ objectFit: "cover" }} />
              <span className="ui-reel__play"><Play width={14} height={14} /></span>
              <span className="ui-reel__meta">Reel · 0:30</span>
            </div>
          </Float>

          {/* Appointment booking */}
          <Float className="float--booking" depth={1.1} delay={1.15} mx={mx} my={my}>
            <div className="ui-booking">
              <span className="ui-booking__icon"><Calendar /></span>
              <div>
                <p className="ui-booking__title">Appointment booked</p>
                <p className="ui-booking__time">Tue, 10:30 AM · New patient</p>
              </div>
              <span className="ui-booking__check"><Check width={12} height={12} /></span>
            </div>
          </Float>
        </div>
      </div>
    </section>
  );
}
