import { ContactInfo } from '@/types';

export const contactData: ContactInfo[] = [
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
    value: 'in/felipe-correia-0655a1357',
    href: 'https://www.linkedin.com/in/felipe-correia-0655a1357/',
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