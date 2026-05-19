import { getTechIcon } from './TechIcons'

export default function TechStack({ stack }) {
  return (
    <section className="tech-stack">
      <div className="tech-stack__inner">
        <div className="tech-stack__header">
          <h2 className="tech-stack__title">Stack Tecnológico</h2>
          <p className="tech-stack__subtitle">
            Herramientas y habilidades que uso para construir experiencias web.
          </p>
        </div>
        <div className="tech-stack__grid">
          {stack.map((tech) => (
            <div className="tech-chip" key={tech.id}>
              <div className="tech-chip__icon-wrapper">
                {getTechIcon(tech.id)}
              </div>
              <span className="tech-chip__label">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
