export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: 'Code2' | 'Layers' | 'Server' | 'Database';
  skills: string[];
}

export interface Highlight {
  iconName: 'Terminal' | 'Cpu' | 'Database' | 'Rocket';
  title: string;
  description: string;
}

export interface ContactInfo {
  type: string;
  label: string;
  value: string;
  href: string;
  iconName: 'Mail' | 'Github' | 'Linkedin' | 'MessageSquare';
}