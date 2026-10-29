import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'oasis-rpg',
    title: 'Oasis - 2.5D MMORPG',
    description: 'RPG online desenvolvido em Unity (C#) com arquitetura URP, suportado por um servidor backend em C++ (inspirado em rAthena) e portal web em Next.js para gerenciamento.',
    image: '/projects/oasis.png',
    tags: ['C++', 'C#', 'Unity', 'Node.js', 'Next.js', 'MySQL'],
    githubUrl: 'https://github.com/felipecorreiasilva',
    liveUrl: '#',
  },
  {
    id: 'portfolio-web',
    title: 'Portfólio Profissional',
    description: 'Aplicação web moderna construída com Next.js (App Router), Tailwind CSS e efeitos visuais imersivos em vídeo.',
    image: '/projects/portfolio.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/felipecorreiasilva/portfolio',
    liveUrl: '#',
  },
  {
    id: 'calcular-frete-cep',
    title: 'Consulta de CEP & Cálculo de Frete',
    description: 'Aplicação desenvolvida para consulta rápida de endereços via CEP e cálculo automatizado de frete, integrada com APIs de logística.',
    image: '/projects/projectcepfrete.png', // Podes substituir pelo caminho da imagem do teu projeto
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/felipecorreiasilva/calcular-frete-e-consultar-cep',
    liveUrl: '#',
  },
];