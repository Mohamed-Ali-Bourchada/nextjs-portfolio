"use client";

import { createContext, useContext, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: "dark";
};

type ThemeProviderState = {
  theme: "dark";
  resolvedTheme: "dark";
};

const initialState: ThemeProviderState = {
  theme: "dark",
  resolvedTheme: "dark",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  // Always dark mode
  const [theme] = useState<"dark">("dark");
  const resolvedTheme = "dark" as const;

  const value = {
    theme,
    resolvedTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}; 