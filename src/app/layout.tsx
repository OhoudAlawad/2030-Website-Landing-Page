import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ohoudalawad.github.io/2030-Website-Landing-Page/"),
  title: "Saudi Vision 2030 | A Majestic National Journey | رؤية المملكة 2030",
  description: "Celebrating Saudi Vision 2030: A beautiful and performant landing page celebrating the three core pillars (Vibrant Society, Thriving Economy, Ambitious Nation) and major mega-projects including NEOM, Red Sea Global, Qiddiya, and Diriyah.",
  keywords: "Saudi Vision 2030, NEOM, Red Sea Global, Qiddiya, Diriyah, Saudi Green Initiative, Saudi Arabia 2030, رؤية 2030, مجتمع حيوي, اقتصاد مزدهر, وطن طموح, التنمية المستدامة",
  authors: [{ name: "Ohoud Alawad (عهود العواد)" }],
  openGraph: {
    title: "Saudi Vision 2030 | A Majestic National Journey",
    description: "A gorgeous Next.js & Tailwind CSS presentation celebrating the progress and sustainable future of Saudi Arabia.",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/images/hero_vision.png",
        width: 1200,
        height: 630,
        alt: "Saudi Vision 2030 Celebration Illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saudi Vision 2030 | A Majestic National Journey",
    description: "A gorgeous Next.js & Tailwind CSS presentation celebrating the progress and sustainable future of Saudi Arabia.",
    images: ["/images/hero_vision.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased scroll-smooth">
      <head>
        {/* Modern Typography from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Tajawal:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
