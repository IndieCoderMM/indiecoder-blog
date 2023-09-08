"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        currentTheme == "dark" ? setTheme("light") : setTheme("dark")
      }
      className="rounded-lg border border-slate-300 p-1 lg:border-none"
    >
      <span className="sr-only">Toggle Theme</span>
      {currentTheme === "dark" ? (
        <SunIcon className=" text-yellow-400" key="sun" />
      ) : (
        <MoonIcon className=" text-yellow-400" key="moon" />
      )}
    </button>
  );
};

export default ThemeToggle;
