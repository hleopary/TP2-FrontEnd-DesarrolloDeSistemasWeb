import { useState, useEffect, useCallback } from 'react'
import { teamData } from '../data/teamData'

const PER_PAGE = 10

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Lua: '#000080',
  Vue: '#41b883',
  SCSS: '#c6538c',
  Makefile: '#427819',
}

function parseLinkHeader(link) {
  if (!link) return null
  const parts = link.split(',')
  for (const part of parts) {
    const match = part.match(/<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="last"/)
    if (match) return parseInt(match[1], 10)
  }
  return null
}

export default function GitHubPage() {
  const [selectedSlug, setSelectedSlug] = useState(teamData[0].slug)
  const [activeTab, setActiveTab] = useState('repos')
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const member = teamData.find((m) => m.slug === selectedSlug)

  const fetchData = useCallback(async () => {
    if (!member?.social?.githubUser) return

    setLoading(true)
    setError(null)
    setData([])

    const endpoint =
      activeTab === 'repos'
        ? `https://api.github.com/users/${member.social.githubUser}/repos?per_page=${PER_PAGE}&page=${page}&sort=updated`
        : `https://api.github.com/users/${member.social.githubUser}/starred?per_page=${PER_PAGE}&page=${page}`

    try {
      const res = await fetch(endpoint)

      if (res.status === 403) {
        setError('Límite de API alcanzado. Esperá unos minutos.')
        setLoading(false)
        return
      }

      if (!res.ok) {
        setError(`Error al consultar la API (${res.status})`)
        setLoading(false)
        return
      }

      const json = await res.json()

      // Parse Link header for total pages
      const linkHeader = res.headers.get('Link')
      const lastPage = parseLinkHeader(linkHeader)

      if (lastPage) {
        setTotalPages(lastPage)
      } else {
        // If no Link header, infer from result length
        setTotalPages(json.length < PER_PAGE ? page : page + 1)
      }

      setData(json)
    } catch {
      setError('No se pudo conectar con la API de GitHub.')
    } finally {
      setLoading(false)
    }
  }, [member, activeTab, page])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Reset page when tab or member changes
  useEffect(() => {
    setPage(1)
  }, [activeTab, selectedSlug])

  const handleRetry = () => {
    fetchData()
  }

  return (
    <main>
      <section className="github-page">
        <div className="github-page__inner">
          <div className="github-page__header">
            <h1 className="github-page__title">GitHub Explorer</h1>
            <p className="github-page__subtitle">
              Explorá repositorios y starred de los miembros del equipo.
            </p>

            <div className="github-page__selector">
              <label htmlFor="member-select" className="github-page__selector-label">
                Miembro:
              </label>
              <select
                id="member-select"
                className="github-page__select"
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
              >
                {teamData.map((m) => (
                  <option key={m.slug} value={m.slug}>
                    {m.firstName} {m.lastName} ({m.social?.github})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="github-tabs">
            <button
              className={`github-tabs__btn ${activeTab === 'repos' ? 'github-tabs__btn--active' : ''}`}
              onClick={() => setActiveTab('repos')}
            >
              Repositorios
            </button>
            <button
              className={`github-tabs__btn ${activeTab === 'starred' ? 'github-tabs__btn--active' : ''}`}
              onClick={() => setActiveTab('starred')}
            >
              Starred
            </button>
          </div>

          {loading && (
            <div className="github-spinner">
              <div className="github-spinner__circle" />
              <p>Cargando...</p>
            </div>
          )}

          {error && (
            <div className="github-error">
              <p>{error}</p>
              <button className="github-error__retry" onClick={handleRetry}>
                Reintentar
              </button>
            </div>
          )}

          {!loading && !error && data.length === 0 && (
            <div className="github-empty">
              <span className="material-symbols-outlined github-empty__icon">inbox</span>
              <p>
                {activeTab === 'repos'
                  ? 'Este usuario no tiene repositorios públicos'
                  : 'Este usuario no tiene starred'}
              </p>
            </div>
          )}

          {!loading && !error && data.length > 0 && (
            <>
              <div className="github-grid">
                {activeTab === 'repos'
                  ? data.map((repo) => (
                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-card"
                      >
                        <div className="github-card__name">
                          <span className="material-symbols-outlined github-card__name-icon">
                            folder_open
                          </span>
                          {repo.name}
                        </div>
                        {repo.description && (
                          <p className="github-card__desc">{repo.description}</p>
                        )}
                        <div className="github-card__meta">
                          {repo.language && (
                            <span className="github-card__lang">
                              <span
                                className="github-card__lang-dot"
                                style={{
                                  backgroundColor:
                                    LANG_COLORS[repo.language] || '#999',
                                }}
                              />
                              {repo.language}
                            </span>
                          )}
                          <span className="github-card__stars">⭐ {repo.stargazers_count}</span>
                        </div>
                      </a>
                    ))
                  : data.map((repo) => (
                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-card"
                      >
                        <div className="github-card__name">
                          <span className="material-symbols-outlined github-card__name-icon">
                            star
                          </span>
                          {repo.full_name}
                        </div>
                        {repo.description && (
                          <p className="github-card__desc">{repo.description}</p>
                        )}
                        <div className="github-card__meta">
                          <span className="github-card__owner">
                            {repo.owner?.login}
                          </span>
                          <span className="github-card__stars">⭐ {repo.stargazers_count}</span>
                        </div>
                      </a>
                    ))}
              </div>

              <div className="github-pagination">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  ← Anterior
                </button>
                <span>
                  Página {page} de {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Siguiente →
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
