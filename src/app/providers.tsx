"use client";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { useAprilFools } from "@/lib/useAprilFools";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useAprilFools();

  return (
    <ThemeProvider defaultTheme="dark">
      <NuqsAdapter>
        <TooltipProvider>{children}</TooltipProvider>
      </NuqsAdapter>
    </ThemeProvider>
  );
};
