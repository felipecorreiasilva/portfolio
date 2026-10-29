import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'oasis-rpg',
    title: 'Oasis - 2.5D MMORPG',
    description: 'RPG online desenvolvido em Unity (C#) com arquitetura URP, suportado por um servidor backend em C++ (inspirado em rAthena) e portal web em Next.js para gerenciamento.',
    image: '/projects/oasis.png', // Coloque uma imagem na pasta public/projects/ se quiser
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
];