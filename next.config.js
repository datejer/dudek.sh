module.exports = {
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/artur-dudek/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/arturdudek_",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/datejer",
        permanent: true,
      },
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
    domains: [
      "cdn.discordapp.com",
      "i.scdn.co",
      "media.discordapp.net",
      "source.boringavatars.com",
    ],
  },
};
