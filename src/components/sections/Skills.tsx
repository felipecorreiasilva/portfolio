import { skillCategoriesData } from '@/data/skills';
import { Code2, Server, Database, Layers } from 'lucide-react';

const iconMap = {
  Code2: <Code2 className="w-5 h-5 text-purple-400" />,
  Layers: <Layers className="w-5 h-5 text-purple-400" />,
  Server: <Server className="w-5 h-5 text-purple-400" />,
  Database: <Database className="w-5 h-5 text-purple-400" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
          Tecnologias
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">
          Minhas <span className="text-purple-500">Habilidades</span>
        </h2>
        <p className="text-neutral-400 mt-2 text-center max-w-xl">
          Ferramentas, linguagens e tecnologias que utilizo no dia a dia para desenvolver sistemas robustos e eficientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategoriesData.map((category, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border border-purple-500/15 bg-neutral-900/40 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-600/10 border border-purple-500/20">
                {iconMap[category.iconName]}
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs sm:text-sm font-mono px-3.5 py-2 rounded-xl bg-purple-950/40 border border-purple-500/25 text-purple-200 hover:border-purple-500/50 hover:bg-purple-900/40 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}