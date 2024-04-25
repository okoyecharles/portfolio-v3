import type { Metadata, Viewport } from "next";
import Providers from "./Providers";
import visby from "./fonts/visby";
import lato from "./fonts/lato";
import "./globals.css";
import 'swiper/css';

export const metadata: Metadata = {
  title: "Okoye Charles | Frontend Developer",
  description:
    "Hey! I'm Charles, A developer with experience in website and systems development. Learn everything about my skills, experience, and journey as a programmer.",
  keywords: [
    "Okoye Charles",
    "Charles Okoye",
    "Charles",
    "Okoye",
    "Resume",
    "Portfolio",
    "Software Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://okoyecharles.com",
    title: "Okoye Charles | Frontend Developer",
    description:
      "Hey! I'm Charles, A developer with experience in website and systems development. Learn everything about my skills, experience, and journey as a programmer.",
    siteName: "Okoye Charles | Frontend Developer",
    locale: "en_GB",
  },
  metadataBase: new URL(process.env.METADATA_BASEURL!),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${visby.variable} ${lato.variable} h-full scroll-smooth`}
    >
      <body className="font-normal bg-white dark:bg-black font-lato selection:bg-blue-200 dark:selection:bg-blue-d-300 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
