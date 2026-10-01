import { memo } from 'react';
import { Link } from 'react-router-dom';
import ciplaLogo from '../../assets/Cipla_logo.svg.png';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left Column: Cipla Brand & Tagline */}
        <div className="footer-brand-section">
          <Link
            to="/"
            className="footer-brand-logo-link"
            aria-label="Home - Cipla"
          >
            <img
              src={ciplaLogo}
              alt="Cipla Logo"
              className="footer-brand-logo"
            />
          </Link>
          <p className="footer-brand-desc">
            Dedicated to patient education, clinical excellence, and innovative evidence-based urological therapies.
          </p>
        </div>

        {/* Right Column: Clean Navigation Links & Copyright */}
        <div className="footer-links-section">
          <nav className="footer-nav-menu" aria-label="Footer Quick Links">
            <Link to="/" className="footer-menu-link">
              Home
            </Link>
            <span className="footer-link-divider" aria-hidden="true">•</span>
            <Link to="/faqs" className="footer-menu-link">
              FAQs
            </Link>
            <span className="footer-link-divider" aria-hidden="true">•</span>
            <Link to="/disclaimer" className="footer-menu-link">
              Disclaimer
            </Link>
          </nav>
          <p className="footer-copyright-text">
            © {year} Cipla Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
