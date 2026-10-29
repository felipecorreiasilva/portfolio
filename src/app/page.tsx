import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014]">
      <Hero />
      <Projects />
      <About />
      <Skills />
    </main>
  );
}