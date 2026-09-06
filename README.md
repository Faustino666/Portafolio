# 🖥️ Portafolio estilo Windows XP

Portafolio web interactivo con la estética de **Windows XP**, construido con **Vue 3 + Vite + TypeScript**. El escritorio funciona como un sistema operativo: iconos, ventanas arrastrables, barra de tareas y menú Inicio.

## ✨ Características

- **Escritorio XP** con fondo *Bliss*, iconos auténticos de Windows XP y selección múltiple estilo XP (arrastra un rectángulo sobre los iconos).
- **Iconos funcionales**: doble clic abre las ventanas de Sobre mí, Experiencia, Proyectos, Habilidades, Formación y Contacto.
- **Ventanas al estilo XP**: arrastrables, minimizar/maximizar/cerrar, con barra de tareas que muestra las ventanas abiertas.
- **Menú Inicio funcional**: abre las aplicaciones del portafolio, con iconos originales de Windows XP y botones *Cerrar sesión* y *Apagar equipo*.
- **Proyectos reales**: enlazados a los repositorios de GitHub de Faustino666.
- **CV descargable** (`/cv-cristofer.pdf`) desde la ventana de Contacto.
- Favicon con el logo ondulado de Windows XP.

## 🛠️ Stack

| Área       | Tecnología                                        |
| ---------- | ------------------------------------------------- |
| Framework  | Vue 3 (Composition API, `<script setup>`)         |
| Lenguaje   | TypeScript                                        |
| Build      | Vite                                              |
| Estilos    | Tailwind CSS + CSS nativo (paleta Luna de Windows XP) |

## 🚀 Puesta en marcha

Requisito: Node.js `^22.18.0 || >=24.12.0` y `pnpm`.

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo
pnpm build       # type-check + build de producción
pnpm preview     # previsualizar el build
```

El build genera la salida en `dist/`.

## 📁 Estructura

```
public/icons/            # Iconos de Windows XP
src/
├── components/
│   ├── windows/         # Contenido de cada ventana (Sobre mí, Contacto, …)
│   ├── xp/              # Reproducciones (Ventana, AppIcon)
│   ├── DesktopIcon.vue  # Icono del escritorio
│   ├── Taskbar.vue      # Barra de tareas
│   └── StartMenu.vue    # Menú Inicio
├── data/
│   └── portfolioData.ts # Datos del perfil, experiencia, proyectos…
└── assets/              # Estilos base y paleta XP
```

## 📝 Datos

Toda la información personal (perfil, experiencia, formación, proyectos y contacto) está centralizada en `src/data/portfolioData.ts`. Edita ese archivo para actualizar el contenido del portafolio.

## 🙏 Créditos

- Iconos originales de Windows XP: [holylance98/WinXpIcons](https://github.com/holylance98/WinXpIcons)
- Logo del botón Inicio (fluir Windows XP): [rw-designer](https://www.rw-designer.com/icon-detail/18835)
- Fondo *Bliss* incluido en `public/wallpaper-bliss.jpg`