import { useEffect, useMemo, useState, useCallback } from 'react'
import { projectsData } from '../data/projectsData'
import { teamData } from '../data/teamData'

function useKeyHandler(handler) {
  useEffect(() => {
    const cb = (e) => handler(e)
    window.addEventListener('keydown', cb)
    return () => window.removeEventListener('keydown', cb)
  }, [handler])
}

export default function ProjectsPage() {
  const [query, setQuery] = useState('')
  const [view, setView] = useState('gallery') // 'table' | 'gallery'
  const [sort, setSort] = useState({ column: 'title', dir: 'asc' })
  const [page, setPage] = useState(1)
  const perPage = view === 'gallery' ? 8 : 10

  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const allItems = projectsData

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allItems
    return allItems.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.join(' ').toLowerCase().includes(q) ||
        p.member.toLowerCase().includes(q)
      )
    })
  }, [allItems, query])

  const sorted = useMemo(() => {
    const arr = [...filtered]
    const dir = sort.dir === 'asc' ? 1 : -1
    arr.sort((a, b) => {
      const va = (a[sort.column] || '').toString().toLowerCase()
      const vb = (b[sort.column] || '').toString().toLowerCase()
      if (va < vb) return -1 * dir
      if (va > vb) return 1 * dir
      return 0
    })
    return arr
  }, [filtered, sort])

  const totalPages = Math.max(1, Math.ceil(sorted.length / perPage))

  useEffect(() => setPage(1), [query, view])

  const pageItems = useMemo(() => {
    const start = (page - 1) * perPage
    return sorted.slice(start, start + perPage)
  }, [sorted, page, perPage])

  // Lightbox handlers
  const openLightbox = (idx) => {
    setLightboxIndex(idx)
  }
  const closeLightbox = () => setLightboxIndex(-1)
  const nextLightbox = () => setLightboxIndex((i) => (i + 1) % sorted.length)
  const prevLightbox = () => setLightboxIndex((i) => (i - 1 + sorted.length) % sorted.length)

  const onKey = useCallback(
    (e) => {
      if (lightboxIndex === -1) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextLightbox()
      if (e.key === 'ArrowLeft') prevLightbox()
    },
    [lightboxIndex]
  )

  useKeyHandler(onKey)

  return (
    <main>
      <section className="projects-hero">
        <div className="projects-hero__inner">
          <div className="projects-hero__header">
            <h1 className="projects-hero__title">Proyectos</h1>
            <p className="projects-hero__subtitle">Explora los proyectos del equipo.</p>
          </div>

          <div className="projects-controls">
            <input
              aria-label="Buscar proyectos"
              className="projects-search"
              placeholder="Buscar por título, descripción, tecnología o miembro..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="projects-toggle">
              <button
                className={`projects-toggle__btn ${view === 'table' ? 'is-active' : ''}`}
                onClick={() => setView('table')}
              >
                Tabla
              </button>
              <button
                className={`projects-toggle__btn ${view === 'gallery' ? 'is-active' : ''}`}
                onClick={() => setView('gallery')}
              >
                Galería
              </button>
            </div>
          </div>

          {sorted.length === 0 ? (
            <p className="projects-empty">No se encontraron proyectos</p>
          ) : (
            <>
              {view === 'table' ? (
                <div className="projects-table__wrapper">
                  <table className="projects-table">
                    <thead>
                      <tr>
                        <th onClick={() => setSort({ column: 'title', dir: sort.column === 'title' && sort.dir === 'asc' ? 'desc' : 'asc' })}>
                          Título {sort.column === 'title' ? (sort.dir === 'asc' ? '▲' : '▼') : ''}
                        </th>
                        <th onClick={() => setSort({ column: 'member', dir: sort.column === 'member' && sort.dir === 'asc' ? 'desc' : 'asc' })}>
                          Responsable {sort.column === 'member' ? (sort.dir === 'asc' ? '▲' : '▼') : ''}
                        </th>
                        <th>Tecnologías</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageItems.map((p) => (
                        <tr key={p.id}>
                          <td>{p.title}</td>
                          <td>{(teamData.find((t) => t.slug === p.member) || {}).firstName || p.member}</td>
                          <td>{p.technologies.join(', ')}</td>
                          <td>
                            <a href={p.link}>Ver</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="projects-gallery">
                  {pageItems.map((p, i) => (
                    <div key={p.id} className="projects-thumb" onClick={() => openLightbox((page - 1) * perPage + i)}>
                      <img src={p.image} alt={p.title} />
                      <div className="projects-thumb__meta">
                        <strong>{p.title}</strong>
                        <small>{(teamData.find((t) => t.slug === p.member) || {}).firstName}</small>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="projects-pagination">
                <button onClick={() => setPage((s) => Math.max(1, s - 1))} disabled={page === 1}>
                  ← Anterior
                </button>
                <span>
                  Página {page} de {totalPages}
                </span>
                <button onClick={() => setPage((s) => Math.min(totalPages, s + 1))} disabled={page === totalPages}>
                  Siguiente →
                </button>
              </div>
            </>
          )}

          {/* Lightbox modal */}
          {lightboxIndex !== -1 && (
            <div className="lightbox" onClick={(e) => { if (e.target.classList.contains('lightbox')) closeLightbox() }}>
              <div className="lightbox__modal">
                <button className="lightbox__close" onClick={closeLightbox} aria-label="Cerrar">✕</button>
                
                <div className="lightbox__content">
                  <div className="lightbox__image-section">
                    <img className="lightbox__img" src={sorted[lightboxIndex].image} alt={sorted[lightboxIndex].title} />
                    <div className="lightbox__nav-buttons">
                      <button className="lightbox__nav-btn lightbox__nav-btn--prev" onClick={prevLightbox} aria-label="Anterior">◀</button>
                      <button className="lightbox__nav-btn lightbox__nav-btn--next" onClick={nextLightbox} aria-label="Siguiente">▶</button>
                    </div>
                  </div>
                  
                  <div className="lightbox__info-section">
                    <h2 className="lightbox__title">{sorted[lightboxIndex].title}</h2>
                    
                    <p className="lightbox__description">{sorted[lightboxIndex].description}</p>
                    
                    <div className="lightbox__meta">
                      <div className="lightbox__meta-item">
                        <label>Responsable:</label>
                        <span>{(teamData.find((t) => t.slug === sorted[lightboxIndex].member) || {}).firstName}</span>
                      </div>
                      
                      <div className="lightbox__meta-item">
                        <label>Tecnologías:</label>
                        <div className="lightbox__tech-list">
                          {sorted[lightboxIndex].technologies.map((tech) => (
                            <span key={tech} className="lightbox__tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <a href={sorted[lightboxIndex].link} target="_blank" rel="noopener noreferrer" className="lightbox__link-btn">
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
