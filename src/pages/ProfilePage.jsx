import { Link } from 'react-router-dom'
import TechStack from '../components/TechStack'
import MovieCarousel from '../components/MovieCarousel'
import MusicGrid from '../components/MusicGrid'
import SkillBars from '../components/SkillBars'
import SocialLinks from '../components/SocialLinks'

export default function ProfilePage({ member }) {
  return (
    <main>
      <section className="profile-hero">
        <div className="profile-hero__glow--top"></div>
        <div className="profile-hero__glow--bottom"></div>

        <div className="profile-hero__content">
          <div className="profile-hero__info">
            <p className="profile-hero__label">Perfil de Miembro</p>
            <h1 className="profile-hero__name">
              {member.firstName} <br />{' '}
              <span className="text-gradient">{member.lastName}</span>
            </h1>
            <p className="profile-hero__role">
              {member.role} <span className="profile-hero__role-detail">{member.roleDetail}</span>
            </p>

            <div className="profile-hero__meta">
              <div className="profile-hero__meta-item">
                <span className="material-symbols-outlined profile-hero__meta-icon">
                  location_on
                </span>
                <span>{member.location}</span>
              </div>
              <div className="profile-hero__meta-item">
                <span className="material-symbols-outlined profile-hero__meta-icon">cake</span>
                <span>{member.experience}</span>
              </div>
              <div className="profile-hero__meta-item">
                <span className="material-symbols-outlined profile-hero__meta-icon">work</span>
                <span>{member.interest}</span>
              </div>
            </div>

            <p className="profile-hero__role-detail">{member.description}</p>
            
            <SocialLinks social={member.social} />

            <div className="profile-hero__actions">
              <Link to="/bitacora" className="profile-hero__cta-primary">
                Ver bitacora
              </Link>
              <Link to="/" className="profile-hero__cta-secondary">
                Volver al inicio
              </Link>
            </div>
            <p className="profile-hero__hint" aria-live="polite"></p>
          </div>

          <div className="profile-hero__image-col" style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="profile-hero__image-wrapper cloud-shadow"
              style={{
                maxWidth: '25rem',
                width: '80%',
                aspectRatio: '3 / 4',
                overflow: 'hidden',
                ...(member.slug !== 'eduardo' && member.slug !== 'marcelo'
                  ? {
                      border: '3px solid var(--primary)',
                      borderRadius: '2rem',
                      background: 'linear-gradient(135deg, var(--primary-container), var(--surface-container-high))'
                    }
                  : {})
              }}
            >
              <img
                alt={`${member.firstName} ${member.lastName}`}
                className="profile-hero__image"
                src={member.image}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <TechStack stack={member.techStack} />
      <SkillBars stack={member.techStack} />

      <section className="interests">
        <div className="interests__inner">
          <div className="interests__header">
            <h2 className="interests__title">Off the Grid</h2>
            <p className="interests__description">
              Peliculas y discos favoritos para conocer mejor a {member.firstName} {member.lastName}.
            </p>
          </div>

          <div className="interests__block">
            <div className="interests__block-header">
              <span className="material-symbols-outlined interests__block-icon interests__block-icon--primary">
                movie
              </span>
              <h3 className="interests__block-title">Peliculas favoritas</h3>
            </div>
            <MovieCarousel movies={member.movies} />
          </div>

          <div className="interests__block interests__block--border-top">
            <div className="interests__block-header">
              <span className="material-symbols-outlined interests__block-icon interests__block-icon--accent">
                album
              </span>
              <h3 className="interests__block-title">Discos favoritos</h3>
            </div>
            <MusicGrid albums={member.albums} />
          </div>
        </div>
      </section>
    </main>
  )
}
