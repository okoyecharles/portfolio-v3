import localFont from "next/font/local";

const visby = localFont({
  src: [
    {
      path: "../../../public/fonts/visby/Visby-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Demibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-DemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/fonts/visby/Visby-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/visby/Visby-ExtraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-visby",
});

export default visby;