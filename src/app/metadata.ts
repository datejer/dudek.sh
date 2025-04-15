import { Metadata } from "next";
import { getCurrentAge, getIndefiniteArticle } from "@/lib/age";

type GetMetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  bigImage?: boolean;
  openGraph?: {
    type?: "website" | "article";
    publishedTime?: string;
    tags?: string[];
  };
};

export const getMetadata = (props?: GetMetadataProps): Metadata => {
  const { title, description, image, bigImage, openGraph } = props || {};

  const fullTitle = title ? `${title} @ artur dudek.` : "artur dudek.";

  const age = getCurrentAge("2005-05-16");

  const fullDescription =
    description ||
    `Hello 👋!
    I'm ${getIndefiniteArticle(
      age,
    )} ${age} year old web developer from Poland 🇵🇱. I'm currently studying at a High School, and enjoy making websites in React! I work as a Frontend Developer at AppUnite and also host Require Podcast.`;

  const fullImage = image || "https://dudek.sh/me.jpg";

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      type: openGraph?.type || "website",
      url: "https://dudek.sh/",
      siteName: "dudek.sh",
      title: title || fullTitle,
      description: fullDescription,
      images: [
        {
          url: fullImage,
        },
      ],
      publishedTime: openGraph?.publishedTime,
      tags: openGraph?.tags,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: "/favicon.png",
    twitter: {
      creator: "@arturdudek_",
      creatorId: "1181205410805624834",
      card: bigImage ? "summary_large_image" : "summary",
      title: title || fullTitle,
      description: fullDescription,
      images: [fullImage],
    },
  };
};
