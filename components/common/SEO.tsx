import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  bigImage?: boolean;
};

export const SEO = ({ title, description, image, bigImage }: SEOProps) => {
  const fullTitle = title ? `${title} @ artur dudek.` : "artur dudek.";

  const fullDescription = description || "full stack dev.";

  const fullImage = image || "https://dudek.ga/me.jpg";

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel="icon" href="/favicon.png" />

      <meta name="title" content={title || fullTitle} />
      <meta name="description" content={fullDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dudek.ga/" />
      <meta property="og:title" content={title || fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />

      <meta property="twitter:card" content={bigImage ? "summary_large_image" : "summary"} />
      <meta property="twitter:url" content="https://dudek.ga/" />
      <meta property="twitter:domain" content="dudek.ga" />
      <meta property="twitter:title" content={title || fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={fullImage} />

      <meta property="og:site_name" content="dudek.ga" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
};
