# Grupo Clouds - Migración a React (TP2 Frontend)

## Descripción

Este proyecto es la migración a **React** de la web grupal "Grupo Clouds", originalmente desarrollada en HTML, CSS y Vanilla JS para el TP1. 
Se ha reestructurado por completo utilizando una arquitectura basada en componentes (Component-Based Architecture) para mejorar la escalabilidad, el mantenimiento y el rendimiento, manteniendo intacta la identidad visual corporativa ("Atmospheric Logic" y "Relámpago Dorado" en modo oscuro).

## Novedades de la Migración a React

- **Vite + React:** El proyecto ha abandonado la carga estática tradicional por el empaquetador ultrarrápido Vite junto con React.
- **Enrutamiento del lado del cliente (SPA):** Reemplazo de los múltiples archivos `.html` (`index.html`, `bitacora.html`, `eduardo.html`, etc.) por `React Router DOM`. La navegación ahora es instantánea sin recargas de página.
- **Componentización:** Toda la UI ha sido desglosada en componentes funcionales reutilizables (`Navbar.jsx`, `Footer.jsx`, `MovieCarousel.jsx`, `TechStack.jsx`, etc.).
- **Manejo de Estado (Hooks):** La lógica imperativa que residía en `js/main.js` (manipulación directa del DOM mediante `getElementById` y `classList`) fue convertida a un enfoque declarativo utilizando `useState` y `useEffect`. Esto aplica al Menú Móvil, el Theme Toggle y el Carrusel de Películas.
- **Single Source of Truth:** La información de los integrantes (perfiles, películas, discos, stack técnico) que antes estaba repetida y codificada en duro en 4 HTMLs distintos, ahora se centraliza en un único archivo de datos `src/data/teamData.js`. Un solo componente (`ProfilePage.jsx`) se encarga de renderizar la vista de cualquier integrante.

## Integrantes

- Eduardo Moreno - [GitHub](https://github.com/EduMMorenolp) 
- Leandro Paryszewski - [GitHub](https://github.com/hleopary) 
- Marcelo Moreno - [GitHub](https://github.com/Javiacode) 
- Melissa Galeano - [GitHub](https://github.com/Molly-ibanez)

## Tecnologías utilizadas

- **React 18** (Librería principal)
- **Vite** (Build Tool)
- **React Router DOM** (Navegación SPA)
- **JSX** (Sistema de renderizado y marcado)
- **CSS3** puro (Arquitectura global consolidada, sin frameworks)
- Google Fonts & Material Symbols Outlined

## Estructura del proyecto en React

- `index.html`: Punto de entrada principal de Vite, contiene la precarga de fuentes.
- `src/main.jsx`: Proveedor del enrutador y punto de anclaje (`ReactDOM.createRoot`).
- `src/App.jsx`: Declaración de rutas y componente raíz de la aplicación.
- `src/components/`: Componentes modulares de la interfaz:
  - `Navbar.jsx`: Controla navegación y menú slideout.
  - `MovieCarousel.jsx`: Carrusel autónomo.
  - `TechStack.jsx` / `TechIcons.jsx`: Renderizado mapeado de íconos SVG.
  - `Footer.jsx`, `MusicGrid.jsx`, `BackToTop.jsx`.
- `src/pages/`: Vistas completas de la aplicación (`HomePage`, `BitacoraPage`, `ProfilePage`).
- `src/data/teamData.js`: Arreglo de objetos exportable con la data del equipo.
- `src/styles/style.css`: Consolidación de todos los estilos modulares del proyecto original adaptados para React.

## Guía visual (Mantenida)

La paleta de colores y el modo oscuro siguen intactos bajo la premisa "Atmospheric Logic".
- Primario: `#006591` (Dorado `#ffeebb` en dark mode).
- Primario destacado: `#0ea5e9`.
- Tipografías: `Plus Jakarta Sans` (Títulos), `Inter` (Cuerpo).

## Lógica Refactorizada (Hooks)

- `Navbar.jsx`: Maneja el overlay móvil, el menú slide-out y el botón "Dark Mode" de forma reactiva con `useState`. Escucha la tecla `Escape` con `useEffect` para cerrar menús, y previene el scroll global al abrir la navegación móvil (`document.body.style.overflow`).
- `MovieCarousel.jsx`: Reemplaza completamente el viejo slider manual. Maneja el slide activo y el iframe de video en reproducción mediante estados independientes. Garantiza que el reproductor incrustado de YouTube (iframe) se detenga al cambiar de slide o cerrarse.
- `App.jsx`: Hook de efecto (`useEffect`) inicial que lee el tema guardado en `localStorage` o `window.matchMedia` (preferencias del sistema) al montarse, evitando reseteos al recargar.

## Uso de IA en la Migración

Durante esta migración se utilizó un agente autónomo de IA integrado (Antigravity/Gemini) para:
- Leer y mapear la arquitectura monolítica antigua del TP1.
- Refactorizar las estructuras HTML largas y complejas a componentes funcionales JSX modernos.
- Extraer los datos textuales estáticos hacia un modelo JSON exportable (`teamData.js`).
- Portar y consolidar la modularización CSS hacia un entorno de Single Page Application.

## Documentación complementaria original

La documentación conceptual de UX/UI, la arquitectura CSS y las minutas iniciales del TP1 siguen estando disponibles como referencia:
- [Inicio de documentación](../TP-FrontEnd-DesarrolloDeSistemasWeb/Documentacion/Index-Principal.md)
- [Consigna TP1](../TP-FrontEnd-DesarrolloDeSistemasWeb/Documentacion/Consigna%20TP1%20-%20Markdown.md)
- [Arquitectura Teórica](../TP-FrontEnd-DesarrolloDeSistemasWeb/Documentacion/Proyecto-Core/Arquitectura.md)
- [Estilo visual](../TP-FrontEnd-DesarrolloDeSistemasWeb/Documentacion/Proyecto-Core/Estilo-Visual.md)
