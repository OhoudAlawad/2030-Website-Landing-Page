"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Timeline() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="timeline" className="py-20 lg:py-28 relative overflow-hidden bg-theme-background">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-brand/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-gold-accent uppercase">
            {isRtl ? "رحلة التحول" : "Transformation Path"}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-theme-foreground leading-tight">
            {t.timeline.title}
          </h3>
          <p className="text-base sm:text-lg text-theme-foreground/70 leading-relaxed">
            {t.timeline.subtitle}
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative">
          {/* Vertical central line (desktop) / Side line (mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-brand/20 -translate-x-1/2 rtl:translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {t.timeline.years.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 rtl:translate-x-1/2 top-6 w-5 h-5 rounded-full border-4 border-theme-background bg-gold-accent shadow-md z-10" />

                  {/* Left Column Spacer (desktop only) */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Content Card Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-brand/5 hover:border-emerald-brand/20 dark:hover:border-emerald-light/20 transition-all duration-300 hover:shadow-xl relative group">
                      
                      {/* Triangle accent (desktop only) */}
                      <div
                        className={`absolute top-6 w-3 h-3 bg-card-background border-t border-l border-card-border rotate-45 hidden md:block ${
                          isEven
                            ? "left-[-6px] border-r-0 border-b-0 border-t border-l rotate-[-45deg]"
                            : "right-[-6px] border-r border-t border-l-0 border-b-0 rotate-[135deg]"
                        }`}
                      />

                      {/* Year badge */}
                      <span className="inline-block px-3 py-1 text-xs font-black rounded-full bg-gold-accent/10 text-gold-accent border border-gold-accent/20 mb-3 tracking-wide">
                        {item.year}
                      </span>
                      
                      <h4 className="text-xl font-display font-extrabold text-theme-foreground mb-2">
                        {item.title}
                      </h4>
                      
                      <p className="text-sm text-theme-foreground/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
