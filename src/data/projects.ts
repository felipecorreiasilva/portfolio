import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'omnixaixa',
    title: 'OmniCaixa - Sistema de Gestão',
    description: 'Sistema completo de gestão comercial composto por aplicações em Next.js (Website/Dashboard), React Native (Mobile) e Electron.js (Desktop), oferecendo uma solução multiplataforma integrada de alta performance.',
    image: '/projects/omnicaixa.png',
    tags: ['Next.js', 'React Native', 'Electron.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/felipecorreiasilva/OmniCaixa',
    liveUrl: '#',
  },
  {
    id: 'portfolio-web',
    title: 'Portfólio Profissional',
    description: 'Aplicação web moderna construída com Next.js (App Router), Tailwind CSS e efeitos visuais imersivos em vídeo.',
    image: '/projects/projectportfolio.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/felipecorreiasilva/portfolio',
    liveUrl: '#',
  },
  {
    id: 'calcular-frete-cep',
    title: 'Consulta de CEP & Cálculo de Frete',
    description: 'Aplicação desenvolvida para consulta rápida de endereços via CEP e cálculo automatizado de frete, integrada com APIs de logística.',
    image: '/projects/projectcepfrete.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/felipecorreiasilva/calcular-frete-e-consultar-cep',
    liveUrl: '#',
  },
];