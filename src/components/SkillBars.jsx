import React, { useEffect, useRef, useState } from 'react';

export default function SkillBars({ stack }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="skill-bars-section" ref={containerRef}>
      <div className="skill-bars__inner">
        <div className="skill-bars__header">
          <span className="material-symbols-outlined skill-bars__icon">
            psychology
          </span>
          <h3 className="skill-bars__title">Nivel de Tecnologías</h3>
        </div>
        
        <div className="skill-bars__list">
          {stack.map((tech) => (
            <div key={tech.id} className="skill-bar__item">
              <div className="skill-bar__info">
                <span className="skill-bar__name">{tech.name}</span>
                <span className="skill-bar__percentage">{tech.level || 0}%</span>
              </div>
              <div className="skill-bar__track">
                <div 
                  className="skill-bar__fill" 
                  style={{ 
                    width: isVisible ? `${tech.level || 0}%` : '0%',
                    transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
