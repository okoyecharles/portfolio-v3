import Navigation from "./components/navigation/Navigation";
import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Footer from "./components/footer/Footer";
import Experience from "./components/sections/experience/Experience";
import Featured from "./components/sections/project/Featured";
import MoreProjects from "./components/sections/project/MoreProjects";
import Recommendation from "./components/sections/recommendation/Recommendation";
import Contact from "./components/sections/contact/Contact";
import SkipToContent from "./components/sections/skip-to-content/SkipToContent";

export default function Page() {
  return (
    <>
      <SkipToContent />
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Featured />
      <MoreProjects />
      <Recommendation />
      <Contact />
      <Footer />
    </>
  );
}
