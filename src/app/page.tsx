import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Business from "@/components/Business";
import Strength from "@/components/Strength";
import Vision from "@/components/Vision";
import Company from "@/components/Company";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Business />
        <Strength />
        <Vision />
        <Company />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
