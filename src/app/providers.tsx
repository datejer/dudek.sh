"use client";

import { useAprilFools } from "@/lib/useAprilFools";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useAprilFools();

  return (
    <ThemeProvider defaultTheme="dark" disableTransitionOnChange>
      {children}
      {/* <SpeedInsights /> */}
    </ThemeProvider>
  );
};
