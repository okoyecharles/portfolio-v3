import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import HomeBackground from "./components/sections/home/HomeBackground";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="h-full  p-6 text-grey-9 flex justify-center relative">
        <HomeBackground />
      </main>
      <Footer />
    </>
  );
}
