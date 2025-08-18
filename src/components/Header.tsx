import { Menu, X } from "lucide-react";
import * as React from "react";
import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export const getMenuItems = (t: (key: string) => string) => [
  { label: t("nav.home"), href: "#home" },
  { label: t("nav.about"), href: "#about" },
  { label: t("nav.experience"), href: "#experience" },
  { label: t("nav.projects"), href: "#projects" },
  { label: t("nav.resume"), href: "#resume" },
  { label: t("nav.blogs"), href: "#blogs" },
];

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("home");

  const menuItems = getMenuItems(t);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Get the current hash from URL (without the # symbol)
    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("home");
      }
    };

    // Initial check
    updateActiveSection();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log("menu: " + mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href.substring(1);
    console.log("deu bom")
    closeMobileMenu();
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-3 backdrop-blur-md bg-background/80 border-b border-border/40"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl md:text-2xl font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          abelpf.dev
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "nav-link",
                    activeSection === item.href.substring(1) && "nav-link-active"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="ml-4 p-1 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out md:hidden pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container py-8">
          <ul className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "text-lg font-medium block py-2 border-b border-border/30",
                    activeSection === item.href.substring(1) && "text-primary"
                  )}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}