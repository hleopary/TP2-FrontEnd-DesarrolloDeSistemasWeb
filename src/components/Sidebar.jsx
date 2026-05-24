import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { teamData } from '../data/teamData'

export default function Sidebar() {
  const [isDark, setIsDark] = useState(false)
  const [isTeamOpen, setIsTeamOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  // Expand Team submenu automatically if a member page is active
  useEffect(() => {
    if (teamData.some((m) => location.pathname === `/${m.slug}`)) {
      setIsTeamOpen(true)
    }
  }, [location.pathname])

  const toggleTheme = () => {
    const root = document.documentElement
    root.classList.toggle('dark')
    const dark = root.classList.contains('dark')
    setIsDark(dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const isTeamActive = teamData.some((m) => location.pathname === `/${m.slug}`)

  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__brand">Grupo Clouds</div>

        <nav className="sidebar__nav">
          <Link
            to="/"
            className={`sidebar__link ${location.pathname === '/' ? 'sidebar__link--active' : ''}`}
          >
            <span className="material-symbols-outlined sidebar__link-icon">home</span>
            Principal
          </Link>

          <Link
            to="/bitacora"
            className={`sidebar__link ${
              location.pathname === '/bitacora' ? 'sidebar__link--active' : ''
            }`}
          >
            <span className="material-symbols-outlined sidebar__link-icon">menu_book</span>
            Bitácora
          </Link>

          <Link
            to="/proyectos"
            className={`sidebar__link ${
              location.pathname === '/proyectos' ? 'sidebar__link--active' : ''
            }`}
          >
            <span className="material-symbols-outlined sidebar__link-icon">folder_open</span>
            Proyectos
          </Link>

          {/* Team submenu — click to expand/collapse */}
          <button
            className={`sidebar__link sidebar__team-toggle ${isTeamActive ? 'sidebar__link--active' : ''}`}
            onClick={() => setIsTeamOpen(!isTeamOpen)}
            aria-expanded={isTeamOpen}
          >
            <span className="material-symbols-outlined sidebar__link-icon">group</span>
            Team
            <span className={`material-symbols-outlined sidebar__chevron ${isTeamOpen ? 'sidebar__chevron--open' : ''}`}>
              expand_more
            </span>
          </button>

          <div className={`sidebar__submenu ${isTeamOpen ? 'sidebar__submenu--open' : ''}`}>
            {teamData.map((member) => (
              <Link
                key={member.slug}
                to={`/${member.slug}`}
                className={`sidebar__sublink ${
                  location.pathname === `/${member.slug}` ? 'sidebar__sublink--active' : ''
                }`}
              >
                {member.firstName}
              </Link>
            ))}
          </div>
        </nav>

        <div className="sidebar__footer">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            <span className="material-symbols-outlined theme-toggle__icon theme-toggle__icon--light">
              light_mode
            </span>
            <span className="material-symbols-outlined theme-toggle__icon theme-toggle__icon--dark">
              dark_mode
            </span>
          </button>
        </div>
      </div>
    </aside>
  )
}
