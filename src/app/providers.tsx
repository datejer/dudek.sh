"use client";

import { useAprilFools } from "@/lib/useAprilFools";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useAprilFools();

  return (
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
};
