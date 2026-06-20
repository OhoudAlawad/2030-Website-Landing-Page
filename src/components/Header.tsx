"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { Globe, Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const { language, t, toggleLanguage, isRtl } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to Dark Mode for premium aesthetics

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.pillars, href: "#pillars" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.timeline, href: "#timeline" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Branding */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-2xl font-display font-extrabold bg-gradient-to-r from-emerald-brand to-gold-accent bg-clip-text text-transparent">
                2030
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold border-l border-emerald-brand/20 pl-2 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-2 text-theme-foreground/60 hidden sm:inline-block">
                {language === "ar" ? "رؤية" : "Vision"}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-theme-foreground/80 hover:text-emerald-brand dark:hover:text-emerald-light transition-colors text-sm font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-emerald-brand/5 dark:hover:bg-emerald-light/10 text-theme-foreground/80 transition-colors"
              aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full border border-emerald-brand/20 hover:border-emerald-brand bg-emerald-brand/5 hover:bg-emerald-brand hover:text-white dark:hover:bg-emerald-light dark:hover:text-emerald-brand transition-all text-xs font-semibold"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "ar" ? "English" : "العربية"}</span>
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex md:hidden items-center space-x-3 rtl:space-x-reverse">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-theme-foreground/80"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-theme-foreground/80"
              aria-label="Toggle Language"
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-theme-foreground/80 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-emerald-brand/10 transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-theme-foreground/80 hover:text-emerald-brand hover:bg-emerald-brand/5 transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
