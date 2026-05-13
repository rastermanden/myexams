import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = "myexams";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubActions ? `/${repo}` : "",
  assetPrefix: isGitHubActions ? `/${repo}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
    ],
  },
};

export default nextConfig;
