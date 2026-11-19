"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "../../content/site";
import { LogoMark } from "../ui/Logo";
import { ArrowRight, ArrowUpRight, Close, Mail, Menu, WhatsAppIcon } from "../ui/Icons";
import { ease } from "../ui/Reveal";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const whatsapp = site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="nav__wrap">
        <div className="nav__bar">
          <a href="#top" className="nav__brand" aria-label="Cliniko — home">
            <span className="nav__tile"><LogoMark size={22} /></span>
            <span className="nav__word">CLINIKO</span>
          </a>

          <nav aria-label="Primary" className="nav__links">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="nav__actions">
            <a href="#films" className="nav__ghost">
              Watch our films <ArrowUpRight width={14} height={14} />
            </a>
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="nav__icon nav__icon--wa" aria-label="Chat on WhatsApp">
                <WhatsAppIcon />
              </a>
            )}
            <a href={`mailto:${site.contactEmail}`} className="nav__icon nav__icon--mail" aria-label={`Email ${site.contactEmail}`}>
              <Mail />
            </a>
            <a href="#contact" className="nav__cta">Let&rsquo;s talk</a>
          </div>

          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close width={20} height={20} /> : <Menu width={20} height={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile" className="sheet__links">
              {[...nav, { label: "Contact", href: "#contact" }].map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.06 * i + 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="sheet__foot">
              <div className="sheet__icons">
                {whatsapp && (
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="nav__icon nav__icon--wa" aria-label="Chat on WhatsApp"><WhatsAppIcon /></a>
                )}
                <a href={`mailto:${site.contactEmail}`} className="nav__icon nav__icon--mail" aria-label={`Email ${site.contactEmail}`}><Mail /></a>
              </div>
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn--primary sheet__cta">
                Let&rsquo;s talk <ArrowRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
