import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5575983446135?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-emerald-950/50 border border-emerald-400/40 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-neutral-900 border border-purple-500/30 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none">
        Fale comigo no WhatsApp
      </span>
    </a>
  );
}