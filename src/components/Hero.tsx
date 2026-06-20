"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";

export default function Hero() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-brand/10 dark:bg-emerald-light/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left rtl:lg:text-right animate-fade-in-up">
            {/* Visual Badge */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full border border-gold-accent/20 bg-gold-accent/10 text-gold-accent text-xs font-semibold tracking-wider">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{t.hero.badge}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight">
                <span className="block text-theme-foreground">{t.hero.title}</span>
                <span className="block text-emerald-brand dark:text-emerald-light bg-gradient-to-r from-emerald-brand to-emerald-light dark:from-emerald-light dark:to-emerald-brand bg-clip-text text-transparent">
                  {isRtl ? "طموح يتحقق" : "An Ambitious Journey"}
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-theme-foreground/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#pillars"
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4 rounded-full bg-emerald-brand hover:bg-emerald-brand/95 text-white font-semibold transition-all shadow-lg shadow-emerald-brand/20 dark:shadow-emerald-light/10 hover:shadow-xl hover:shadow-emerald-brand/35 hover:-translate-y-0.5"
              >
                <span>{t.hero.cta}</span>
                {isRtl ? (
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-emerald-brand/20 hover:border-emerald-brand hover:bg-emerald-brand/5 dark:border-emerald-light/20 dark:hover:border-emerald-light dark:hover:bg-emerald-light/5 text-theme-foreground font-semibold transition-all"
              >
                {t.hero.learnMore}
              </a>
            </div>
          </div>

          {/* LCP Optimized Illustration */}
          <div className="lg:col-span-6 relative aspect-square w-full max-w-[500px] lg:max-w-none mx-auto animate-fade-in-up animate-delay-200">
            {/* Visual background decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-brand/20 to-gold-accent/20 rounded-3xl rotate-3 dark:from-emerald-brand/10 dark:to-gold-accent/10 -z-10 blur-sm" />
            <div className="absolute inset-0 bg-theme-background border border-emerald-brand/10 dark:border-emerald-light/10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero_vision.png"
                alt="Saudi Vision 2030 Majestic Modern Illustration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ contentVisibility: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
