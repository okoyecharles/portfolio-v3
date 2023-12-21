import { Lato } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./Providers";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const visby = localFont({
  src: [
    {
      path: "../public/visby/Visby-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/visby/Visby-Thin-Italic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/visby/Visby-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/visby/Visby-Light-Italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/visby/Visby-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/visby/Visby-Regular-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/visby/Visby-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/visby/Visby-Medium-Italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/visby/Visby-Demibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/visby/Visby-Demibold-Italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/visby/Visby-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/visby/Visby-Bold-Italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/visby/Visby-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/visby/Visby-Extrabold-Italic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-visby",
});

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
  metadataBase: new URL("https://okoyecharles.com"),
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
      className={` ${visby.variable} ${lato.variable} h-full overflow-y-hidden`}
    >
      <body className="bg-white dark:bg-black h-full overflow-y-scroll font-lato font-normal">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
