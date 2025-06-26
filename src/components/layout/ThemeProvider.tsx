"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  systemTheme: "dark" | "light";
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
};

const initialState: ThemeProviderState = {
  theme: "system",
  systemTheme: "light",
  setTheme: () => null,
  resolvedTheme: "light",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);
  
  // Calculate the resolved theme (what's actually applied)
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      const newSystemTheme = mediaQuery.matches ? "dark" : "light";
      setSystemTheme(newSystemTheme);
    };
    
    // Set initial value
    handleChange();
    
    // Listen for changes
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    const isDark = resolvedTheme === "dark";

    // Remove both classes first
    root.classList.remove("light", "dark");
    
    // Add the appropriate class
    root.classList.add(isDark ? "dark" : "light");
    
    // Update color scheme meta tag
    document.querySelector('meta[name="color-scheme"]')?.setAttribute(
      "content",
      isDark ? "dark" : "light"
    );
    
  }, [resolvedTheme, mounted]);

  // Handle transition disabling
  useEffect(() => {
    if (!mounted) return;
    
    if (disableTransitionOnChange) {
      document.documentElement.classList.add("disable-transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("disable-transition");
      }, 0);
    }
  }, [theme, disableTransitionOnChange, mounted]);
  
  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Persist theme preference to localStorage
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);
  
  // Load theme from localStorage
  useEffect(() => {
    if (!mounted) return;
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [mounted]);

  const value = {
    theme,
    systemTheme,
    setTheme,
    resolvedTheme,
  };
  
  // Prevent flash of incorrect theme
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        {children}
      </div>
    );
  }

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