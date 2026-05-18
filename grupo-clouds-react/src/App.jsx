import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import HomePage from './pages/HomePage'
import BitacoraPage from './pages/BitacoraPage'
import ProfilePage from './pages/ProfilePage'
import { teamData } from './data/teamData'
import { useEffect } from 'react'

function App() {
  // Apply saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const root = document.documentElement
    if (saved === 'dark') root.classList.add('dark')
    else if (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.classList.add('dark')
    }
  }, [])

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
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
