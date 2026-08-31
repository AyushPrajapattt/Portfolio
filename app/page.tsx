import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contributions from "@/components/Contributions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contributions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
