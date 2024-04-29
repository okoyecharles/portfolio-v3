import Navigation from "./components/navigation/Navigation";
import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Footer from "./components/footer/Footer";
import Experience from "./components/sections/experience/Experience";
import FeaturedProjects from "./components/sections/featured-project/FeaturedProjects";
import Projects from "./components/sections/project/Projects";
import Recommendations from "./components/sections/recommendation/Recommendations";
import Contact from "./components/sections/contact/Contact";
import SkipToContent from "./components/sections/skip-to-content/SkipToContent";
import Script from "next/script";

export default function Page() {
  return (
    <>
      {/* analytics tags begin here */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG_ID}`}
        
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG_ID}');
          `
        }}
      />
      {/* analytics tags ends here */}

      <SkipToContent />
      <Navigation />
      <Home />
      <About />
      <Experience />
      <FeaturedProjects />
      <Projects />
      <Recommendations />
      <Contact />
      <Footer />
    </>
  );
}
