import { useState } from 'react';
import Section from '../components/common/Section.jsx';

const initial = { name: '', email: '', phone: '', service: 'General Consultation', message: '' };

function Contact() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Section
        eyebrow="Get In Touch"
        title="Schedule Your Consultation"
        subtitle="Fill out the form below and our care coordinator will contact you within one business day. For urgent matters, please call us directly."
      >
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+18001234567">+1 (800) 123-4567</a></p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:info@urologycare.com">info@urologycare.com</a></p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <h4>Main Clinic</h4>
                <p>123 Medical Plaza, Suite 400<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🕘</span>
              <div>
                <h4>Hours</h4>
                <p>Mon–Fri: 8:00 AM – 6:00 PM<br />Sat: 9:00 AM – 1:00 PM</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            {submitted ? (
              <div className="form-success" role="status">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your request has been received. A care coordinator will reach out shortly.</p>
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => { setSubmitted(false); setForm(initial); }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label className="field">
                    <span className="field-label">Full Name *</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={onChange}
                      className="field-input"
                      placeholder="John Doe"
                    />
                  </label>
                  <label className="field">
                    <span className="field-label">Email Address *</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      className="field-input"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label className="field">
                    <span className="field-label">Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      className="field-input"
                      placeholder="(555) 123-4567"
                    />
                  </label>
                  <label className="field">
                    <span className="field-label">Service Interested In</span>
                    <select name="service" value={form.service} onChange={onChange} className="field-input">
                      <option>General Consultation</option>
                      <option>Kidney Stone Treatment</option>
                      <option>Prostate Screening</option>
                      <option>Incontinence / Bladder Issues</option>
                      <option>Sexual Health / Fertility</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <label className="field">
                  <span className="field-label">Message / Symptoms (Optional)</span>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={onChange}
                    className="field-input field-input--textarea"
                    placeholder="Briefly describe what brings you in — our coordinator will prepare your file in advance."
                  />
                </label>

                <button type="submit" className="btn btn--primary btn--full">
                  Request Appointment
                </button>
                <p className="form-disclaimer">
                  By submitting this form you consent to our staff contacting you about your appointment.
                  Protected health information should not be sent via this form.
                </p>
              </>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}

export default Contact;
