import { memo, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ciplaLogo from '../../assets/Cipla_logo.svg.png';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Left spacer: balances right logo to keep middle links centered */}
        <div className="navbar-left-spacer" aria-hidden="true" />

        {/* Middle Navigation - Exactly 3 Clean Text Links to Separate Pages */}
        <nav className="navbar-nav-center" aria-label="Main Navigation">
          <ul className="nav-links-list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-text-link ${isActive ? 'is-active' : ''}`
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `nav-text-link ${isActive ? 'is-active' : ''}`
                }
                onClick={closeMobileMenu}
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/disclaimer"
                className={({ isActive }) =>
                  `nav-text-link ${isActive ? 'is-active' : ''}`
                }
                onClick={closeMobileMenu}
              >
                Disclaimer
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Corner - Cipla Logo */}
        <div className="navbar-right-wrap">
          <Link
            to="/"
            className="navbar-cipla-link"
            aria-label="Home - Cipla"
            onClick={closeMobileMenu}
          >
            <img
              src={ciplaLogo}
              alt="Cipla Logo"
              className="navbar-cipla-logo"
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={`navbar-hamburger ${mobileMenuOpen ? 'is-active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          <ul className="mobile-nav-list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'is-active' : ''}`
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'is-active' : ''}`
                }
                onClick={closeMobileMenu}
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/disclaimer"
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'is-active' : ''}`
                }
                onClick={closeMobileMenu}
              >
                Disclaimer
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default memo(Navbar);
