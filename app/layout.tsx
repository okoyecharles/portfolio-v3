import { Lato } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

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
    }
  ],
  display: 'swap',
  variable: '--font-visby',
});

export const metadata: Metadata = {
  title: "Okoye Charles",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${visby.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
