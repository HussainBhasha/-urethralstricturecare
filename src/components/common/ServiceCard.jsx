import { memo } from 'react';
import './ServiceCard.css';

function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <article className="service-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="service-card-icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
    </article>
  );
}

export default memo(ServiceCard);
