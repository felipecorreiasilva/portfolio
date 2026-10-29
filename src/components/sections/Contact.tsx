'use client';

import { useState } from 'react';
import { contactData } from '@/data/contact';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Send, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Mail: <HiMail className="w-6 h-6 text-purple-400" />,
  Linkedin: <FaLinkedin className="w-6 h-6 text-purple-400" />,
  Github: <FaGithub className="w-6 h-6 text-purple-400" />,
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
          Contato
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">
          Vamos <span className="text-purple-500">Conversar?</span>
        </h2>
        <p className="text-neutral-400 mt-2 text-center max-w-xl">
          Sinta-se à vontade para entrar em contato para propostas de projetos, oportunidades de trabalho ou apenas para trocar uma ideia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Informações e Redes de Contato */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6">
            Informações de Contato
          </h3>
          
          <div className="space-y-4">
            {contactData.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-purple-500/15 bg-neutral-900/40 backdrop-blur-sm hover:border-purple-500/40 hover:bg-purple-950/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-purple-600/10 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  {iconMap[item.iconName as keyof typeof iconMap]}
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-mono">{item.label}</p>
                  <p className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Formulário de Mensagem */}
        <div className="p-8 rounded-2xl border border-purple-500/20 bg-neutral-900/50 backdrop-blur-md shadow-2xl shadow-purple-950/30">
          <h3 className="text-2xl font-bold text-white mb-6">
            Envie uma Mensagem
          </h3>

          {submitted ? (
            <div className="p-6 rounded-xl bg-purple-950/50 border border-purple-500/40 text-purple-200 flex flex-col items-center text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-purple-400" />
              <h4 className="text-lg font-bold text-white">Mensagem Enviada!</h4>
              <p className="text-sm text-neutral-300">
                Obrigado pelo contato. Responderei o mais breve possível.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-purple-500/20 text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Seu E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-purple-500/20 text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Como posso te ajudar?"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-purple-500/20 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}