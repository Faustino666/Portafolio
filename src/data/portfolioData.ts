export interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  achievements: string[]
}

export interface Project {
  name: string
  category: string
  description: string
  stack: string[]
  demo?: string
  repo?: string
}

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface EducationItem {
  title: string
  institution: string
  period: string
}

const ICON = (path: string): string => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`

export const profile = {
  name: 'Faustino',
  role: 'Desarrollador de Software',
  tagline: 'Desarrollo web moderno, aplicaciones móviles y sistemas interactivos.',
  location: '[Tu ciudad, País]',
  email: 'tu-email@ejemplo.com',
  github: 'https://github.com/Faustino666',
  githubUser: 'Faustino666',
  socials: {
    discord: '',
    spotify: '',
    youtube: '',
  },
  cvUrl: '/cv-faustino.pdf',
  bio: 'Soy un desarrollador de software apasionado por crear soluciones innovadoras y funcionales que aportan valor a las personas y organizaciones. Disfruto asumir nuevos retos, aprender continuamente y convertir ideas en aplicaciones eficientes, con un fuerte enfoque en la calidad, la mejora continua y la resolución de problemas a través de la tecnología.',
}

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: ICON('html5/html5-original.svg') },
      { name: 'CSS', icon: ICON('css3/css3-original.svg') },
      { name: 'JavaScript', icon: ICON('javascript/javascript-original.svg') },
      { name: 'TypeScript', icon: ICON('typescript/typescript-original.svg') },
      { name: 'React', icon: ICON('react/react-original.svg') },
      { name: 'Vue', icon: ICON('vuejs/vuejs-original.svg') },
      { name: 'Next.js', icon: ICON('nextjs/nextjs-original.svg') },
      { name: 'Tailwind CSS', icon: ICON('tailwindcss/tailwindcss-original-wordmark.svg') },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: ICON('nodejs/nodejs-original.svg') },
      { name: 'Python', icon: ICON('python/python-original.svg') },
      { name: 'Django', icon: ICON('django/django-plain.svg') },
      { name: 'Java', icon: ICON('java/java-original.svg') },
      { name: 'PHP', icon: ICON('php/php-original.svg') },
      { name: 'Express', icon: ICON('express/express-original.svg') },
      { name: 'FastAPI', icon: ICON('fastapi/fastapi-original.svg') },
    ],
  },
  {
    title: 'Base de datos',
    skills: [
      { name: 'MySQL', icon: ICON('mysql/mysql-original.svg') },
      { name: 'PostgreSQL', icon: ICON('postgresql/postgresql-original.svg') },
      { name: 'MongoDB', icon: ICON('mongodb/mongodb-original.svg') },
      { name: 'SQLite', icon: ICON('sqlite/sqlite-original.svg') },
      { name: 'Supabase', icon: ICON('supabase/supabase-original.svg') },
    ],
  },
  {
    title: 'Cloud y despliegue',
    skills: [
      { name: 'AWS', icon: ICON('amazonwebservices/amazonwebservices-original-wordmark.svg') },
      { name: 'Google Cloud', icon: ICON('googlecloud/googlecloud-original.svg') },
      { name: 'Firebase', icon: ICON('firebase/firebase-plain.svg') },
      { name: 'Vercel', icon: ICON('vercel/vercel-original.svg') },
      { name: 'Netlify', icon: ICON('netlify/netlify-original.svg') },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', icon: ICON('git/git-original.svg') },
      { name: 'VS Code', icon: ICON('vscode/vscode-original.svg') },
      { name: 'Android Studio', icon: ICON('androidstudio/androidstudio-original.svg') },
      { name: 'Arduino', icon: ICON('arduino/arduino-original.svg') },
      { name: 'Postman', icon: ICON('postman/postman-original.svg') },
      { name: 'npm', icon: ICON('npm/npm-original-wordmark.svg') },
    ],
  },
  {
    title: 'Plataformas',
    skills: [
      { name: 'GitHub', icon: ICON('github/github-original.svg') },
      { name: 'Docker', icon: ICON('docker/docker-original.svg') },
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    company: '[Nombre de la empresa]',
    role: '[Tu cargo]',
    period: 'Mes AAAA — Actualidad',
    location: '[Ciudad]',
    achievements: [
      'Logro o responsabilidad principal en proyectos destacados.',
      'Otro logro relevante con impacto medible.',
      'Detalle de tecnologías y metodologías utilizadas.',
    ],
  },
  {
    company: '[Empresa anterior]',
    role: '[Tu cargo anterior]',
    period: 'Mes AAAA — Mes AAAA',
    location: '[Ciudad]',
    achievements: [
      'Contribución clave en un proyecto o producto.',
      'Mejora de procesos o rendimiento implementada.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: '[Nombre del proyecto]',
    category: '[Web · Móvil · Sistema]',
    description: 'Descripción breve del proyecto: qué problema resuelve, para quién y cuál fue tu aporte.',
    stack: ['Vue', 'TypeScript', 'Tailwind CSS'],
    demo: '',
    repo: '',
  },
  {
    name: '[Nombre del segundo proyecto]',
    category: '[Web · Móvil · Sistema]',
    description: 'Descripción breve del segundo proyecto destacado.',
    stack: ['React', 'Node.js', 'MongoDB'],
    demo: '',
    repo: '',
  },
  {
    name: '[Nombre del tercer proyecto]',
    category: '[Web · Móvil · Sistema]',
    description: 'Descripción breve del tercer proyecto destacado.',
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    demo: '',
    repo: '',
  },
]

export const education: EducationItem[] = [
  {
    title: '[Título / Ingeniería en sistemas]',
    institution: '[Universidad / Institución]',
    period: 'AAAA — AAAA',
  },
  {
    title: 'Certificación / Curso de [Tecnología]',
    institution: '[Plataforma educativa]',
    period: 'AAAA',
  },
]