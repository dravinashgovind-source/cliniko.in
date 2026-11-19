import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site → plain HTML/CSS/JS in `out/` (works on Cloudflare Pages, Netlify, any static host).
  output: "export",
  outputFileTracingRoot: root,
  // No image server on static hosts; images are already pre-sized JPEGs.
  images: { unoptimized: true },
  trailingSlash: false,
  poweredByHeader: false,
};
export default nextConfig;
