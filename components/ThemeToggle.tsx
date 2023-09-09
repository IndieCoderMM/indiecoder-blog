"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
      className="flex flex-shrink-0 items-center justify-center rounded-lg p-1 transition-all hover:scale-105"
    >
      <span className="sr-only">Toggle Theme</span>
      {currentTheme === "dark" ? (
        <SunIcon className="h-6 w-6 text-yellow-400 md:h-8 md:w-8" key="sun" />
      ) : (
        <MoonIcon
          className="h-6 w-6 text-yellow-400 md:h-8 md:w-8"
          key="moon"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
