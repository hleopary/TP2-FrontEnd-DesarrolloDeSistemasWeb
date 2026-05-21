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