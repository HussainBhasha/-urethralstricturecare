import { memo } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow">Trusted Urology Specialists</span>
          <h1 className="hero-title">
            Expert Urological Care,{' '}
            <span className="hero-title-accent">Designed For You</span>
          </h1>
          <p className="hero-subtitle">
            From preventive screenings to advanced minimally invasive surgery,
            our board-certified team delivers personalized care in a
            comfortable, confidential setting.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn--primary">
              Schedule a Visit
            </Link>
            <Link to="/services" className="btn btn--ghost">
              Explore Services
            </Link>
          </div>
          <ul className="hero-stats" aria-label="Practice highlights">
            <li>
              <strong className="stat-value">25+</strong>
              <span className="stat-label">Years of Experience</span>
            </li>
            <li>
              <strong className="stat-value">98%</strong>
              <span className="stat-label">Patient Satisfaction</span>
            </li>
            <li>
              <strong className="stat-value">50K+</strong>
              <span className="stat-label">Patients Treated</span>
            </li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card hero-card--primary">
            <div className="hero-card-icon">✓</div>
            <div>
              <div className="hero-card-title">Board Certified</div>
              <div className="hero-card-sub">Fellowship-trained specialists</div>
            </div>
          </div>
          <div className="hero-card hero-card--secondary">
            <div className="hero-card-icon">⚕</div>
            <div>
              <div className="hero-card-title">Modern Treatment</div>
              <div className="hero-card-sub">Latest evidence-based care</div>
            </div>
          </div>
          <div className="hero-card hero-card--accent">
            <div className="hero-card-icon">★</div>
            <div>
              <div className="hero-card-title">Top Rated</div>
              <div className="hero-card-sub">4.9 / 5 patient reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
