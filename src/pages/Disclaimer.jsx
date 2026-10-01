import { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Disclaimer.css';

function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Medical & Regulatory Disclaimer | Urology Care';
  }, []);

  return (
    <div className="disclaimer-page">
      {/* Header Banner */}
      <section className="disclaimer-hero">
        <div className="container">
          <div className="disclaimer-hero__inner">
            <span className="disclaimer-hero__badge">Official Advisory</span>
            <h1 className="disclaimer-hero__title">
              Medical & Regulatory <span>Disclaimer</span>
            </h1>
            <p className="disclaimer-hero__lede">
              Please review these important terms and regulatory disclosures regarding patient information, clinical candidacy, and AALBEC autologous cell therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="disclaimer-body">
        <div className="container">
          <div className="disclaimer-main-card">
            {/* Top Important Alert */}
            <div className="disclaimer-alert-banner">
              <div className="disclaimer-alert-icon" aria-hidden="true">⚠️</div>
              <div className="disclaimer-alert-content">
                <strong>Emergency Notice:</strong> If you are experiencing acute urinary retention (inability to pass urine), intractable pain, gross hematuria (heavy blood in urine), or signs of high fever with chills, seek immediate medical attention at an emergency hospital facility.
              </div>
            </div>

            {/* Structured Sections */}
            <div className="disclaimer-sections">
              {/* Section 1 */}
              <article className="disclaimer-sec">
                <div className="disclaimer-sec__num">01</div>
                <div className="disclaimer-sec__text">
                  <h2 className="disclaimer-sec__title">Educational & Informational Nature</h2>
                  <p>
                    All content, text, data, illustrations, diagrams, and answers presented on this website are published solely for general informational and educational purposes. This material is designed to help patients and families understand urological conditions such as bulbar urethral strictures, conventional interventions (VIU/DVIU, urethroplasty), and autologous cellular technologies.
                  </p>
                  <p>
                    Nothing contained on this platform should be construed as establishing a doctor-patient relationship, prescribing a medical regimen, or replacing direct medical examination and diagnosis by a qualified medical practitioner.
                  </p>
                </div>
              </article>

              {/* Section 2 */}
              <article className="disclaimer-sec">
                <div className="disclaimer-sec__num">02</div>
                <div className="disclaimer-sec__text">
                  <h2 className="disclaimer-sec__title">Individualized Medical Evaluation Required</h2>
                  <p>
                    Urethral strictures differ substantially in anatomical location (bulbar, penile, navicular), stricture length, caliber, spongiofibrosis severity, and patient medical history (previous catheterizations, pelvic fractures, prior failed surgeries).
                  </p>
                  <p>
                    Determining whether an individual patient is a candidate for AALBEC therapy, endoscopic treatment, or surgical reconstructive urethroplasty requires physical evaluation, uroflowmetry, retrograde urethrography (RGU), and direct clinical assessment by a board-certified urologist.
                  </p>
                </div>
              </article>

              {/* Section 3 */}
              <article className="disclaimer-sec">
                <div className="disclaimer-sec__num">03</div>
                <div className="disclaimer-sec__text">
                  <h2 className="disclaimer-sec__title">Regulatory Approvals & DCGI Oversight</h2>
                  <p>
                    AALBEC (Autologous Adult Live Buccal Epithelial Cell) therapy has undergone rigorous clinical trial evaluation and is approved by the Drugs Controller General of India (DCGI), Central Drugs Standard Control Organization (CDSCO), Ministry of Health and Family Welfare, Government of India.
                  </p>
                  <p>
                    Harvesting of buccal mucosal tissue (0.5–1 cm cheek biopsy), laboratory cell expansion (~5 million live epithelial cells), cold-chain transport with temperature data loggers, and subsequent transurethral cell implantation are conducted under strict regulatory protocols, Good Manufacturing Practices (GMP), and accredited medical oversight.
                  </p>
                </div>
              </article>

              {/* Section 4 */}
              <article className="disclaimer-sec">
                <div className="disclaimer-sec__num">04</div>
                <div className="disclaimer-sec__text">
                  <h2 className="disclaimer-sec__title">Treatment Outcomes & Limitations</h2>
                  <p>
                    Clinical success and long-term stricture-free patency rates vary between individuals based on physiological response, stricture length, post-procedure compliance (catheter care, abstinence from heavy lifting, dietary precautions), and follow-up adherence. No medical therapy carries a 100% guarantee of permanent cure.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article className="disclaimer-sec">
                <div className="disclaimer-sec__num">05</div>
                <div className="disclaimer-sec__text">
                  <h2 className="disclaimer-sec__title">Limitation of Liability</h2>
                  <p>
                    Neither the healthcare providers, medical authors, laboratory partners, nor affiliated organizations shall be held liable for any loss, damage, or adverse event arising directly or indirectly from the use or interpretation of the information contained on this website. Always consult your personal physician before starting, modifying, or terminating any clinical treatment.
                  </p>
                </div>
              </article>
            </div>

            {/* Bottom Summary Callout */}
            <div className="disclaimer-conclusion">
              <p>
                By accessing and using this website, you acknowledge that you have read, understood, and agreed to this Medical & Regulatory Disclaimer.
              </p>
              <div className="disclaimer-conclusion__actions">
                <Link to="/faqs" className="btn btn--primary">
                  View FAQs (60 Questions)
                </Link>
                <Link to="/" className="btn btn--outline">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default memo(Disclaimer);
