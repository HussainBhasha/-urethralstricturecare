import { memo } from 'react';
import './Section.css';

function Section({ id, eyebrow, title, subtitle, children, className = '', reverse = false }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className={`section-inner ${reverse ? 'section-inner--reverse' : ''}`}>
        {(eyebrow || title || subtitle) && (
          <header className="section-header">
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        {children && <div className="section-body">{children}</div>}
      </div>
    </section>
  );
}

export default memo(Section);
