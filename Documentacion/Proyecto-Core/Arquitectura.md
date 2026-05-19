---
title: Arquitectura
status: activo
updated: 2026-05-18
---

# Arquitectura

## Estructura del repositorio

```text
TP-FrontEnd-DesarrolloDeSistemasWeb/
├─ README.md
├─ package.json
├─ vite.config.js
├─ index.html
├─ Documentacion/
│  ├─ Index-Principal.md
│  ├─ Consigna TP1 - Markdown.md
│  ├─ Proyecto-Core/
│  │  ├─ Overview.md
│  │  ├─ Arquitectura.md
│  │  ├─ Estilo-Visual.md
│  │  ├─ DESIGN.md
│  │  └─ Consignas-Faltantes-Por-Definir.md
│  ├─ Bitacora/
│  │  ├─ Bitacora/
│  │  │  ├─ Index-Bitacora.md
│  │  │  └─ YYYY-MM-DD.md
│  │  └─ BitacoraIA/
│  │     ├─ Index-BitacoraIA.md
│  │     ├─ Eduardo-IA.md
│  │     ├─ Leandro-IA.md
│  │     ├─ Marcelo-IA.md
│  │     └─ Melisa-IA.md
│  └─ Imagenes/
└─ src/
	├─ main.jsx
	├─ App.jsx
	├─ components/
	│  ├─ BackToTop.jsx
	│  ├─ Footer.jsx
	│  ├─ MovieCarousel.jsx
	│  ├─ MusicGrid.jsx
	│  ├─ Navbar.jsx
	│  ├─ TechIcons.jsx
	│  └─ TechStack.jsx
	├─ data/
	│  └─ teamData.js
	├─ pages/
	│  ├─ BitacoraPage.jsx
	│  ├─ HomePage.jsx
	│  └─ ProfilePage.jsx
	└─ styles/
		└─ style.css
```

## Frontend React (entregable TP2)

- `index.html`: Punto de entrada base para Vite. Contiene la precarga de tipografías y el div `#root`.
- `src/main.jsx`: Punto de anclaje de React (ReactDOM.createRoot) y proveedor del `BrowserRouter`.
- `src/App.jsx`: Maneja el ruteo de la Single Page Application (SPA) e inicializa el Dark Mode persistente.
- `src/pages/`: Componentes principales que representan vistas enteras (`HomePage`, `BitacoraPage`, y un componente dinámico `ProfilePage`).
- `src/components/`: Componentes modulares y reutilizables de UI (Navbar, Footer, Carrusel).
- `src/data/teamData.js`: Centralización (Single Source of Truth) del contenido de los integrantes. Permite un renderizado dinámico de las páginas de perfil.
- `src/styles/style.css`: Estilos combinados globalmente. Toda la lógica de "diseño modular" está compactada aquí, utilizando Custom Properties para Material Design 3.

## Criterios

- Enrutamiento sin recargas (Client-Side Routing) usando `react-router-dom`.
- Estado gestionado exclusivamente mediante React Hooks (`useState`, `useEffect`), eliminando la manipulación manual del DOM.
- Componentes altamente reutilizables.
- Responsive en 400px, 900px y 1200px.

## Convenciones

- Toda la lógica del aplicativo reside dentro de `src/`.
- Guía de Diseño: Utilizar rigurosamente `DESIGN.md` como fuente de verdad para colores y estéticas (Glassmorphism, Atmospheric Glow).
- Las páginas deben renderizarse dinámicamente mapeando el contenido desde `src/data/teamData.js`.
- Nombres de componentes React siempre en `PascalCase` (Ej: `Navbar.jsx`).
- Nombres de directorios en `camelCase` o `minusculas`.
- Las minutas de reunion usan formato `YYYY-MM-DD.md`.
- Cada cambio asistido por IA se registra en `Documentacion/Bitacora/BitacoraIA/` y en `BitacoraPage.jsx`.

## Regla de trabajo

Evitar componentes masivos. La lógica de presentación visual debe ser pura y funcional; si un elemento crece demasiado o es reutilizable en otra página, debe extraerse a su propio archivo dentro de `src/components/`.
