import { memo, useState, useEffect } from 'react';
import landingBg from '../assets/landing.jpeg';
import mobileLandingBg from '../assets/mobile landing.png';
import normalImg from '../assets/normal.jpeg';
import blockImg from '../assets/block.jpeg';
import strictureDiagram from '../assets/stricture-diagram.png';
import bulbarImg from '../assets/Bulber urethral.jpeg';
import penileImg from '../assets/Penile urethral.jpeg';
import navicularImg from '../assets/Navicular urethral.jpeg';
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

const CauseIcon = ({ type }) => {
  if (type === 'INJURY') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (type === 'INFECTION') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="m4.93 4.93 2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" opacity="0.3" />
      </svg>
    );
  }
  if (type === 'IATROGENIC') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.8 2.5A2.3 2.3 0 0 0 2.5 4.8v4.6a7 7 0 0 0 14 0V4.8a2.3 2.3 0 0 0-2.3-2.3H12" />
        <path d="M9.5 16.4V19a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2" />
        <circle cx="17.5" cy="14" r="2.5" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
    </svg>
  );
};

const CAUSES_LIST = [
  {
    type: 'INJURY',
    badge: 'Trauma',
    title: 'Injury',
    desc: 'An injury to your penis or pelvic fracture (e.g., falling onto the frame of a bike, straddle injuries, or direct blunt pelvic trauma).'
  },
  {
    type: 'INFECTION',
    badge: 'Infectious',
    title: 'Infection',
    desc: 'An infection, most often sexually transmitted diseases/infections (e.g., Gonorrhea, Chlamydia, or untreated non-infectious forms of urethritis).'
  },
  {
    type: 'IATROGENIC',
    badge: 'Medical / Surgical',
    title: 'Iatrogenic',
    sub: 'Caused by medical treatment or a surgical procedure',
    desc: 'Major iatrogenic causes include urethral catheterization, cystoscopy, TURP (urethral/prostate surgery), and hypospadias surgery. Even a kidney stone removal procedure may cause urethral stricture.'
  },
  {
    type: 'IDIOPATHIC',
    badge: 'Spontaneous',
    title: 'Idiopathic',
    sub: 'Cause is unknown or arises spontaneously',
    desc: 'A condition when the cause is unknown or arises spontaneously without an identifiable antecedent injury, infection, or prior surgical event.'
  }
];

const IMPACTS = [
  { cls: 'iv-sleep',  label: 'Sleep' },
  { cls: 'iv-social', label: 'Social Life' },
  { cls: 'iv-work',   label: 'Work' },
  { cls: 'iv-intimacy', label: 'Intimacy' },
  { cls: 'iv-well',   label: 'Well-being' }
];

const TREATMENTS = [
  {
    cls: '',
    title: 'Dilation',
    desc: 'Widening of the narrowed passage.',
    visual: 'dilate'
  },
  {
    cls: '',
    title: 'VIU / DVIU',
    desc: 'Endoscopic procedure to open the narrowed area.',
    visual: 'viu'
  },
  {
    cls: '',
    title: 'Urethroplasty',
    desc: 'Surgical reconstruction of the urethra.',
    visual: 'plasty'
  },
  {
    cls: 'treatment--callout',
    title: 'Individualized Care',
    desc: 'Treatment options depend on your individual condition. Discuss with your urologist to understand the best approach for you.',
    visual: 'callout',
    tip: true
  }
];

const STEPS = [
  {
    n: 1,
    cls: 'sv-harvest',
    title: 'Consultation',
    desc: 'Meet with a specialist who reviews your history, symptoms, and performs a physical examination.'
  },
  {
    n: 2,
    cls: 'sv-culture',
    title: 'Diagnosis',
    desc: 'Specialized tests such as uroflowmetry, cystoscopy, and imaging determine stricture severity and location.'
  },
  {
    n: 3,
    cls: 'sv-implant',
    title: 'Treatment',
    desc: 'Your urologist presents a personalized treatment plan and walks you through the entire procedure.'
  }
];

const JOURNEY = [
  { icon: '🗣️', label: 'Consultation' },
  { icon: '📋', label: 'Assessment' },
  { icon: '🧪', label: 'Diagnostics' },
  { icon: '⚙️', label: 'Planning' },
  { icon: '🛡️', label: 'Pre-op Care' },
  { icon: '🧑‍⚕️', label: 'Procedure' },
  { icon: '📅', label: 'Follow-up' }
];

const BENEFITS = [
  { icon: '💧', label: 'Improved urine flow' },
  { icon: '🏃', label: 'Resume daily activities' },
  { icon: '💚', label: 'Restoration of sexual function' },
  { icon: '🪷', label: 'Improved quality of life' },
  { icon: '🌸', label: 'Lasting symptom relief' }
];

const AFTER = [
  { icon: '💊', label: 'Take medications' },
  { icon: '🩹', label: 'Care for your catheter' },
  { icon: '🍎', label: 'Follow diet instructions' },
  { icon: '🚫', label: 'Avoid strenuous activity' },
  { icon: '📅', label: 'Attend follow-up appointments' }
];




/* ---------- SVG: Treatment visuals ---------- */
const TreatmentVisual = memo(function TreatmentVisual({ kind }) {
  if (kind === 'dilate') {
    return (
      <svg viewBox="0 0 160 110" style={{padding:0,background:'transparent'}} aria-hidden="true">
        <g>
          <path d="M20 35 C 60 28, 100 28, 140 35 L 140 75 C 100 82, 60 82, 20 75 Z"
            fill="#f0f9ff" stroke="#38bdf8" strokeWidth="1.5"/>
          <path d="M20 50 C 70 45, 90 45, 140 50 L 140 60 C 90 65, 70 65, 20 60 Z" fill="#e0f2fe"/>
          <rect x="72" y="44" width="20" height="22" rx="4" fill="#0284c7" opacity="0.9"/>
          <rect x="50" y="52" width="66" height="6" rx="3" fill="#0369a1"/>
          <path d="M116 55 L 130 50 L 130 60 Z" fill="#0f172a"/>
          <path d="M50 55 L 32 50 L 32 60 Z" fill="#0f172a"/>
        </g>
      </svg>
    );
  }
  if (kind === 'viu') {
    return (
      <svg viewBox="0 0 160 110" style={{padding:0,background:'transparent'}} aria-hidden="true">
        <path d="M20 30 C 70 22, 100 22, 140 30 L 140 80 C 100 88, 70 88, 20 80 Z"
          fill="#f0f9ff" stroke="#38bdf8" strokeWidth="1.5"/>
        <path d="M34 40 C 72 34, 94 34, 126 40 L 126 46 C 94 52, 72 52, 34 46 Z" fill="#e0f2fe"/>
        <path d="M34 64 C 72 70, 94 70, 126 64 L 126 70 C 94 76, 72 76, 34 70 Z" fill="#e0f2fe"/>
        <path d="M100 46 L 110 46 L 78 70 L 70 68 Z" fill="#bae6fd" stroke="#0284c7" strokeDasharray="2 2"/>
        <path d="M8 52 C 30 50, 58 48, 80 46" stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="82" cy="46" r="4" fill="#0284c7"/>
        <path d="M80 46 L 92 44 L 88 48 Z" fill="#0284c7"/>
      </svg>
    );
  }
  if (kind === 'plasty') {
    return (
      <svg viewBox="0 0 160 110" style={{padding:0,background:'transparent'}} aria-hidden="true">
        <path d="M18 32 C 54 26, 86 26, 142 32 L 142 78 C 86 84, 54 84, 18 78 Z"
          fill="#f0f9ff" stroke="#38bdf8" strokeWidth="1.5"/>
        <path d="M58 40 L 102 40 L 102 46 L 58 46 Z" fill="#e0f2fe" stroke="#0284c7" strokeDasharray="3 2"/>
        <path d="M58 64 L 102 64 L 102 70 L 58 70 Z" fill="#e0f2fe" stroke="#0284c7" strokeDasharray="3 2"/>
        <g stroke="#0369a1" strokeWidth="1.4" fill="none">
          <line x1="58" y1="43" x2="102" y2="43"/>
          <line x1="58" y1="67" x2="102" y2="67"/>
          <line x1="70" y1="36" x2="70" y2="74" strokeDasharray="2 2" opacity="0.5"/>
          <line x1="90" y1="36" x2="90" y2="74" strokeDasharray="2 2" opacity="0.5"/>
        </g>
        <circle cx="70" cy="43" r="1.8" fill="#0369a1"/>
        <circle cx="90" cy="43" r="1.8" fill="#0369a1"/>
        <circle cx="70" cy="67" r="1.8" fill="#0369a1"/>
        <circle cx="90" cy="67" r="1.8" fill="#0369a1"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 160 110" style={{padding:0,background:'transparent'}} aria-hidden="true">
      <circle cx="80" cy="55" r="32" fill="#e0f2fe" opacity="0.85"/>
      <circle cx="80" cy="55" r="18" fill="#0284c7" opacity="0.9"/>
      <path d="M76 30 L 84 30 L 86 42 L 74 42 Z" fill="#f0f9ff" stroke="#0369a1" strokeWidth="1.2"/>
      <circle cx="80" cy="25" r="5" fill="#ffffff" stroke="#0284c7" strokeWidth="1.2"/>
      <path d="M80 20 L 80 30 M 76 25 L 84 25" stroke="#0369a1" strokeWidth="1.2"/>
      <path d="M56 55 C 64 46, 76 46, 80 55 C 84 64, 96 64, 104 55"
        stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.95"/>
    </svg>
  );
});

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
              <a href="#how" className="btn btn--primary">
                ▶ Learn About Treatment
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
                <div className="cause-card-pro__top">
                  <div className="cause-card-pro__icon" aria-hidden="true">
                    <CauseIcon type={c.type} />
                  </div>
                  <span className="cause-card-pro__badge">{c.badge}</span>
                </div>
                <h3 className="cause-card-pro__title">{c.title}</h3>
                {c.sub && <div className="cause-card-pro__sub">{c.sub}</div>}
                <p className="cause-card-pro__desc">{c.desc}</p>
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

      {/* ========== 5. MORE THAN A NARROWING ========== */}
      <section className="block impact">
        <div className="container impact__row">
          <div className="impact__text">
            <div className="block__hd">
              <span className="block__kicker">Beyond Urination</span>
              <h2 className="block__title">
                More Than a <span>Narrowing</span>
              </h2>
            </div>
            <p className="impact__p">
              Urethral stricture can affect more than urination. It may impact
              your sleep, social life, work, sexual intimacy and overall
              well-being.
            </p>
          </div>
          <div className="impact__areas">
            {IMPACTS.map((i) => (
              <div key={i.label} className="impact-area">
                <div className={`impact-area__visual ${i.cls}`} aria-hidden="true" />
                <div className="impact-area__label">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. CURRENT TREATMENT OPTIONS ========== */}
      <section className="block">
        <div className="container">
          <div className="block__hd">
            <span className="block__kicker">Standard of Care</span>
            <h2 className="block__title">
              Current <span>Treatment Options</span>
            </h2>
            <p className="block__lede">
              Depending on the individual patient, treatment options may include:
            </p>
          </div>
          <div className="treatments__grid">
            {TREATMENTS.map((t) => (
              <article key={t.title} className={`treatment ${t.cls}`}>
                <div className="treatment__visual">
                  <TreatmentVisual kind={t.visual} />
                </div>
                <h3 className="treatment__title">{t.title}</h3>
                {t.tip ? (
                  <div className="treatment-tip">
                    <span className="treatment-tip__icon">i</span>
                    <span>{t.desc}</span>
                  </div>
                ) : (
                  <p className="treatment__desc">{t.desc}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. WHEN TO SEEK HELP + SPECIALIST CARE ========== */}
      <section className="block regrow">
        <div className="container">
          <div className="regrow__row">
            <div className="regrow__visual" aria-hidden="true">
              <div className="regrow__sun" />
              <div className="regrow__plant">
                <div className="regrow__leaves">
                  <div className="regrow__leaf regrow__leaf--small" />
                  <div className="regrow__leaf regrow__leaf--r" />
                  <div className="regrow__leaf" />
                </div>
                <div className="regrow__stem" />
              </div>
              <div className="regrow__soil" />
            </div>
            <div>
              <h2 className="regrow__title">
                When to Seek <span>Specialist Care</span>
              </h2>
              <p className="regrow__p">
                Symptoms that persist or worsen over time should not be ignored.
                A qualified urologist can diagnose the cause of your stricture
                and recommend a treatment path designed to restore function and
                protect your long-term urinary health.
              </p>
            </div>
          </div>

          <div className="meet-xt">
            <div>
              <span className="block__kicker">Your Care Team</span>
              <h2 className="meet-xt__title">Specialist <span style={{color:'var(--color-primary)'}}>Urology Care</span></h2>
              <p className="meet-xt__sub">
                Comprehensive evaluation by board-certified urologists
              </p>
              <p className="meet-xt__p">
                Your journey begins with a thorough consultation, accurate
                diagnostics, and a treatment recommendation tailored to the
                length, location, and severity of your stricture. We take the
                time to explain every option so you can make a confident
                decision about your care.
              </p>
              <a href="#steps" className="meet-xt__cta">
                ▶ See Your Care Pathway
              </a>
            </div>
            <div className="meet-xt__visual" aria-hidden="true">
              <span className="meet-xt__blob meet-xt__blob--a" />
              <span className="meet-xt__blob meet-xt__blob--b" />
              <span className="meet-xt__blob meet-xt__blob--c" />
              <div className="meet-xt__face">
                <div className="face-illus">
                  <div className="face-illus__head">
                    <div className="face-illus__mouth">
                      <div className="face-illus__teeth" />
                    </div>
                  </div>
                  <div className="face-illus__swab" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 8. HOW THE PROCESS WORKS — 3 STEPS ========== */}
      <section id="how" className="block">
        <div className="container">
          <div className="block__hd" id="steps">
            <span className="block__kicker">Simple Process</span>
            <h2 className="block__title">
              How <span>Care</span> Works – 3 Simple Steps
            </h2>
          </div>
          <div className="steps__grid">
            {STEPS.map((step, i) => (
              <article key={step.n} className="step-card">
                <div className="step-card__num">{String(step.n).padStart(2, '0')}</div>
                <div className="step-card__body">
                  <h3 className="step-card__title">{step.title}</h3>
                  <p className="step-card__desc">{step.desc}</p>
                </div>
                <div className={`step-card__visual ${step.cls}`} aria-hidden="true" />
                {i < STEPS.length - 1 && <span className="step-arrow">→</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 9. YOUR CARE JOURNEY ========== */}
      <section className="block journey">
        <div className="container">
          <div className="block__hd">
            <span className="block__kicker">Care Pathway</span>
            <h2 className="block__title">
              Your <span>Care</span> Journey
            </h2>
          </div>
          <div className="journey__strip">
            <div className="journey__flow">
              {JOURNEY.map((j) => (
                <div key={j.label} className="journey__item">
                  <div className="journey__icon" aria-hidden="true">{j.icon}</div>
                  <div className="journey__label">{j.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 10. CLINICAL EXCELLENCE ========== */}
      <section className="block evidence">
        <div className="container evidence__row">
          <div>
            <div className="block__hd block__hd--left">
              <span className="block__kicker">Why Choose Us</span>
              <h2 className="block__title">
                Clinical <span>Excellence You Can Trust</span>
              </h2>
            </div>
            <div className="evidence__stats">
              <div className="stat-card">
                <div className="stat-card__icon">👥</div>
                <div>
                  <div className="stat-card__value">10K+</div>
                  <div className="stat-card__label">patients treated<br />by our specialists</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-card__icon">📈</div>
                <div>
                  <div className="stat-card__value">95%</div>
                  <div className="stat-card__label">patient-reported<br />symptom improvement</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-card__icon">🛡️</div>
                <div>
                  <div className="stat-card__value">25+</div>
                  <div className="stat-card__label">years of combined<br />urology experience</div>
                </div>
              </div>
            </div>
            <p className="evidence__fine">
              Individual outcomes vary based on stricture characteristics,
              overall health, and treatment selected. Your urologist will
              discuss expected results specific to your case.
            </p>
          </div>

          <div className="evidence__visual" aria-hidden="true">
            <div className="microscope">
              <div className="microscope__arm" />
              <div className="microscope__stage" />
              <div className="microscope__base" />
            </div>
            <div className="evidence__hands">
              <div className="hand" />
              <div className="hand" />
            </div>
            <div className="evidence__dish" />
          </div>
        </div>
      </section>

      {/* ========== 11. POTENTIAL BENEFITS + AFTER PROCEDURE ========== */}
      <section className="block bg-sage">
        <div className="container">
          <div className="twocol">
            <div className="benefits-block">
              <h3 className="col-title">
                <span className="col-title__dot">✦</span>
                Expected Benefits
              </h3>
              <div className="icon-grid">
                {BENEFITS.map((b) => (
                  <div key={b.label} className="benefit">
                    <div className="benefit__icon" aria-hidden="true">{b.icon}</div>
                    <div className="benefit__label">{b.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="after-block">
              <h3 className="col-title">
                <span className="col-title__dot">✓</span>
                After the Procedure
              </h3>
              <div className="icon-grid">
                {AFTER.map((a) => (
                  <div key={a.label} className="benefit">
                    <div className="benefit__icon" aria-hidden="true">{a.icon}</div>
                    <div className="benefit__label">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
