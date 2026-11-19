import { useId } from "react";

export function LogoMark({ size = 30 }: { size?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={`a${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4F8BFF" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id={`b${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2DD4BF" />
          <stop offset="1" stopColor="#0D9488" />
        </linearGradient>
      </defs>
      <rect x="22" y="4" width="20" height="38" rx="7" fill={`url(#a${id})`} />
      <rect x="4" y="22" width="38" height="20" rx="7" fill={`url(#a${id})`} />
      <rect x="22" y="22" width="38" height="20" rx="7" fill={`url(#b${id})`} opacity=".92" />
      <rect x="22" y="22" width="20" height="38" rx="7" fill={`url(#b${id})`} />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={`logo logo--${tone}`}>
      <LogoMark />
      <span className="logo__word">CLINIKO</span>
    </span>
  );
}
