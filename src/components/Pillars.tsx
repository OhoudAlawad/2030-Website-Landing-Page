"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Users, Coins, Landmark } from "lucide-react";

export default function Pillars() {
  const { t, isRtl } = useLanguage();

  const pillarData = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t.pillars.vibrantSociety.title,
      desc: t.pillars.vibrantSociety.desc,
      points: isRtl
        ? ["صون التراث والهوية الوطنية", "تعزيز نمط حياة صحي ومستدام", "تمكين الكفاءات وتطوير الثقافة"]
        : ["Preserving cultural heritage", "Fostering healthy, active lifestyles", "Empowering local talent and arts"],
      bgGlow: "from-emerald-brand/10 to-emerald-light/5",
      accentBorder: "group-hover:border-emerald-brand/30",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: t.pillars.thrivingEconomy.title,
      desc: t.pillars.thrivingEconomy.desc,
      points: isRtl
        ? ["تنويع الموارد والناتج المحلي", "توطين التقنيات والابتكار الرقمي", "جذب الاستثمارات العالمية الكبرى"]
        : ["Diversifying non-oil revenues", "Accelerating technology localization", "Attracting global investments"],
      bgGlow: "from-gold-accent/10 to-gold-light/5",
      accentBorder: "group-hover:border-gold-accent/30",
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: t.pillars.ambitiousNation.title,
      desc: t.pillars.ambitiousNation.desc,
      points: isRtl
        ? ["كفاءة ومرونة الأجهزة الحكومية", "الشفافية والمساءلة والتحول الرقمي", "تعزيز المسؤولية الاجتماعية"]
        : ["Government agility and efficiency", "Transparency & digital services", "Boosting civic responsibility"],
      bgGlow: "from-emerald-light/10 to-emerald-brand/5",
      accentBorder: "group-hover:border-emerald-light/30",
    },
  ];

  return (
    <section id="pillars" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-brand/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-accent/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-gold-accent uppercase">
            {isRtl ? "ركائز التنمية" : "Pillars of Growth"}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-theme-foreground leading-tight">
            {t.pillars.title}
          </h3>
          <p className="text-base sm:text-lg text-theme-foreground/70 leading-relaxed">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarData.map((pillar, index) => (
            <div
              key={index}
              className="group relative glass-panel p-8 rounded-3xl border border-emerald-brand/5 dark:border-emerald-light/5 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              {/* Animated hover gradient glow */}
              <div className={`absolute -inset-px bg-gradient-to-br ${pillar.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-3xl`} />

              {/* Icon container */}
              <div className="inline-flex p-4 rounded-2xl bg-emerald-brand/5 dark:bg-emerald-light/10 text-emerald-brand dark:text-emerald-light mb-8 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>

              {/* Pillar Content */}
              <h4 className="text-2xl font-display font-extrabold text-theme-foreground mb-4">
                {pillar.title}
              </h4>
              <p className="text-sm text-theme-foreground/70 leading-relaxed mb-6">
                {pillar.desc}
              </p>

              {/* Key targets list */}
              <ul className="space-y-3 pt-4 border-t border-theme-foreground/5 text-xs text-theme-foreground/80 font-medium">
                {pillar.points.map((point, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5 rtl:space-x-reverse">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
