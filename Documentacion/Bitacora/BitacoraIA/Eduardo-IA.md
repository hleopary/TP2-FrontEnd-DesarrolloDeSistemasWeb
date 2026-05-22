---
title: Bitacora IA - Eduardo
status: activo
integrante: eduardo
updated: 2026-05-21
---

# Bitacora IA - Eduardo

## Formato de registro

Esta bitacora se mantiene en formato changelog.
Cada entrada representa un cambio puntual realizado con asistencia de IA.

## Changelog

### [2026-05-21] Seccion de tarjetas dinamicas + fix de redireccion en perfiles

- Tipo: Codigo frontend y UX de navegacion.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `src/pages/HomePage.jsx`
  - `src/styles/style.css`
  - `src/App.jsx`
- Cambio:
  - Se agrego una seccion nueva de integrantes en Home sin reemplazar el contenido previo (Hero, Services, Testimonials).
  - Las tarjetas se renderizan de forma dinamica desde `teamData.js`, mostrando avatar, nombre completo y rol de cada integrante.
  - Se aplico animacion de entrada escalonada (staggered) con `animation-delay` calculado por indice para mejorar la fluidez visual al cargar.
  - Se incorporo efecto hover en tarjetas (elevacion, escala sutil y realce visual).
  - Se corrigio la navegacion a perfiles agregando scroll al inicio en cada cambio de ruta para evitar que abra en la seccion `tech-stack`.
- Impacto:
  - Home mantiene su estructura original y suma acceso visual directo a perfiles del equipo.
  - Experiencia de navegacion mas predecible: cada perfil abre desde la parte superior.
- Validacion manual:
  - Se verifico la navegacion por click en tarjetas hacia rutas `/:slug`.
  - Se ejecuto `npm run build` con resultado exitoso tras los cambios.

### [2026-05-18] Migración de sitio a React (Vite + SPA)

- Tipo: Arquitectura y código frontend.
- Modelo: DeepMind Antigravity.
- Herramienta: Antigravity IDE Plugin.
- Archivos impactados:
  - `src/*` (Migración completa)
  - `package.json`, `vite.config.js`
  - `README.md`
- Cambio:
  - Se orquestó la refactorización completa del sitio desde HTML estático y Vanilla JS hacia una arquitectura basada en componentes con React y Vite.
  - Se eliminó la manipulación manual del DOM y se reemplazó por Hooks (`useState`, `useEffect`).
  - Se abstrajeron los datos repetidos (información de integrantes, películas, stacks técnicos) en un archivo JSON/JS llamado `teamData.js`.
  - Se implementó enrutamiento del lado del cliente utilizando `React Router DOM`.
- Impacto:
  - Mayor mantenibilidad, componentes reutilizables, navegación instantánea y base técnica escalable.
- Validación manual:
  - Se validó la carga de las rutas dinámicas en el navegador y el correcto funcionamiento del "Dark Mode" y menú móvil bajo el nuevo esquema de React.

### [2026-05-03] Corrección menú hamburguesa y refactor pequeño de JS

- Tipo: Código frontend.
- Modelo: GPT-5 mini.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `eduardo.html`
  - `js/main.js`
  - `README.md`
- Cambio:
  - Se movió la funcionalidad del botón "volver arriba" a `js/main.js`.
  - Se eliminó el script inline duplicado en `eduardo.html` que creaba elementos `.navbar__overlay` y `.navbar__slideout`, evitando conflictos de listeners.
  - Se centralizó la interacción del menú móvil en `js/main.js`, restaurando el comportamiento esperado del menú hamburguesa (apertura/cierre, overlay, cierre por click y Escape).
  - Se actualizó la documentación en `README.md` con la convención y la descripción de la función afectada.
- Impacto:
  - Menú hamburguesa reparado en `eduardo.html` y menor riesgo de duplicación en futuras ediciones.
- Validación manual:
  - Se probó localmente la apertura/cierre del menú y el botón volver arriba.

### [2026-04-20] Ajuste integral de perfil y stack

- Tipo: Codigo frontend y contenido.
- Modelo: GPT-5.4 mini.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Proyecto/eduardo.html`
- Cambio:
  - Se actualizo el perfil personal para reflejar experiencia en Back-End y fuerte interes en Inteligencia Artificial.
  - Se incorporaron nuevos chips al stack tecnologico: SQLite, Vite, React, MySQL, Prisma y Docker.
  - Se ajusto la imagen del hero con estilos inline para soportar una foto mas grande sin tocar el CSS global.
  - Se corrigio el enlace de video del tercer film del carrusel y se mantuvo el formato de discos con embeds de Spotify.
- Impacto:
  - La pagina de Eduardo quedo mas alineada con su perfil real y con mejor coherencia visual.
- Validacion manual:
  - Se verifico que `Proyecto/eduardo.html` quedara sin errores luego de los cambios.

### [2026-04-16] Estandarizacion de consigna en Markdown

- Tipo: Documentacion.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Documentacion/Consigna TP1 - Markdown.md`
- Cambio:
  - Se genero una copia limpia de la consigna con estructura de encabezados y listas.
- Impacto:
  - Mejor lectura y referencia rapida para el equipo.
- Validacion manual:
  - Se ajustaron detalles de redaccion y formato luego de la generacion.

### [2026-04-16] Estructura inicial de Obsidian

- Tipo: Documentacion.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Documentacion/Index.md`
  - `Documentacion/Proyecto-Core/Consignas-Faltantes-Por-Definir.md`
- Cambio:
  - Se creo indice de navegacion y checklist de consignas faltantes.
- Impacto:
  - Orden de trabajo claro antes de iniciar implementacion.
- Validacion manual:
  - Se revisaron enlaces internos y texto del checklist.

### [2026-04-16] Definicion de arquitectura y convenciones

- Tipo: Documentacion tecnica.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Documentacion/Proyecto-Core/Arquitectura.md`
- Cambio:
  - Se documento arquitectura final de carpetas, subcarpetas y criterios de trabajo.
- Impacto:
  - Base comun para todo el equipo y menor riesgo de retrabajo.
- Validacion manual:
  - Pendiente aprobacion final del equipo.

### [2026-04-16] Implementacion base de frontend

- Tipo: Codigo frontend.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Proyecto/index.html`
  - `Proyecto/bitacora.html`
  - `Proyecto/eduardo.html`
  - `Proyecto/leandro.html`
  - `Proyecto/marcelo.html`
  - `Proyecto/melisa.html`
  - `Proyecto/css/style.css`
  - `Proyecto/js/main.js`
- Cambio:
  - Se generaron paginas base con navegacion compartida.
  - Se agrego interaccion JS para portada y paginas individuales.
  - Se definieron breakpoints en 1200px, 900px y 400px.
  - Se creo estructura de assets visuales:
    - `Proyecto/img/avatares/`
    - `Proyecto/img/fondos/`
    - `Proyecto/img/ui/`
- Impacto:
  - Proyecto funcional para continuar desarrollo colaborativo.
- Validacion manual:
  - Pendiente completar contenido real por integrante.

### [2026-04-16] Renombre de archivos globales

- Tipo: Estructura de codigo.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Proyecto/css/styleGlobal.css` -> `Proyecto/css/style.css`
  - `Proyecto/js/scripts.js` -> `Proyecto/js/main.js`
- Cambio:
  - Se aplico convencion definitiva de nombres en CSS y JS.
- Impacto:
  - Coherencia entre codigo y documentacion de arquitectura.
- Validacion manual:
  - Enlaces y referencias actualizadas en las paginas base.

### [2026-04-16] Limpieza de grafo y enlaces de Obsidian

- Tipo: Documentacion Obsidian.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Documentacion/Index-Principal.md`
  - `Documentacion/Bitacora/Index-Bitacora.md`
  - `Documentacion/Bitacora/BitacoraIA/Index-BitacoraIA.md`
- Cambio:
  - Se corrigieron referencias tras reestructurar y eliminar documentos redundantes.
  - Se eliminaron enlaces cruzados entre indices para dejar un grafo mas jerarquico y legible.
- Impacto:
  - Reduccion de nodos sueltos y mejor lectura visual del grafo en Obsidian.
  - Navegacion interna mas clara entre index principal, bitacora e indice de IA.
- Validacion manual:
  - Se reviso visualmente el grafo y se confirmo mejora de la estructura.

### [2026-04-16] Estandarizacion de minutas por fecha en Bitacora

- Tipo: Documentacion Obsidian.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Documentacion/Bitacora/Bitacora/Index-Bitacora.md`
  - `Documentacion/Bitacora/Bitacora/2026-04-08.md`
- Cambio:
  - Se actualizo el indice de bitacora con una estructura estandar para minutas `YYYY-MM-DD.md`.
  - Se agrego plantilla base para nuevas minutas.
  - Se reorganizo la minuta `2026-04-08.md` para cumplir la estructura definida sin alterar su contenido.
- Impacto:
  - Uniformidad en todos los registros de reunion.
  - Facilita mantener y auditar la bitacora de forma progresiva.
- Validacion manual:
  - Se verifico que la minuta conserva toda la informacion original y ahora sigue el formato estandar.

### [2026-04-16] Actualizacion integral de documentacion de proyecto

- Tipo: Documentacion tecnica.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Documentacion/Proyecto-Core/Arquitectura.md`
  - `Documentacion/Index-Principal.md`
  - `Documentacion/Proyecto-Core/Estilo-Visual.md`
  - `Documentacion/Proyecto-Core/Consignas-Faltantes-Por-Definir.md`
- Cambio:
  - Se alineo Arquitectura con la estructura real de `Documentacion` (Index-Principal y carpeta Bitacora).
  - Se corrigio el enlace del index principal al indice real de bitacora.
  - Se documento el estado visual implementado en CSS (paleta, componentes y responsive).
  - Se actualizaron checks de consignas segun avances ya implementados en codigo y bitacora.
- Impacto:
  - Documentacion coherente con el estado actual del proyecto.
  - Menor riesgo de confusion entre estructura declarada y estructura real.
- Validacion manual:
  - Se revisaron archivos actualizados y consistencia de rutas internas en Obsidian.
