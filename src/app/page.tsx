import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014]">
      <Hero />
      <Projects />
    </main>
  );
}