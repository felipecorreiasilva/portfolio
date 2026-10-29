import { Terminal, Database, Cpu, Rocket } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Terminal className="w-6 h-6 text-purple-400" />,
      title: 'Desenvolvimento Full Stack & Desktop',
      description: 'Criação de aplicações web, mobile e desktop escaláveis utilizando JavaScript, TypeScript, React, Next.js, Node.js, React Native e Electron.js.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: 'Sistemas de Baixo Nível & Redes',
      description: 'Experiência com arquitetura de servidores em C++, comunicação via sockets e estruturas de pacotes de rede.',
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: 'Bancos de Dados & Fundamentos',
      description: 'Domínio de HTML5, CSS3, estilização avançada e integração com bancos relacionais (MySQL) e não relacionais (MongoDB, Firebase).',
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: 'Alta Performance',
      description: 'Foco em código limpo, otimização de performance, arquiteturas robustas e experiências de usuário fluidas.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
          Sobre Mim
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">
          Minha <span className="text-purple-500">Trajetória</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto Institucional */}
        <div className="space-y-6 text-neutral-300 leading-relaxed">
          <p className="text-lg">
            Sou um desenvolvedor apaixonado por resolver problemas complexos através do código. Minha atuação abrange desde a estruturação sólida com HTML, CSS, JavaScript e TypeScript até a criação de interfaces modernas para web e desktop.
          </p>
          <p>
            Com experiência prática em desenvolvimento de softwares desktop com Electron.js, aplicações web de alta performance com React e Next.js, além de bancos relacionais e NoSQL (MySQL, MongoDB, Firebase), busco sempre entregar soluções completas e eficientes.
          </p>
        </div>

        {/* Grade de Destaques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-purple-500/15 bg-neutral-900/40 backdrop-blur-sm hover:border-purple-500/30 transition duration-300"
            >
              <div className="p-3 rounded-xl bg-purple-600/10 border border-purple-500/20 w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}