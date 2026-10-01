import Section from '../components/common/Section.jsx';
import ServiceCard from '../components/common/ServiceCard.jsx';

const SERVICES = [
  { icon: '🩺', title: 'General Urology Consultations', description: 'Annual checkups, symptom evaluations, referrals, and initial workups for any urological concern.' },
  { icon: '🪨', title: 'Kidney Stone Treatment', description: 'ESWL, ureteroscopy with laser lithotripsy, PCNL, and metabolic prevention evaluations.' },
  { icon: '🧬', title: 'Prostate Cancer Screening & Care', description: 'PSA testing, multi-parametric MRI, precision biopsies, active surveillance, and surgery.' },
  { icon: '💧', title: 'BPH & Enlarged Prostate', description: 'Medication management, Rezūm, UroLift, HoLEP, and robotic prostatectomy.' },
  { icon: '🚺', title: 'Female Urology & Incontinence', description: 'Stress & urgency incontinence, bladder prolapse, interstitial cystitis, and mesh-free repair.' },
  { icon: '🤰', title: 'Male Infertility & Sexual Health', description: 'Fertility evaluations, vasectomy & reversal, ED, Peyronie\'s, and low testosterone treatment.' },
  { icon: '🔬', title: 'Urologic Oncology', description: 'Surgical and medical management of kidney, bladder, prostate, and testicular cancers.' },
  { icon: '🤖', title: 'Robotic & Laparoscopic Surgery', description: 'Minimally invasive surgery with enhanced visualization, precision, and shorter recovery.' },
  { icon: '🛡️', title: 'Pediatric Urology', description: 'Pediatric referrals and care for common conditions including UTIs, hydronephrosis, and hypospadias.' }
];

function Services() {
  return (
    <>
      <Section
        eyebrow="Our Services"
        title="Full-Spectrum Urological Care"
        subtitle="From preventive screenings to complex surgery, our team offers comprehensive care across every sub-specialty of urology — all under one roof."
      >
        <div className="grid grid--3">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} {...svc} delay={i * 60} />
          ))}
        </div>
      </Section>

      <Section
        className="section--alt"
        eyebrow="Your Journey"
        title="What To Expect"
      >
        <ol className="timeline">
          <li>
            <div className="timeline-step">Step 1</div>
            <h3>Book Your Visit</h3>
            <p>Schedule online or call our office. Most new patient appointments are available within 48 hours.</p>
          </li>
          <li>
            <div className="timeline-step">Step 2</div>
            <h3>Consultation & Exam</h3>
            <p>Meet one-on-one with your urologist for a thorough history, exam, and explanation of next steps.</p>
          </li>
          <li>
            <div className="timeline-step">Step 3</div>
            <h3>Diagnostics On-Site</h3>
            <p>Labs, ultrasound, and cystoscopy performed in-clinic for same-day answers when possible.</p>
          </li>
          <li>
            <div className="timeline-step">Step 4</div>
            <h3>Personalized Treatment Plan</h3>
            <p>Your care plan is reviewed with you in detail, including alternatives, risks, and expected outcomes.</p>
          </li>
        </ol>
      </Section>
    </>
  );
}

export default Services;
