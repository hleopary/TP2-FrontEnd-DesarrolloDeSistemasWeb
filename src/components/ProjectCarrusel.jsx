import React, { useState } from 'react';
import { projectsData } from '../data/projectsData'; 

const ProjectCarrusel = ({ memberSlug }) => {
  // Filtrar proyectos por el slug del integrante actual 
  const filteredProjects = projectsData.filter(project => project.member === memberSlug);
  
  // Estado para manejar el slide actual (índice inicial 0) 
  const [currentIndex, setCurrentIndex] = useState(0);

 const goToSlide = (index) => {
    let newIndex = index;
    // Si retrocede antes del primero, va al último
    if (newIndex < 0) newIndex = filteredProjects.length - 1;
    // Si avanza después del último, vuelve al primero
    if (newIndex >= filteredProjects.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  //if (filteredProjects.length === 0) return <p>No hay proyectos disponibles.</p>;

return (
  <div className="project-carousel">
    
    {/* Botón Izquierdo (Anterior) */}
    <button 
      onClick={prevSlide} 
      className="project-carousel__arrow project-carousel__arrow--prev" 
      aria-label="Anterior proyecto"
    >
      <span className="material-symbols-outlined">chevron_left</span>
    </button>

    <div className="project-carousel__track-container">
      <div 
        className="project-carousel__track" 
        style={{ 
          transform: `translateX(calc(-${currentIndex} * var(--slide-width, 100%)))`,
          transition: 'transform 0.5s ease-in-out'
        }}
      >
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card__inner">
              <img src={project.image} alt={project.title} className="project-card__image" />
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-card__link">Ver Proyecto</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Botón Derecho (Siguiente) */}
    <button 
      onClick={nextSlide} 
      className="project-carousel__arrow project-carousel__arrow--next" 
      aria-label="Siguiente proyecto"
    >
      <span className="material-symbols-outlined">chevron_right</span>
    </button>

  </div>
);
}

export default ProjectCarrusel;