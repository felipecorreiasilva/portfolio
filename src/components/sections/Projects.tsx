'use client';

import { useState } from 'react';
import { projectsData } from '@/data/projects';
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
          Portfólio
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">
          Projetos em <span className="text-purple-500">Destaque</span>
        </h2>
        <p className="text-neutral-400 mt-2 text-center max-w-xl">
          Navegue pelos sistemas, aplicações e jogos que desenvolvi utilizando tecnologias modernas.
        </p>
      </div>

      {/* Container do Slide */}
      <div className="relative">
        <div className="group rounded-2xl border border-purple-500/20 bg-neutral-900/50 backdrop-blur-md overflow-hidden shadow-2xl shadow-purple-950/40 grid grid-cols-1 lg:grid-cols-2">
          
          {/* Lado Esquerdo: Imagem do Projeto */}
          <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-75 overflow-hidden bg-neutral-950 border-r border-purple-500/10">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Lado Direito: Informações do Projeto */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                  Projeto {currentIndex + 1} de {projectsData.length}
                </span>

                {/* Links de Repositório / Demo */}
                <div className="flex items-center gap-2">
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-neutral-800/80 hover:bg-purple-600/30 text-neutral-200 hover:text-purple-300 transition border border-neutral-700/50 flex items-center gap-2 text-xs font-medium"
                      aria-label="Código fonte no GitHub"
                    >
                      <FaGithub className="w-4 h-4 text-purple-400" />
                      <span>Código</span>
                    </a>
                  )}
                  {currentProject.liveUrl && currentProject.liveUrl !== '#' && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-neutral-800/80 hover:bg-purple-600/30 text-neutral-200 hover:text-purple-300 transition border border-neutral-700/50 flex items-center gap-2 text-xs font-medium"
                      aria-label="Ver projeto online"
                    >
                      <Globe className="w-4 h-4 text-purple-400" />
                      <span>Projeto</span>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {currentProject.title}
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
                {currentProject.description}
              </p>
            </div>

            {/* Tags e Controles de Navegação */}
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-500/30 text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botões de Avançar / Voltar o Slide */}
              <div className="flex items-center justify-between border-t border-purple-500/15 pt-6">
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-xl bg-neutral-800/80 hover:bg-purple-600 text-neutral-200 hover:text-white transition border border-neutral-700/50 shadow-md"
                    aria-label="Projeto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-xl bg-neutral-800/80 hover:bg-purple-600 text-neutral-200 hover:text-white transition border border-neutral-700/50 shadow-md"
                    aria-label="Próximo projeto"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Indicadores de Pontos (Dots) */}
                <div className="flex gap-2">
                  {projectsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? 'w-8 bg-purple-500 shadow-lg shadow-purple-500/50'
                          : 'w-2.5 bg-neutral-700 hover:bg-neutral-600'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}