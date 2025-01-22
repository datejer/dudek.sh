import { SpeedInsights } from "@vercel/speed-insights/next";

import { ibm_plex_mono, ibm_plex_sans, ibm_plex_serif, norum_ipnum } from "@/app/fonts";
import { Layout } from "@/components/common/Layout/Layout";
import clsx from "clsx";

import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { Providers } from "@/app/providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        ibm_plex_sans.variable,
        ibm_plex_mono.variable,
        ibm_plex_serif.variable,
        norum_ipnum.variable,
      )}
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Layout>
            {children}
            <SpeedInsights />
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
