import { ContactInfo } from '@/types';

export const contactData: ContactInfo[] = [
  {
    type: 'WhatsApp',
    label: 'Chat direto via WhatsApp',
    value: '+55 (75) 98344-6135',
    href: 'https://wa.me/5575983446135?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!',
    iconName: 'MessageSquare',
  },
  {
    type: 'Email',
    label: 'Envie um e-mail',
    value: 'felipecorreiasilva@outlook.com',
    href: 'mailto:felipecorreiasilva@outlook.com',
    iconName: 'Mail',
  },
  {
    type: 'LinkedIn',
    label: 'Conecte-se comigo',
    value: 'in/felipe-correia-dev',
    href: 'https://www.linkedin.com/in/felipe-correia-dev/',
    iconName: 'Linkedin',
  },
  {
    type: 'GitHub',
    label: 'Confira meus repositórios',
    value: 'github.com/felipecorreiasilva',
    href: 'https://github.com/felipecorreiasilva',
    iconName: 'Github',
  },
];