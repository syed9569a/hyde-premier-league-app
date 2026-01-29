import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoFromEnv = process.env.GITHUB_REPOSITORY?.split("/")[1];
const repoName = repoFromEnv || "hyde-premier-league-app";
const isUserOrOrgSite = repoName.endsWith(".github.io");
const basePath = isProd && !isUserOrOrgSite ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
