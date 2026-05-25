import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { teamData } from '../data/teamData'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

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
          <div className="navbar__actions">
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
          <Link to="/proyectos" className="navbar__link" onClick={closeMenu}>
            Proyectos
          </Link>
          <Link to="/github" className="navbar__link" onClick={closeMenu}>
            GitHub
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
