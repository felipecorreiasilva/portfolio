'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030014]/80 backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Nome */}
        <Link href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group">
          <div className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600/30 transition">
            <Code2 className="w-5 h-5" />
          </div>
          <span>Felipe<span className="text-purple-500">.dev</span></span>
        </Link>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botão de Ação Desktop (Contato) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-600/20 transition-all"
          >
            Fale Comigo
          </a>
        </div>

        {/* Botão do Menu Mobile (Hambúrguer) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-purple-950/40 transition"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-purple-500/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-neutral-300 hover:text-purple-400 transition-colors py-2 border-b border-neutral-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center mt-2 px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition"
          >
            Fale Comigo
          </a>
        </div>
      )}
    </header>
  );
}