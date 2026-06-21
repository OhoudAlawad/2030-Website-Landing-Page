"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Heart } from "lucide-react";

export default function Footer() {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="bg-theme-foreground/[0.03] border-t border-emerald-brand/5 dark:border-emerald-light/5 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-theme-foreground/5">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-3xl font-display font-extrabold bg-gradient-to-r from-emerald-brand to-gold-accent bg-clip-text text-transparent">
                2030
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold border-l border-emerald-brand/20 pl-2 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-2 text-theme-foreground/60">
                {isRtl ? "رؤية" : "Vision"}
              </span>
            </div>
            <p className="text-sm text-theme-foreground/70 max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>
            <p className="text-xs text-theme-foreground/50 max-w-md leading-relaxed border-t border-theme-foreground/10 pt-3 mt-3 italic">
              {t.footer.disclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs uppercase tracking-wider font-bold text-theme-foreground/80">
              {isRtl ? "روابط سريعة" : "Quick Links"}
            </h5>
            <ul className="space-y-2 text-sm text-theme-foreground/60">
              <li>
                <a href="#home" className="hover:text-emerald-brand dark:hover:text-emerald-light transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-brand dark:hover:text-emerald-light transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-emerald-brand dark:hover:text-emerald-light transition-colors">
                  {t.nav.pillars}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-brand dark:hover:text-emerald-light transition-colors">
                  {t.nav.projects}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Compliance */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs uppercase tracking-wider font-bold text-theme-foreground/80">
              {isRtl ? "المشاركة والتواصل" : "Connect With Us"}
            </h5>
            
            {/* Social Icons */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-theme-foreground/5 hover:bg-emerald-brand/10 hover:text-emerald-brand dark:hover:text-emerald-light transition-all text-theme-foreground/75"
                aria-label="Twitter Account Link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-theme-foreground/5 hover:bg-emerald-brand/10 hover:text-emerald-brand dark:hover:text-emerald-light transition-all text-theme-foreground/75"
                aria-label="LinkedIn Account Link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-theme-foreground/5 hover:bg-emerald-brand/10 hover:text-emerald-brand dark:hover:text-emerald-light transition-all text-theme-foreground/75"
                aria-label="GitHub Repository Link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>

            {/* Compliance links */}
            <div className="pt-2 text-xs text-theme-foreground/55 space-y-1.5">
              <a href="#" className="block hover:underline">{isRtl ? "سياسة الخصوصية" : "Privacy Policy"}</a>
              <a href="#" className="block hover:underline">{isRtl ? "اتفاقية الاستخدام" : "Terms & Conditions"}</a>
              <a href="#" className="block hover:underline">{isRtl ? "إمكانية الوصول (a11y)" : "Accessibility Guidelines"}</a>
            </div>
          </div>
        </div>

        {/* Copyrights and Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-theme-foreground/50 space-y-4 sm:space-y-0">
          <div>{t.footer.rights}</div>
          <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span>{isRtl ? "تم التطوير بكل" : "Developed with"}</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 animate-pulse" />
            <span>
              {isRtl ? "بواسطة " : "by "}
              <a
                href="https://www.ohoudalawad.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline hover:text-gold-accent transition-colors"
              >
                {isRtl ? "عهود العواد" : "Ohoud Alawad"}
              </a>
              {isRtl ? " لرؤية 2030" : " for Saudi Vision 2030"}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
