import { useState } from 'react'

export default function MovieCarousel({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeVideoIndex, setActiveVideoIndex] = useState(null)

  const goToSlide = (index) => {
    let newIndex = index
    if (newIndex < 0) newIndex = movies.length - 1
    if (newIndex >= movies.length) newIndex = 0
    
    // Detener video al cambiar
    setActiveVideoIndex(null)
    setCurrentIndex(newIndex)
  }

  const handlePlay = (index) => {
    setActiveVideoIndex(index)
  }

  const handleClose = () => {
    setActiveVideoIndex(null)
  }

  return (
    <div className="movie-carousel">
      <button
        className="movie-carousel__arrow movie-carousel__arrow--prev"
        aria-label="Pelicula anterior"
        onClick={() => goToSlide(currentIndex - 1)}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      <div className="movie-carousel__viewport">
        <div
          className="movie-carousel__track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`movie-carousel__slide ${
                currentIndex === index ? 'movie-carousel__slide--active' : ''
              } ${activeVideoIndex === index ? 'movie-carousel__slide--playing' : ''}`}
            >
              <div
                className="movie-carousel__poster"
                style={{ backgroundImage: `url('${movie.poster}')` }}
              >
                <div className="movie-carousel__poster-overlay">
                  <div className="movie-carousel__content">
                    <h4 className="movie-carousel__title">{movie.title}</h4>
                    <div className="movie-carousel__meta">
                      <span>{movie.year}</span>
                      <span className="movie-carousel__badge">{movie.badge}</span>
                      <span>{movie.genre}</span>
                    </div>
                    <p className="movie-carousel__desc">{movie.desc}</p>
                    
                    {movie.awards && (
                      <div className="movie-carousel__awards">
                        <span className="material-symbols-outlined movie-carousel__award-icon">emoji_events</span>
                        <span>{movie.awards}</span>
                      </div>
                    )}
                    
                    <div className="movie-carousel__actions">
                      <button
                        className="movie-carousel__play-btn"
                        onClick={() => handlePlay(index)}
                      >
                        <span className="material-symbols-outlined">play_arrow</span>
                        Reproducir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="movie-carousel__video-container">
                {activeVideoIndex === index && (
                  <iframe
                    className="movie-carousel__iframe"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    src={movie.video}
                  ></iframe>
                )}
                <button
                  className="movie-carousel__close-btn"
                  aria-label="Cerrar video"
                  onClick={handleClose}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="movie-carousel__arrow movie-carousel__arrow--next"
        aria-label="Pelicula siguiente"
        onClick={() => goToSlide(currentIndex + 1)}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      <div className="movie-carousel__dots">
        {movies.map((_, index) => (
          <button
            key={index}
            className={`movie-carousel__dot ${
              currentIndex === index ? 'movie-carousel__dot--active' : ''
            }`}
            aria-label={`Pelicula ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}
