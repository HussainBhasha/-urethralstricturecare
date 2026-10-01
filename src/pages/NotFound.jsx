import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-inner">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          The page you're looking for may have been moved, renamed, or doesn't exist.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn--primary">Back to Home</Link>
          <Link to="/contact" className="btn btn--ghost">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
