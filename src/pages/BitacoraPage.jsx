import { Link } from 'react-router-dom'
import RenderTree from '../components/RenderTree'

const ARBOL_NODES = [
  {
    id: 'app',
    label: 'App.jsx',
    type: 'root',
    children: [
      {
        id: 'layout',
        label: 'div.app-layout',
        type: 'layout',
        children: [
          {
            id: 'sidebar',
            label: 'Sidebar',
            type: 'layout',
            hint: '≥768px',
            children: [
              { id: 'sb-brand', label: 'Brand (Grupo Clouds)', type: 'leaf' },
              { id: 'sb-home', label: 'Principal → /', type: 'route' },
              { id: 'sb-bita', label: 'Bitácora → /bitacora', type: 'route' },
              { id: 'sb-proj', label: 'Proyectos → /proyectos', type: 'route' },
              { id: 'sb-gh', label: 'GitHub → /github', type: 'route' },
              {
                id: 'sb-team',
                label: 'Team Submenu',
                type: 'nav',
                children: [
                  { id: 'sb-edu', label: '/eduardo', type: 'route' },
                  { id: 'sb-leo', label: '/leandro', type: 'route' },
                  { id: 'sb-mel', label: '/melissa', type: 'route' },
                  { id: 'sb-mar', label: '/marcelo', type: 'route' },
                ],
              },
              { id: 'sb-theme', label: 'Theme Toggle', type: 'leaf' },
            ],
          },
          {
            id: 'content',
            label: 'div.app-layout__content',
            type: 'layout',
            children: [
              {
                id: 'navbar',
                label: 'Navbar',
                type: 'layout',
                hint: '<768px',
                children: [
                  { id: 'nb-brand', label: 'Brand', type: 'leaf' },
                  { id: 'nb-theme', label: 'Theme Toggle', type: 'leaf' },
                  { id: 'nb-slide', label: 'Hamburger + Slideout', type: 'leaf' },
                ],
              },
              {
                id: 'routes',
                label: 'Routes',
                type: 'layout',
                children: [
                  {
                    id: 'r-home',
                    label: '/ → HomePage',
                    type: 'route',
                    children: [
                      { id: 'h-hero', label: 'DashboardHero', type: 'component' },
                      { id: 'h-grid', label: 'DashboardGrid → Card[]', type: 'component' },
                    ],
                  },
                  {
                    id: 'r-bita',
                    label: '/bitacora → BitacoraPage',
                    type: 'route',
                    children: [
                      { id: 'b-hero', label: 'BitacoraHero', type: 'component' },
                      { id: 'b-cards', label: 'BitacoraCards', type: 'component' },
                      { id: 'b-minutas', label: 'MinutasList', type: 'component' },
                      { id: 'b-workflow', label: 'WorkflowGrid', type: 'component' },
                      { id: 'b-migration', label: 'MigrationGrid', type: 'component' },
                      { id: 'b-roles', label: 'RolesGrid', type: 'component' },
                      { id: 'b-tree', label: 'RenderTree', type: 'component' },
                    ],
                  },
                  {
                    id: 'r-team',
                    label: '/:slug → ProfilePage',
                    type: 'route',
                    hint: '×4 miembros',
                    children: [
                      { id: 'p-hero', label: 'ProfileHero', type: 'component' },
                      { id: 'p-skills', label: 'SkillBars', type: 'component' },
                      { id: 'p-social', label: 'SocialLinks', type: 'component' },
                      { id: 'p-movies', label: 'MovieCarousel', type: 'component' },
                      { id: 'p-spotify', label: 'SpotifyEmbed', type: 'component' },
                    ],
                  },
                  {
                    id: 'r-projects',
                    label: '/proyectos → ProjectsPage',
                    type: 'route',
                    children: [
                      { id: 'pj-search', label: 'ProjectSearch', type: 'component' },
                      { id: 'pj-grid', label: 'ProjectGrid → ProjectCard[]', type: 'component' },
                      { id: 'pj-light', label: 'ProjectLightbox', type: 'component' },
                    ],
                  },
                  {
                    id: 'r-github',
                    label: '/github → GitHubPage',
                    type: 'route',
                    children: [
                      { id: 'gh-member', label: 'MemberSelector', type: 'component' },
                      { id: 'gh-tabs', label: 'Tabs (Repos | Starred)', type: 'component' },
                      { id: 'gh-grid', label: 'GitHubCard[]', type: 'component' },
                      { id: 'gh-page', label: 'Pagination', type: 'component' },
                    ],
                  },
                ],
              },
              { id: 'footer', label: 'Footer', type: 'leaf' },
              { id: 'btt', label: 'BackToTop', type: 'leaf' },
            ],
          },
        ],
      },
    ],
  },
]

const ROLES_EQUIPO = [
  {
    nombre: 'Eduardo Moreno',
    rol: 'Desarrollador Back-End',
    github: 'https://github.com/EduMMorenolp',
    responsabilidades: [
      'Migración del sitio a React (Vite + SPA)',
      'Implementación de Home con tarjetas dinámicas',
      'Desarrollo de la página de Proyectos con dataset y lightbox',
      'Refactorización del estado con Hooks y routing',
    ],
  },
  {
    nombre: 'Leandro Paryszewski',
    rol: 'Desarrollador y Soporte',
    github: 'https://github.com/hleopary',
    responsabilidades: [
      'Armado de la estructura del perfil personal',
      'Implementación de SkillBars y SocialLinks en ProfilePage',
      'Curado de contenidos multimedia (películas, discos)',
      'Ajustes de accesibilidad y revisiones responsive',
    ],
  },
  {
    nombre: 'Melissa Galeano',
    rol: 'Desarrolladora y Tester',
    github: 'https://github.com/Molly-ibanez',
    responsabilidades: [
      'Definición del perfil con enfoque en QA/testing',
      'Integración de catálogo multimedia personal',
      'Validación manual de flujos de navegación',
      'Trabajo sobre el carrusel de proyectos en el perfil',
    ],
  },
  {
    nombre: 'Marcelo Moreno',
    rol: 'Product Designer',
    github: 'https://github.com/Javiacode',
    responsabilidades: [
      'Prototipos visuales y DESIGN.md (Lógica Atmosférica)',
      'Refactor a CSS modular y modo oscuro',
      'Bitácora ampliada, flujo de trabajo y árbol de renderizado',
      'Planificación TP2: slices, issues y arquitectura',
    ],
  },
]

export default function BitacoraPage() {
  return (
    <main>
      <section className="bitacora-hero">
        <div className="bitacora-hero__glow--top"></div>
        <div className="bitacora-hero__glow--bottom"></div>

        <div className="bitacora-hero__content">
          <p className="bitacora-hero__label">Proceso de trabajo</p>
          <h1 className="bitacora-hero__title">
            Bitacora del <span className="text-gradient">Proyecto Clouds</span>
          </h1>
          <p className="bitacora-hero__subtitle">
            Registro de avances por integrante con asistencia de IA y resumen de minutas con
            decisiones tomadas en cada reunion.
          </p>
          <div className="bitacora-hero__stats">
            <article className="bitacora-stat">
              <span className="material-symbols-outlined bitacora-stat__icon">groups</span>
              <div>
                <p className="bitacora-stat__value">4</p>
                <p className="bitacora-stat__label">integrantes</p>
              </div>
            </article>
            <article className="bitacora-stat">
              <span className="material-symbols-outlined bitacora-stat__icon">auto_awesome</span>
              <div>
                <p className="bitacora-stat__value">22+</p>
                <p className="bitacora-stat__label">cambios IA</p>
              </div>
            </article>
            <article className="bitacora-stat">
              <span className="material-symbols-outlined bitacora-stat__icon">event_note</span>
              <div>
                <p className="bitacora-stat__value">5</p>
                <p className="bitacora-stat__label">minutas clave</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bitacora-section">
        <div className="bitacora-section__inner">
          <div className="bitacora-section__header">
            <h2 className="bitacora-section__title">Bitacora IA por integrante</h2>
            <p className="bitacora-section__description">Entradas tomadas desde BitacoraIA. </p>
          </div>

          <div className="bitacora-grid">
            <article className="bitacora-card">
              <div className="bitacora-card__head">
                <h3>Eduardo</h3>
                <Link to="/eduardo">Ver perfil</Link>
              </div>
              <ul className="bitacora-card__list">
                <li>
                  <strong>2026-05-21:</strong> Página de Proyectos con dataset de 20 proyectos,
                  galería, lightbox con zoom y atajos de teclado.
                </li>
                <li>
                  <strong>2026-05-21:</strong> Sección de tarjetas dinámicas en Home + fix de
                  scroll en perfiles.
                </li>
                <li>
                  <strong>2026-05-18:</strong> Migración completa del sitio a React (Vite + SPA),
                  refactorización del estado (Hooks) y SPA routing.
                </li>
                <li>
                  <strong>2026-05-03:</strong> Corrección del menú hamburguesa y refactor de JS
                  para evitar scripts duplicados.
                </li>
              </ul>
            </article>

            <article className="bitacora-card">
              <div className="bitacora-card__head">
                <h3>Leandro</h3>
                <Link to="/leandro">Ver perfil</Link>
              </div>
              <ul className="bitacora-card__list">
                <li>
                  <strong>2026-05-25:</strong> Implementación de SkillBars (IntersectionObserver) y
                  SocialLinks (GitHub + LinkedIn) en ProfilePage.
                </li>
                <li>
                  <strong>2026-05-03:</strong> Debugging manual del menú hamburguesa y corrección
                  de enlaces de trailers y embeds de Spotify.
                </li>
                <li>
                  <strong>2026-04-20:</strong> Ajustes de accesibilidad y revisiones responsive en
                  navegación y tarjetas de intereses.
                </li>
              </ul>
            </article>

            <article className="bitacora-card">
              <div className="bitacora-card__head">
                <h3>Marcelo</h3>
                <Link to="/marcelo">Ver perfil</Link>
              </div>
              <ul className="bitacora-card__list">
                <li>
                  <strong>2026-05-26:</strong> Slice 6a — Bitácora Ampliada con Flujo de Trabajo,
                  Migración, Roles y Árbol de Renderizado.
                </li>
                <li>
                  <strong>2026-05-26:</strong> Fix bug GitHub API: social key duplicada en
                  teamData.js + typo MMolly-ibanez.
                </li>
                <li>
                  <strong>2026-05-23:</strong> Slice 5 — GitHub API Explorer + Slice 0 — Layout
                  Sidebar + Refactor Navbar mobile-only.
                </li>
                <li>
                  <strong>2026-05-21:</strong> Planificación TP2: 9 issues trazados como
                  tracer-bullet slices, arquitectura y convenciones.
                </li>
              </ul>
            </article>

            <article className="bitacora-card">
              <div className="bitacora-card__head">
                <h3>Melisa</h3>
                <Link to="/melissa">Ver perfil</Link>
              </div>
              <ul className="bitacora-card__list">
                <li>
                  <strong>2026-05-26:</strong> Asignado Slice 4 — Carrusel de Proyectos en Perfil
                  (Issue #6).
                </li>
                <li>
                  <strong>2026-05-21:</strong> Actualización de datos personales en teamData.js
                  (stack, películas, discos).
                </li>
                <li>
                  <strong>2026-04-19:</strong> Integración de catálogo multimedia para la sección de
                  intereses personales.
                </li>
                <li>
                  <strong>2026-04-18:</strong> Definición de perfil con enfoque en testing y
                  aseguramiento de calidad.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bitacora-section bitacora-section--alt">
        <div className="bitacora-section__inner">
          <div className="bitacora-section__header">
            <h2 className="bitacora-section__title">Minutas de reunion</h2>
            <p className="bitacora-section__description">
              Resumen de reuniones, decisiones de diseno y direccion tecnica tomada por el equipo.
            </p>
          </div>

          <div className="minutas-list">
            <article className="minuta-item">
              <div className="minuta-item__date">2026-05-26</div>
              <div className="minuta-item__body">
                <h3>Revisión de avances y planificación de cierre</h3>
                <p>
                  Cada integrante compartió el estado de sus issues. Se identificaron mejoras
                  pendientes y se definió el plan para finalizar el TP2.
                </p>
                <ul>
                  <li><strong>Eduardo:</strong> Completados Slice 0 (Layout), Slice 1 (Dashboard Home), Slice 3 (20 Proyectos + Lightbox).</li>
                  <li><strong>Leandro:</strong> Completado Slice 2 (Perfil Profesional — SkillBars + SocialLinks).</li>
                  <li><strong>Marcelo:</strong> Completados Slice 5 (GitHub API Explorer), Slice 6a (Bitácora Ampliada). Fix de bug en GitHubPage.</li>
                  <li><strong>Melisa:</strong> Trabajando en Slice 4 (Carrusel de Proyectos en Perfil, Issue #6).</li>
                  <li>Pendientes: Slice 6b (HITL — GitFlow real y roles), Slice 7 (HITL — README + Deploy Vercel).</li>
                  <li>Mejoras responsive mobile identificadas: navbar tapa títulos, slideout en dark mode, BackToTop contraste.</li>
                </ul>
              </div>
            </article>

            <article className="minuta-item">
              <div className="minuta-item__date">2026-05-21</div>
              <div className="minuta-item__body">
                <h3>Definición del formato de trabajo para el TP2</h3>
                <p>
                  Se estableció la metodología de trabajo con GitHub Issues, branches por slice y
                  auto-asignación según afinidad.
                </p>
                <ul>
                  <li>El proyecto se dividió en <strong>9 issues</strong> trazados como tracer-bullet vertical slices.</li>
                  <li>Cada integrante elige el slice que prefiere según su perfil técnico.</li>
                  <li>Ramas con prefijo <code>slice/N-descripcion</code>, una por issue.</li>
                  <li>PR obligatorio con al menos 1 review de otro compañero antes del merge.</li>
                  <li>Commits convencionales (<code>feat:</code>, <code>fix:</code>, <code>refactor:</code>).</li>
                </ul>
              </div>
            </article>

            <article className="minuta-item">
              <div className="minuta-item__date">2026-05-18</div>
              <div className="minuta-item__body">
                <h3>Migración a React (TP2)</h3>
                <p>
                  Se decidió refactorizar el proyecto completo pasando de HTML/JS estático a una Single Page Application con React y Vite.
                </p>
                <ul>
                  <li>Se implementó React Router DOM para la navegación sin recargas.</li>
                  <li>Se consolidaron los datos en <strong>teamData.js</strong> (Single Source of Truth).</li>
                  <li>La lógica imperativa del DOM se reemplazó por Hooks (useState, useEffect).</li>
                </ul>
              </div>
            </article>

            <article className="minuta-item">
              <div className="minuta-item__date">2026-04-08</div>
              <div className="minuta-item__body">
                <h3>Exploracion de propuestas visuales (archivada)</h3>
                <p>
                  Se evaluaron tres alternativas de producto: dashboard dinamico, portfolio bento y
                  Cloud Hub glassmorphism.
                </p>
                <ul>
                  <li>Se definio usar un contexto comun para todas las IAs.</li>
                  <li>Se establecio registrar decisiones visuales, errores y prompts usados.</li>
                </ul>
              </div>
            </article>

            <article className="minuta-item">
              <div className="minuta-item__date">2026-04-17</div>
              <div className="minuta-item__body">
                <h3>Cambio de direccion del proyecto</h3>
                <p>
                  Se descarto la idea RPG/juego y se adopto una identidad de agencia de software
                  para asegurar viabilidad tecnica y entrega.
                </p>
                <ul>
                  <li>Decision clave: pasar a estilo corporativo moderno.</li>
                  <li>
                    Referencias principales: <strong>Estilo-Visual.md</strong> y{' '}
                    <strong>DESIGN.md</strong>.
                  </li>
                </ul>
              </div>
            </article>

            <article className="minuta-item">
              <div className="minuta-item__date">2026-04-19</div>
              <div className="minuta-item__body">
                <h3>Modularizacion de CSS y consolidacion tecnica</h3>
                <p>
                  Se resolvio segmentar el CSS monolitico para mejorar mantenibilidad y trabajo
                  colaborativo sin romper enlaces existentes.
                </p>
                <ul>
                  <li>
                    Se adopto la arquitectura: <strong>base</strong>, <strong>components</strong>,{' '}
                    <strong>pages</strong>, <strong>layout</strong>, <strong>theme</strong>.
                  </li>
                  <li>Resultado: reduccion de riesgo de conflictos y mayor escalabilidad.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Flujo de Trabajo ── */}
      <section className="bitacora-section">
        <div className="bitacora-section__inner">
          <div className="bitacora-section__header">
            <h2 className="bitacora-section__title">Flujo de Trabajo</h2>
            <p className="bitacora-section__description">
              Metodología de trabajo del equipo basada en GitHub Issues, branches por slice y Pull
              Requests con revisión entre compañeros.
            </p>
          </div>

          <div className="workflow-grid">
            <article className="workflow-card">
              <span className="material-symbols-outlined workflow-card__icon">task_alt</span>
              <h3>GitHub Issues como tablero</h3>
              <p>
                El proyecto se planificó con <strong>9 issues</strong> trazados como{' '}
                <em>tracer-bullet vertical slices</em>. Cada slice es demoable de forma
                independiente y tiene criterios de aceptación claros. Los issues se auto-asignan
                según afinidad de cada integrante.
              </p>
              <ul>
                <li>Slice 0: Layout Dashboard (Sidebar + Navbar mobile)</li>
                <li>Slice 1: Dashboard Home (grilla de tarjetas)</li>
                <li>Slice 2: Perfil Profesional (skills + social links)</li>
                <li>Slice 3: 20 Proyectos + Lightbox</li>
                <li>Slice 4: Carrusel de Proyectos en Perfil</li>
                <li>Slice 5: GitHub API Explorer</li>
                <li>Slice 6a: Bitácora Ampliada</li>
                <li>Slice 6b: GitFlow real + roles (HITL)</li>
                <li>Slice 7: README + Deploy Vercel (HITL)</li>
              </ul>
            </article>

            <article className="workflow-card">
              <span className="material-symbols-outlined workflow-card__icon">call_split</span>
              <h3>Branches por slice</h3>
              <p>
                Cada issue se implementa en una rama dedicada con el prefijo{' '}
                <code>slice/N-descripcion</code>. Esto permite desarrollo en paralelo sin conflictos
                y revisión aislada de cada funcionalidad antes del merge a <code>master</code>.
              </p>
              <ul>
                <li>
                  <code>slice/0-layout-sidebar</code> — Layout base
                </li>
                <li>
                  <code>slice/1-dashboard-home</code> — Grilla principal
                </li>
                <li>
                  <code>slice/2-profile-skills</code> — Perfil profesional
                </li>
                <li>
                  <code>slice/3-projects-gallery</code> — 20 proyectos
                </li>
                <li>
                  <code>slice/5-github-api</code> — GitHub Explorer
                </li>
              </ul>
            </article>

            <article className="workflow-card">
              <span className="material-symbols-outlined workflow-card__icon">rate_review</span>
              <h3>Pull Requests con revisión</h3>
              <p>
                Cada merge a <code>master</code> requiere PR y revisión cruzada entre compañeros.
                Esto asegura calidad de código, detección temprana de bugs y transferencia de
                conocimiento entre los integrantes del equipo.
              </p>
              <ul>
                <li>PR obligatorio para mergear a master</li>
                <li>Al menos 1 review de otro integrante</li>
                <li>Verificación visual con <code>npm run dev</code> antes de mergear</li>
                <li>Commits convencionales (<code>feat:</code>, <code>fix:</code>, <code>refactor:</code>)</li>
              </ul>
            </article>

             <article className="workflow-card">
              <span className="material-symbols-outlined workflow-card__icon">forum</span>
              <h3>Herramientas de coordinación</h3>
              <p>
                Para coordinar avances y resolver bloqueos se usaron canales de comunicación
                externos al repositorio.
              </p>
              <ul>
                <li>Discord</li>
                <li>WhatsApp</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── Justificación de la Migración ── */}
      <section className="bitacora-section bitacora-section--alt">
        <div className="bitacora-section__inner">
          <div className="bitacora-section__header">
            <h2 className="bitacora-section__title">Justificación de la Migración</h2>
            <p className="bitacora-section__description">
              Análisis de la evolución del proyecto desde HTML/JS estático hacia una Single Page
              Application con React + Vite.
            </p>
          </div>

          <div className="migration-grid">
            <article className="migration-card">
              <h3>
                <span className="material-symbols-outlined">category</span>
                Componentización
              </h3>
              <p>
                En la versión HTML estática, cada página duplicaba markup (navbar, footer, cards).
                Con React, los componentes como <code>Navbar</code>, <code>Sidebar</code>,{' '}
                <code>Footer</code> y <code>BackToTop</code> se escriben una sola vez y se reutilizan
                en todas las rutas. Esto eliminó cientos de líneas de código duplicado y facilitó
                cambios globales (como el fix de dark mode en el slideout).
              </p>
            </article>

            <article className="migration-card">
              <h3>
                <span className="material-symbols-outlined">sync_alt</span>
                Estado declarativo (Hooks)
              </h3>
              <p>
                La versión anterior manipulaba el DOM de forma imperativa con{' '}
                <code>document.querySelector</code> y <code>classList.toggle</code>. React
                reemplaza esto con estado declarativo: <code>useState</code> para datos locales,{' '}
                <code>useEffect</code> para efectos secundarios (API calls, theme), y{' '}
                <code>useContext</code> para el tema oscuro. El resultado es código más predecible,
                fácil de debuggear y testear.
              </p>
            </article>

            <article className="migration-card">
              <h3>
                <span className="material-symbols-outlined">route</span>
                SPA Routing
              </h3>
              <p>
                Con 6 archivos HTML separados, la navegación requería recargas completas de página.
                React Router DOM permite navegación instantánea entre rutas (<code>/</code>,{' '}
                <code>/bitacora</code>, <code>/proyectos</code>, <code>/github</code>,{' '}
                <code>/:slug</code>) sin recargar el navegador, manteniendo el estado del tema
                oscuro y mejorando drásticamente la experiencia de usuario.
              </p>
            </article>

            <article className="migration-card">
              <h3>
                <span className="material-symbols-outlined">database</span>
                Single Source of Truth
              </h3>
              <p>
                Los datos del equipo estaban dispersos en 4 archivos HTML. Se consolidaron en{' '}
                <code>teamData.js</code>: perfiles, skills, películas, discos y redes sociales de
                los 4 integrantes en un solo array de objetos. Igual para los 20 proyectos en{' '}
                <code>projectsData.js</code>. Esto permite que cualquier componente acceda a datos
                consistentes sin duplicación.
              </p>
            </article>

            <article className="migration-card">
              <h3>
                <span className="material-symbols-outlined">bolt</span>
                Developer Experience
              </h3>
              <p>
                Vite reemplazó el servidor de archivos estáticos. Ahora tenemos HMR (Hot Module
                Replacement), build optimizado con tree-shaking, y un entorno de desarrollo moderno
                con JSX, módulos ES y soporte nativo para importaciones. El tiempo de feedback pasó
                de recarga manual completa a milisegundos.
              </p>
            </article>

            <article className="migration-card">
              <h3>
                <span className="material-symbols-outlined">dark_mode</span>
                Tematización global
              </h3>
              <p>
                El modo oscuro antes requería JavaScript imperativo en cada página. Con React
                Context (<code>ThemeProvider</code>), la clase <code>.dark</code> se aplica una sola
                vez en el <code>&lt;html&gt;</code> y todos los componentes reaccionan
                automáticamente mediante CSS variables. El toggle persiste en{' '}
                <code>localStorage</code> entre sesiones.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Roles del Equipo ── */}
      <section className="bitacora-section">
        <div className="bitacora-section__inner">
          <div className="bitacora-section__header">
            <h2 className="bitacora-section__title">Roles del Equipo</h2>
            <p className="bitacora-section__description">
              Distribución de responsabilidades y contribuciones de cada integrante en el desarrollo
              del proyecto.
            </p>
          </div>

          <div className="roles-grid">
            {ROLES_EQUIPO.map((miembro) => (
              <article key={miembro.nombre} className="role-card">
                <h3 className="role-card__name">{miembro.nombre}</h3>
                <span className="role-card__rol">{miembro.rol}</span>
                <ul className="role-card__list">
                  {miembro.responsabilidades.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* ── Árbol de Renderizado ── */}
      <section className="bitacora-section bitacora-section--alt">
        <div className="bitacora-section__inner">
          <div className="bitacora-section__header">
            <h2 className="bitacora-section__title">Árbol de Renderizado</h2>
            <p className="bitacora-section__description">
              Diagrama de la jerarquía de componentes React. Muestra cómo <code>App.jsx</code>{' '}
              orquesta el layout, las rutas y los componentes hoja. Hecho con componentes React
              puros, sin librerías externas.
            </p>
          </div>

          <div className="tree-diagram">
            <RenderTree nodes={ARBOL_NODES} />
          </div>
        </div>
      </section>
    </main>
  )
}
