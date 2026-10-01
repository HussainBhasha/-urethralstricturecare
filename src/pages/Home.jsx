import { memo, useState, useEffect } from 'react';
import landingBg from '../assets/landing.jpeg';
import mobileLandingBg from '../assets/mobile landing.png';
import normalImg from '../assets/normal.jpeg';
import blockImg from '../assets/block.jpeg';
import strictureDiagram from '../assets/stricture-diagram.png';
import bulbarImg from '../assets/Bulber urethral.jpeg';
import penileImg from '../assets/Penile urethral.jpeg';
import navicularImg from '../assets/Navicular urethral.jpeg';
import injuryImg from '../assets/Injury.jpeg';
import infectionImg from '../assets/Infection.jpeg';
import iatrogenicImg from '../assets/Iatrogenic.jpeg';
import idiopathicImg from '../assets/Idiopathic.jpeg';
import './Home.css';

const SYMPTOMS = [
  { icon: '💧', label: 'Weak urine flow' },
  { icon: '🚻', label: 'Difficulty starting' },
  { icon: '🚶', label: 'Straining to urinate' },
  { icon: '🛒', label: 'Incomplete bladder emptying' },
  { icon: '⚡', label: 'Pain during urination' },
  { icon: '📅', label: 'Frequent urination' }
];

const STRICTURE_TYPES = [
  {
    name: 'Bulbar Stricture',
    badge: 'Most Common (~50-60%)',
    location: 'Bulbar Urethra (Perineal Region)',
    desc: 'Occurs in the bulbar segment of the anterior urethra located between the scrotum and anus. Common causes include straddle injuries (e.g. falling onto a bike crossbar), traumatic catheterization, or idiopathic inflammation.',
    tag: 'Posterior bulbar segment',
    image: bulbarImg
  },
  {
    name: 'Penile Stricture',
    badge: 'Anterior Segment (~30%)',
    location: 'Pendulous / Penile Shaft Urethra',
    desc: 'Located along the mobile, pendulous shaft portion of the penis. Frequently associated with chronic inflammatory conditions like Lichen Sclerosus (BXO), prior hypospadias repair, or prior instrumentation trauma.',
    tag: 'Pendulous urethral canal',
    image: penileImg
  },
  {
    name: 'Navicular Stricture',
    badge: 'Distal Segment',
    location: 'Fossa Navicularis & Urethral Meatus',
    desc: 'A narrowing situated at the very distal opening or within the dilated fossa navicularis near the glans penis. Most frequently caused by catheter injury, instrumentation error, or inflammatory skin conditions.',
    tag: 'Distal meatal opening',
    image: navicularImg
  }
];



const CAUSES_LIST = [
  {
    type: 'INJURY',
    badge: 'Trauma',
    title: 'Injury',
    desc: 'An injury to your penis or pelvic fracture (e.g., falling onto the frame of a bike, straddle injuries, or direct blunt pelvic trauma).',
    image: injuryImg
  },
  {
    type: 'INFECTION',
    badge: 'Infectious',
    title: 'Infection',
    desc: 'An infection, most often sexually transmitted diseases/infections (e.g., Gonorrhea, Chlamydia, or untreated non-infectious forms of urethritis).',
    image: infectionImg
  },
  {
    type: 'IATROGENIC',
    badge: 'Medical / Surgical',
    title: 'Iatrogenic',
    sub: 'Caused by medical treatment or a surgical procedure',
    desc: 'Major iatrogenic causes include urethral catheterization, cystoscopy, TURP (urethral/prostate surgery), and hypospadias surgery. Even a kidney stone removal procedure may cause urethral stricture.',
    image: iatrogenicImg
  },
  {
    type: 'IDIOPATHIC',
    badge: 'Spontaneous',
    title: 'Idiopathic',
    sub: 'Cause is unknown or arises spontaneously',
    desc: 'A condition when the cause is unknown or arises spontaneously without an identifiable antecedent injury, infection, or prior surgical event.',
    image: idiopathicImg
  }
];

/* ---------- Main Component ---------- */
function Home() {
  const [showStrictureDetails, setShowStrictureDetails] = useState(false);

  useEffect(() => {
    if (!showStrictureDetails) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowStrictureDetails(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [showStrictureDetails]);

  return (
    <div className="page-wrap" id="home">
      {/* ========== 1. HERO ========== */}
      <section
        className="hero-xt"
        style={{
          '--bg-desktop': `url(${landingBg})`,
          '--bg-mobile': `url("${mobileLandingBg}")`
        }}
      >
        <div className="container hero-xt__row">
          <div className="hero-xt__copy">
            <h1 className="hero-xt__title">
              Regain Control.
              <span>Restore Your Flow.</span>
            </h1>
            <p className="hero-xt__lede">
              Advanced, compassionate treatment for urethral strictures and complex urological conditions — from precision diagnostics to individualized restorative therapies.
            </p>
            <div className="hero-xt__btns">
              <a href="#stricture-section" className="btn btn--primary">
                ▶ Learn About Strictures
              </a>
            </div>
          </div>
          <div className="hero-xt__spacer" aria-hidden="true" />
        </div>
      </section>

      {/* ========== 2. WHAT IS A URETHRAL STRICTURE? ========== */}
      <section className="block bg-sage" id="stricture-section">
        <div className="container">
          <div className="stricture__row">
            <div className="stricture__text">
              <span className="block__kicker">Condition Basics</span>
              <h2 className="block__title">
                What is a <span>Urethral Stricture?</span>
              </h2>
              <p className="block__lede">
                A urethral stricture is a narrowing of the urethra, the tube that
                carries urine out of the body. A bulbar urethral stricture occurs
                in the bulbar portion of the urethra and can make urination
                difficult.
              </p>
              <button
                type="button"
                onClick={() => setShowStrictureDetails(true)}
                className="link-arrow mt-6 inline-flex stricture__toggle-btn"
                aria-haspopup="dialog"
              >
                Learn More <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="stricture__diagrams">
              <article className="stricture-card">
                <div className="stricture-card__img-wrap">
                  <img
                    src={normalImg}
                    alt="Normal Urethra"
                    className="stricture-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="stricture-card__label">Normal Urethra</div>
                <div className="stricture-card__note">Urine flows freely through an open passage.</div>
              </article>
              <article className="stricture-card">
                <div className="stricture-card__img-wrap">
                  <img
                    src={blockImg}
                    alt="Narrowed Urethra (Stricture)"
                    className="stricture-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="stricture-card__label">Narrowed Urethra (Stricture)</div>
                <div className="stricture-card__note">Scar tissue narrows the urethral opening, obstructing flow.</div>
              </article>
            </div>
          </div>

        </div>
      </section>

      {/* Pop-up Modal for Learn More (2nd Image Matter) with Cross Mark */}
      {showStrictureDetails && (
        <div
          className="stricture-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="stricture-modal-title"
          onClick={() => setShowStrictureDetails(false)}
        >
          <div
            className="stricture-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="stricture-modal__close"
              onClick={() => setShowStrictureDetails(false)}
              aria-label="Close popup"
            >
              ✕
            </button>

            <div className="stricture-modal__header">
              <span className="block__kicker">Condition Basics</span>
              <h3 id="stricture-modal-title" className="stricture-modal__title">
                What is a <span>Urethral Stricture?</span>
              </h3>
            </div>

            <div className="stricture-modal__body">
              <div className="stricture-modal__text">
                <ul className="stricture-points-list">
                  <li>
                    <span className="stricture-dot" aria-hidden="true" />
                    <span>The urethra is the tube that carries urine out of the body</span>
                  </li>
                  <li>
                    <span className="stricture-dot" aria-hidden="true" />
                    <span>
                      A urethral stricture is a narrowing of the urethra caused by <strong>Injury</strong>, <strong>Treatment/Instrumentation Error</strong>, <strong>Infection</strong> and certain <strong>non-infectious forms of Urethritis</strong> &amp; could be due to <strong>unknown reasons</strong>
                    </span>
                  </li>
                  <li>
                    <span className="stricture-dot" aria-hidden="true" />
                    <span>
                      The narrowing of the tube affects the flow of urine and leads to incomplete emptying of bladder and arising symptoms like <strong>weak urine flow</strong>, <strong>intermittency</strong>, <strong>frequent urination</strong>
                    </span>
                  </li>
                  <li>
                    <span className="stricture-dot" aria-hidden="true" />
                    <span>Any part of Urethra may get affected</span>
                  </li>
                </ul>
              </div>

              <div className="stricture-modal__visual">
                <div className="stricture-diagram-frame">
                  <img
                    src={strictureDiagram}
                    alt="Stricture in Urethra Anatomy Diagram"
                    className="stricture-diagram-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== 3. TYPES OF URETHRAL STRICTURES ========== */}
      <section className="block" id="types">
        <div className="container">
          <div className="block__hd">
            <span className="block__kicker">Anatomical Classification</span>
            <h2 className="block__title">
              Types of <span>Urethral Strictures</span>
            </h2>
            <p className="block__lede">
              Urethral strictures can develop at various points along the urinary passage and are primarily categorized by their anatomical location:
            </p>
          </div>

          <div className="stricture-types-grid">
            {STRICTURE_TYPES.map((t) => (
              <article key={t.name} className="type-card">
                <div className="type-card__img-wrap">
                  <img
                    src={t.image}
                    alt={`${t.name} anatomical illustration`}
                    className="type-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="type-card__body">
                  <h3 className="type-card__title">{t.name}</h3>
                  <div className="type-card__location">
                    <span className="type-card__loc-badge">
                      <svg
                        className="type-card__loc-svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        <path d="M12 6.5v5M9.5 9h5" />
                      </svg>
                      <span>{t.location}</span>
                    </span>
                  </div>
                  <p className="type-card__desc">{t.desc}</p>
                  <div className="type-card__tag">
                    <span>Anatomy:</span> {t.tag}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. WHAT CAUSES URETHRAL STRICTURES? ========== */}
      <section className="block bg-sage causes-pro-section" id="causes">
        <div className="container">
          <div className="block__hd">
            <span className="block__kicker">Etiology &amp; Risk Factors</span>
            <h2 className="block__title">
              What Causes <span>Urethral Strictures?</span>
            </h2>
            <p className="block__lede">
              Common causes appear to be chronic inflammation or injury which leads to scarring of the urethra.
            </p>
          </div>

          <div className="causes-grid-pro">
            {CAUSES_LIST.map((c) => (
              <article key={c.type} className="cause-card-pro">
                <div className="cause-card-pro__img-wrap">
                  <img
                    src={c.image}
                    alt={`${c.title} illustration`}
                    className="cause-card-pro__img"
                    loading="lazy"
                  />
                </div>
                <div className="cause-card-pro__body">
                  <div className="cause-card-pro__meta">
                    <span className="cause-card-pro__tag">{c.badge}</span>
                  </div>
                  <h3 className="cause-card-pro__title">{c.title}</h3>
                  {c.sub && <div className="cause-card-pro__sub">{c.sub}</div>}
                  <p className="cause-card-pro__desc">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. COMMON SYMPTOMS ========== */}
      <section id="symptoms" className="block">
        <div className="container">
          <div className="block__hd">
            <span className="block__kicker">Recognize the Signs</span>
            <h2 className="block__title">Common <span>Symptoms</span></h2>
            <p className="block__lede">
              If you are experiencing any of these symptoms, talk to a urologist
              for a thorough evaluation.
            </p>
          </div>
          <div className="symptoms-grid">
            {SYMPTOMS.map((s) => (
              <div key={s.label} className="symptom">
                <div className="symptom__icon" aria-hidden="true">{s.icon}</div>
                <div className="symptom__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
