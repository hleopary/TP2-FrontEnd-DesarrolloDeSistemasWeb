import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className="back-to-top"
      aria-label="Volver arriba"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        right: '1rem',
        bottom: '1.25rem',
        width: '3.25rem',
        height: '3.25rem',
        borderRadius: '999px',
        border: 'none',
        background: 'var(--primary)',
        color: 'white',
        display: 'grid',
        placeItems: 'center',
        boxShadow: '0 8px 20px rgba(2,6,23,0.12)',
        opacity: isVisible ? '1' : '0',
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 200ms ease, transform 200ms ease',
        zIndex: 80,
        cursor: 'pointer',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  )
}
