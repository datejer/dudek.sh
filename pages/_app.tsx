import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { AppProps } from "next/app";
import { Layout } from "../components/common/Layout/Layout";
import { useAprilFools } from "../lib/useAprilFools";

function MyApp({ Component, pageProps }: AppProps) {
  useAprilFools();

  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
