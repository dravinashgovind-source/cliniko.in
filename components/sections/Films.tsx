"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { films } from "../../content/site";
import { Accent, Eyebrow, Reveal, ease } from "../ui/Reveal";
import { ArrowRight, Close, Play } from "../ui/Icons";

export function Films() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const film = films[active];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="section films" id="films" aria-labelledby="films-title">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <Eyebrow tone="light">Video &amp; film</Eyebrow>
            <h2 id="films-title" className="h2">Expertise, <Accent>on camera.</Accent></h2>
          </div>
          <p className="lead">
            Patients decide with their eyes first. We script, direct and produce films that let them meet you before they ever book.
          </p>
        </Reveal>

        <div className="films__grid">
          <Reveal className="films__stage">
            <button className="films__feature" onClick={() => setOpen(true)} aria-label={`Play: ${film.title}`}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={film.id}
                  className="films__img"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease }}
                >
                  <Image src={film.image} alt="" fill sizes="(max-width: 900px) 92vw, 64vw" style={{ objectFit: "cover" }} />
                </motion.div>
              </AnimatePresence>
              <span className="films__vignette" />
              <span className="films__play"><Play width={22} height={22} /></span>
              <span className="films__caption">
                <span className="films__kind">{film.kind}</span>
                <span className="films__title">{film.title}</span>
              </span>
              <span className="films__controls" aria-hidden="true">
                <span className="films__progress"><i /></span>
                <span className="films__time">0:00 / {film.duration}</span>
              </span>
            </button>
          </Reveal>

          <Reveal className="films__list" delay={0.1}>
            <ol>
              {films.map((f, i) => (
                <li key={f.id}>
                  <button className={`film-item${i === active ? " is-active" : ""}`} onClick={() => setActive(i)} aria-pressed={i === active}>
                    <span className="film-item__thumb">
                      <Image src={f.image} alt="" fill sizes="120px" style={{ objectFit: "cover" }} />
                    </span>
                    <span className="film-item__text">
                      <span className="film-item__kind">{f.kind}</span>
                      <span className="film-item__dur">{f.duration}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <a href="#contact" className="btn btn--light">Plan your film <ArrowRight /></a>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={film.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="lightbox__frame"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              {film.src ? (
                <video src={film.src} controls autoPlay playsInline />
              ) : (
                <div className="lightbox__soon">
                  <Image src={film.image} alt="" fill sizes="90vw" style={{ objectFit: "cover" }} />
                  <div className="lightbox__note">
                    <p className="films__kind">{film.kind}</p>
                    <p>This film is part of our upcoming showreel.</p>
                    <a href="#contact" className="btn btn--light btn--sm" onClick={() => setOpen(false)}>Request a private preview <ArrowRight /></a>
                  </div>
                </div>
              )}
              <button className="lightbox__close" onClick={() => setOpen(false)} aria-label="Close"><Close /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
