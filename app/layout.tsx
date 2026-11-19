import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cliniko.in"),
  title: "Cliniko — Healthcare Marketing for Doctors & Clinics",
  description:
    "Cliniko builds trusted doctor brands and helps clinics get discovered, chosen and remembered — personal branding, Google visibility, websites and video. Build. Grow. Get Found.",
  openGraph: {
    title: "Cliniko — Great doctors deserve to be seen.",
    description:
      "Doctor personal branding, Google & local visibility, clinic websites and video production.",
    url: "https://cliniko.in",
    siteName: "Cliniko",
    images: [{ url: "/images/doctor-hero.jpg", width: 1344, height: 1680 }],
    locale: "en_IN",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
