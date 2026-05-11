import localFont from "next/font/local";

export const visby = localFont({
  variable: "--font-visby",
  display: "swap",
  src: [
    { path: "./local/visby/VisbyCF-Thin.woff2", weight: "100", style: "normal" },
    { path: "./local/visby/VisbyCF-ThinOblique.woff2", weight: "100", style: "italic" },

    { path: "./local/visby/VisbyCF-Light.woff2", weight: "300", style: "normal" },
    { path: "./local/visby/VisbyCF-LightOblique.woff2", weight: "300", style: "italic" },

    { path: "./local/visby/VisbyCF-Medium.woff2", weight: "500", style: "normal" },
    { path: "./local/visby/VisbyCF-MediumOblique.woff2", weight: "500", style: "italic" },

    { path: "./local/visby/VisbyCF-DemiBold.woff2", weight: "600", style: "normal" },
    { path: "./local/visby/VisbyCF-DemiBoldOblique.woff2", weight: "600", style: "italic" },

    { path: "./local/visby/VisbyCF-Bold.woff2", weight: "700", style: "normal" },
    { path: "./local/visby/VisbyCF-BoldOblique.woff2", weight: "700", style: "italic" },

    { path: "./local/visby/VisbyCF-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./local/visby/VisbyCF-ExtraBoldOblique.woff2", weight: "800", style: "italic" },

    { path: "./local/visby/VisbyCF-Heavy.woff2", weight: "900", style: "normal" },
    { path: "./local/visby/VisbyCF-HeavyOblique.woff2", weight: "900", style: "italic" },
  ],
});

export default visby;
