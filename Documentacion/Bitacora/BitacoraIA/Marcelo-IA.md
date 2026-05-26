---
title: Bitacora IA - Marcelo
status: en-progreso
integrante: marcelo
updated: 2026-05-21
---

# Bitacora IA - Marcelo

## Formato de registro

Esta bitacora se mantiene en formato changelog.
Cada entrada representa un cambio puntual realizado con asistencia de IA.

## Changelog

### [2026-05-03] Fix menú hamburguesa mobile — slide-out glassmorphism

- Tipo: Desarrollo Frontend / UX Mobile.
- Modelo: MiniMax M2.7 (OpenCode Go)
- Herramienta: Agente SDD (OpenCode).
- Archivos impactados:
  - `css/components/navbar.css`
  - `js/main.js`
  - `index.html`, `bitacora.html`, `eduardo.html`, `leandro.html`, `melisa.html`, `marcelo.html`
- Cambio:
  - Implementación de panel slide-out glassmorphism desde el borde derecho para navegación mobile (<768px).
  - El botón hamburguesa no tenía handler JS — se agregó toggle completo con `openMenu()` / `closeMenu()` y transiciones 300ms.
  - Se corrigió bug crítico: `main.js` se cargaba ANTES del overlay/slideout en el DOM, causando que el script hiciera return temprano en mobile. Los elementos overlay y slideout fueron reordenados después del script en las 6 páginas.
  - Icono hamburguesa ahora muta a "close" cuando el menú está abierto.
  - Overlay con `backdrop-filter: blur(8px)` cierra el menú al tap.
  - Team members mostrados como lista inline (no dropdown — el hover no funciona en touch).
  - Modo oscuro soportado (`rgba(15,23,42,0.85)` en slideout).
  - Cierre por tecla Escape y lock de scroll del body.
- Impacto:
  - Navegación mobile completamente funcional. Todos los criterios de aceptación verificados (14/14).
- Validación manual:
  - Se probó en DevTools con viewport <768px. Click en hamburguesa abre panel, tap en overlay lo cierra, links navegan y auto-cierran el menú.


### [2026-04-19] Creación de Perfil Marcelo con Carrusel estilo Netflix y Spotify

- Tipo: Desarrollo Frontend / UI.
- Modelo: Gemini 3.1 Pro (High).
- Herramienta: AI Assistant.
- Archivos impactados:
  - `Proyecto/marcelo.html`
  - `Proyecto/css/style.css`
  - `Proyecto/js/main.js`
- Cambio:
  - Creación completa de la tarjeta de perfil en `marcelo.html` con sus estilos siguiendo lineamientos de *Atmospheric Logic*.
  - Especificación en el diseño de las tecnologías dominadas (HTML, CSS, Git/GitHub, JavaScript, TypeScript, C#, Kotlin, Bases de datos SQL).
  - Desarrollo de un carrusel de películas interactivo embebido estilo Netflix.
  - Integración de código provisto por Spotify para los discos favoritos, adaptado con `.cloud-shadow` y `border-radius` xl en concordancia con el sistema de diseño.
- Impacto:
  - Provee la presentación individual del integrante con interactividad compleja que enriquece el ecosistema visual del equipo de desarrollo.
- Validación manual:
  - Se comprobó la correcta visualización del Stack, la reproducción y navegación de las películas del carrusel, y la carga correcta de los iframes de Spotify sin romper estilos.

### [2026-04-19] Refactorización a CSS Vanilla, Menú Desplegable y Modo Oscuro "Relámpago Dorado"

- Tipo: Refactorización y UI/UX Frontend.
- Modelo: Claude Opus 4.6 (Thinking) / Gemini 3.1 Pro.
- Herramienta: AI Assistant.
- Archivos impactados:
  - `Proyecto/index.html`
  - `Proyecto/css/style.css`
  - `Proyecto/js/main.js`
- Cambio:
  - Migración completa de clases utilitarias de Tailwind a CSS vanilla estructurado con metodología BEM.
  - Actualización de la barra de navegación: Enlaces a "Principal", "Bitácora", y creación de un menú desplegable interactivo "Team" para los integrantes.
  - Implementación del modo oscuro basado en estética "Relámpago Dorado" (inspirado en `indexexample2.html`), y adición de un botón de toggle dinámico (Sol/Luna) usando JavaScript y `localStorage`.
- Impacto:
  - Cumplimiento de requisitos de usar CSS vanilla puro. Mejora sustancial de la arquitectura de la interfaz y usabilidad con capacidades de tematización y navegación optimizada.
- Validación manual:
  - Se verificó visualmente el resultado comprobando estilos de Tailwind removidos, la apertura del dropdown de equipo sin errores, y persistencia del switch de modo oscuro en la recarga del navegador.

### [2026-04-17] Generación de prototipos visuales y reglas de diseño

- Tipo: Diseño y Prototipado Frontend.
- Modelo: Modelo interno de Google Stitch.
- Herramienta: Google Stitch.
- Archivos impactados:
  - `Documentacion/ejemploshtml/indexexample2.html`
  - `Documentacion/ejemploshtml/bitacora.html`
  - `Documentacion/ejemploshtml/tarjeta.html`
  - `Documentacion/Proyecto-Core/DESIGN.md`
- Cambio:
  - Se elaboraron maquetas funcionales y demostraciones de diseño en HTML usando el nuevo tema corporativo (Lógica Atmosférica).
  - Se redactó `DESIGN.md` como guía central de estilo UI/UX, definiendo la regla de 'cero líneas', colores de estratosfera y fuentes asimétricas.
- Impacto:
  - Establece la base de código frontend y la arquitectura visual que todo el equipo deberá usar para el resto de la cursada/proyecto.
- Validacion manual:
   - El equipo revisó los HTMLs generados comprobando la responsividad y la cohesión con la dirección estética dictada.

### [2026-05-21] Planificación TP2: Upgrade Vite, Consigna, Issues y Arquitectura de Slices

- Tipo: Arquitectura, Documentación y Planificación.
- Modelo: DeepSeek V4 Pro (OpenCode).
- Herramienta: Agente SDD + GitHub Issues.
- Archivos impactados:
  - `package.json` (vite ^5.1.6 → 6.4.2)
  - `Documentacion/Proyecto-Core/Consigna TP2.md` (nuevo)
  - `Documentacion/Bitacora/BitacoraIA/Marcelo-IA.md`
  - GitHub Issues #1 al #9
- Cambio:
  - Se resolvieron 2 vulnerabilidades moderadas en esbuild (GHSA-67mh-4wv8-2f99) mediante upgrade de Vite 5.1.6 a 6.4.2. Build verificado (42 módulos, 0 vulnerabilidades). @vitejs/plugin-react mantenido en ^4.x compatible con Vite 6.
  - Se redactó `Consigna TP2.md` con los 8 requerimientos obligatorios del TP2: Sidebar Dashboard, Dashboard Home, Perfil Profesional, Explorador JSON, API Externa, Galería Lightbox, Bitácora Ampliada y Árbol de Renderizado.
  - Sesión intensiva de preguntas para definir arquitectura: Sidebar + Navbar coexisten (Opción B), dataset de 20 proyectos del equipo (Opción A), GitHub API para repos/starred (Opción A), Galería integrada con Explorador en misma página.
  - Se crearon 9 issues en GitHub con tracer-bullet vertical slices, cada uno demoable independientemente, con dependencias claras entre sí. 2 issues marcados HITL (requieren input del equipo).
  - Issues: #1 Layout Dashboard, #2 Dashboard Home, #3 Perfil Skills+Social, #4 20 Proyectos+Lightbox, #5 GitHub API, #6 Carrusel Perfil, #7 Bitácora Ampliada, #8 Datos Equipo (HITL), #9 README+Deploy (HITL).
- Impacto:
  - Proyecto con 0 vulnerabilidades, entorno de desarrollo estable.
  - Consigna TP2 documentada y accesible para todo el equipo.
  - Plan de trabajo completo con 9 slices trazados, lista para que cada integrante se auto-asigne issues según afinidad.
  - Arquitectura definida: Layout con Sidebar desktop + Navbar mobile, datos centralizados en teamData.js y projectsData.js, flujo Git con branches por slice y PRs.
- Validación manual:
  - `npm run dev` y `vite build` ejecutados sin errores.
  - Issues verificados en GitHub: https://github.com/Javiacode/TP-FrontEnd-DesarrolloDeSistemasWeb/issues

### [2026-05-23] Implementación Slice 0 — Layout con Sidebar glassmorphism

- Tipo: Desarrollo Frontend / Arquitectura.
- Modelo: DeepSeek V4 Pro (OpenCode).
- Herramienta: Agente SDD (sdd-apply).
- Archivos impactados:
  - `src/components/Sidebar.jsx` (nuevo)
  - `src/App.jsx`
  - `src/styles/style.css`
- Cambio:
  - Issue #1 — Layout Dashboard: creado componente Sidebar con navegación desktop usando glassmorphism idéntico al Navbar existente (`backdrop-filter: blur(24px)`, `rgba(255,255,255,0.7)`).
  - Sidebar contiene: brand "Grupo Clouds", links con íconos Material Symbols (Principal, Bitácora, Proyectos), submenú Team expandible por click con los 4 integrantes, y theme toggle (light/dark).
  - Submenú Team se auto-expande si el usuario navega al perfil de un miembro.
  - En desktop (≥768px): Sidebar fijo a la izquierda (260px, `z-index: 40`), Navbar completamente oculto (`display: none`), contenido con `margin-left: 260px` para no solaparse.
  - En mobile (<768px): Sidebar oculto, Navbar con hamburger slideout — comportamiento intacto, sin cambios en la lógica mobile.
  - App.jsx refactorizado con wrapper `.app-layout` flex: Sidebar + `.app-layout__content` (Navbar + Routes + Footer + BackToTop).
  - Dark mode completo para el Sidebar (`rgba(19,19,19,0.8)`, borde derecho sutil, links dorados).
  - Decisión: Navbar se oculta completamente en desktop — Sidebar absorbe toda la navegación. No se mantiene barra híbrida para evitar duplicación visual.
- Impacto:
  - Se completa el Slice 0 (Issue #1), desbloqueando la estructura base de la app. Los slices subsiguientes (#3, #5, #6, #7, #8, #9) ahora tienen un shell de layout definido donde renderizar.
  - Arquitectura responsive finalmente implementada según la decisión original: Sidebar desktop + Navbar mobile.
  - Los slices ya mergeados (#2 Dashboard, #4 Proyectos) se integran automáticamente dentro del layout sin necesidad de refactor.
- Validación manual:
   - Usuario verificó visualmente con `npm run dev` en viewports desktop y mobile. Sidebar visible en ≥768px, Navbar hamburger funcional en <768px.

### [2026-05-23] Refactor Navbar a mobile-only + fix dark mode slideout y BackToTop

- Tipo: Refactorización / Bugfix UI.
- Modelo: DeepSeek V4 Pro (OpenCode).
- Herramienta: Agente SDD (sdd-apply).
- Archivos impactados:
  - `src/components/Navbar.jsx`
  - `src/components/BackToTop.jsx`
  - `src/styles/style.css`
- Cambio:
  - **Refactor Navbar**: eliminado todo el código muerto de navegación desktop (`.navbar__links` con links horizontales, dropdown Team con hover, `.navbar__cta-wrapper`). El Navbar ahora es puramente mobile: barra superior con brand + theme toggle + hamburguesa, overlay y slideout. Se removió `useLocation` y lógica de links activos. -80 líneas de código muerto (JSX + CSS).
  - **Fix Proyectos en slideout mobile**: Eduardo agregó "Proyectos" al Navbar desktop pero lo omitió en el slideout mobile. Agregado link faltante.
  - **Fix dark mode slideout**: el panel slideout mobile tenía fondo blanco hardcodeado (`rgba(255,255,255,0.85)`) que no cambiaba en dark mode. Agregadas reglas `.dark .navbar__slideout` con glassmorphism oscuro (`rgba(19,19,19,0.85)`) y links en `var(--on-surface-variant)` con hover `var(--primary)`.
  - **Fix BackToTop dark mode**: el botón usaba `var(--primary)` como fondo, que en dark mode es `#ffeebb` (crema) con flecha `white` → ilegible. Cambiado a `var(--surface-container-high)` para fondo (`#2a2a2a` en dark) y `var(--primary)` para la flecha (`#ffeebb` en dark), mismo patrón que el theme-toggle.
- Impacto:
  - Navbar enfocado en su única responsabilidad (mobile), sin código que confunda.
  - Slideout mobile ahora legible en dark mode. BackToTop visible en ambos temas.
- Validación manual:
  - Usuario verificó visualmente con `npm run dev`: slideout mobile oscuro en dark mode, BackToTop con contraste adecuado en ambos temas.

### [2026-05-23] Implementación Slice 5 — GitHub API Explorer

- Tipo: Desarrollo Frontend / Integración API.
- Modelo: DeepSeek V4 Pro (OpenCode).
- Herramienta: Agente SDD (sdd-apply).
- Archivos impactados:
  - `src/pages/GitHubPage.jsx` (nuevo)
  - `src/data/teamData.js`
  - `src/components/Sidebar.jsx`
  - `src/components/Navbar.jsx`
  - `src/App.jsx`
  - `src/styles/style.css`
- Cambio:
  - Issue #5 — GitHub API Explorer: página `/github` que consume la API pública de GitHub sin token.
  - Selector de miembro para elegir entre los 4 integrantes y ver sus repos/starred.
  - Tabs "Repositorios" y "Starred" con estilo pill glassmorphism.
  - Fetch asíncrono con estados: loading (spinner CSS), error (con botón Reintentar), empty (mensaje informativo), 403 rate limit ("Límite de API alcanzado").
  - Paginación con parseo del header `Link` de GitHub para detectar total de páginas.
  - Cards de repo: nombre, descripción, lenguaje con dot de color (mapa de 27 lenguajes), ⭐, link a GitHub.
  - Cards de starred: nombre, descripción, owner, ⭐, link a GitHub.
  - Agregado link `/github` al Sidebar (escritorio) y al slideout del Navbar (mobile).
  - Se agregó campo `social.github` a `teamData.js` con los 4 usernames: EduMMorenolp, hleopary, Molly-ibanez, Javiacode. Esto desbloquea también el Slice 2 (Perfil Skills+Social) para que el compañero lo complete.
  - Dark mode completo para todos los nuevos componentes.
- Impacto:
  - Nueva página funcional con datos reales de GitHub de cada integrante, demoable de forma independiente.
  - Slice 2 parcialmente desbloqueado al tener `social.github` en teamData.
- Validación manual:
  - Usuario verificó visualmente con `npm run dev`: fetch exitoso de repos y starred de miembros reales, paginación funcional, tabs switchean correctamente. Bug visual menor detectado en mobile (navbar tapa el título) — pendiente de fix.
- Branch: `slice/5-github-api`