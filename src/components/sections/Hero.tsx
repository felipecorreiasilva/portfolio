import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Vídeo Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/purplematrix.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        
        {/* Camada de degradê para suavizar o fundo */}
        <div className="absolute inset-0 bg-linear-to-b from-[#030014]/50 via-[#030014]/70 to-[#030014]" />
      </div>

      {/* Container Principal com Flexbox (Lado esquerdo: Textos | Lado direito: Foto) */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Lado Esquerdo: Informações e Apresentação */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
            Desenvolvedor Full Stack & Desktop
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Olá, eu sou <span className="text-purple-500 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">Felipe Correia</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
            Desenvolvedor Full Stack especializado em Node.js, React, React Native, Next.js, Electron.js e bancos de dados relacionais e não relacionais.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50"
            >
              Ver Projetos
            </a>

            <a
              href="/resume.pdf"
              download="FelipeCorreia_CV.pdf"
              className="px-6 py-3 rounded-xl border border-purple-500/30 hover:bg-purple-950/40 text-neutral-200 font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Lado Direito: Foto de Perfil */}
        <div className="shrink-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-linear-to-tr from-purple-600 via-purple-500 to-purple-300 shadow-2xl shadow-purple-500/30">
            <Image
              src="/avatar.png"
              alt="Felipe Correia"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}