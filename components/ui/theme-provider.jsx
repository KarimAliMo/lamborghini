"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// here i make the main dark mode functionality wraping the content inside it to control
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
