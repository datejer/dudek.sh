"use client";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "next-themes";
import { useAprilFools } from "@/lib/useAprilFools";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useAprilFools();

  return (
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
};
