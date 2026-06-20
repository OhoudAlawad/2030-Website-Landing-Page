import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export (SSG) for hosting on GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/2030-Website-Landing-Page" : "",
  images: {
    unoptimized: true, // Required for static export hosting environments
  },
};

export default nextConfig;
