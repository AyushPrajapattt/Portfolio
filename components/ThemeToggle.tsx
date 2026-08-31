"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/lib/icons";

type Theme = "light" | "dark";

/**
 * Toggles the `data-theme` attribute on <html> and persists the choice.
 * The initial theme is applied by an inline no-flash script in layout.tsx,
 * so here we only read the already-applied state on mount.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore storage errors (private mode) */
    }
  }

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title="Toggle theme"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
