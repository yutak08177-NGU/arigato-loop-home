import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import MVV from "./components/MVV";
import Values from "./components/Values";
import Business from "./components/Business";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Philosophy />
      <MVV />
      <Values />
      <Business />
      <Company />
      <Contact />
      <Footer />
    </>
  );
}
