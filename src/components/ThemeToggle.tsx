
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useLocalStorage } from "react-use";
import { cn } from "../lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">(
    "theme",
    "light"
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme || "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-all duration-300 ease-in-out",
        "hover:bg-secondary flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-primary/20"
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-transform" />
      ) : (
        <Sun className="h-5 w-5 transition-transform" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
