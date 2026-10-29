'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Heart } from 'lucide-react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="w-full border-t border-purple-500/15 bg-[#030014]/80 backdrop-blur-md py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Identificação / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-xl font-extrabold text-white tracking-wider">
            Felipe<span className="text-purple-500">.dev</span>
          </a>
          <p className="text-sm text-neutral-400 mt-1 text-center md:text-left">
            Desenvolvedor Full Stack & Desktop. Criando experiências digitais de alta performance.
          </p>
        </div>

        {/* Links Sociais */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/felipecorreiasilva"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-neutral-900/80 hover:bg-purple-600/20 text-neutral-300 hover:text-purple-400 border border-purple-500/20 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-correia-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-neutral-900/80 hover:bg-purple-600/20 text-neutral-300 hover:text-purple-400 border border-purple-500/20 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Direitos Autorais */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
          <span>© {currentYear} Felipe Correia. Feito com</span>
          <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />
          <span>e Next.js</span>
        </div>

      </div>
    </footer>
  );
}