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
import weakUrinationVideo from '../assets/weak Urination.mp4';
import painVideo from '../assets/pain.mp4';
import strainingVideo from '../assets/straining.mp4';
import bladderVideo from '../assets/bladder.mp4';
import qolSleepImg from '../assets/sleep.jpeg';
import qolRoutineImg from '../assets/work.jpeg';
import qolEmotionImg from '../assets/Emotional well-being.jpeg';
import qolSocialImg from '../assets/Social life.jpeg';
import clinicalAssessmentImg from '../assets/clinical Assessment.jpeg';
import diagImg from '../assets/diag.jpeg';
import uroflowmetryImg from '../assets/Uroflowmetry.jpeg';
import rugImagingImg from '../assets/RUG.jpeg';
import vcugImagingImg from '../assets/VCUG.jpeg';
import urethroscopyImg from '../assets/Urethroscopy.jpeg';
import pvrUltrasoundImg from '../assets/PVR.jpeg';
import labInvestigationImg from '../assets/Laboratory.jpeg';
import dilatationImg from '../assets/Dilatation.jpeg';
import epaImg from '../assets/EPA.jpeg';
import iscImg from '../assets/ISC.jpeg';
import viuImg from '../assets/VIU.jpeg';
import substitutionImg from '../assets/Substitution Urethroplasty.jpeg';
import stagedImg from '../assets/Staged Urethroplasty.jpeg';
import stentsImg from '../assets/Urethral Stents.jpeg';
import perinealImg from '../assets/Perineal Urethrostomy.jpeg';
import aalbecTherapyImg from '../assets/AALBEC Therapy.jpeg';
import buccalBiopsyImg from '../assets/buccal biopsy.jpeg';
import cellCultureImg from '../assets/cell culture.jpeg';
import cellDeliveryImg from '../assets/cell delivery.jpeg';
import regenerativeIntentImg from '../assets/Regenerative Intent.jpeg';
import './Home.css';

const SYMPTOMS = [
  {
    id: 'weak-urination',
    label: 'Weak urination',
    badge: 'Decreased Stream',
    video: weakUrinationVideo,
    shortDesc: 'Noticeable reduction in urinary velocity, often spraying, dribbling, or prolonged voiding.',
    clinicalNote: 'Caused by narrowed urethral caliber resisting urine discharge, resulting in an extended voiding duration and reduced flow rate (diminished Qmax).'
  },
  {
    id: 'pain-during-urination',
    label: 'Pain during urination',
    badge: 'Dysuria / Discomfort',
    video: painVideo,
    shortDesc: 'Burning, stinging, or discomfort along the urethra or lower pelvis while voiding.',
    clinicalNote: 'Secondary mucosal inflammation, irritation, or localized infection upstream of the stricture causes dysuric pain during active urination.'
  },
  {
    id: 'straining-to-urinate',
    label: 'Straining to urinate',
    badge: 'High Pressure',
    video: strainingVideo,
    shortDesc: 'Needing conscious abdominal strain or physical effort to push urine out.',
    clinicalNote: 'Patients compensate for outlet obstruction by bearing down with abdominal and pelvic musculature to force urine past the stricture.'
  },
  {
    id: 'inability-to-empty-bladder',
    label: 'Inability to completely empty the bladder',
    badge: 'Post-Void Retention',
    video: bladderVideo,
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
  const [showConsultModal, setShowConsultModal] = useState(false);

  useEffect(() => {
    if (!showStrictureDetails && !selectedSymptom && !showConsultModal) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowStrictureDetails(false);
        setSelectedSymptom(null);
        setShowConsultModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [showStrictureDetails, selectedSymptom, showConsultModal]);

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

      {/* Pop-up Modal for Learn More: Comprehensive Medical Anatomy & Condition Overview */}
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
              {/* Left Column: Structured Clinical Content */}
              <div className="stricture-modal__content">
                {/* 1. Definition */}
                <div className="sm-section">
                  <h4 className="sm-section-title">
                    <span className="sm-section-num">01</span> Definition
                  </h4>
                  <p className="sm-text">
                    A urethral stricture is an abnormal narrowing of the urethral lumen caused by fibrosis and scarring in the urethral epithelium or underlying tissue. It obstructs urinary flow and may lead to recurrent infections, bladder dysfunction, and upper urinary tract damage if left untreated.
                  </p>
                </div>

                {/* 2. Anatomical Context */}
                <div className="sm-section">
                  <h4 className="sm-section-title">
                    <span className="sm-section-num">02</span> Anatomical Context
                  </h4>
                  <p className="sm-text">
                    The male anterior urethra, particularly the bulbar and penile regions, is susceptible to strictures. The bulbar urethra is a common site affected by trauma and instrumentation.
                  </p>
                </div>

                {/* 3. Causes of Urethral Stricture */}
                <div className="sm-section">
                  <h4 className="sm-section-title">
                    <span className="sm-section-num">03</span> Causes of Urethral Stricture
                  </h4>
                  <div className="sm-causes-grid">
                    <div className="sm-cause-card">
                      <div className="sm-cause-icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2" />
                          <path d="M8.5 2h7" />
                          <path d="M12 7h2.5" />
                          <path d="M12 12h2.5" />
                        </svg>
                      </div>
                      <div className="sm-cause-info">
                        <strong>Mechanical Injury</strong>
                        <span>Catheterization or instrumentation</span>
                      </div>
                    </div>

                    <div className="sm-cause-card">
                      <div className="sm-cause-icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <div className="sm-cause-info">
                        <strong>Trauma</strong>
                        <span>Including straddle injuries</span>
                      </div>
                    </div>

                    <div className="sm-cause-card">
                      <div className="sm-cause-icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div className="sm-cause-info">
                        <strong>Infection</strong>
                        <span>Such as urethritis</span>
                      </div>
                    </div>

                    <div className="sm-cause-card">
                      <div className="sm-cause-icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <div className="sm-cause-info">
                        <strong>Inflammatory Conditions</strong>
                        <span>Including lichen sclerosus</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. How a Stricture Develops */}
                <div className="sm-section">
                  <h4 className="sm-section-title">
                    <span className="sm-section-num">04</span> How a Stricture Develops
                  </h4>
                  <div className="sm-timeline">
                    <div className="sm-timeline-step">
                      <div className="sm-timeline-marker">1</div>
                      <div className="sm-timeline-body">
                        <strong>Initial Injury</strong>
                        <p>Damage to the urethral lining and underlying tissue.</p>
                      </div>
                    </div>

                    <div className="sm-timeline-step">
                      <div className="sm-timeline-marker">2</div>
                      <div className="sm-timeline-body">
                        <strong>Inflammation</strong>
                        <p>The body triggers an inflammatory response.</p>
                      </div>
                    </div>

                    <div className="sm-timeline-step">
                      <div className="sm-timeline-marker">3</div>
                      <div className="sm-timeline-body">
                        <strong>Epithelial Dysfunction</strong>
                        <p>The protective lining is disrupted and healing may be delayed.</p>
                      </div>
                    </div>

                    <div className="sm-timeline-step">
                      <div className="sm-timeline-marker">4</div>
                      <div className="sm-timeline-body">
                        <strong>Scar Tissue Formation</strong>
                        <p>Fibroblasts produce excess extracellular matrix, resulting in fibrosis.</p>
                      </div>
                    </div>

                    <div className="sm-timeline-step">
                      <div className="sm-timeline-marker">5</div>
                      <div className="sm-timeline-body">
                        <strong>Progressive Narrowing</strong>
                        <p>Scarring in the surrounding corpus spongiosum can narrow the urethral passage.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Symptoms and Impact */}
                <div className="sm-section sm-section--last">
                  <h4 className="sm-section-title">
                    <span className="sm-section-num">05</span> Symptoms and Impact
                  </h4>
                  <div className="sm-impact-box">
                    <p className="sm-impact-intro">
                      Narrowing can obstruct urine flow and may cause:
                    </p>
                    <div className="sm-symptoms-chips">
                      <span className="sm-symptom-chip">Weak urine flow</span>
                      <span className="sm-symptom-chip">Intermittent urination</span>
                      <span className="sm-symptom-chip">Frequent urination</span>
                      <span className="sm-symptom-chip">Incomplete bladder emptying</span>
                      <span className="sm-symptom-chip">Recurrent infections</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Male Urethral Anatomical Illustration */}
              <div className="stricture-modal__visual">
                <div className="stricture-diagram-frame">
                  <img
                    src={strictureDiagram}
                    alt="Male Urethral Anatomy Diagram showing Stricture in Urethra"
                    className="stricture-diagram-img"
                    loading="lazy"
                  />
                  <div className="stricture-diagram-caption">
                    <strong>Sagittal Anatomy:</strong> Demonstrates urethral pathway obstruction, site of stricture narrowing, and proximal urinary resistance.
                  </div>
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
              >
                <div className="symptom-card__img-wrap">
                  <video
                    src={s.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="symptom-card__video"
                  />
                </div>
                <div className="symptom-card__body">
                  <div className="symptom-card__meta">
                    <span className="symptom-card__tag">{s.badge}</span>
                    <span className="symptom-card__num">0{idx + 1}</span>
                  </div>
                  <h3 className="symptom-card__title">{s.label}</h3>
                  <p className="symptom-card__desc">{s.shortDesc}</p>
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
                  <video
                    src={selectedSymptom.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="symptom-modal-img symptom-modal-video"
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

      {/* ========== SECTION 6 — IMPACT ON QUALITY OF LIFE ========== */}
      <section id="quality-of-life" className="sec-block qol-section">
        <div className="qol-section__ambient-mesh" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="block__hd qol-header">
            <div className="qol-kicker-badge">
              <span className="qol-kicker-dot" aria-hidden="true" />
              <span>QUALITY OF LIFE</span>
            </div>
            <h2 className="block__title qol-title">
              How Urethral Strictures <span className="qol-title-gradient">Can Affect Daily Life</span>
            </h2>
            <p className="block__lede qol-lede">
              Persistent urinary symptoms can interfere with everyday activities, rest and well-being. The impact varies from person to person.
            </p>
          </div>

          <div className="qol-grid qol-grid--2x2">
            {/* Row 1 - Left: Sleep and rest */}
            <article className="qol-card qol-card--sleep">
              <div className="qol-card__img-wrap">
                <img
                  src={qolSleepImg}
                  alt="Sleep and rest"
                  className="qol-card__img"
                  loading="lazy"
                />
                <div className="qol-card__img-overlay" aria-hidden="true" />
                <span className="qol-card__tag">Night Rest</span>
              </div>
              <div className="qol-card__body">
                <h3 className="qol-card__title">Sleep and rest</h3>
                <p className="qol-card__desc">
                  Nighttime urinary symptoms may interrupt sleep.
                </p>
              </div>
              <div className="qol-card__accent-bar" aria-hidden="true" />
            </article>

            {/* Row 1 - Right: Work and routines */}
            <article className="qol-card qol-card--work">
              <div className="qol-card__img-wrap">
                <img
                  src={qolRoutineImg}
                  alt="Work and routines"
                  className="qol-card__img"
                  loading="lazy"
                />
                <div className="qol-card__img-overlay" aria-hidden="true" />
                <span className="qol-card__tag">Routines</span>
              </div>
              <div className="qol-card__body">
                <h3 className="qol-card__title">Work and routines</h3>
                <p className="qol-card__desc">
                  Urinary difficulties may disrupt daily activities and work.
                </p>
              </div>
              <div className="qol-card__accent-bar" aria-hidden="true" />
            </article>

            {/* Row 2 - Left: Emotional well-being */}
            <article className="qol-card qol-card--emotion">
              <div className="qol-card__img-wrap">
                <img
                  src={qolEmotionImg}
                  alt="Emotional well-being"
                  className="qol-card__img"
                  loading="lazy"
                />
                <div className="qol-card__img-overlay" aria-hidden="true" />
                <span className="qol-card__tag">Well-being</span>
              </div>
              <div className="qol-card__body">
                <h3 className="qol-card__title">Emotional well-being</h3>
                <p className="qol-card__desc">
                  Persistent symptoms may lead to worry or frustration.
                </p>
              </div>
              <div className="qol-card__accent-bar" aria-hidden="true" />
            </article>

            {/* Row 2 - Right: Social life */}
            <article className="qol-card qol-card--social">
              <div className="qol-card__img-wrap">
                <img
                  src={qolSocialImg}
                  alt="Social life"
                  className="qol-card__img"
                  loading="lazy"
                />
                <div className="qol-card__img-overlay" aria-hidden="true" />
                <span className="qol-card__tag">Social</span>
              </div>
              <div className="qol-card__body">
                <h3 className="qol-card__title">Social life</h3>
                <p className="qol-card__desc">
                  Symptoms may affect comfort and confidence during daily activities.
                </p>
              </div>
              <div className="qol-card__accent-bar" aria-hidden="true" />
            </article>
          </div>

          {/* Clinical Guidance Banner */}
          <div className="qol-advisory-banner">
            <div className="qol-advisory-banner__left">
              <div className="qol-advisory-banner__icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="qol-advisory-banner__content">
                <span className="qol-advisory-banner__label">Clinical Perspective</span>
                <p className="qol-advisory-banner__text">
                  Early evaluation can help patients understand their condition and discuss appropriate treatment options with a urologist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7 — DIAGNOSIS OF URETHRAL STRICTURES ========== */}
      <section id="diagnosis" className="sec-block sec-block--bg-white diag-section">
        <div className="container">
          {/* 1. SECTION INTRODUCTION (Two-Column Layout) */}
          <div className="diag-intro-grid">
            {/* Left Column */}
            <div className="diag-intro-left">
              <span className="block__kicker">DIAGNOSIS AND CLINICAL EVALUATION</span>
              <h2 className="diag-intro-heading">
                How Is a Urethral Stricture <span>Diagnosed?</span>
              </h2>
              <div className="diag-intro-copy">
                <p className="diag-intro-lead">
                  Diagnosing a urethral stricture involves more than identifying urinary symptoms. A urologist evaluates the patient's medical history, performs an appropriate clinical examination and recommends investigations to understand the location, length and severity of the narrowing.
                </p>
                <p className="diag-intro-sublead">
                  These findings help the treating team assess urinary function, identify associated conditions and determine which treatment options may be appropriate for the individual patient.
                </p>
              </div>

              <div className="diag-keypoints-list">
                <div className="diag-keypoint-item">
                  <div className="diag-keypoint-badge" aria-hidden="true">1</div>
                  <div className="diag-keypoint-text">
                    <strong>Understand symptoms and medical history.</strong>
                  </div>
                </div>
                <div className="diag-keypoint-item">
                  <div className="diag-keypoint-badge" aria-hidden="true">2</div>
                  <div className="diag-keypoint-text">
                    <strong>Identify the location and extent of the narrowing.</strong>
                  </div>
                </div>
                <div className="diag-keypoint-item">
                  <div className="diag-keypoint-badge" aria-hidden="true">3</div>
                  <div className="diag-keypoint-text">
                    <strong>Assess urinary function and plan appropriate treatment.</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Male Urinary Tract Anatomical Illustration */}
            <div className="diag-intro-right">
              <figure className="diag-anatomy-card">
                <div className="diag-anatomy-media">
                  <img 
                    src={diagImg} 
                    alt="Medical illustration showing the male urinary tract and a narrowed bulbar urethral segment."
                    className="diag-anatomy-img"
                    loading="lazy"
                  />
                  <span className="diag-anatomy-tag">Clinical Illustration</span>
                </div>
                <figcaption className="diag-anatomy-caption">
                  <span className="diag-anatomy-caption__title">Male Urinary Tract Anatomy:</span>
                  Depicting the urinary bladder, prostate, bulbar urethra, and focal stricture narrowing.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* 2. DIAGNOSTIC PROCESS: FOUR STAGES */}
          <div className="diag-process-header">
            <span className="block__kicker">CLINICAL PATHWAY</span>
            <h3 className="diag-process-title">Understanding the Diagnostic Process</h3>
            <p className="diag-process-lead">
              Different assessments provide different pieces of information. Your urologist will decide which investigations are needed based on your symptoms, medical history and clinical findings.
            </p>
          </div>

          <div className="diag-stages-row">
            {/* STAGE 1 — Clinical Assessment */}
            <article className="diag-stage-card">
              <div className="diag-stage-card__header">
                <span className="diag-stage-number">Stage 1</span>
                <h4 className="diag-stage-card__title">Clinical Assessment</h4>
              </div>
              <div className="diag-stage-media">
                <img 
                  src={clinicalAssessmentImg} 
                  alt="Urologist discussing urinary symptoms and medical history with a patient."
                  className="diag-stage-img"
                  loading="lazy"
                />
              </div>
              <div className="diag-stage-card__body">
                <p className="diag-stage-desc">
                  The evaluation begins with a discussion of urinary symptoms, when they started, how they have changed and whether they have returned after previous treatment.
                </p>
                <div className="diag-stage-checklist-wrap">
                  <span className="diag-stage-checklist-title">The urologist may review:</span>
                  <ul className="diag-stage-checklist">
                    <li>Previous urethral injuries or trauma.</li>
                    <li>History of catheterization or urinary procedures.</li>
                    <li>Previous treatments and recurrence of symptoms.</li>
                    <li>Relevant medical conditions and surgical history.</li>
                  </ul>
                </div>
                <p className="diag-stage-note">
                  A physical examination may also be performed to assess the abdomen, bladder region, penis and perineum, with other examinations where clinically appropriate.
                </p>
              </div>
            </article>

            {/* STAGE 2 — Urinary Flow Assessment */}
            <article className="diag-stage-card">
              <div className="diag-stage-card__header">
                <span className="diag-stage-number">Stage 2</span>
                <h4 className="diag-stage-card__title">Uroflowmetry</h4>
              </div>
              <div className="diag-stage-media">
                <img 
                  src={uroflowmetryImg} 
                  alt="Uroflowmetry equipment used to measure urinary flow."
                  className="diag-stage-img"
                  loading="lazy"
                />
              </div>
              <div className="diag-stage-card__body">
                <p className="diag-stage-desc">
                  Uroflowmetry is a non-invasive investigation that measures the rate and pattern of urine flow during urination. The results may help identify a pattern of urinary obstruction and indicate whether further evaluation is needed.
                </p>
                <div className="diag-stage-checklist-wrap">
                  <span className="diag-stage-checklist-title">The test may record:</span>
                  <ul className="diag-stage-checklist">
                    <li>Peak urinary flow rate.</li>
                    <li>Overall flow pattern.</li>
                    <li>Duration and characteristics of urination.</li>
                  </ul>
                </div>
                <div className="diag-stage-caution-box">
                  <strong>Clinical Notice:</strong> Uroflowmetry alone cannot confirm a urethral stricture. The results must be interpreted alongside the patient's symptoms and other clinical findings.
                </div>
              </div>
            </article>

            {/* STAGE 3 — Imaging and Anatomical Assessment */}
            <article className="diag-stage-card diag-stage-card--col-span">
              <div className="diag-stage-card__header">
                <span className="diag-stage-number">Stage 3</span>
                <h4 className="diag-stage-card__title">Imaging the Urethra</h4>
              </div>
              <div className="diag-stage-card__body">
                <p className="diag-stage-desc">
                  Imaging investigations help the urologist understand the location, length and number of strictures and assess the anatomy of the urinary passage.
                </p>

                <div className="diag-subcards-grid diag-subcards-grid--2col">
                  {/* CARD A: RUG */}
                  <div className="diag-subcard">
                    <div className="diag-subcard-media">
                      <img 
                        src={rugImagingImg} 
                        alt="Medical imaging used to evaluate the location and length of an anterior urethral stricture."
                        className="diag-subcard-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="diag-subcard-body">
                      <span className="diag-subcard-tag">Card A • Contrast Study</span>
                      <h5 className="diag-subcard-title">Retrograde Urethrogram (RUG)</h5>
                      <p className="diag-subcard-desc">
                        RUG uses contrast imaging to visualize the anterior urethra. It helps identify the location, length and number of strictures and may be used when planning treatment or assessing recurrence.
                      </p>
                    </div>
                  </div>

                  {/* CARD B: VCUG */}
                  <div className="diag-subcard">
                    <div className="diag-subcard-media">
                      <img 
                        src={vcugImagingImg} 
                        alt="Medical illustration of bladder and urethral imaging during voiding."
                        className="diag-subcard-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="diag-subcard-body">
                      <span className="diag-subcard-tag">Card B • Dynamic Voiding</span>
                      <h5 className="diag-subcard-title">Voiding Cystourethrogram (VCUG)</h5>
                      <p className="diag-subcard-desc">
                        VCUG can help assess the posterior urethra and bladder during voiding. It may be used in selected complex or recurrent cases when additional anatomical information is required.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Compact Expandable Information Panel for Ultrasound Urethrography */}
                <details className="diag-expandable-panel">
                  <summary className="diag-expandable-summary">
                    <div className="diag-expandable-summary-left">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span className="diag-expandable-summary-text">Ultrasound Urethrography</span>
                      <span className="diag-expandable-badge">Expand for Clinical Note</span>
                    </div>
                    <svg className="diag-expandable-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="diag-expandable-body">
                    <p>
                      Ultrasound urethrography may help assess the urethral wall and surrounding tissue, including the extent of spongiofibrosis, where appropriate. High-frequency sonography allows non-radiating evaluation of periurethral scar tissue depth and elasticity.
                    </p>
                  </div>
                </details>
              </div>
            </article>

            {/* STAGE 4 — Endoscopic and Additional Investigations */}
            <article className="diag-stage-card diag-stage-card--col-span">
              <div className="diag-stage-card__header">
                <span className="diag-stage-number">Stage 4</span>
                <h4 className="diag-stage-card__title">Detailed Assessment</h4>
              </div>
              <div className="diag-stage-card__body">
                <p className="diag-stage-desc">
                  Additional investigations may be required to examine the urethra directly, assess residual urine or identify associated conditions.
                </p>

                <div className="diag-subcards-grid diag-subcards-grid--3col">
                  {/* CARD A: Endoscopy */}
                  <div className="diag-subcard">
                    <div className="diag-subcard-media">
                      <img 
                        src={urethroscopyImg} 
                        alt="Medical illustration of endoscopic examination of the urethra."
                        className="diag-subcard-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="diag-subcard-body">
                      <span className="diag-subcard-tag">Card A • Endoscopy</span>
                      <h5 className="diag-subcard-title">Urethroscopy or Cystourethroscopy</h5>
                      <p className="diag-subcard-desc">
                        An endoscopic examination allows the urologist to directly visualize the urethral narrowing and assess the surrounding mucosal condition. It may also help identify associated inflammation or stones and support treatment planning.
                      </p>
                    </div>
                  </div>

                  {/* CARD B: PVR */}
                  <div className="diag-subcard">
                    <div className="diag-subcard-media">
                      <img 
                        src={pvrUltrasoundImg} 
                        alt="Ultrasound assessment of urine remaining in the bladder after urination."
                        className="diag-subcard-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="diag-subcard-body">
                      <span className="diag-subcard-tag">Card B • Bladder Volume</span>
                      <h5 className="diag-subcard-title">Post-Void Residual (PVR)</h5>
                      <p className="diag-subcard-desc">
                        PVR assessment estimates the amount of urine remaining in the bladder after urination, commonly using ultrasound. The result may help evaluate incomplete bladder emptying.
                      </p>
                    </div>
                  </div>

                  {/* CARD C: Lab */}
                  <div className="diag-subcard">
                    <div className="diag-subcard-media">
                      <img 
                        src={labInvestigationImg} 
                        alt="Laboratory investigations used during a urological assessment."
                        className="diag-subcard-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="diag-subcard-body">
                      <span className="diag-subcard-tag">Card C • Laboratory</span>
                      <h5 className="diag-subcard-title">Laboratory Investigations</h5>
                      <p className="diag-subcard-desc">
                        Urine testing and culture may be used to investigate infection. Kidney function tests and other laboratory investigations may be recommended when clinically indicated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* 3. DIAGNOSTIC SUMMARY TABLE */}
          <div className="diag-table-section">
            <div className="diag-table-header">
              <span className="block__kicker">CLINICAL REFERENCE</span>
              <h3 className="diag-table-title">What Does Each Test Help Evaluate?</h3>
              <p className="diag-table-lead">
                A structured overview of each diagnostic assessment and its primary clinical purpose.
              </p>
            </div>

            <div className="diag-table-wrapper">
              <table className="diag-summary-table">
                <thead>
                  <tr>
                    <th scope="col" className="diag-th-test">TEST</th>
                    <th scope="col" className="diag-th-purpose">MAIN PURPOSE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="diag-td-test">
                      <div className="diag-test-name">Clinical assessment</div>
                    </td>
                    <td className="diag-td-purpose">
                      Reviews symptoms, medical history, previous treatments and examination findings.
                    </td>
                  </tr>
                  <tr>
                    <td className="diag-td-test">
                      <div className="diag-test-name">Uroflowmetry</div>
                    </td>
                    <td className="diag-td-purpose">
                      Measures urinary flow rate and pattern.
                    </td>
                  </tr>
                  <tr>
                    <td className="diag-td-test">
                      <div className="diag-test-name">Retrograde urethrogram (RUG)</div>
                    </td>
                    <td className="diag-td-purpose">
                      Evaluates the location, length and number of anterior urethral strictures.
                    </td>
                  </tr>
                  <tr>
                    <td className="diag-td-test">
                      <div className="diag-test-name">Voiding cystourethrogram (VCUG)</div>
                    </td>
                    <td className="diag-td-purpose">
                      Helps assess the posterior urethra and bladder during voiding in selected cases.
                    </td>
                  </tr>
                  <tr>
                    <td className="diag-td-test">
                      <div className="diag-test-name">Urethroscopy or cystourethroscopy</div>
                    </td>
                    <td className="diag-td-purpose">
                      Directly examines the urethra and its mucosal condition.
                    </td>
                  </tr>
                  <tr>
                    <td className="diag-td-test">
                      <div className="diag-test-name">Ultrasound urethrography</div>
                    </td>
                    <td className="diag-td-purpose">
                      Evaluates the urethral wall and surrounding tissues, including fibrosis.
                    </td>
                  </tr>
                  <tr>
                    <td className="diag-td-test">
                      <div className="diag-test-name">Post-void residual measurement</div>
                    </td>
                    <td className="diag-td-purpose">
                      Estimates urine remaining in the bladder after urination.
                    </td>
                  </tr>
                  <tr>
                    <td className="diag-td-test">
                      <div className="diag-test-name">Laboratory investigations</div>
                    </td>
                    <td className="diag-td-purpose">
                      Help identify infection and assess other relevant clinical factors.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8 — UNDERSTANDING TREATMENT OPTIONS ========== */}
      <section id="treatment-options" className="sec-block sec-block--bg-soft treatment-options-section">
        <div className="container">
          {/* 1. SECTION HEADER (Two-column layout on desktop: Left Text, Right Medical Illustration) */}
          <div className="treat-header-grid">
            <div className="treat-header-content">
              <span className="block__kicker">URETHRAL STRICTURE MANAGEMENT</span>
              <h2 className="treat-main-title">
                Understanding Treatment Options
              </h2>
              <p className="treat-main-lede">
                Treatment for urethral stricture aims to restore urinary function, improve urinary flow, preserve urethral integrity, and minimize recurrence and its impact on quality of life. The most appropriate treatment depends on the location and length of the stricture, the degree of spongiofibrosis, its cause, previous treatments, recurrence pattern, and the patient's overall health.
              </p>
              <div className="treat-header-badges">
                <span className="treat-badge">Individualized Clinical Assessment</span>
                <span className="treat-badge">Evidence-Guided Decision Making</span>
              </div>
            </div>
            <div className="treat-header-media">
              <div className="treat-media-card">
                <img
                  src={diagImg}
                  alt="Clinically accurate medical illustration of the male urinary tract showing the urethra and stricture site"
                  className="treat-header-img"
                  loading="lazy"
                />
                <div className="treat-media-caption">
                  <span className="treat-media-caption__title">Male Urinary Tract &amp; Urethral Anatomy</span>
                  <span className="treat-media-caption__sub">Clinical illustration highlighting urethral caliber, site of narrowing, and surrounding spongy tissue.</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. TREATMENT OBJECTIVES (7 Goals in Card Grid) */}
          <div className="treat-subblock">
            <div className="treat-subblock-hd">
              <span className="treat-subkicker">CORE CLINICAL OBJECTIVES</span>
              <h3 className="treat-subblock-title">What Are the Goals of Treatment?</h3>
              <p className="treat-subblock-desc">
                The primary goal of managing urethral strictures is to restore normal urinary function while minimizing treatment-related morbidity, recurrence, and the impact on quality of life.
              </p>
            </div>

            <div className="treat-goals-grid">
              {/* Goal 1 */}
              <div className="treat-goal-card">
                <div className="treat-goal-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h4 className="treat-goal-title">Relieve Urinary Obstruction</h4>
                <p className="treat-goal-desc">Improve urinary flow and address difficulties caused by narrowing of the urethra.</p>
              </div>

              {/* Goal 2 */}
              <div className="treat-goal-card">
                <div className="treat-goal-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m4.93 4.93 4.24 4.24" />
                    <path d="m14.83 14.83 4.24 4.24" />
                    <path d="M14 10h4v4" />
                    <path d="M10 14H6v-4" />
                  </svg>
                </div>
                <h4 className="treat-goal-title">Restore Urethral Patency</h4>
                <p className="treat-goal-desc">Re-establish urethral openness while preserving urethral integrity.</p>
              </div>

              {/* Goal 3 */}
              <div className="treat-goal-card">
                <div className="treat-goal-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M3 21v-5h5" />
                  </svg>
                </div>
                <h4 className="treat-goal-title">Address Recurrence</h4>
                <p className="treat-goal-desc">Consider the underlying cause and recurrence pattern when selecting a treatment approach.</p>
              </div>

              {/* Goal 4 */}
              <div className="treat-goal-card">
                <div className="treat-goal-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h4 className="treat-goal-title">Prevent Complications</h4>
                <p className="treat-goal-desc">Aim to reduce the risk of complications such as infections, bladder dysfunction, and renal damage.</p>
              </div>

              {/* Goal 5 */}
              <div className="treat-goal-card">
                <div className="treat-goal-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h4 className="treat-goal-title">Prevent or Delay Recurrence</h4>
                <p className="treat-goal-desc">Select an appropriate management strategy based on the characteristics of the stricture and the patient's clinical history.</p>
              </div>

              {/* Goal 6 */}
              <div className="treat-goal-card">
                <div className="treat-goal-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m14 2-8.5 8.5a2.12 2.12 0 0 0 3 3L17 5" />
                    <path d="m16 4 4 4" />
                    <path d="m19 7 1.5 1.5a2.12 2.12 0 0 1-3 3L6 23l-4-1 1-4 11.5-11.5" />
                  </svg>
                </div>
                <h4 className="treat-goal-title">Minimize Surgical Morbidity</h4>
                <p className="treat-goal-desc">Avoid or minimize treatment-related morbidity where clinically appropriate.</p>
              </div>

              {/* Goal 7 */}
              <div className="treat-goal-card">
                <div className="treat-goal-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h4 className="treat-goal-title">Improve Quality of Life</h4>
                <p className="treat-goal-desc">Support better urinary function, daily comfort, and patient satisfaction.</p>
              </div>
            </div>
          </div>

          {/* 3. FACTORS THAT INFLUENCE TREATMENT SELECTION */}
          <div className="treat-subblock">
            <div className="treat-subblock-hd">
              <span className="treat-subkicker">INDIVIDUALIZED SELECTION CRITERIA</span>
              <h3 className="treat-subblock-title">Every Stricture Requires an Individual Assessment</h3>
              <p className="treat-subblock-desc">
                Treatment selection is individualized according to the characteristics of the stricture and the patient's medical history. No single treatment is appropriate for every patient.
              </p>
            </div>

            <div className="treat-factors-grid">
              <div className="treat-factor-card">
                <div className="treat-factor-head">
                  <span className="treat-factor-num">01</span>
                  <h4 className="treat-factor-title">Stricture Location</h4>
                </div>
                <p className="treat-factor-desc">Whether the stricture is bulbar, penile, or posterior anatomically influences procedure selection and tissue response.</p>
              </div>

              <div className="treat-factor-card">
                <div className="treat-factor-head">
                  <span className="treat-factor-num">02</span>
                  <h4 className="treat-factor-title">Stricture Length</h4>
                </div>
                <p className="treat-factor-desc">The measured length of the narrowed urethral segment (e.g., short &lt;1.5–2 cm vs longer pan-urethral segments).</p>
              </div>

              <div className="treat-factor-card">
                <div className="treat-factor-head">
                  <span className="treat-factor-num">03</span>
                  <h4 className="treat-factor-title">Degree of Spongiofibrosis</h4>
                </div>
                <p className="treat-factor-desc">The depth and density of fibrous scar tissue affecting the surrounding corpus spongiosum vascular bed.</p>
              </div>

              <div className="treat-factor-card">
                <div className="treat-factor-head">
                  <span className="treat-factor-num">04</span>
                  <h4 className="treat-factor-title">Aetiology</h4>
                </div>
                <p className="treat-factor-desc">The underlying cause of narrowing—including straddle trauma, instrumentation, prior catheterization, infection, or idiopathic origins.</p>
              </div>

              <div className="treat-factor-card">
                <div className="treat-factor-head">
                  <span className="treat-factor-num">05</span>
                  <h4 className="treat-factor-title">Recurrence Pattern</h4>
                </div>
                <p className="treat-factor-desc">Whether the stricture is primary (newly diagnosed) or recurrent following previous dilatation, urethrotomy, or reconstructive surgery.</p>
              </div>

              <div className="treat-factor-card">
                <div className="treat-factor-head">
                  <span className="treat-factor-num">06</span>
                  <h4 className="treat-factor-title">Patient Factors</h4>
                </div>
                <p className="treat-factor-desc">Age, overall health, systemic comorbidities, baseline erectile/continence status, anesthetic tolerance, and prior treatment outcomes.</p>
              </div>
            </div>

            <div className="treat-advisory-banner">
              <div className="treat-advisory-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <p className="treat-advisory-text">
                <strong>Clinical Principle:</strong> No single treatment modality is suitable for every presentation. Treatment decisions must always be guided by comprehensive diagnostic evaluation and consultation with a qualified reconstructive urologist.
              </p>
            </div>
          </div>

          {/* 4. CONSERVATIVE AND MINIMALLY INVASIVE TREATMENT OPTIONS */}
          <div className="treat-subblock">
            <div className="treat-subblock-hd">
              <span className="treat-subkicker">ENDOSCOPIC &amp; CONSERVATIVE SPECTRUM</span>
              <h3 className="treat-subblock-title">Conservative and Minimally Invasive Approaches</h3>
              <p className="treat-subblock-desc">
                Several approaches may be considered depending on the length, location, and characteristics of the stricture, as well as the patient's previous treatment history and overall clinical condition.
              </p>
            </div>

            <div className="treat-cards-triple">
              {/* Card 1: Urethral Dilatation */}
              <article className="treat-approach-card">
                <div className="treat-approach-visual">
                  <img
                    src={dilatationImg}
                    alt="Illustration of urethral dilatation procedure"
                    className="treat-approach-img"
                    loading="lazy"
                  />
                  <span className="treat-approach-badge">Minimally Invasive</span>
                </div>
                <div className="treat-approach-body">
                  <h4 className="treat-approach-name">Urethral Dilatation</h4>
                  <p className="treat-approach-short">
                    Urethral dilatation involves gradually widening the narrowed urethral segment using dilators or balloon devices.
                  </p>
                  <div className="treat-approach-keyinfo">
                    <div className="treat-keyinfo-title">Key Information:</div>
                    <ul className="treat-keyinfo-list">
                      <li>May be considered for short, non-fibrotic strictures and in certain resource-limited settings.</li>
                      <li>Involves gradual passage of dilators or balloon devices.</li>
                      <li>The manual reports a recurrence rate of up to 60–80%.<span className="treat-footnote-sup">*</span></li>
                      <li>Repeat treatment sessions may be required if lumen re-narrows.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Card 2: Visual Internal Urethrotomy (VIU) */}
              <article className="treat-approach-card">
                <div className="treat-approach-visual">
                  <img
                    src={viuImg}
                    alt="Illustration of visual internal urethrotomy endoscopic incision"
                    className="treat-approach-img"
                    loading="lazy"
                  />
                  <span className="treat-approach-badge">Endoscopic</span>
                </div>
                <div className="treat-approach-body">
                  <h4 className="treat-approach-name">Visual Internal Urethrotomy (VIU)</h4>
                  <p className="treat-approach-short">
                    Visual internal urethrotomy is an endoscopic procedure in which an incision is made at the site of the urethral stricture.
                  </p>
                  <div className="treat-approach-keyinfo">
                    <div className="treat-keyinfo-title">Key Information:</div>
                    <ul className="treat-keyinfo-list">
                      <li>The manual describes it as an option for short bulbar strictures measuring less than 1.5 cm.</li>
                      <li>It is minimally invasive and may allow a relatively quick recovery.</li>
                      <li>Recurrence is common, particularly when the procedure is repeated.</li>
                      <li>Its effectiveness is limited in penile, dense, or long strictures.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Card 3: Intermittent Self-Catheterization (ISC) */}
              <article className="treat-approach-card">
                <div className="treat-approach-visual">
                  <img
                    src={iscImg}
                    alt="Illustration of intermittent self-catheterization maintenance"
                    className="treat-approach-img"
                    loading="lazy"
                  />
                  <span className="treat-approach-badge">Maintenance Protocol</span>
                </div>
                <div className="treat-approach-body">
                  <h4 className="treat-approach-name">Intermittent Self-Catheterization (ISC)</h4>
                  <p className="treat-approach-short">
                    Intermittent self-catheterization may be used following a procedure or in selected patients who are not suitable candidates for surgery.
                  </p>
                  <div className="treat-approach-keyinfo">
                    <div className="treat-keyinfo-title">Key Information:</div>
                    <ul className="treat-keyinfo-list">
                      <li>May be used as part of post-procedure management.</li>
                      <li>May help maintain urethral opening in selected circumstances.</li>
                      <li>Does not reverse the underlying stricture.</li>
                      <li>The manual notes that it can reduce recurrence when used after VIU.</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            <p className="treat-card-note">
              *Figures are reported in the source material (AALBEC Manual) and require clinical review before publication. Individual recurrence likelihood depends on stricture length and spongiofibrosis.
            </p>
          </div>

          {/* 5. SURGICAL TREATMENT OPTIONS (Urethroplasty Reconstructive Techniques) */}
          <div className="treat-subblock">
            <div className="treat-subblock-hd">
              <span className="treat-subkicker">RECONSTRUCTIVE UROLOGY</span>
              <h3 className="treat-subblock-title">Surgical Approaches to Urethral Stricture</h3>
              <p className="treat-subblock-desc">
                Surgical treatment may be considered according to stricture length, location, complexity, previous treatment, and individual patient factors. Urethroplasty includes different reconstructive techniques selected according to the clinical situation.
              </p>
            </div>

            <div className="treat-cards-triple">
              {/* Card 1: EPA */}
              <article className="treat-approach-card">
                <div className="treat-approach-visual">
                  <img
                    src={epaImg}
                    alt="Illustration of excision and primary anastomosis (EPA) urethroplasty"
                    className="treat-approach-img"
                    loading="lazy"
                  />
                  <span className="treat-approach-badge">Reconstructive</span>
                </div>
                <div className="treat-approach-body">
                  <h4 className="treat-approach-name">Excision and Primary Anastomosis (EPA)</h4>
                  <p className="treat-approach-short">
                    Excision and primary anastomosis involves removing the narrowed segment and reconnecting the healthy ends of the urethra.
                  </p>
                  <div className="treat-approach-keyinfo">
                    <div className="treat-keyinfo-title">Key Information:</div>
                    <ul className="treat-keyinfo-list">
                      <li>The manual describes this technique for short bulbar strictures measuring less than 2 cm.</li>
                      <li>It involves excision of the affected segment and end-to-end anastomosis.</li>
                      <li>The source also associates urethroplasty with definitive treatment for long or recurrent strictures; the exact placement of this statement in the source requires confirmation before attributing it specifically to EPA.</li>
                      <li>Potential risks mentioned in the manual include penile shortening and sexual dysfunction.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Card 2: Substitution Urethroplasty */}
              <article className="treat-approach-card">
                <div className="treat-approach-visual">
                  <img
                    src={substitutionImg}
                    alt="Illustration of substitution urethroplasty with buccal mucosa graft"
                    className="treat-approach-img"
                    loading="lazy"
                  />
                  <span className="treat-approach-badge">Graft Reconstructive</span>
                </div>
                <div className="treat-approach-body">
                  <h4 className="treat-approach-name">Substitution Urethroplasty</h4>
                  <p className="treat-approach-short">
                    Substitution urethroplasty uses graft tissue or a tissue flap to reconstruct the affected urethral segment.
                  </p>
                  <div className="treat-approach-keyinfo">
                    <div className="treat-keyinfo-title">Key Information:</div>
                    <ul className="treat-keyinfo-list">
                      <li>May be considered for long-segment or recurrent strictures.</li>
                      <li>Buccal mucosa grafts or skin flaps may be used.</li>
                      <li>Grafts may be placed using dorsal, ventral, or lateral onlay techniques.</li>
                      <li>The procedure requires surgical expertise and may involve hospitalization.</li>
                      <li>It is more invasive than minimally invasive approaches but may provide durable outcomes in appropriately selected patients.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Card 3: Staged Urethroplasty */}
              <article className="treat-approach-card">
                <div className="treat-approach-visual">
                  <img
                    src={stagedImg}
                    alt="Illustration of staged urethroplasty procedure"
                    className="treat-approach-img"
                    loading="lazy"
                  />
                  <span className="treat-approach-badge">Complex Staged</span>
                </div>
                <div className="treat-approach-body">
                  <h4 className="treat-approach-name">Staged Urethroplasty</h4>
                  <p className="treat-approach-short">
                    Staged urethroplasty is a reconstructive approach that may be used for complex urethral strictures.
                  </p>
                  <div className="treat-approach-keyinfo">
                    <div className="treat-keyinfo-title">Key Information:</div>
                    <ul className="treat-keyinfo-list">
                      <li>May be considered in selected complex cases, including failed repairs, lichen sclerosus, or trauma.</li>
                      <li>Reconstruction may involve an initial grafting stage followed by a later stage to complete the urethral reconstruction.</li>
                      <li>The treatment plan depends on the complexity of the condition and the patient's clinical assessment.</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* 6. OTHER TREATMENT APPROACHES (Stents & Perineal Urethrostomy) */}
          <div className="treat-subblock">
            <div className="treat-subblock-hd">
              <span className="treat-subkicker">SPECIALIZED CLINICAL SCENARIOS</span>
              <h3 className="treat-subblock-title">Additional Treatment Approaches</h3>
              <p className="treat-subblock-desc">
                These are selected treatment approaches used in specific circumstances, not routine choices for every patient.
              </p>
            </div>

            <div className="treat-cards-duo">
              {/* Card 1: Urethral Stents */}
              <article className="treat-approach-card treat-approach-card--compact">
                <div className="treat-approach-visual">
                  <img
                    src={stentsImg}
                    alt="Illustration of luminal urethral stent"
                    className="treat-approach-img"
                    loading="lazy"
                  />
                  <span className="treat-approach-badge">Selected Use</span>
                </div>
                <div className="treat-approach-body">
                  <h4 className="treat-approach-name">Urethral Stents</h4>
                  <p className="treat-approach-short">
                    Urethral stents are devices intended to maintain an opening in the urethra. The manual notes that permanent or temporary stents are rarely used because of potential complications.
                  </p>
                  <div className="treat-approach-keyinfo">
                    <div className="treat-keyinfo-title">Key Points:</div>
                    <ul className="treat-keyinfo-list">
                      <li>May be considered only in selected circumstances.</li>
                      <li>Potential complications mentioned in the manual include migration, infection, and encrustation.</li>
                      <li>Suitability must be assessed by a qualified urologist.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Card 2: Perineal Urethrostomy */}
              <article className="treat-approach-card treat-approach-card--compact">
                <div className="treat-approach-visual">
                  <img
                    src={perinealImg}
                    alt="Illustration of perineal urethrostomy urinary diversion"
                    className="treat-approach-img"
                    loading="lazy"
                  />
                  <span className="treat-approach-badge">Salvage / Palliative</span>
                </div>
                <div className="treat-approach-body">
                  <h4 className="treat-approach-name">Perineal Urethrostomy</h4>
                  <p className="treat-approach-short">
                    Perineal urethrostomy is a surgical procedure that creates an opening in the urethra in the perineal region to allow urine to pass.
                  </p>
                  <div className="treat-approach-keyinfo">
                    <div className="treat-keyinfo-title">Key Points:</div>
                    <ul className="treat-keyinfo-list">
                      <li>May be reserved for selected patients who are poor candidates for reconstructive surgery or when salvage treatment is required.</li>
                      <li>The procedure redirects urinary flow through the perineal opening.</li>
                      <li>The manual describes it as a palliative option in selected elderly or high-risk patients.</li>
                      <li>It should not be presented as a universally appropriate or curative option for all urethral strictures.</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* 7. TREATMENT OPTIONS COMPARISON TABLE */}
          <div className="treat-subblock">
            <div className="treat-subblock-hd">
              <span className="treat-subkicker">SYNTHESIS &amp; COMPARISON</span>
              <h3 className="treat-subblock-title">Comparing Treatment Approaches</h3>
              <p className="treat-subblock-desc">
                Each treatment approach has different considerations, potential limitations, and suitability criteria. The following comparison is intended as a general educational overview, not a substitute for individualized medical advice.
              </p>
            </div>

            <div className="treat-table-wrapper" tabIndex={0} role="region" aria-label="Treatment Approaches Comparison Table">
              <table className="treat-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '18%' }}>Treatment Option</th>
                    <th scope="col" style={{ width: '14%' }}>Level of Invasiveness</th>
                    <th scope="col" style={{ width: '23%' }}>Recurrence Considerations</th>
                    <th scope="col" style={{ width: '22%' }}>Potential Use</th>
                    <th scope="col" style={{ width: '23%' }}>Limitations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="treat-td-opt">
                      <strong>Urethral dilatation</strong>
                    </td>
                    <td>
                      <span className="treat-invasiveness-badge treat-invasiveness--low">Low</span>
                    </td>
                    <td>The manual reports a high recurrence rate, up to 60–80%</td>
                    <td>Initial or mild cases, where clinically appropriate</td>
                    <td>May provide temporary relief; repeat sessions may be needed</td>
                  </tr>
                  <tr>
                    <td className="treat-td-opt">
                      <strong>Visual internal urethrotomy (VIU)</strong>
                    </td>
                    <td>
                      <span className="treat-invasiveness-badge treat-invasiveness--low">Low</span>
                    </td>
                    <td>Recurrence may be moderate to high</td>
                    <td>Selected short bulbar strictures</td>
                    <td>Higher failure risk in recurrent cases; limited effectiveness for long or dense strictures</td>
                  </tr>
                  <tr className="treat-row-aalbec">
                    <td className="treat-td-opt">
                      <strong>AALBEC</strong>
                      <span className="treat-row-tag">Regenerative</span>
                    </td>
                    <td>
                      <span className="treat-invasiveness-badge treat-invasiveness--verify">To be verified</span>
                    </td>
                    <td>The source table states “Low (early data)”<span className="treat-footnote-sup">†</span></td>
                    <td>The source table lists short strictures and post-VIU cases</td>
                    <td>The source table lists long strictures as unsuitable; verify approved indications and supporting evidence</td>
                  </tr>
                  <tr>
                    <td className="treat-td-opt">
                      <strong>Urethroplasty</strong>
                    </td>
                    <td>
                      <span className="treat-invasiveness-badge treat-invasiveness--high">High</span>
                    </td>
                    <td>The manual describes recurrence as lower than with some other approaches</td>
                    <td>Long or recurrent strictures, depending on the technique</td>
                    <td>Surgical morbidity and procedure-specific risks</td>
                  </tr>
                  <tr>
                    <td className="treat-td-opt">
                      <strong>Urethral stent</strong>
                    </td>
                    <td>
                      <span className="treat-invasiveness-badge treat-invasiveness--med">Medium</span>
                    </td>
                    <td>Variable</td>
                    <td>Selected patients, potentially including those unfit for surgery</td>
                    <td>Migration, infection, and encrustation</td>
                  </tr>
                  <tr>
                    <td className="treat-td-opt">
                      <strong>Perineal urethrostomy</strong>
                    </td>
                    <td>
                      <span className="treat-invasiveness-badge treat-invasiveness--high">High</span>
                    </td>
                    <td>The source table states “Low”</td>
                    <td>Salvage situations</td>
                    <td>Creates an alternative urinary opening and may be a non-reconstructive or palliative approach</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="treat-table-notes">
              <p className="treat-table-note">
                <span className="treat-footnote-sup">†</span> Note: “Low (early data)” is preserved from source material and is not an established guarantee of outcome. The source comparison table has formatting/alignment considerations in original texts; verify mapping against original clinical literature before final publication.
              </p>
              <p className="treat-table-disclaimer">
                Treatment suitability and outcomes vary according to individual clinical factors. Discuss the available options with a qualified urologist.
              </p>
            </div>
          </div>

          {/* 8. AALBEC CONTEXTUAL CALLOUT */}
          <div className="treat-aalbec-callout">
            <div className="treat-aalbec-callout__content">
              <span className="treat-subkicker">EXPLORING TREATMENT OPTIONS</span>
              <h3 className="treat-aalbec-callout__title">
                Understand Where AALBEC Fits Into the Treatment Journey
              </h3>
              <p className="treat-aalbec-callout__desc">
                Treatment decisions for urethral stricture depend on the characteristics of the narrowing, previous treatments, and individual clinical assessment. Explore the AALBEC treatment approach to understand its proposed role, eligibility considerations, procedure details, and available clinical evidence.
              </p>
              <div className="treat-aalbec-callout__actions">
                <a href="#aalbec-therapy" className="btn btn--primary treat-cta-btn">
                  Explore AALBEC Therapy
                </a>
                <a href="#diagnosis" className="btn btn--secondary treat-cta-btn">
                  Review the Diagnosis Process
                </a>
              </div>
            </div>
          </div>

          {/* 9. CLOSING PATIENT-EDUCATION MESSAGE */}
          <div className="treat-closing-card">
            <div className="treat-closing-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>
            <div className="treat-closing-text">
              <h3 className="treat-closing-title">The right treatment begins with the right assessment.</h3>
              <p className="treat-closing-desc">
                The choice of treatment depends on the type of urethral stricture, its length and location, previous treatments, and individual patient factors. A qualified urologist can help assess the available options and determine an appropriate treatment plan.
              </p>
            </div>
            <div className="treat-closing-action">
              <a href="#aalbec-therapy" className="btn btn--primary treat-cta-btn">
                Explore Treatment and Recovery
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========== SECTION: AALBEC REGENERATIVE CELL THERAPY ========== */}
      <section id="aalbec-therapy" className="sec-block sec-block--bg-white aalbec-section">
        <div className="container">

          {/* 1. INTRODUCING AALBEC THERAPY */}
          <div className="aalbec-hero-block">
            <div className="aalbec-hero-grid">
              <div className="aalbec-hero-content">
                <span className="block__kicker">REGENERATIVE CELL THERAPY</span>
                <h2 className="aalbec-hero-title">
                  Introducing <span>AALBEC Therapy</span>
                </h2>
                <p className="aalbec-hero-lede">
                  AALBEC stands for <strong>Autologous Adult Live Buccal Epithelial Cell</strong> therapy. It uses cultured epithelial cells obtained from the patient's own inner cheek and delivered endoscopically to selected bulbar urethral strictures, with the aim of supporting restoration of the urethral epithelial lining.
                </p>

                <div className="aalbec-hero-highlights">
                  <div className="aalbec-highlight-item">
                    <div className="aalbec-highlight-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="aalbec-highlight-title">Autologous Tissue Source</h4>
                      <p className="aalbec-highlight-desc">Derived from the patient's own inner cheek, avoiding immunologic rejection.</p>
                    </div>
                  </div>

                  <div className="aalbec-highlight-item">
                    <div className="aalbec-highlight-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="aalbec-highlight-title">Endoscopic Delivery</h4>
                      <p className="aalbec-highlight-desc">Delivered via minimally invasive instrumentation directly to the bulbar stricture bed.</p>
                    </div>
                  </div>

                  <div className="aalbec-highlight-item">
                    <div className="aalbec-highlight-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="aalbec-highlight-title">Mucosal Restoration</h4>
                      <p className="aalbec-highlight-desc">Formulated to foster mucosal re-epithelialization and physiological caliber.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scientific Medical Illustration Showing Buccal Cells & Urethral Mucosal Restoration */}
              <div className="aalbec-hero-media">
                <div className="aalbec-media-card">
                  <div className="aalbec-media-head">
                    <span className="aalbec-media-tag">Scientific Illustration</span>
                    <h3 className="aalbec-media-heading">Buccal Cells &amp; Urethral Mucosal Restoration</h3>
                  </div>

                  <div className="aalbec-media-img-wrap">
                    <img
                      src={aalbecTherapyImg}
                      alt="Scientific medical illustration of AALBEC Therapy showing buccal cell isolation, expansion, and urethral mucosal restoration"
                      className="aalbec-media-img"
                      loading="lazy"
                    />
                  </div>

                  <p className="aalbec-media-caption">
                    Schematic representation of cell harvesting from inner cheek buccal tissue, laboratory expansion, and endoscopic delivery for mucosal regeneration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. HOW AALBEC WORKS (4-Step Visual Timeline) */}
          <div className="aalbec-subblock" id="how-aalbec-works">
            <div className="aalbec-subblock-hd">
              <span className="treat-subkicker">TREATMENT TIMELINE</span>
              <h3 className="aalbec-subblock-title">How AALBEC Works</h3>
              <p className="aalbec-subblock-desc">
                A clean, four-step clinical pathway outlining cell collection, laboratory cultivation, targeted delivery, and mucosal restoration.
              </p>
            </div>

            <div className="aalbec-timeline-grid">
              {/* Step 1 */}
              <div className="aalbec-timeline-card">
                <div className="aalbec-timeline-head">
                  <span className="aalbec-step-pill">Step 01</span>
                </div>
                <div className="aalbec-step-ill">
                  <img
                    src={buccalBiopsyImg}
                    alt="Buccal Biopsy illustration"
                    className="aalbec-step-img"
                    loading="lazy"
                  />
                </div>
                <h4 className="aalbec-step-name">Buccal Biopsy</h4>
                <p className="aalbec-step-text">
                  A small tissue sample is collected from the inner cheek under local anesthesia in an outpatient setting.
                </p>
              </div>

              {/* Step 2 */}
              <div className="aalbec-timeline-card">
                <div className="aalbec-timeline-head">
                  <span className="aalbec-step-pill">Step 02</span>
                </div>
                <div className="aalbec-step-ill">
                  <img
                    src={cellCultureImg}
                    alt="Cell Culture and isolation illustration"
                    className="aalbec-step-img"
                    loading="lazy"
                  />
                </div>
                <h4 className="aalbec-step-name">Cell Culture</h4>
                <p className="aalbec-step-text">
                  Epithelial cells are isolated, cultured, and quality-checked in a certified cGMP facility to confirm viability and sterility.
                </p>
              </div>

              {/* Step 3 */}
              <div className="aalbec-timeline-card">
                <div className="aalbec-timeline-head">
                  <span className="aalbec-step-pill">Step 03</span>
                </div>
                <div className="aalbec-step-ill">
                  <img
                    src={cellDeliveryImg}
                    alt="Endoscopic Cell Delivery illustration"
                    className="aalbec-step-img"
                    loading="lazy"
                  />
                </div>
                <h4 className="aalbec-step-name">Cell Delivery</h4>
                <p className="aalbec-step-text">
                  Cultured cells are delivered to the stricture site using endoscopic techniques, applying live cells to the prepared mucosal bed.
                </p>
              </div>

              {/* Step 4 */}
              <div className="aalbec-timeline-card">
                <div className="aalbec-timeline-head">
                  <span className="aalbec-step-pill">Step 04</span>
                </div>
                <div className="aalbec-step-ill">
                  <img
                    src={regenerativeIntentImg}
                    alt="Urethral mucosal regenerative intent illustration"
                    className="aalbec-step-img"
                    loading="lazy"
                  />
                </div>
                <h4 className="aalbec-step-name">Regenerative Intent</h4>
                <p className="aalbec-step-text">
                  The approach aims to support restoration of the urethral lining, helping re-establish epithelial continuity and urinary flow.
                </p>
              </div>
            </div>
          </div>

          {/* 3. KEY FEATURES (3 Compact Cards) */}
          <div className="aalbec-subblock">
            <div className="aalbec-subblock-hd">
              <span className="treat-subkicker">CORE ATTRIBUTES</span>
              <h3 className="aalbec-subblock-title">Key Features</h3>
              <p className="aalbec-subblock-desc">
                Distinctive clinical properties of the AALBEC autologous epithelial cell therapy platform.
              </p>
            </div>

            <div className="aalbec-features-row">
              <div className="aalbec-feature-box">
                <div className="aalbec-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h4 className="aalbec-feature-name">Autologous Cells</h4>
                <p className="aalbec-feature-summary">
                  Cells come from the same patient receiving treatment, removing the risk of donor-tissue immune rejection or graft-versus-host complications.
                </p>
              </div>

              <div className="aalbec-feature-box">
                <div className="aalbec-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h4 className="aalbec-feature-name">Regenerative Approach</h4>
                <p className="aalbec-feature-summary">
                  Aims to support restoration of the urethral epithelial lining, promoting natural cellular healing rather than just mechanical incision.
                </p>
              </div>

              <div className="aalbec-feature-box">
                <div className="aalbec-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h4 className="aalbec-feature-name">Minimally Invasive Delivery</h4>
                <p className="aalbec-feature-summary">
                  Uses endoscopic techniques to deliver cultured cells, avoiding the extensive surgical incisions, tissue flaps, or prolonged recovery of open surgery.
                </p>
              </div>
            </div>
          </div>

          {/* 4. PATIENT ELIGIBILITY */}
          <div className="aalbec-subblock" id="eligibility">
            <div className="aalbec-subblock-hd">
              <span className="treat-subkicker">PATIENT SELECTION</span>
              <h3 className="aalbec-subblock-title">Is AALBEC Therapy an Option for You?</h3>
              <p className="aalbec-subblock-desc">
                The Product Brief defines specific eligibility criteria for male patients being evaluated for AALBEC therapy.
              </p>
            </div>

            <div className="aalbec-eligibility-wrap">
              <div className="aalbec-criteria-grid">
                <div className="aalbec-crit-card">
                  <div className="aalbec-crit-top">
                    <span className="aalbec-crit-badge">01</span>
                    <h4 className="aalbec-crit-title">Age Profile</h4>
                  </div>
                  <p className="aalbec-crit-body">
                    Male patients aged <strong>18–56 years</strong>.
                  </p>
                </div>

                <div className="aalbec-crit-card">
                  <div className="aalbec-crit-top">
                    <span className="aalbec-crit-badge">02</span>
                    <h4 className="aalbec-crit-title">Stricture Characteristics</h4>
                  </div>
                  <p className="aalbec-crit-body">
                    Recurrent bulbar urethral stricture measuring <strong>2 cm or less</strong>.
                  </p>
                </div>

                <div className="aalbec-crit-card">
                  <div className="aalbec-crit-top">
                    <span className="aalbec-crit-badge">03</span>
                    <h4 className="aalbec-crit-title">Prior Procedures</h4>
                  </div>
                  <p className="aalbec-crit-body">
                    <strong>Up to two previous DVIU</strong> (Direct Vision Internal Urethrotomy) procedures.
                  </p>
                </div>

                <div className="aalbec-crit-card">
                  <div className="aalbec-crit-top">
                    <span className="aalbec-crit-badge">04</span>
                    <h4 className="aalbec-crit-title">Reconstruction Suitability</h4>
                  </div>
                  <p className="aalbec-crit-body">
                    <strong>Not suitable for open urethroplasty</strong> or unwilling to undergo surgical reconstruction.
                  </p>
                </div>
              </div>

              <div className="aalbec-advisory-panel">
                <div className="aalbec-advisory-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div className="aalbec-advisory-text">
                  <strong>Assessment Requirement:</strong> Patient eligibility requires comprehensive assessment by a qualified urologist, including diagnostic imaging (uroflowmetry, retrograde urethrography), exclusion of active urinary tract infections, and confirmation of healthy oral buccal mucosal status.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ========== SECTION 13 — CLINICAL EVIDENCE FOR AALBEC THERAPY ========== */}
      <section id="clinical-evidence" className="sec-block sec-block--bg-white ce-section">
        <div className="container">
          <div className="block__hd">
            <span className="block__kicker">CLINICAL EVIDENCE</span>
            <h2 className="block__title">
              Clinical Evidence <span>for AALBEC Therapy</span>
            </h2>
            <p className="block__lede">
              Structured clinical evaluation spanning early prospective trial investigation, randomized controlled comparative data, and multicentric real-world post-marketing surveillance.
            </p>
          </div>

          {/* 1. PHASE IIb STUDY */}
          <div className="ce-subsection">
            <div className="ce-subsection__header">
              <div className="ce-subsection__badge">Phase IIb Investigation</div>
              <h3 className="ce-subsection__title">Phase IIb Study: Primary &amp; Functional Outcomes</h3>
              <p className="ce-subsection__desc">
                Prospective multicenter clinical evaluation examining anatomical stricture characteristics, standardized symptom score changes, uroflowmetry restoration, and product safety in bulbar urethral stricture.
              </p>
            </div>

            <div className="ce-stats-grid">
              <article className="ce-stat-card">
                <div className="ce-stat-card__tag">Stricture Caliber</div>
                <div className="ce-stat-card__val">
                  1.3 ± 0.4 <span className="ce-stat-card__unit">cm</span>
                </div>
                <h4 className="ce-stat-card__title">Mean Stricture Length</h4>
                <p className="ce-stat-card__desc">
                  Stricture length treated across the prospective multicenter clinical evaluation cohort.
                </p>
              </article>

              <article className="ce-stat-card ce-stat-card--highlight">
                <div className="ce-stat-card__tag">Symptom Resolution</div>
                <div className="ce-stat-card__val">
                  20.19 → 1.94
                </div>
                <h4 className="ce-stat-card__title">AUA Symptom Score Reduction</h4>
                <p className="ce-stat-card__desc">
                  Significant reduction from severe obstructive symptoms to mild post-procedure score range.
                </p>
              </article>

              <article className="ce-stat-card ce-stat-card--highlight">
                <div className="ce-stat-card__tag">Peak Uroflowmetry</div>
                <div className="ce-stat-card__val">
                  10.0 → 17.2 <span className="ce-stat-card__unit">mL/s</span>
                </div>
                <h4 className="ce-stat-card__title">Maximum Flow Rate (QMax)</h4>
                <p className="ce-stat-card__desc">
                  Substantial improvement in maximum urinary flow velocity confirming luminal caliber restoration.
                </p>
              </article>

              <article className="ce-stat-card ce-stat-card--safety">
                <div className="ce-stat-card__tag">Safety Profile</div>
                <div className="ce-stat-card__val ce-stat-card__val--text">
                  Favorable
                </div>
                <h4 className="ce-stat-card__title">Reported Safety Outcomes</h4>
                <p className="ce-stat-card__desc">
                  Well-tolerated autologous cell graft; zero immunological rejection or serious product-related adverse events.
                </p>
              </article>
            </div>
          </div>

          {/* 2. RANDOMIZED CONTROLLED TRIAL */}
          <div className="ce-subsection">
            <div className="ce-subsection__header">
              <div className="ce-subsection__badge">Comparative Trial</div>
              <h3 className="ce-subsection__title">Randomized Controlled Trial: DVIU Alone vs. DVIU + AALBEC</h3>
              <p className="ce-subsection__desc">
                Direct head-to-head comparison evaluating endoscopic Direct Vision Internal Urethrotomy (DVIU) alone versus DVIU augmented with autologous AALBEC cell therapy across pre-operative and post-operative clinical endpoints.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="ce-table-card">
              <div className="ce-table-wrap">
                <table className="ce-table" aria-label="RCT Comparison: DVIU Alone versus DVIU + AALBEC">
                  <thead>
                    <tr>
                      <th scope="col" className="ce-th-param">Endpoint Parameter</th>
                      <th scope="col" colSpan={2} className="ce-th-group ce-th-group--control">
                        DVIU Alone
                      </th>
                      <th scope="col" colSpan={2} className="ce-th-group ce-th-group--aalbec">
                        DVIU + AALBEC
                      </th>
                      <th scope="col" className="ce-th-outcome">Relative Advantage</th>
                    </tr>
                    <tr className="ce-subhead-row">
                      <th scope="col">Clinical Measurement</th>
                      <th scope="col">Pre-Operative</th>
                      <th scope="col">Post-Operative</th>
                      <th scope="col">Pre-Operative</th>
                      <th scope="col">Post-Operative</th>
                      <th scope="col">Observed Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ce-td-param">
                        <strong>AUA Symptom Score</strong>
                        <span className="ce-td-note">Evaluated 0–35 (lower indicates symptom relief)</span>
                      </td>
                      <td className="ce-td-val">20.30 ± 4.20</td>
                      <td className="ce-td-val ce-td-control">8.60 ± 3.40</td>
                      <td className="ce-td-val">20.19 ± 4.10</td>
                      <td className="ce-td-val ce-td-treatment"><strong>1.94 ± 1.10</strong></td>
                      <td className="ce-td-advantage">
                        <span className="ce-advantage-pill ce-advantage-pill--green">
                          ~90% symptom reduction with AALBEC
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ce-td-param">
                        <strong>Maximum Flow Rate (QMax)</strong>
                        <span className="ce-td-note">Measured in mL/s (higher denotes stronger flow)</span>
                      </td>
                      <td className="ce-td-val">9.8 ± 2.1</td>
                      <td className="ce-td-val ce-td-control">13.2 ± 3.5</td>
                      <td className="ce-td-val">10.0 ± 2.3</td>
                      <td className="ce-td-val ce-td-treatment"><strong>17.2 ± 3.8</strong></td>
                      <td className="ce-td-advantage">
                        <span className="ce-advantage-pill ce-advantage-pill--blue">
                          +7.2 mL/s peak flow improvement (+72%)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ce-td-param">
                        <strong>Average Flow Rate (QAvg)</strong>
                        <span className="ce-td-note">Measured in mL/s across continuous voiding</span>
                      </td>
                      <td className="ce-td-val">5.1 ± 1.4</td>
                      <td className="ce-td-val ce-td-control">7.6 ± 2.1</td>
                      <td className="ce-td-val">5.3 ± 1.5</td>
                      <td className="ce-td-val ce-td-treatment"><strong>11.5 ± 2.4</strong></td>
                      <td className="ce-td-advantage">
                        <span className="ce-advantage-pill ce-advantage-pill--teal">
                          +6.2 mL/s average voiding gain (+117%)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Simple Clinical-Results Visual Chart */}
            <div className="ce-chart-box">
              <div className="ce-chart-box__header">
                <h4 className="ce-chart-box__title">Clinical-Results Visual Comparison</h4>
                <div className="ce-chart-legend">
                  <div className="ce-legend-item">
                    <span className="ce-legend-color ce-legend-color--base" />
                    <span>Baseline (Pre-Op)</span>
                  </div>
                  <div className="ce-legend-item">
                    <span className="ce-legend-color ce-legend-color--ctrl" />
                    <span>DVIU Alone (Post-Op)</span>
                  </div>
                  <div className="ce-legend-item">
                    <span className="ce-legend-color ce-legend-color--tx" />
                    <span>DVIU + AALBEC (Post-Op)</span>
                  </div>
                </div>
              </div>

              <div className="ce-chart-panels">
                {/* Panel 1: AUA Score */}
                <div className="ce-chart-panel">
                  <div className="ce-chart-panel__meta">
                    <span className="ce-chart-panel__name">AUA Symptom Score Reduction</span>
                    <span className="ce-chart-panel__target">Lower score is superior</span>
                  </div>
                  <div className="ce-chart-bars">
                    <div className="ce-chart-row">
                      <div className="ce-chart-row__lbl">Pre-Op</div>
                      <div className="ce-chart-track">
                        <div className="ce-chart-bar ce-chart-bar--base" style={{ width: '80%' }}>
                          <span className="ce-chart-bar__txt">20.2</span>
                        </div>
                      </div>
                    </div>
                    <div className="ce-chart-row">
                      <div className="ce-chart-row__lbl">DVIU Alone</div>
                      <div className="ce-chart-track">
                        <div className="ce-chart-bar ce-chart-bar--ctrl" style={{ width: '34%' }}>
                          <span className="ce-chart-bar__txt">8.6</span>
                        </div>
                      </div>
                    </div>
                    <div className="ce-chart-row">
                      <div className="ce-chart-row__lbl">DVIU + AALBEC</div>
                      <div className="ce-chart-track">
                        <div className="ce-chart-bar ce-chart-bar--tx" style={{ width: '8%' }}>
                          <span className="ce-chart-bar__txt">1.94</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ce-chart-panel__caption">
                    DVIU + AALBEC achieved sustained reduction to 1.94 (mild range) compared to 8.60 with DVIU alone.
                  </div>
                </div>

                {/* Panel 2: Maximum Flow Rate QMax */}
                <div className="ce-chart-panel">
                  <div className="ce-chart-panel__meta">
                    <span className="ce-chart-panel__name">Maximum Flow Rate — QMax (mL/s)</span>
                    <span className="ce-chart-panel__target">Higher velocity is superior</span>
                  </div>
                  <div className="ce-chart-bars">
                    <div className="ce-chart-row">
                      <div className="ce-chart-row__lbl">Pre-Op</div>
                      <div className="ce-chart-track">
                        <div className="ce-chart-bar ce-chart-bar--base" style={{ width: '40%' }}>
                          <span className="ce-chart-bar__txt">10.0 mL/s</span>
                        </div>
                      </div>
                    </div>
                    <div className="ce-chart-row">
                      <div className="ce-chart-row__lbl">DVIU Alone</div>
                      <div className="ce-chart-track">
                        <div className="ce-chart-bar ce-chart-bar--ctrl" style={{ width: '53%' }}>
                          <span className="ce-chart-bar__txt">13.2 mL/s</span>
                        </div>
                      </div>
                    </div>
                    <div className="ce-chart-row">
                      <div className="ce-chart-row__lbl">DVIU + AALBEC</div>
                      <div className="ce-chart-track">
                        <div className="ce-chart-bar ce-chart-bar--tx" style={{ width: '69%' }}>
                          <span className="ce-chart-bar__txt">17.2 mL/s</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ce-chart-panel__caption">
                    Combination therapy demonstrated strong peak uroflow restoration to 17.2 mL/s (+72% gain).
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. POST-MARKETING STUDY */}
          <div className="ce-subsection">
            <div className="ce-subsection__header">
              <div className="ce-subsection__badge">Real-World Cohort</div>
              <h3 className="ce-subsection__title">Post-Marketing Study: Multicentric Real-World Evidence</h3>
              <p className="ce-subsection__desc">
                Longitudinal surveillance across diverse clinical settings evaluating real-world safety, clinical recurrence patterns, and procedure durability.
              </p>
            </div>

            <div className="ce-pms-grid">
              <article className="ce-pms-card">
                <div className="ce-pms-card__num">76</div>
                <div className="ce-pms-card__label">Patients Evaluated</div>
                <p className="ce-pms-card__sub">Across 12 urological centres in 7 Indian cities</p>
              </article>

              <article className="ce-pms-card">
                <div className="ce-pms-card__num">12 <span className="ce-pms-card__unit">Mo</span></div>
                <div className="ce-pms-card__label">Average Follow-Up</div>
                <p className="ce-pms-card__sub">Systematic longitudinal post-procedure observation</p>
              </article>

              <article className="ce-pms-card ce-pms-card--success">
                <div className="ce-pms-card__num">59 <span className="ce-pms-card__pct">(77%)</span></div>
                <div className="ce-pms-card__label">Without Recurrence Symptoms</div>
                <p className="ce-pms-card__sub">77% of patients remained free of reported clinical recurrence symptoms</p>
              </article>

              <article className="ce-pms-card">
                <div className="ce-pms-card__num">7 <span className="ce-pms-card__pct">(10%)</span></div>
                <div className="ce-pms-card__label">Requiring Re-Intervention</div>
                <p className="ce-pms-card__sub">Only 10% of evaluated patients needed subsequent intervention</p>
              </article>

              <article className="ce-pms-card ce-pms-card--safety">
                <div className="ce-pms-card__num">0</div>
                <div className="ce-pms-card__label">Product-Related AEs / SAEs</div>
                <p className="ce-pms-card__sub">Zero recorded product-related adverse events or serious adverse events</p>
              </article>
            </div>
          </div>

          {/* Regulatory & Medical Team Review Callout */}
          <div className="ce-regulatory-callout">
            <div className="ce-regulatory-callout__icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div className="ce-regulatory-callout__body">
              <h4 className="ce-regulatory-callout__title">Clinical Data &amp; Regulatory Review Notice</h4>
              <p className="ce-regulatory-callout__text">
                The clinical data presented above reflect reported outcomes from clinical trial and post-marketing surveillance evaluations. Individual patient outcomes depend on stricture etiology, length, location, prior surgical history, and anatomical healing response, and findings should not be interpreted as a guarantee of individual success. All clinical trial and surveillance data must be reviewed and approved by institutional medical and regulatory teams prior to publication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 14 — RECOVERY AND FOLLOW-UP ========== */}
      <section id="recovery-followup" className="sec-block sec-block--bg-soft">
        <div className="container">
          <div className="block__hd">
            <span className="block__kicker">Post-Procedure Care</span>
            <h2 className="block__title">
              Recovery, Care <span>and Follow-Up</span>
            </h2>
            <p className="block__lede">
              After treatment, patients need clear instructions from their clinical team and should attend scheduled follow-up visits.
            </p>
          </div>

          <div className="recovery-grid">
            <article className="recovery-card">
              <div className="recovery-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="recovery-card__title">Catheter care</h3>
              <p className="recovery-card__desc">
                Follow the clinical team's instructions for catheter management and removal.
              </p>
            </article>

            <article className="recovery-card">
              <div className="recovery-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z" />
                  <path d="M8.5 8.5l7 7" />
                </svg>
              </div>
              <h3 className="recovery-card__title">Medication and infection precautions</h3>
              <p className="recovery-card__desc">
                Take prescribed medication as directed and follow hygiene instructions.
              </p>
            </article>

            <article className="recovery-card">
              <div className="recovery-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="recovery-card__title">Activity and recovery</h3>
              <p className="recovery-card__desc">
                Follow the individual instructions for activity, lifting and return to normal routines.
              </p>
            </article>

            <article className="recovery-card">
              <div className="recovery-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 className="recovery-card__title">Follow-up assessments</h3>
              <p className="recovery-card__desc">
                Attend scheduled reviews and recommended urinary-flow or imaging tests.
              </p>
            </article>
          </div>

          <div className="recovery-help-callout">
            <span className="recovery-help-callout__icon" aria-hidden="true">⚠️</span>
            <div>
              <h4 className="recovery-help-callout__title">When to seek medical help</h4>
              <p className="recovery-help-callout__text">
                Contact your treating team promptly if you experience fever, significant bleeding, catheter problems or worsening symptoms. Inability to pass urine requires urgent medical assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Guidance Modal */}
      {showConsultModal && (
        <div
          className="stricture-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="consult-modal-title"
          onClick={() => setShowConsultModal(false)}
        >
          <div
            className="consult-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="stricture-modal__close"
              onClick={() => setShowConsultModal(false)}
              aria-label="Close dialog"
            >
              ✕
            </button>
            <h3 id="consult-modal-title" className="consult-modal-title">
              Consulting a Specialist Urologist
            </h3>
            <p className="consult-modal-desc">
              Only a qualified urologist can evaluate stricture location, history, and individual suitability for regenerative cell therapy or reconstructive surgery.
            </p>
            <div className="consult-modal-steps">
              <strong>Recommended steps for your consultation:</strong>
              <ul>
                <li>Bring prior operative notes (e.g. details of previous DVIU or catheterization).</li>
                <li>Carry recent Uroflowmetry flow curve reports and imaging (RUG/VCUG).</li>
                <li>Prepare a list of your current symptoms and their duration.</li>
                <li>Discuss the potential benefits and limitations of all available options.</li>
              </ul>
            </div>
            <div className="consult-modal-actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => setShowConsultModal(false)}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
