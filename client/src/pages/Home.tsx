import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="bg-foreground text-white py-8 text-center text-sm font-light">
        <p>© {new Date().getFullYear()} LirielC Portfolio. Feito com <span className="text-destructive">❤</span> e nostalgia.</p>
      </footer>
    </div>
  );
}
