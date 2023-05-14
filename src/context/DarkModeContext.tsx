import React, { createContext, useEffect, useState } from "react";

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});
const DarkModeProvider: React.FC<DarkModeProviderProps> = (props) => {
  const { children } = props;
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("portfolio-theme", !darkMode ? "dark": "light");
  };

  useEffect(() => {
    if (!localStorage.getItem("portfolio-theme")) {
      if (window.matchMedia("(prefers-color-scheme: dark)")) {
        setDarkMode(true);
        localStorage.setItem("portfolio-theme", "dark");
      } else {
        setDarkMode(false);
        localStorage.setItem("portfolio-theme", "light");
      }
    } else {
      setDarkMode(localStorage.getItem("portfolio-theme") === "dark");
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
