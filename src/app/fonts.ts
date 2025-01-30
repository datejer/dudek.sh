import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import localFont from "next/font/local";

export const ibm_plex_mono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  style: "normal",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  // https://github.com/system-fonts/modern-font-stacks#monospace-code
  fallback: [
    "ui-monospace",
    "Cascade Code",
    "Source Code Pro",
    "Menlo",
    "Consolas",
    "DejaVu Sans Mono",
    "monospace",
  ],
});

export const ibm_plex_sans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  style: "normal",
  weight: ["200", "400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  // https://github.com/system-fonts/modern-font-stacks#neo-grotesque
  fallback: [
    "Inter",
    "Roboto",
    "Helvetica Neue",
    "Arial Nova",
    "Nimbus Sans",
    "Arial",
    "sans-serif",
  ],
});

export const ibm_plex_serif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "600"],
  subsets: ["latin"],
  display: "swap",
  // https://github.com/system-fonts/modern-font-stacks#transitional
  fallback: ["Charter", "Bitstream Charter", "Sitka Text", "Cambria", "serif"],
});

export const norum_ipnum = localFont({
  variable: "--font-norum-ipnum",
  src: "../../public/fonts/NorumIpnumSegment-Regular.otf",
  display: "swap",
  style: "normal",
  weight: "400",
  preload: true,
  fallback: ["monospace"],
});
