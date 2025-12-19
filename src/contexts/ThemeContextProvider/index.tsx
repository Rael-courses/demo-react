import { useState, type PropsWithChildren } from "react";
import { ThemeContext, type ThemeMode } from "./utils";

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const themeMode: ThemeMode | null =
      (localStorage.getItem("theme") as ThemeMode) || null;
    if (!themeMode) {
      localStorage.setItem("theme", "light");
    }

    document.documentElement.classList.add(themeMode);
    return themeMode;
  });

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  const setDarkMode = () => {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setLightMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
