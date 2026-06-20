"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const { t, isRtl } = useLanguage();

  const basePath = process.env.NODE_ENV === 'production' ? '/2030-Website-Landing-Page' : '';

  const projectList = [
    {
      title: t.projects.neom.title,
      desc: t.projects.neom.desc,
      image: `${basePath}/images/neom.png`,
      link: "https://www.neom.com",
      badge: isRtl ? "المستقبل الذكي" : "Smart Future",
    },
    {
      title: t.projects.redSea.title,
      desc: t.projects.redSea.desc,
      image: `${basePath}/images/red_sea.png`,
      link: "https://www.redseaglobal.com",
      badge: isRtl ? "سياحة متجددة" : "Regenerative Eco-Tourism",
    },
    {
      title: t.projects.qiddiya.title,
      desc: t.projects.qiddiya.desc,
      image: `${basePath}/images/qiddiya.png`,
      link: "https://qiddiya.com",
      badge: isRtl ? "عاصمة الترفيه" : "Entertainment & Sports",
    },
    {
      title: t.projects.diriyah.title,
      desc: t.projects.diriyah.desc,
      image: `${basePath}/images/diriyah.png`,
      link: "https://www.diriyah.sa",
      badge: isRtl ? "جوهرة التراث" : "Heritage Jewel",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-theme-foreground/[0.02] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-gold-accent uppercase">
            {isRtl ? "مستقبل الحضارة" : "Habitat of Tomorrow"}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-theme-foreground leading-tight">
            {t.projects.title}
          </h3>
          <p className="text-base sm:text-lg text-theme-foreground/70 leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-emerald-brand/10 dark:border-emerald-light/10 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Responsive Image with Next.js optimization */}
              <Image
                src={project.image}
                alt={`${project.title} project visualization`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              {/* Custom Badge overlay */}
              <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-brand text-white border border-emerald-light/20 shadow-md">
                {project.badge}
              </div>

              {/* Project Card Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4 text-white">
                <h4 className="text-2xl font-display font-bold flex items-center space-x-2 rtl:space-x-reverse">
                  <span>{project.title}</span>
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                  {project.desc}
                </p>

                {/* External link CTA */}
                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-bold text-gold-accent hover:text-gold-light transition-colors group-hover:underline"
                  >
                    <span>{isRtl ? "زيارة الموقع الرسمي" : "Visit Official Website"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
