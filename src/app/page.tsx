import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Hackathons from "@/components/Hackathons";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingOrbs from "@/components/FloatingOrbs";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <FloatingOrbs />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
