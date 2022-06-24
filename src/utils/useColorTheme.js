import { useState } from "react";

function getInitialColor() {
  let theme = "light";
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    theme = "dark";
  }
  return theme;
}

export default function useColorTheme() {
  const [colorTheme, setColorTheme] = useState(getInitialColor);

  const toggleColorTheme = () => {
    const theme = colorTheme === "light" ? "dark" : "light";
    localStorage.theme = theme;
    setColorTheme(theme);
  };

  return [colorTheme, toggleColorTheme];
}
