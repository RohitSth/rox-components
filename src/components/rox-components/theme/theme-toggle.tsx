"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a placeholder that matches both theme states
  }

  return (
    <button
      className="w-10 h-10 hover:ring-2 ring-gray-300 dark:ring-gray-700 focus:outline-none outline-none transition-all duration-300 ease-in-out flex dark:border-white/20 hover:dark:border-white border-black/40 hover:border-black justify-center items-center size-full overflow-hidden rounded-full bg-white dark:bg-gray-800 border"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
