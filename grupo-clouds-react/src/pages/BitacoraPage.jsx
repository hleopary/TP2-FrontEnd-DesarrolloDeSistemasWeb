import { Link } from 'react-router-dom'

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
                <p className="bitacora-stat__value">13+</p>
                <p className="bitacora-stat__label">cambios IA</p>
              </div>
            </article>
            <article className="bitacora-stat">
              <span className="material-symbols-outlined bitacora-stat__icon">event_note</span>
              <div>
                <p className="bitacora-stat__value">3</p>
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
                  <strong>2026-04-20:</strong> Ajuste integral del perfil y stack con foco Back-End
                  + IA.
                </li>
                <li>
                  <strong>2026-04-16:</strong> Estandarizacion de consigna, arquitectura y
                  estructura de documentacion.
                </li>
                <li>
                  <strong>2026-04-16:</strong> Implementacion base del frontend y renombre global a{' '}
                  <strong>style.css</strong> y <strong>main.js</strong>.
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
                  <strong>2026-04-18:</strong> Armado de estructura inicial del perfil personal y
                  definicion del stack tecnico visible.
                </li>
                <li>
                  <strong>2026-04-19:</strong> Curado de contenidos de peliculas y discos para la
                  seccion Off the Grid.
                </li>
                <li>
                  <strong>2026-04-20:</strong> Ajustes de accesibilidad y revisiones responsive en
                  navegacion y tarjetas de intereses.
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
                  <strong>2026-04-17:</strong> Prototipos visuales y reglas de diseno en{' '}
                  <strong>DESIGN.md</strong>.
                </li>
                <li>
                  <strong>2026-04-19:</strong> Refactor a CSS modular, menu Team y modo oscuro
                  persistente.
                </li>
                <li>
                  <strong>2026-04-19:</strong> Creacion de su perfil completo con carrusel estilo
                  streaming y embeds de Spotify.
                </li>
              </ul>
            </article>

            <article className="bitacora-card">
              <div className="bitacora-card__head">
                <h3>Melisa</h3>
                <Link to="/melisa">Ver perfil</Link>
              </div>
              <ul className="bitacora-card__list">
                <li>
                  <strong>2026-04-18:</strong> Definicion de texto de perfil con enfoque en testing
                  y aseguramiento de calidad.
                </li>
                <li>
                  <strong>2026-04-19:</strong> Integracion de catalogo multimedia para la seccion de
                  intereses personales.
                </li>
                <li>
                  <strong>2026-04-20:</strong> Validacion manual del flujo de navegacion y ajustes
                  de consistencia visual en mobile.
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
    </main>
  )
}
