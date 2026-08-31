/**
 * Next.js configuration for a static export deployed to GitHub Pages.
 *
 * The repo is served as a *project* page at:
 *   https://ayushprajapattt.github.io/Portfolio/
 * so in production every route/asset must be prefixed with `/Portfolio`.
 * In local dev we serve from the root so `next dev` works at localhost:3000.
 */
const isProd = process.env.NODE_ENV === "production";
const repo = "Portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into ./out (no Node server needed on GitHub Pages).
  output: "export",

  // next/image optimization needs a server; disable it for static hosting.
  images: { unoptimized: true },

  // Project-page path prefix. basePath also prefixes _next/ asset URLs.
  basePath: isProd ? `/${repo}` : "",

  // Serve each route as a directory with index.html so GitHub Pages resolves
  // clean URLs like /Portfolio/ without 404s.
  trailingSlash: true,
};

export default nextConfig;
