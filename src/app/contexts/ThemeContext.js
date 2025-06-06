"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCalmingMode, setIsCalmingMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode") === "true";
      const savedCalmingMode = localStorage.getItem("calmingMode") === "true";
      setIsDarkMode(savedDarkMode);
      setIsCalmingMode(savedCalmingMode);

      // Apply theme classes to html element
      updateThemeClasses(savedDarkMode, savedCalmingMode);
    }
  }, []);

  const updateThemeClasses = (dark, calming) => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;

      // Reset classes
      html.classList.remove("dark", "calming");

      // Apply new classes
      if (dark) html.classList.add("dark");
      if (calming) html.classList.add("calming");
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    updateThemeClasses(newDarkMode, isCalmingMode);
  };

  const toggleCalmingMode = () => {
    const newCalmingMode = !isCalmingMode;
    setIsCalmingMode(newCalmingMode);
    localStorage.setItem("calmingMode", newCalmingMode.toString());
    updateThemeClasses(isDarkMode, newCalmingMode);
  };

  const currentTheme = isCalmingMode ? "calming" : "default";

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        isCalmingMode,
        currentTheme,
        toggleDarkMode,
        toggleCalmingMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
