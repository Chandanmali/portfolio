import Image from "next/image";
import Hero from "./hero/page";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import AllGithhubProjects from "@/components/allProjects";
import Contact from "./contact/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
        <AllGithhubProjects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}