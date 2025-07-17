"use client";

import * as React from "react";
import { Power, PowerOff } from "lucide-react";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10" />;
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="transition-all duration-300 ease-in-out transform hover:scale-110"
    >
      {/* <LightbulbOff className={`absolute h-6 w-6 transition-all duration-500 ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
      <Lightbulb className={`h-6 w-6 transition-all duration-500 ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} /> */}
      <PowerOff className={`absolute h-6 w-6 transition-all duration-500 ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
      <Power className={`h-6 w-6 transition-all duration-500 ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}