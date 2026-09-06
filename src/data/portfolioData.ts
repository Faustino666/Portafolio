export interface ExperienceItem {
  company: string
  role: string
  period?: string
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
  name: 'Cristofer Sachiel Faustino Muñoz Avila',
  role: 'Desarrollador de Software',
  tagline:
    'Especialista en desarrollo de software con experiencia en el diseño e implementación de aplicaciones.',
  location: 'Loreto, Zacatecas, México',
  email: 'munozavilafaustino@gmail.com',
  phone: '496-961-5463',
  github: 'https://github.com/Faustino666',
  githubUser: 'Faustino666',
  socials: {
    discord: '',
    spotify: '',
    youtube: '',
  },
  cvUrl: '/cv-cristofer.pdf',
  bio: 'Especialista en desarrollo de software con experiencia en el diseño e implementación de aplicaciones. Destaco por mi dominio de diversos lenguajes de programación y tecnologías y mi capacidad de crear soluciones eficientes y escalables. Deseo contribuir a una empresa dinámica y en expansión.',
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
    company: 'TecNM Campus Loreto',
    role: 'Desarrollo Web — Biblioteca del TecNM',
    location: 'Loreto, Zacatecas',
    achievements: [
      'Diseñé y desarrollé la interfaz web para la biblioteca institucional del TecNM Campus Loreto.',
      'Programé la estructura y estilos utilizando HTML y CSS.',
      'Implementé un diseño visual enfocado en accesibilidad y facilidad de navegación para estudiantes y docentes.',
      'Colaboré en la organización y presentación de contenido digital institucional.',
    ],
  },
  {
    company: 'NextByte',
    role: 'Técnico en Soporte y Tecnologías',
    location: 'Loreto, Zacatecas',
    achievements: [
      'Brindé soporte técnico y mantenimiento a equipos y sistemas informáticos.',
      'Diagnostiqué y solucioné problemas de hardware y software.',
      'Apoyé en tareas de instalación, configuración y optimización de equipos tecnológicos.',
      'Trabajé en entornos de atención técnica y resolución de incidencias.',
    ],
  },
  {
    company: 'Protección Civil',
    role: 'Desarrollador de Software',
    location: 'Loreto, Zacatecas',
    achievements: [
      'Participé en el desarrollo de un sistema orientado a la gestión y apoyo operativo para Protección Civil.',
      'Colaboré en el diseño y programación de funcionalidades del software.',
      'Apoyé en la organización de información y automatización de procesos.',
      'Trabajé en equipo aplicando metodologías de desarrollo y resolución de problemas.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'BibliotecaTecNM',
    category: 'Web · Sistema',
    description:
      'Sistema de gestión de biblioteca para el Instituto Tecnológico Superior de Loreto Zacatecas. Aplicación web en PHP + MySQL para administrar el acervo escolar: control de libros, préstamos, usuarios y multas, con panel de administración e inicio de sesión.',
    stack: ['PHP', 'MySQL'],
    repo: 'https://github.com/Faustino666/BibliotecaTecNM',
  },
  {
    name: 'Cotizador',
    category: 'Web',
    description:
      'Bocetos y prácticas de un cotizador desarrollado con Vue 3 + Vite.',
    stack: ['Vue 3', 'Vite', 'JavaScript'],
    repo: 'https://github.com/Faustino666/Cotizador',
  },
  {
    name: 'La Máquina del Pecado 3000',
    category: 'Hardware · IoT',
    description:
      'La dispensadora que convierte tu cocina en un antro con luz propia. Proyecto con Arduino Uno, ESP32 y Bluetooth.',
    stack: ['C++', 'Arduino', 'ESP32', 'Bluetooth'],
    repo: 'https://github.com/Faustino666/Maquina-del-Pecado-3000',
  },
]

export const education: EducationItem[] = [
  {
    title: 'Ingeniería en Sistemas Computacionales: Desarrollo de Software',
    institution: 'TecNM Campus Loreto',
    period: '2022 — 2026',
  },
  {
    title: 'Técnico en Programación: Programador',
    institution: 'CBTis 215',
    period: '2019 — 2022',
  },
]