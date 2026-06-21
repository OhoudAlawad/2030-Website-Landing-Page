"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Award, Compass, Heart, Shield } from "lucide-react";

export default function About() {
  const { isRtl } = useLanguage();

  const metrics = [
    {
      icon: <Compass className="w-8 h-8 text-emerald-brand dark:text-emerald-light" />,
      value: "100%",
      label: isRtl ? "طاقة متجددة للمشاريع الكبرى" : "Renewable energy for mega projects",
      desc: isRtl ? "الاستدامة في صميم البناء والتشغيل" : "Sustainability at the core of execution",
    },
    {
      icon: <Award className="w-8 h-8 text-gold-accent" />,
      value: "Top 3",
      label: isRtl ? "عالمياً في مؤشر النضج الرقمي" : "Globally in GovTech Maturity Index",
      desc: isRtl ? "ريادة التحول والخدمات الرقمية الحكومية" : "Leading digital transformation",
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-brand dark:text-emerald-light" />,
      value: "70%+",
      label: isRtl ? "معدل تملك المساكن للمواطنين" : "Homeownership rate for citizens",
      desc: isRtl ? "تحسين جودة الحياة والبيئة السكنية" : "Improving quality of life",
    },
    {
      icon: <Shield className="w-8 h-8 text-gold-accent" />,
      value: "X2",
      label: isRtl ? "تضاعف حجم الناتج المحلي غير النفطي" : "Doubling of non-oil GDP size",
      desc: isRtl ? "تنويع الاقتصاد وتوطين الصناعات" : "Economic diversification",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-emerald-brand/5 dark:bg-emerald-brand/2 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text narrative */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-sm font-semibold tracking-wider text-gold-accent uppercase">
              {isRtl ? "ما هي الرؤية؟" : "What is the Vision?"}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-theme-foreground leading-tight">
              {isRtl
                ? "رحلة التحول الوطني للمملكة العربية السعودية"
                : "The National Transformation Journey of Saudi Arabia"}
            </h3>
            <p className="text-theme-foreground/70 leading-relaxed">
              {isRtl
                ? "تعتبر رؤية المملكة 2030 مخططاً جريئاً لمستقبل بلادنا، أطلقه صاحب السمو الملكي الأمير محمد بن سلمان ولي العهد رئيس مجلس الوزراء في عام 2016. تهدف الرؤية إلى استثمار مكامن قوتنا الفريدة وعمقنا الحضري والجغرافي لبناء مستقبل مستدام للأجيال القادمة."
                : "Saudi Vision 2030 is a bold blueprint launched by HRH Crown Prince Mohammed bin Salman in 2016. It leverages the Kingdom's unique strategic strengths—geographic location, investment power, and cultural depth—to build a sustainable, diversified future."}
            </p>
            <p className="text-theme-foreground/70 leading-relaxed">
              {isRtl
                ? "ترتكز الرؤية على صون إرثنا الثقافي، وتمكين جميع أفراد المجتمع، وإطلاق طاقاتنا الاقتصادية الواعدة للتحول نحو نموذج عالمي ريادي في مجالات البيئة والابتكار والتحول الرقمي الشامل."
                : "By preserving historic heritage, empowering citizens, and accelerating public and private digital initiatives, Vision 2030 serves as a model of clean-energy innovation and sustainable leadership."}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="glass-panel p-6 rounded-2xl border border-emerald-brand/5 hover:border-emerald-brand/20 dark:hover:border-emerald-light/20 transition-all hover:shadow-lg duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-emerald-brand/5 dark:bg-emerald-light/10 rounded-xl">
                    {metric.icon}
                  </span>
                  <span className="text-3xl sm:text-4xl font-display font-black text-theme-foreground">
                    {metric.value}
                  </span>
                </div>
                <h4 className="text-base font-bold text-theme-foreground mb-1">
                  {metric.label}
                </h4>
                <p className="text-xs text-theme-foreground/60">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
