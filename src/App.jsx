import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import HomePage from './pages/HomePage'
import BitacoraPage from './pages/BitacoraPage'
import ProfilePage from './pages/ProfilePage'
import ProjectsPage from './pages/ProjectsPage'
import { teamData } from './data/teamData'
import { useEffect } from 'react'

function App() {
  const { pathname } = useLocation()

  // Apply saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const root = document.documentElement
    if (saved === 'dark') root.classList.add('dark')
    else if (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.classList.add('dark')
    }
  }, [])

  // Ensure route changes always start at the top of the page.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bitacora" element={<BitacoraPage />} />
        {teamData.map((member) => (
          <Route
            key={member.slug}
            path={`/${member.slug}`}
            element={<ProfilePage member={member} />}
          />
        ))}
        <Route path="/proyectos" element={<ProjectsPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
