import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Play = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...p}><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.6-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" fill="currentColor" /></svg>
);
export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...p}><path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8L12 2.8Z" fill="currentColor" /></svg>
);
export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} strokeWidth={2} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const Plus = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Menu = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>
);
export const Phone = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
);
export const Directions = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}><path d="m12 2 10 10-10 10L2 12 12 2Z" /><path d="M9 14v-2a2 2 0 0 1 2-2h4m-2-2 2 2-2 2" /></svg>
);
export const Globe = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" /></svg>
);
export const Calendar = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}><rect x="3.5" y="5" width="17" height="15.5" rx="3" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
);
export const Heart = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...p}><path d="M12 20.5s-8-4.7-8-10.6A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8 2.9c0 5.9-8 10.6-8 10.6Z" fill="currentColor" /></svg>
);
export const Pin = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}><path d="M12 21s7-6.1 7-11.5a7 7 0 1 0-14 0C5 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);

/* ---------- Platform marks (simplified, monochrome-friendly) ---------- */
export const GoogleMark = (p: P) => (
  <svg viewBox="0 0 48 48" width="28" height="28" {...p}>
    <path fill="#4285F4" d="M44.5 24.5c0-1.6-.1-2.8-.4-4H24v7.6h11.6c-.5 3-2.6 5.6-5.8 7.3l-.1.4 6.4 5 .4.1c4-3.8 6.4-9.3 6.4-16.4Z" />
    <path fill="#34A853" d="M24 45c5.8 0 10.7-1.9 14.2-5.2l-6.8-5.3c-1.8 1.3-4.3 2.2-7.4 2.2-5.7 0-10.5-3.8-12.2-9l-.3.1-6.7 5.2-.1.3C8.2 40 15.5 45 24 45Z" />
    <path fill="#FBBC05" d="M11.8 27.7c-.4-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-.3l-6.8-5.3-.2.1A21 21 0 0 0 3 23.5c0 3.4.8 6.6 2.2 9.4l6.6-5.2Z" />
    <path fill="#EB4335" d="M24 10.3c4 0 6.7 1.7 8.2 3.2l6-5.9C34.7 4.3 29.8 2 24 2 15.5 2 8.2 7 4.8 14.1l6.9 5.3c1.8-5.3 6.6-9.1 12.3-9.1Z" />
  </svg>
);
export const MapsMark = (p: P) => (
  <svg viewBox="0 0 48 48" width="28" height="28" {...p}>
    <path fill="#1A73E8" d="M24 4a14 14 0 0 0-14 14c0 10.5 14 26 14 26s14-15.5 14-26A14 14 0 0 0 24 4Z" />
    <path fill="#EA4335" d="M24 4a14 14 0 0 0-10.7 5l10.7 9 10.7-9A14 14 0 0 0 24 4Z" />
    <path fill="#34A853" d="M13.3 9A14 14 0 0 0 10 18c0 3 .9 6 2.4 9L24 18 13.3 9Z" opacity=".9" />
    <circle cx="24" cy="18" r="5.2" fill="#fff" />
  </svg>
);
export const WebMark = (p: P) => (
  <svg viewBox="0 0 48 48" width="28" height="28" {...p}>
    <circle cx="24" cy="24" r="18" fill="none" stroke="#2563EB" strokeWidth="3" />
    <path d="M6 24h36M24 6c5 5.3 7.5 11.3 7.5 18S29 36.7 24 42c-5-5.3-7.5-11.3-7.5-18S19 11.3 24 6Z" fill="none" stroke="#2563EB" strokeWidth="3" />
  </svg>
);
export const InstagramMark = (p: P) => (
  <svg viewBox="0 0 48 48" width="28" height="28" {...p}>
    <defs>
      <radialGradient id="ig" cx="30%" cy="107%" r="150%">
        <stop offset="0" stopColor="#FDCB52" /><stop offset=".3" stopColor="#FD5949" /><stop offset=".6" stopColor="#D6249F" /><stop offset="1" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="5" y="5" width="38" height="38" rx="11" fill="url(#ig)" />
    <rect x="13" y="13" width="22" height="22" rx="7" fill="none" stroke="#fff" strokeWidth="3" />
    <circle cx="24" cy="24" r="5.4" fill="none" stroke="#fff" strokeWidth="3" />
    <circle cx="31.5" cy="16.5" r="1.8" fill="#fff" />
  </svg>
);
export const YouTubeMark = (p: P) => (
  <svg viewBox="0 0 48 48" width="28" height="28" {...p}>
    <rect x="3" y="10" width="42" height="28" rx="9" fill="#FF0033" />
    <path d="M20 17.5v13l11-6.5-11-6.5Z" fill="#fff" />
  </svg>
);
export const ReviewMark = (p: P) => (
  <svg viewBox="0 0 48 48" width="28" height="28" {...p}>
    <path d="m24 5 5.6 11.6 12.8 1.7-9.3 8.9 2.3 12.6L24 33.7l-11.4 6.1 2.3-12.6-9.3-8.9 12.8-1.7L24 5Z" fill="#F5B301" />
  </svg>
);

/* ---------- Socials ---------- */
export const YouTubeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}><path fill="currentColor" d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" /></svg>
);
export const InstagramIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></svg>
);
export const LinkedInIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}><path fill="currentColor" d="M5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.3 9h3.4v11.5H3.3V9Zm5.6 0h3.3v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.4v6.4h-3.4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8H8.9V9Z" /></svg>
);
export const XIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...p}><path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7 8 10.3h-6.3l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.5 5.9L17.8 3Zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5Z" /></svg>
);

export const Mail = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
);
export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...p}><path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.8l5.1-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3Z" /></svg>
);
