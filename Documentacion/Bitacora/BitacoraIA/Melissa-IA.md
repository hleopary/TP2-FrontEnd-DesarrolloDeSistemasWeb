---
title: Bitacora IA - Melissa
status: activo
integrante: melissa
updated: 2026-04-16
---

# Bitacora IA - Melissa

## Formato de registro

Esta bitacora se mantiene en formato changelog.
Cada entrada representa un cambio puntual realizado con asistencia de IA.

## Changelog

### [2026-05-29] Implementación de componente ProjectCarousel responsivo e infinito

- Tipo: Código frontend y UX/UI.
- Modelo: Gemini.
- Herramienta: Chat.
- Archivos impactados:
  - `src/components/ProjectCarousel.jsx` (nuevo)
  - `src/pages/ProfilePage.jsx` (modificado)
  - `src/styles/style.css` (modificado)
- Cambio:
  - Se desarrolló el componente funcional `ProjectCarousel` que consume y filtra datos desde `projectsData.js` según el integrante actual (`memberSlug`).
  - Se implementó una lógica de navegación cíclica (carrusel infinito) utilizando el hook `useState` y cálculos de módulo matemático.
  - Se solucionó el problema de renderizado dinámico en CSS aplicando matemática directa en el atributo `style` de React `(100 / filteredProjects.length)` para evitar saltos en la transición de las tarjetas.
  - Se adaptó el CSS para lograr un diseño responsivo puro (1 tarjeta en mobile, 2 en tablet, 3 en desktop) controlando el `min-width` mediante variables CSS (`--slide-width`).
  - Se modificó la estructura HTML y CSS para posicionar los botones de navegación (flechas) a los laterales con `position: absolute`, manteniendo consistencia UI con el `MovieCarousel`.
  - Se aplicó diseño tipo "ghost button" (transparente con borde y texto outline, más efecto hover suave) para los tags del stack tecnológico, respetando los *Design Tokens* globales del proyecto.
- Impacto:
  - Nueva sección dinámica en la página de perfil que destaca los proyectos del equipo sin depender de librerías externas.
  - UX fluida gracias a las transiciones suaves (`ease-in-out`) y botones de control intuitivos.
  - Interfaz gráfica limpia y minimalista, estandarizada con el resto de la página web.
- Validacion manual:
  - Carrusel probado en múltiples resoluciones (mobile/desktop), confirmando que las tarjetas no se cortan.
  - Verificación de la navegación cíclica hacia adelante y hacia atrás sin llegar a "pantallas en blanco".


### [YYYY-MM-DD] Titulo breve del cambio

- Tipo:
- Modelo:
- Herramienta:
- Archivos impactados:
- Cambio:
- Impacto:
- Validacion manual: