// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...["/linkedin", "/li"].map((source) => ({
        source,
        destination: "https://www.linkedin.com/in/artur-dudek/",
        permanent: true,
      })),
      ...["/twitter", "/tw", "/twt", "/twit"].map((source) => ({
        source,
        destination: "https://twitter.com/arturdudek_",
        permanent: true,
      })),
      ...["/github", "/gh", "/source", "/code"].map((source) => ({
        source,
        destination: "https://github.com/datejer",
        permanent: true,
      })),
      ...["/email", "/mail"].map((source) => ({
        source,
        destination: "mailto:artur@dudek.sh",
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn2.steamgriddb.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
