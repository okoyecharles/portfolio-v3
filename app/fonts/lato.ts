import localFont from "next/font/local";

const lato = localFont({
  src: [
    {
      path: "../../public/fonts/lato/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/lato/Lato-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-lato",
});

export default lato;