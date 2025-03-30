import { createContext, ReactNode, useEffect, useState } from "react";
import { IThemeColors } from "../interfaces/theme.interface";
import colorsTheme from "../utils/colors-theme";

interface IGlobalContext {
  colors: IThemeColors;
  theme: string;
  changeTheme: () => void;
}

const GlobalContext = createContext<IGlobalContext | undefined>(undefined);

interface GlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }
  const value = {
    colors: colorsTheme(theme),
    theme,
    changeTheme,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
