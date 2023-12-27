import localFont from "next/font/local";

const visby = localFont({
  src: [
    {
      path: "../../../public/fonts/visby/Visby-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-Thin-Italic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-Light-Italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-Regular-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-Medium-Italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Demibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-Demibold-Italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-Bold-Italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-Extrabold-Italic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-visby",
});

export default visby;