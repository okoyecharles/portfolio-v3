import { Metadata } from "next"

const metadata: Metadata = {
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
    url: process.env.METADATA_BASEURL!,
    title: "Okoye Charles | Frontend Developer",
    description:
      "Hey! I'm Charles, A developer with experience in website and systems development. Learn everything about my skills, experience, and journey as a programmer.",
    siteName: "Okoye Charles | Frontend Developer",
    locale: "en_GB",
  },
  metadataBase: new URL(process.env.METADATA_BASEURL!),
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_ID!,
  },
}

export default metadata;
