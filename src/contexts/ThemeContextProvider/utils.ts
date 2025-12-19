import { createContext, useContext } from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextType = {
  theme: ThemeMode;
  setLightMode: () => void;
  setDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
