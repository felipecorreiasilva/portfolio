import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014]">
      <div>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}