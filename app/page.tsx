import Navigation from "./components/navigation/Navigation";
import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Footer from "./components/footer/Footer";
import Experience from "./components/sections/experience/Experience";
import Featured from "./components/sections/project/Featured";

export default function Page() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Featured />
      <Footer />
    </>
  );
}
