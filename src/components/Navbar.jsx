import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { teamData } from '../data/teamData'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    root.classList.toggle('dark')
    const dark = root.classList.contains('dark')
    setIsDark(dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Esc para cerrar menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  // Prevenir scroll cuando el menu esta abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <div className="navbar__brand">Grupo Clouds</div>
          <div className="navbar__links">
            <Link
              to="/"
              className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}
            >
              Principal
            </Link>
            <Link
              to="/bitacora"
              className={`navbar__link ${
                location.pathname === '/bitacora' ? 'navbar__link--active' : ''
              }`}
            >
              Bitácora
            </Link>
            <div className="navbar__dropdown">
              <Link
                to="#"
                className={`navbar__link navbar__dropdown-toggle ${
                  teamData.some((m) => location.pathname === `/${m.slug}`)
                    ? 'navbar__link--active'
                    : ''
                }`}
              >
                Team
                <span className="material-symbols-outlined navbar__dropdown-icon">
                  expand_more
                </span>
              </Link>
              <div className="navbar__dropdown-menu">
                {teamData.map((member) => (
                  <Link
                    key={member.slug}
                    to={`/${member.slug}`}
                    className={`navbar__dropdown-item ${
                      location.pathname === `/${member.slug}`
                        ? 'navbar__dropdown-item--active'
                        : ''
                    }`}
                  >
                    {member.firstName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="navbar__cta-wrapper">
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
          <button
            className={`navbar__menu-toggle ${isMenuOpen ? 'navbar__menu-toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`navbar__overlay ${isMenuOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
      ></div>

      <nav
        className={`navbar__slideout ${isMenuOpen ? 'navbar__slideout--open' : ''}`}
        aria-label="Navegación móvil"
      >
        <div className="navbar__slideout-inner">
          <Link to="/" className="navbar__link" onClick={closeMenu}>
            Principal
          </Link>
          <Link to="/bitacora" className="navbar__link" onClick={closeMenu}>
            Bitácora
          </Link>
          <ul className="navbar__team-list">
            {teamData.map((member) => (
              <li key={member.slug}>
                <Link to={`/${member.slug}`} onClick={closeMenu}>
                  {member.firstName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
