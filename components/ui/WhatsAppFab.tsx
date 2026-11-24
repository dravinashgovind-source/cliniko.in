"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "../../content/site";
import { WhatsAppIcon } from "./Icons";

/** Floating "Chat on WhatsApp" button — appears after the hero, hides near the contact section. */
export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const href = whatsappLink();

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const nearContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.8 : false;
      setShow(window.scrollY > window.innerHeight * 0.6 && !nearContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-fab${show ? " is-visible" : ""}`}
      aria-label={`Chat with Cliniko on WhatsApp, ${site.whatsappDisplay}`}
      tabIndex={show ? 0 : -1}
    >
      <WhatsAppIcon width={26} height={26} />
      <span className="wa-fab__label">Chat with us</span>
    </a>
  );
}
