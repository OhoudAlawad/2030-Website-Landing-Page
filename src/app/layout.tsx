import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageContext";
import { Almarai, Inter, Outfit, Tajawal } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

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
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${tajawal.variable} ${outfit.variable} ${almarai.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
