import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
