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
import weakFlowImg from '../assets/Weak urine flow.jpeg';
import painUrinationImg from '../assets/Pain during urination.jpeg';
import strainingImg from '../assets/Straining to urinate.jpeg';
import incompleteEmptyingImg from '../assets/Incomplete bladder emptying.jpeg';
import './Home.css';

const SYMPTOMS = [
  {
    id: 'weak-urination',
    label: 'Weak urination',
    badge: 'Decreased Stream',
    image: weakFlowImg,
    shortDesc: 'Noticeable reduction in urinary velocity, often spraying, dribbling, or prolonged voiding.',
    clinicalNote: 'Caused by narrowed urethral caliber resisting urine discharge, resulting in an extended voiding duration and reduced flow rate (diminished Qmax).'
  },
  {
    id: 'pain-during-urination',
    label: 'Pain during urination',
    badge: 'Dysuria / Discomfort',
    image: painUrinationImg,
    shortDesc: 'Burning, stinging, or discomfort along the urethra or lower pelvis while voiding.',
    clinicalNote: 'Secondary mucosal inflammation, irritation, or localized infection upstream of the stricture causes dysuric pain during active urination.'
  },
  {
    id: 'straining-to-urinate',
    label: 'Straining to urinate',
    badge: 'High Pressure',
    image: strainingImg,
    shortDesc: 'Needing conscious abdominal strain or physical effort to push urine out.',
    clinicalNote: 'Patients compensate for outlet obstruction by bearing down with abdominal and pelvic musculature to force urine past the stricture.'
  },
  {
    id: 'inability-to-empty-bladder',
    label: 'Inability to completely empty the bladder',
    badge: 'Post-Void Retention',
    image: incompleteEmptyingImg,
    shortDesc: 'Persistent feeling of retained urine or sensation that the bladder never empties fully.',
    clinicalNote: 'Substantial post-void residual (PVR) volume remains trapped, increasing susceptibility to urinary tract infections (UTIs) and bladder calculi.'
  }
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
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [showReferences, setShowReferences] = useState(false);

  useEffect(() => {
    if (!showStrictureDetails && !selectedSymptom) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowStrictureDetails(false);
        setSelectedSymptom(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [showStrictureDetails, selectedSymptom]);

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
              Regenerate Cells
              <span>and Restore Flow</span>
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
      <section id="symptoms" className="block symptoms-pro-section">
        <div className="container">
          <div className="block__hd">
            <span className="block__kicker">Recognize the Signs</span>
            <h2 className="block__title">
              Symptoms of <span>Urethral Stricture</span>
              <sup className="ref-sup-pill" title="References 2 & 4">2,4</sup>
            </h2>
            <p className="block__lede">
              If you are experiencing any of these hallmark symptoms, talk to a urologist
              for a non-invasive evaluation.
            </p>
          </div>
          <div className="symptoms-grid">
            {SYMPTOMS.map((s, idx) => (
              <article
                key={s.id}
                className="symptom-card"
                onClick={() => setSelectedSymptom(s)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedSymptom(s);
                  }
                }}
                aria-label={`View clinical details for ${s.label}`}
              >
                <div className="symptom-card__img-wrap">
                  <img
                    src={s.image}
                    alt={s.label}
                    className="symptom-card__img"
                    loading="lazy"
                  />
                  <div className="symptom-card__zoom-pill" title="Click to view details">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    <span>Inspect</span>
                  </div>
                </div>
                <div className="symptom-card__body">
                  <div className="symptom-card__meta">
                    <span className="symptom-card__tag">{s.badge}</span>
                    <span className="symptom-card__num">0{idx + 1}</span>
                  </div>
                  <h3 className="symptom-card__title">{s.label}</h3>
                  <p className="symptom-card__desc">{s.shortDesc}</p>
                  <div className="symptom-card__footer">
                    <span className="symptom-card__cta">
                      <span>Examine anatomy &amp; details</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Symptom Detail Modal */}
      {selectedSymptom && (
        <div
          className="stricture-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="symptom-modal-title"
          onClick={() => setSelectedSymptom(null)}
        >
          <div
            className="symptom-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="stricture-modal__close"
              onClick={() => setSelectedSymptom(null)}
              aria-label="Close symptom details"
            >
              ✕
            </button>

            <div className="symptom-modal-layout">
              <div className="symptom-modal-img-col">
                <div className="symptom-modal-img-box">
                  <img
                    src={selectedSymptom.image}
                    alt={selectedSymptom.label}
                    className="symptom-modal-img"
                  />
                </div>
                <div className="symptom-modal-img-badge">
                  <span>Anatomy:</span> Bladder &amp; Urethral Outflow Tract
                </div>
              </div>

              <div className="symptom-modal-info-col">
                <div className="symptom-modal-kicker-row">
                  <span className="block__kicker">Recognize the Signs</span>
                  <span className="symptom-modal-status-badge">{selectedSymptom.badge}</span>
                </div>
                <h3 id="symptom-modal-title" className="symptom-modal-title">
                  {selectedSymptom.label}
                </h3>
                <p className="symptom-modal-lead">
                  {selectedSymptom.shortDesc}
                </p>

                <div className="symptom-modal-callout">
                  <h4 className="symptom-modal-callout__title">Clinical / Anatomical Mechanism:</h4>
                  <p className="symptom-modal-callout__text">
                    {selectedSymptom.clinicalNote}
                  </p>
                </div>

                <div className="symptom-modal-tip">
                  <span className="symptom-modal-tip__icon" aria-hidden="true">💡</span>
                  <p className="symptom-modal-tip__text">
                    Urethral strictures are progressive. If you notice any of these signs, prompt uroflowmetry and specialist review help prevent irreversible bladder wall damage.
                  </p>
                </div>

                <div className="symptom-modal-actions">
                  <a
                    href="#causes"
                    className="btn btn--primary"
                    onClick={() => setSelectedSymptom(null)}
                  >
                    Explore Stricture Causes
                  </a>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => setSelectedSymptom(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== 6. NEED FOR TREATMENTS & IMPACT ON DAILY LIFE ========== */}
      <section id="treatment-need" className="block need-impact-section">
        <div className="container">
          <div className="block__hd">
            <span className="block__kicker">Clinical Significance &amp; Patient Well-Being</span>
            <h2 className="block__title">Need for Treatment &amp; <span>Impact on Daily Life</span></h2>
            <p className="block__lede">
              A urethral stricture is a progressive condition. Beyond obstructed flow, delayed management places severe hydrostatic strain on the urinary tract and profoundly degrades everyday living.
            </p>
          </div>

          {/* Need For Treatments: High Pressure & Infection */}
          <div className="need-cards-grid">
            <div className="need-card need-card--pressure">
              <div className="need-card__icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="need-card__body">
                <span className="need-card__badge">High Outflow Pressure</span>
                <h3 className="need-card__title">Elevated Bladder Pressure</h3>
                <p className="need-card__desc">
                  A stricture in the urethra significantly increases outflow resistance, forcing the bladder detrusor muscle to exert intense pressure to pass urine. Over time, this leads to muscular exhaustion, bladder wall thickening, and eventual detrusor decompensation.
                </p>
              </div>
            </div>

            <div className="need-card need-card--infection">
              <div className="need-card__icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <div className="need-card__body">
                <span className="need-card__badge">Infection &amp; Organ Risk</span>
                <h3 className="need-card__title">Stagnant Urine &amp; Systemic Risks</h3>
                <p className="need-card__desc">
                  Due to incomplete voiding, accumulation of stagnant residual urine takes place in the bladder. This persistent pooling makes you highly prone to recurrent urinary tract infections (cystitis), chronic prostatitis, bladder calculi, and ascending kidney infections or disease.
                </p>
              </div>
            </div>
          </div>

          {/* Impact on Daily Life (Quality of Life) */}
          <div className="qol-container">
            <div className="qol-header">
              <span className="qol-header__kicker">Quality of Life (QOL)</span>
              <h3 className="qol-header__title">How Urethral Stricture Impacts Daily Living</h3>
              <p className="qol-header__desc">
                The Quality of Life (QOL) is severely impacted due to its negative impact on the emotional, social, and physical well-being of the patient and family:
              </p>
            </div>

            <div className="qol-grid">
              <div className="qol-card">
                <div className="qol-card__icon-wrap qol-card__icon--sleep">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </div>
                <h4 className="qol-card__title">Sleep Disturbances</h4>
                <p className="qol-card__text">Frequent nocturnal awakenings (nocturia) disrupt restorative sleep cycles, resulting in chronic daytime fatigue.</p>
              </div>

              <div className="qol-card">
                <div className="qol-card__icon-wrap qol-card__icon--social">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4 className="qol-card__title">Diminished Social Life</h4>
                <p className="qol-card__text">Preoccupation with bathroom accessibility and fear of sudden urinary leakage lead to social hesitation and isolation.</p>
              </div>

              <div className="qol-card">
                <div className="qol-card__icon-wrap qol-card__icon--work">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4 className="qol-card__title">Reduced Working Days</h4>
                <p className="qol-card__text">Chronic urinary discomfort and recurrent clinic visits reduce working days, often causing direct loss of pay.</p>
              </div>

              <div className="qol-card">
                <div className="qol-card__icon-wrap qol-card__icon--intimacy">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h4 className="qol-card__title">Impaired Sexual Intimacy</h4>
                <p className="qol-card__text">Painful ejaculation, physical discomfort, and psychological worry compromise intimate relationships with one's partner.</p>
              </div>

              <div className="qol-card">
                <div className="qol-card__icon-wrap qol-card__icon--stress">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 15s1.5-2 4-2 4 2 4 2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h4 className="qol-card__title">Emotional Stress</h4>
                <p className="qol-card__text">Living with chronic urinary impairment and anxiety of sudden catheterization generates immense emotional distress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 7. DIAGNOSIS OF URETHRAL STRICTURE (PREMIUM REDESIGN) ========== */}
      <section id="diagnosis" className="block diag-premium">
        <div className="container">
          <div className="diag-premium__hero">
            <div className="diag-premium__left">
              <span className="block__kicker">Precision Clinical Workup</span>
              <h2 className="diag-premium__title">
                Diagnosis of <span>Urethral Stricture</span>
              </h2>
              <p className="diag-premium__lede">
                Accurate diagnosis helps urologists visualize stricture location, caliber, and length to determine the most effective management path.
              </p>
              <div className="diag-premium__stat-row">
                <div className="diag-stat-pill">
                  <div className="diag-stat-pill__num">4</div>
                  <div className="diag-stat-pill__lbl">Diagnostic Modalities</div>
                </div>
                <div className="diag-stat-pill">
                  <div className="diag-stat-pill__num">0</div>
                  <div className="diag-stat-pill__lbl">Required for Uroflowmetry</div>
                </div>
              </div>
            </div>
            <div className="diag-premium__right diag-hero-visual">
              <div className="diag-hero-visual__ring diag-hero-visual__ring--1" />
              <div className="diag-hero-visual__ring diag-hero-visual__ring--2" />
              <div className="diag-hero-visual__center">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="diag-premium__feature diag-uroflow">
            <div className="diag-uroflow__left">
              <div className="diag-uroflow__meta">
                <span className="diag-badge diag-badge--primary">Primary Diagnostic</span>
                <span className="diag-badge diag-badge--mint">Non-Invasive · Painless</span>
              </div>
              <h3 className="diag-uroflow__title">Uroflowmetry</h3>
              <p className="diag-uroflow__intro">
                Uroflowmetry is performed by urinating into a specialized funnel connected to an electronic measurement device that calculates flow dynamics in real time.
              </p>
              <p className="diag-uroflow__lead">
                This instrument calculates the <strong>amount of urine passed</strong>, the <strong>rate of flow in seconds (mL/s)</strong>, and the <strong>length of time</strong> it takes to completely empty the bladder.
              </p>
              <div className="diag-uroflow__pillars">
                <div className="diag-pillar">
                  <div className="diag-pillar__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="diag-pillar__body">
                    <h4>Non-Invasive Diagnostic Test</h4>
                    <p>Requires no catheterization, incisions, or radiation, providing a rapid and painless baseline assessment.</p>
                  </div>
                </div>
                <div className="diag-pillar">
                  <div className="diag-pillar__icon diag-pillar__icon--accent">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="M7 14l4-4 4 4 5-5" />
                    </svg>
                  </div>
                  <div className="diag-pillar__body">
                    <h4>Calculates Flow Rate &amp; Duration</h4>
                    <p>Detects classic stricture plateau patterns with reduced peak flow rate (Qmax &lt; 10-12 mL/s) vs. healthy curves.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="diag-uroflow__right diag-metrics-panel">
              <div className="diag-metrics-panel__head">
                <h4>Key Measured Parameters</h4>
                <div className="diag-metrics-panel__stroke" />
              </div>
              <div className="diag-metrics-list">
                <div className="diag-metric-row">
                  <div className="diag-metric-row__dot" />
                  <div className="diag-metric-row__body">
                    <div className="diag-metric-row__label"><strong>Voided Volume</strong><span>(mL)</span></div>
                    <div className="diag-metric-row__desc">Total bladder urine output</div>
                  </div>
                </div>
                <div className="diag-metric-row">
                  <div className="diag-metric-row__dot diag-metric-row__dot--accent" />
                  <div className="diag-metric-row__body">
                    <div className="diag-metric-row__label"><strong>Maximum Flow Rate</strong><span>(Qmax)</span></div>
                    <div className="diag-metric-row__desc">Peak velocity of urine flow</div>
                  </div>
                </div>
                <div className="diag-metric-row">
                  <div className="diag-metric-row__dot" />
                  <div className="diag-metric-row__body">
                    <div className="diag-metric-row__label"><strong>Average Flow Rate</strong><span>(Qavg)</span></div>
                    <div className="diag-metric-row__desc">Mean evacuation rate</div>
                  </div>
                </div>
                <div className="diag-metric-row">
                  <div className="diag-metric-row__dot diag-metric-row__dot--mint" />
                  <div className="diag-metric-row__body">
                    <div className="diag-metric-row__label"><strong>Flow Time</strong><span>(seconds)</span></div>
                    <div className="diag-metric-row__desc">Time taken to finish voiding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="diag-other-hd">
            <h3>Other Diagnostic Techniques</h3>
            <p>Advanced imaging studies for precise localization and characterization of stricture:</p>
          </div>

          <div className="diag-other-grid">
            <article className="diag-other-card">
              <div className="diag-other-card__num">01</div>
              <div className="diag-other-card__head">
                <span className="diag-chip diag-chip--slate">Radiographic Contrast</span>
              </div>
              <h4 className="diag-other-card__name">Retrograde Urethrography (RGU)</h4>
              <p className="diag-other-card__desc">
                An X-ray procedure where radiopaque contrast dye is gently injected into the urethra to clearly visualize and detect anterior urethral abnormalities like strictures or injuries.
              </p>
              <div className="diag-other-card__accent" />
            </article>

            <article className="diag-other-card">
              <div className="diag-other-card__num">02</div>
              <div className="diag-other-card__head">
                <span className="diag-chip diag-chip--teal">Acoustic Imaging</span>
              </div>
              <h4 className="diag-other-card__name">Ultrasound Urethrography</h4>
              <p className="diag-other-card__desc">
                A non-invasive imaging technique using high-frequency sound waves to assess urethral strictures, lumen narrowing, and surrounding soft tissue, especially spongiofibrosis scarring.
              </p>
              <div className="diag-other-card__accent diag-other-card__accent--teal" />
            </article>

            <article className="diag-other-card">
              <div className="diag-other-card__num">03</div>
              <div className="diag-other-card__head">
                <span className="diag-chip diag-chip--purple">Dynamic Fluoroscopy</span>
              </div>
              <h4 className="diag-other-card__name">Voiding Cystourethrogram (VCUG)</h4>
              <p className="diag-other-card__desc">
                A fluoroscopic test that captures real-time X-ray images of the bladder and urethra during active urination to detect reflux, obstruction, or posterior structural anomalies.
              </p>
              <div className="diag-other-card__accent diag-other-card__accent--purple" />
            </article>
          </div>

          <div className="diag-premium__cta">
            <div className="diag-cta-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
              </svg>
            </div>
            <div className="diag-cta-text">
              <strong>Personalized Evaluation:</strong>
              <span>Your urologist will recommend the best diagnostic combination based on your individual symptoms, severity, and clinical history.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 8. CURRENT STANDARD OF CARE & SURGICAL LIMITATIONS (PREMIUM REDESIGN) ========== */}
      <section id="care-standards" className="block care-premium">
        <div className="container">
          <div className="care-premium__header">
            <span className="block__kicker">Treatment Modalities · Comparative Overview</span>
            <h2 className="care-premium__title">
              Current Standard of Care for <span>Urethral Strictures</span>
            </h2>
            <p className="care-premium__lede">
              Surgical treatment is usually advised to improve the flow rate of urine, to ease symptoms, and to prevent possible complications. Current surgical treatment modalities and their clinical limitations are outlined below:
            </p>
          </div>

          <div className="care-premium__ribbon">
            <div className="care-ribbon-seg care-ribbon-seg--warn">
              <span className="care-ribbon-seg__pct">~50%</span>
              <span className="care-ribbon-seg__lbl">Dilation Recurrence</span>
            </div>
            <div className="care-ribbon-seg care-ribbon-seg--danger">
              <span className="care-ribbon-seg__pct">70–80%</span>
              <span className="care-ribbon-seg__lbl">Urethrotomy Recurrence</span>
            </div>
            <div className="care-ribbon-seg care-ribbon-seg--dark">
              <span className="care-ribbon-seg__pct">4+</span>
              <span className="care-ribbon-seg__lbl">Urethroplasty Risks</span>
            </div>
          </div>

          <div className="care-premium__grid">
            <article className="care-mod-card care-mod-card--1">
              <div className="care-mod-card__top">
                <div className="care-mod-card__num">01</div>
                <div className="care-mod-card__tags">
                  <span className="care-tag care-tag--warn">Mechanical Widening</span>
                </div>
              </div>
              <div className="care-mod-card__head">
                <h3 className="care-mod-card__name">Dilation</h3>
                <div className="care-mod-card__sub">Widening of the Urethra</div>
              </div>
              <div className="care-mod-card__how">
                <div className="care-how-label">
                  <span className="care-how-label__dot" />
                  How it works
                </div>
                <p>
                  Thin rods/dilators of gradually increasing diameters are gently inserted into the urethra in order to mechanically open and stretch the narrowed urethral passage.
                </p>
              </div>
              <div className="care-mod-card__limits">
                <div className="care-limits-head">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>Limitations &amp; Drawbacks</span>
                </div>
                <ul>
                  <li><strong>QOL Severely Impacted:</strong> Requires frequent repeat instrumentation procedures, resulting in chronic discomfort.</li>
                  <li><strong>Very High Recurrence (~50%):</strong> Mechanical stretching does not remove scar tissue; narrowing commonly re-occurs.</li>
                  <li><strong>High UTI Risk:</strong> Repetitive urethral instrument passage markedly increases risks of traumatic infections.</li>
                </ul>
              </div>
            </article>

            <article className="care-mod-card care-mod-card--2">
              <div className="care-mod-card__top">
                <div className="care-mod-card__num">02</div>
                <div className="care-mod-card__tags">
                  <span className="care-tag care-tag--danger">Endoscopic Incision</span>
                </div>
              </div>
              <div className="care-mod-card__head">
                <h3 className="care-mod-card__name">Urethrotomy</h3>
                <div className="care-mod-card__sub">Direct Vision Internal Urethrotomy (DVIU)</div>
              </div>
              <div className="care-mod-card__how">
                <div className="care-how-label">
                  <span className="care-how-label__dot" />
                  How it works
                </div>
                <p>
                  A rigid telescope (cystoscope) along with a tiny knife or laser is passed into your urethra to examine the narrowing, after which your surgeon makes an incision in the scar tissue to make your urethra wider.
                </p>
              </div>
              <div className="care-mod-card__limits">
                <div className="care-limits-head">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>Limitations &amp; Drawbacks</span>
                </div>
                <ul>
                  <li><strong>Recurrence &gt; 70%–80%:</strong> Very high failure rates over mid- to long-term patient follow-up.</li>
                  <li><strong>Increased Healthcare Costs:</strong> Repeat surgical procedures compound the cumulative financial burden on patients.</li>
                  <li><strong>Decrease in QOL:</strong> Each internal incision triggers further healing scar tissue, progressively worsening stricture length.</li>
                </ul>
              </div>
            </article>

            <article className="care-mod-card care-mod-card--3">
              <div className="care-mod-card__top">
                <div className="care-mod-card__num">03</div>
                <div className="care-mod-card__tags">
                  <span className="care-tag care-tag--dark">Open Reconstruction</span>
                </div>
              </div>
              <div className="care-mod-card__head">
                <h3 className="care-mod-card__name">Urethroplasty</h3>
                <div className="care-mod-card__sub">Open Surgical Reconstruction</div>
              </div>
              <div className="care-mod-card__how">
                <div className="care-how-label">
                  <span className="care-how-label__dot" />
                  How it works
                </div>
                <p>
                  An open surgical reconstruction or replacement of the urethra narrowed by stricture. The stricture area is cut out and the two ends of the healthy urethra stitched together, frequently augmented with large-sized oral tissue grafts.
                </p>
              </div>
              <div className="care-mod-card__limits">
                <div className="care-limits-head">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>Limitations &amp; Drawbacks</span>
                </div>
                <ul>
                  <li><strong>Oral Mucosa Complications:</strong> Harvesting large buccal mucosa grafts from the mouth causes oral numbness, chronic pain, and salivary complications.</li>
                  <li><strong>Highly Invasive:</strong> Major open surgery; excision of scar segments can decrease effective urethral length.</li>
                  <li><strong>Erectile Dysfunction:</strong> Most patients risk developing erectile dysfunction and decreased sexual intimacy.</li>
                  <li><strong>High Financial Cost:</strong> Extended hospital stay, operating theatre fees, and prolonged recovery incur high expenses.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ========== 9. NOVEL TREATMENT: XTIKTR™ CELL THERAPY (PREMIUM REDESIGN) ========== */}
      <section id="novel-cell-therapy" className="block xtiktr-premium">
        <div className="container">

          <div className="xtiktr-premium__hero xtiktr-hero-prime">
            <div className="xtiktr-hero-prime__glow xtiktr-hero-prime__glow--a" />
            <div className="xtiktr-hero-prime__glow xtiktr-hero-prime__glow--b" />

            <div className="xtiktr-hero-prime__badges">
              <span className="xtiktr-pill xtiktr-pill--primary">
                <span className="xtiktr-pill__dot" />
                India's 1st Regenerative Cell Therapy
              </span>
              <span className="xtiktr-pill xtiktr-pill--gov">CDSCO (DCGI) Approved</span>
              <span className="xtiktr-pill xtiktr-pill--dbt">DBT Supported</span>
              <span className="xtiktr-pill xtiktr-pill--cipla">In Association with Cipla Ltd</span>
            </div>

            <h2 className="xtiktr-hero-prime__title">
              Novel Treatment of Urethral Stricture Using <span className="xtiktr-brand">XTIKTR™</span>
            </h2>
            <p className="xtiktr-hero-prime__sub">
              Autologous Adult Live Cultured Buccal Epithelial Cells — A Breakthrough Biological Restoration for Bulbar Urethral Strictures.
            </p>

            <div className="xtiktr-hero-prime__lead">
              <p>
                <strong>XTIKTR™</strong> is indicated to treat patients with <strong>Bulbar Urethral Strictures</strong>. It is India's first regenerative cell therapy that repairs the strictured urethra using the patient's own cells (<strong>Autologous</strong>) through a natural, biological, and non-destructive method.
              </p>
            </div>

            <div className="xtiktr-hero-prime__approvals">
              <div className="approval-tile">
                <div className="approval-tile__icon">🏛️</div>
                <div className="approval-tile__text">
                  <div className="approval-tile__label">Approved by</div>
                  <div className="approval-tile__value">CDSCO (DCGI)</div>
                  <div className="approval-tile__note">Ministry of Health &amp; Family Welfare, Government of India</div>
                </div>
              </div>
              <div className="approval-tile">
                <div className="approval-tile__icon approval-tile__icon--mint">🔬</div>
                <div className="approval-tile__text">
                  <div className="approval-tile__label">Supported by</div>
                  <div className="approval-tile__value">DBT</div>
                  <div className="approval-tile__note">Dept. of Biotechnology, Ministry of Science &amp; Technology</div>
                </div>
              </div>
            </div>
          </div>

          <div className="xtiktr-info-duo">
            <div className="xtiktr-info-card-prime xtiktr-info-card-prime--indication">
              <div className="xtiktr-info-card-prime__corner" />
              <div className="xtiktr-info-card-prime__head">
                <div className="xtiktr-info-card-prime__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span className="xtiktr-info-card-prime__chip">Approved Indication</span>
              </div>
              <h3 className="xtiktr-info-card-prime__title">Who Can Receive XTIKTR™?</h3>
              <p className="xtiktr-info-card-prime__desc">
                Specifically approved for the treatment of <strong>bulbar urethral stricture of at least 1–2 cm in length</strong> in adult males within the age group of <strong>18–56 years</strong>.
              </p>
              <div className="xtiktr-info-card-prime__pill">
                <span>Nature:</span> Autologous (Self) Regenerative Biological Therapy
              </div>
            </div>

            <div className="xtiktr-info-card-prime xtiktr-info-card-prime--eligibility">
              <div className="xtiktr-info-card-prime__corner xtiktr-info-card-prime__corner--blue" />
              <div className="xtiktr-info-card-prime__head">
                <div className="xtiktr-info-card-prime__icon xtiktr-info-card-prime__icon--blue">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <polyline points="17 11 19 13 23 9" />
                  </svg>
                </div>
                <span className="xtiktr-info-card-prime__chip xtiktr-info-card-prime__chip--blue">Patient Criteria</span>
              </div>
              <h3 className="xtiktr-info-card-prime__title">Eligibility Checklist</h3>
              <ul className="xtiktr-checklist">
                <li><span className="xtiktr-check">✓</span><span>Adult male with <strong>bulbar urethral stricture</strong> (18–56 years).</span></li>
                <li><span className="xtiktr-check">✓</span><span><strong>Previously failed</strong> dilation and internal urethrotomy procedures.</span></li>
                <li><span className="xtiktr-check">✓</span><span>Seeking a biological solution avoiding open urethroplasty morbidity.</span></li>
              </ul>
            </div>
          </div>

          <div className="xtiktr-process-prime">
            <div className="xtiktr-process-prime__head">
              <span className="block__kicker">Treatment Journey</span>
              <h3>How XTIKTR™ Works</h3>
              <p>From a minor outpatient oral tissue biopsy to targeted cellular engraftment at the stricture site — a carefully orchestrated 4-step process:</p>
            </div>

            <div className="xtiktr-process-timeline">
              <div className="xtiktr-process-node xtiktr-process-node--1">
                <div className="xtiktr-process-node__ring" />
                <div className="xtiktr-process-node__body">
                  <div className="xtiktr-process-node__step">
                    <span className="xtiktr-process-node__idx">Step</span>
                    <span className="xtiktr-process-node__num">01</span>
                  </div>
                  <div className="xtiktr-process-node__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </div>
                  <h4>Tissue Harvest</h4>
                  <p>Tissue harvest of buccal mucosa (oral tissue from inner cheek) from the patient under simple local anesthesia.</p>
                </div>
              </div>

              <div className="xtiktr-process-connector" />

              <div className="xtiktr-process-node xtiktr-process-node--2">
                <div className="xtiktr-process-node__ring" />
                <div className="xtiktr-process-node__body">
                  <div className="xtiktr-process-node__step">
                    <span className="xtiktr-process-node__idx">Step</span>
                    <span className="xtiktr-process-node__num">02</span>
                  </div>
                  <div className="xtiktr-process-node__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="19" cy="5" r="2" />
                      <circle cx="5" cy="19" r="2" />
                      <path d="m10.4 10.4-3.8 3.8" />
                      <path d="m17.4 6.6-3.8 3.8" />
                    </svg>
                  </div>
                  <h4>Cell Isolation</h4>
                  <p>Isolation of healthy buccal epithelial cells from harvested oral mucosa under strict aseptic protocols.</p>
                </div>
              </div>

              <div className="xtiktr-process-connector" />

              <div className="xtiktr-process-node xtiktr-process-node--3">
                <div className="xtiktr-process-node__ring" />
                <div className="xtiktr-process-node__body">
                  <div className="xtiktr-process-node__step">
                    <span className="xtiktr-process-node__idx">Step</span>
                    <span className="xtiktr-process-node__num">03</span>
                  </div>
                  <div className="xtiktr-process-node__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2v6h6" />
                      <path d="M4 12V4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
                      <path d="M2 15h10" />
                      <path d="m9 18 3-3-3-3" />
                    </svg>
                  </div>
                  <h4>GMP Cleanroom Culturing</h4>
                  <p>Culturing and expansion of buccal epithelial cells in a certified cGMP laboratory to generate viable regenerative cellular units.</p>
                </div>
              </div>

              <div className="xtiktr-process-connector" />

              <div className="xtiktr-process-node xtiktr-process-node--4">
                <div className="xtiktr-process-node__ring" />
                <div className="xtiktr-process-node__body">
                  <div className="xtiktr-process-node__step">
                    <span className="xtiktr-process-node__idx">Step</span>
                    <span className="xtiktr-process-node__num">04</span>
                  </div>
                  <div className="xtiktr-process-node__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 14 4-4" />
                      <path d="m3.34 7 8.66 5 8.66-5" />
                      <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
                    </svg>
                  </div>
                  <h4>Targeted Implantation</h4>
                  <p>Implantation of adult live cultured buccal epithelial cells (XTIKTR™) at the stricture site in the same patient to trigger natural tissue regeneration.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="xtiktr-outcomes-prime">
            <div className="xtiktr-outcomes-prime__head">
              <span className="block__kicker">Proven Therapeutic Advantages</span>
              <h3>Positive Outcomes of XTIKTR™</h3>
              <p>Restoring the natural urinary tract anatomy and returning patients to vibrant daily living — five transformative results:</p>
            </div>
            <div className="xtiktr-outcomes-prime__grid">
              <div className="outcome-prime outcome-prime--1">
                <div className="outcome-prime__icon">🌱</div>
                <h4>Natural &amp; Biological Regeneration</h4>
                <p>Natural regeneration of urethral tissue using the patient's own live cells without synthetic meshes or destructive open scarring.</p>
              </div>
              <div className="outcome-prime outcome-prime--2">
                <div className="outcome-prime__icon">💧</div>
                <h4>Normal Flow of Urine</h4>
                <p>Significantly increases urinary flow rates and relieves obstructive symptoms, allowing smooth and effortless bladder emptying.</p>
              </div>
              <div className="outcome-prime outcome-prime--3">
                <div className="outcome-prime__icon">🏃</div>
                <h4>Prompt Return to Daily Routine</h4>
                <p>Minimally invasive with short hospitalization (typically discharged within 24 hours), enabling early return to work and family.</p>
              </div>
              <div className="outcome-prime outcome-prime--4">
                <div className="outcome-prime__icon">❤️</div>
                <h4>Restoration of Sexual Function</h4>
                <p>Protects the neurovascular bundle of the penis, preserving erectile capability and restoring intimate confidence.</p>
              </div>
              <div className="outcome-prime outcome-prime--5">
                <div className="outcome-prime__icon">🌟</div>
                <h4>Improvement in Quality of Life</h4>
                <p>Frees patients from chronic pain, recurring dilations, social anxiety, and sleep disturbances caused by stricture disease.</p>
              </div>
            </div>
          </div>

          <div className="xtiktr-precautions-prime">
            <div className="xtiktr-precautions-prime__head">
              <span className="block__kicker">Patient Care Guidelines</span>
              <h3>Precautions for Maximum Safety &amp; Efficacy</h3>
              <p>Clear clinical directives following tissue harvesting and cellular implantation:</p>
            </div>
            <div className="xtiktr-precautions-prime__duo">
              <div className="phase-card phase-card--phase1">
                <div className="phase-card__top">
                  <span className="phase-card__tag">Phase 01</span>
                  <div className="phase-card__corner" />
                </div>
                <h4>Precautions Post Tissue Harvest</h4>
                <div className="phase-card__sub">Essential care for the oral cheek biopsy site</div>
                <ul className="phase-card__list">
                  <li><span className="phase-bullet phase-bullet--mint" /> <span><strong>Dietary Caution:</strong> Avoid spicy and hot food requiring chewing until advised.</span></li>
                  <li><span className="phase-bullet phase-bullet--mint" /> <span><strong>Oral Gargling:</strong> Do regular gargling with prescribed medication per urologist advice.</span></li>
                  <li><span className="phase-bullet phase-bullet--mint" /> <span><strong>Avoid Toxins:</strong> Avoid smoking and alcohol during the healing window.</span></li>
                  <li><span className="phase-bullet phase-bullet--mint" /> <span><strong>Tooth Care:</strong> Avoid forceful brushing on teeth for 1 week.</span></li>
                  <li><span className="phase-bullet phase-bullet--mint" /> <span><strong>Contact Clinic:</strong> If swelling, pain, or bleeding appears, contact urologist promptly.</span></li>
                </ul>
              </div>

              <div className="phase-card phase-card--phase2">
                <div className="phase-card__top">
                  <span className="phase-card__tag phase-card__tag--blue">Phase 02</span>
                  <div className="phase-card__corner phase-card__corner--blue" />
                </div>
                <h4>Precautions Post-Implantation</h4>
                <div className="phase-card__sub phase-card__sub--blue">Care instructions following cell therapy implantation</div>
                <ul className="phase-card__list">
                  <li><span className="phase-bullet phase-bullet--blue" /> <span><strong>Catheter Removal:</strong> Within 2 weeks per urologist discretion.</span></li>
                  <li><span className="phase-bullet phase-bullet--blue" /> <span><strong>Hospital Stay:</strong> Typically discharged after 24 hours (as per urologist).</span></li>
                  <li><span className="phase-bullet phase-bullet--blue" /> <span><strong>Medications &amp; Showering:</strong> Follow urologist guidelines; avoid baths/hot tubs until cleared.</span></li>
                  <li><span className="phase-bullet phase-bullet--blue" /> <span><strong>Activity &amp; Sex:</strong> Avoid heavy lifting. Avoid intercourse for 4–6 weeks.</span></li>
                  <li><span className="phase-bullet phase-bullet--blue" /> <span><strong>Driving:</strong> Avoid driving until cleared; do not drive if drowsy on medication.</span></li>
                  <li><span className="phase-bullet phase-bullet--blue" /> <span><strong>Bowel &amp; Hydration:</strong> Use stool softeners if needed; drink plenty of water.</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="xtiktr-trial-prime">
            <div className="xtiktr-trial-prime__head">
              <span className="block__kicker">Clinical Trial in India</span>
              <h3>Success of XTIKTR™ — Clinical Trial Results</h3>
              <p className="trial-prime__lead">
                <strong>"XTIKTR™ Clinical Trial in India: Cure of urethral stricture with XTIKTR™ — Autologous Adult Live Cultured Buccal Epithelial Cells"</strong>
              </p>
              <p className="trial-prime__meta">
                A prospective, open-label, multicentric clinical trial was conducted across premier hospitals in India to assess the safety and efficacy of Autologous Adult Live Cultured Buccal Epithelial Cells (XTIKTR™) in male patients with urethral stricture, following formal regulatory approval from the CDSCO (DCGI), Ministry of Health and Family Welfare, Government of India.
              </p>
            </div>

            <div className="trial-prime__findings">
              <div className="finding-prime finding-prime--efficacy">
                <div className="finding-prime__corner" />
                <div className="finding-prime__head">
                  <span className="finding-prime__icon">📈</span>
                  <h4>Efficacy Analysis</h4>
                </div>
                <p>
                  <strong>Significant Clinical Improvement:</strong> Uroflowmetry flow rates (Qmax peak flow) and AUA Symptom Scores significantly improved from baseline for all evaluated patients.
                </p>
              </div>
              <div className="finding-prime finding-prime--safety">
                <div className="finding-prime__corner finding-prime__corner--mint" />
                <div className="finding-prime__head">
                  <span className="finding-prime__icon">🛡️</span>
                  <h4>Safety Analysis</h4>
                </div>
                <p>
                  <strong>Zero Product-Related Adverse Events:</strong> There was <strong>no Adverse Event (AE)</strong> reported related to the product in the entire clinical trial. There was <strong>no Serious Adverse Event (SAE)</strong> reported during the entire clinical study.
                </p>
              </div>
              <div className="finding-prime finding-prime--conclusion">
                <div className="finding-prime__corner finding-prime__corner--amber" />
                <div className="finding-prime__head">
                  <span className="finding-prime__icon">🏆</span>
                  <h4>Clinical Conclusion</h4>
                </div>
                <p>
                  Autologous Adult Live Cultured Buccal Epithelial Cells (XTIKTR™) is <strong>safe, effective, and well-tolerated</strong> with significant improvement in all parameters for urethral stricture disease in males. Patients' urinary excretory function and quality of life greatly improved.
                </p>
              </div>
            </div>

            <div className="trial-prime__stamp">
              <p>
                <strong>Official Approval:</strong> Cell Therapy (Brand name: <strong>XTIKTR™</strong>, in association with <strong>Cipla Ltd</strong>) is approved for the treatment of bulbar urethral stricture of at least 1–2 cm in length in males for age group 18–56 years by the <strong>Drugs Controller General of India (CDSCO)</strong>, Ministry of Health and Family Welfare, Government of India.
              </p>
            </div>
          </div>

          <div className="xtiktr-refs-prime">
            <button
              type="button"
              className={`refs-prime-toggle ${showReferences ? 'is-open' : ''}`}
              onClick={() => setShowReferences(prev => !prev)}
              aria-expanded={showReferences}
            >
              <div className="refs-prime-toggle__left">
                <span className="refs-prime-toggle__icon" aria-hidden="true">📚</span>
                <div className="refs-prime-toggle__text">
                  <span className="refs-prime-toggle__title">Scientific References &amp; Evidence Base</span>
                  <span className="refs-prime-toggle__count">8 Peer-Reviewed Citations</span>
                </div>
              </div>
              <div className="refs-prime-toggle__right">
                <span className="refs-prime-toggle__action">{showReferences ? 'Hide' : 'View'}</span>
                <svg
                  className={`refs-prime-toggle__chev ${showReferences ? 'is-rotated' : ''}`}
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </button>

            {showReferences && (
              <div className="refs-prime-drawer">
                <ol className="refs-prime-list">
                  <li><span className="refs-prime-num">[1]</span><div>Mangaiyarkarasi S, Thiruvasagamani B, Mohamed Ali J. <em>Clinical Presentation and Management of Urethral Strictures: A Study.</em></div></li>
                  <li><span className="refs-prime-num">[2]</span><div>Mayo Clinic Patient Care &amp; Health Information: <em>Urethral Stricture Disease Overview &amp; Clinical Management.</em></div></li>
                  <li><span className="refs-prime-num">[3]</span><div>Golomb D, Atias M, Goldberg H, Rappaport YH, Raz O. Incidence and Characteristics of Urethral Stricture Following Transurethral Resection of the Prostate and Open Simple Prostatectomy: A 21-Year Retrospective Cohort Study. <em>Journal of Clinical Medicine</em>. 2025. doi:10.3390/jcm14113777.</div></li>
                  <li><span className="refs-prime-num">[4]</span><div>Verla W, Oosterlinck W, Spinoit AF, Waterloos M. A Comprehensive Review Emphasizing Anatomy, Etiology, Diagnosis, and Treatment of Male Urethral Stricture Disease. <em>Biomed Res Int</em>. 2019 Apr. doi:10.1155/2019/9046430. PMID: 31139658; PMCID: PMC6500724.</div></li>
                  <li><span className="refs-prime-num">[5]</span><div><em>uregrOw Patient Book</em> by Regrow Biosciences Pvt. Ltd. &copy; Copyright 2025.</div></li>
                  <li><span className="refs-prime-num">[6]</span><div>Central Drugs Standard Control Organization (CDSCO), Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India. Online Drug Registry: <a href="https://cdscoonline.gov.in" target="_blank" rel="noopener noreferrer">cdscoonline.gov.in</a>.</div></li>
                  <li><span className="refs-prime-num">[7]</span><div>Kulkarni SB, Pathak H, Khanna S, Choubey S. A prospective, multi-center, open-label single-arm phase 2b study of autologous adult live cultured buccal epithelial cells (AALBEC) in the treatment of bulbar urethral stricture. <em>World Journal of Urology</em>. 2021; Epub 2020 Sep 14. PMID: 32929625.</div></li>
                  <li><span className="refs-prime-num">[8]</span><div>Clinical Data on File, Regrow Biosciences Pvt. Ltd. / Cipla Ltd, Mumbai, India.</div></li>
                </ol>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;
