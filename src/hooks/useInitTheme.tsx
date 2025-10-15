// src/hooks/useInitTheme.ts
import { useEffect } from "react";
import { useUIThemeStore } from "@/store/uiTheme.store";

export const useInitTheme = () => {
  const isDarkMode = useUIThemeStore((state) => state.isDarkMode);
  const toggleTheme = useUIThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Only toggle if the current state doesn't match system preference
    if (isDarkMode !== prefersDark) {
      toggleTheme();
    }
  }, [isDarkMode, toggleTheme]);
};
