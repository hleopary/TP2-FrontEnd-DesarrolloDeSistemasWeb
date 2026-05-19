import { Link } from 'react-router-dom'
import { teamData } from '../data/teamData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand-col">
          <div className="footer__brand-name">Grupo Clouds</div>
          <p className="footer__brand-tagline">
            Atmospheric Infrastructure for the Modern Enterprise.
          </p>
          <div className="footer__social-links">
            <Link to="#" className="footer__social-link">
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link to="#" className="footer__social-link">
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
        </div>
        <div className="footer__link-col">
          <h4 className="footer__col-title">Navegación</h4>
          <Link to="/" className="footer__link">
            Principal
          </Link>
          <Link to="/bitacora" className="footer__link">
            Bitácora
          </Link>
          {teamData.map((member) => (
            <Link key={member.slug} to={`/${member.slug}`} className="footer__link">
              {member.firstName}
            </Link>
          ))}
        </div>
        <div className="footer__link-col">
          <h4 className="footer__col-title">Platform</h4>
          <Link to="#" className="footer__link">
            Support
          </Link>
        </div>
      </div>
      <div className="footer__copyright">© 2026 Grupo Clouds. Atmospheric Infrastructure for the Modern Enterprise.</div>
    </footer>
  )
}
