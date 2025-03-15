"use client";
import { GeistProvider, CssBaseline, Themes } from "@geist-ui/core";
import { useState, useEffect, createContext, useContext } from "react";

// Create a Theme Context
const ThemeContext = createContext();
export function useThemeSwitcher() {
  return useContext(ThemeContext);
}

// ✅ Custom Light Theme
const customLightTheme = Themes.createFromLight({
  type: "custom-light",
  palette: {
    link: "#0073e6", // 🔵 Light mode hyperlink color
    foreground: "#373737", // Text color
    background: "#fff", // Background color
    selection: "#fcd7d7"
  },
});

// ✅ Custom Dark Theme
const customDarkTheme = Themes.createFromDark({
  type: "custom-dark",
  palette: {
    link: "#66b3ff", // 🔷 Dark mode hyperlink color (slightly lighter)
    foreground: "#fff", // Text color
    background: "#000", // Background color
    selection: "#fcd7d7"
  },
});

export default function Providers({ children }) {
  const [themeType, setThemeType] = useState(() => {
    return typeof window !== "undefined" && localStorage.getItem("darkMode") === "true" ? "custom-dark" : "custom-light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", themeType === "custom-dark");
    }
  }, [themeType]);

  return (
    <ThemeContext.Provider value={{ themeType, setThemeType }}>
      <GeistProvider themeType={themeType} themes={[customLightTheme, customDarkTheme]}>
        <CssBaseline />
        {children}
      </GeistProvider>
    </ThemeContext.Provider>
  );
}
