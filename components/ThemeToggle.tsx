'use client';

import { MoonIcon, PaintBrushIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
      }
      className="p-1 rounded-lg border border-slate-300"
    >
      <span className="sr-only">Toggle Theme</span>
      {currentTheme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-yellow-400" key="sun" />
      ) : (
        <MoonIcon className="w-6 h-6 text-yellow-400" key="moon" />
      )}
    </button>
  );
};

export default ThemeToggle;
