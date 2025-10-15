import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type UIThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setDarkMode: (value: boolean) => void;
};

export const useUIThemeStore = create<UIThemeState>()(
  devtools(
    persist(
      immer((set) => ({
        isDarkMode: false,

        toggleTheme: () =>
          set((state) => {
            state.isDarkMode = !state.isDarkMode;
            document.documentElement.classList.toggle("dark", state.isDarkMode);
          }),

        setDarkMode: (value: boolean) =>
          set((state) => {
            state.isDarkMode = value;
            document.documentElement.classList.toggle("dark", value);
          }),
      })),
      {
        name: "ui",
        // Rehydration callback
        onRehydrateStorage: () => (state) => {
          if (state) {
            document.documentElement.classList.toggle("dark", state.isDarkMode);
          }
        },
      }
    )
  )
);
