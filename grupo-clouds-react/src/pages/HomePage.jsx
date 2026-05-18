export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        {/* Atmospheric Glow */}
        <div className="hero__glow--top"></div>
        <div className="hero__glow--bottom"></div>

        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Elevamos tu empresa a la <br className="hero__title-break" />
              <span className="text-gradient">próxima generación</span> tecnológica
            </h1>
            <p className="hero__subtitle">
              Soluciones de software personalizadas con arquitectura en la nube de alto
              rendimiento. Diseñadas para escalar.
            </p>
            <div className="hero__actions">
              <button className="hero__cta-primary">Empieza ahora</button>
              <button className="hero__cta-secondary">Explorar soluciones</button>
            </div>
          </div>
          <div className="hero__image-wrapper">
            <img
              alt="Abstract representation of cloud computing"
              className="hero__image cloud-shadow"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApJUsFRlGv8cv88NW0N4b0M6_Prz1D4hPZ4M46SiXJNVSvaX4Wn5bqq7gD3HKxkfuonDkLil1YAzkqn_5MPd288W3rmnQnGG_Ltu7BaLjQW73po-F5YsiRoRjzMLbvGXJTAWmE-TwB5z2_hj9MJRmFy9lf97Lcwv8HDspUaxvdtr9HTyicNz8JXTb5UoXRm-FXi5iVyRjBrzh3xrX-f-nzav-zFZS4RfyqS4C7Epk5IPk2VEswW5YNDmM06EzlSCOLSGi44zeReMsd"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services__inner">
          <div className="services__header">
            <h2 className="services__title">Arquitectura de alto rendimiento</h2>
            <p className="services__description">
              Construimos la infraestructura invisible que impulsa el crecimiento de tu negocio.
            </p>
          </div>
          <div className="services__grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-card__icon">
                <span className="material-symbols-outlined" data-weight="fill">
                  code_blocks
                </span>
              </div>
              <h3 className="service-card__title">Desarrollo a Medida</h3>
              <p className="service-card__text">
                Software diseñado específicamente para tus flujos de trabajo, eliminando cuellos de
                botella y maximizando la eficiencia operativa.
              </p>
            </div>
            {/* Service 2 */}
            <div className="service-card">
              <div className="service-card__icon">
                <span className="material-symbols-outlined" data-weight="fill">
                  cloud_queue
                </span>
              </div>
              <h3 className="service-card__title">Infraestructura Cloud</h3>
              <p className="service-card__text">
                Migración y gestión de entornos cloud seguros, escalables y resilientes que
                garantizan la disponibilidad continua de tus servicios.
              </p>
            </div>
            {/* Service 3 */}
            <div className="service-card">
              <div className="service-card__icon">
                <span className="material-symbols-outlined" data-weight="fill">
                  insights
                </span>
              </div>
              <h3 className="service-card__title">Consultoría IT</h3>
              <p className="service-card__text">
                Asesoramiento estratégico para alinear la tecnología con tus objetivos
                empresariales y preparar tu arquitectura para el futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials__inner">
          <h2 className="testimonials__title">Impacto comprobado</h2>
          <div className="testimonials__grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="testimonial-card__stars">
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
              </div>
              <p className="testimonial-card__quote">
                "La migración a la infraestructura de Grupo Clouds redujo nuestros tiempos de carga
                en un 40% y eliminó los tiempos de inactividad que sufríamos mensualmente."
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar testimonial-card__avatar--tertiary">CM</div>
                <div>
                  <p className="testimonial-card__name">Carlos Mendoza</p>
                  <p className="testimonial-card__role">CTO, Logística Fintech</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="testimonial-card__stars">
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
              </div>
              <p className="testimonial-card__quote">
                "El desarrollo a medida se integró perfectamente con nuestros sistemas legacy. Fue
                una modernización transparente y altamente eficiente."
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar testimonial-card__avatar--secondary">AL</div>
                <div>
                  <p className="testimonial-card__name">Ana López</p>
                  <p className="testimonial-card__role">Directora de Operaciones, Retail Global</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="testimonial-card__stars">
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
              </div>
              <p className="testimonial-card__quote">
                "Su consultoría nos ahorró meses de desarrollo al apuntar directamente a las
                soluciones cloud adecuadas para nuestra escala. Un socio tecnológico invaluable."
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar testimonial-card__avatar--primary">JR</div>
                <div>
                  <p className="testimonial-card__name">Javier Ruiz</p>
                  <p className="testimonial-card__role">Fundador, SaaS Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
