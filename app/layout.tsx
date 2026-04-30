import type { Metadata, Viewport } from "next";
import Providers from "./Providers";
import visby from "./fonts/visby";
import lato from "./fonts/lato";
import "./globals.css";
import "swiper/css";
import primaryMetadata from "./metadata";

export const metadata = primaryMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${visby.variable} ${lato.className} h-full scroll-smooth`}
    >
      <body className="font-normal bg-white dark:bg-black font-lato selection:bg-blue-200 dark:selection:bg-blue-d-300 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
