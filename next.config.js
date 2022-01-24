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
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co", "media.discordapp.net"],
  },
};
