import Section from '../components/common/Section.jsx';

function About() {
  return (
    <>
      <Section
        eyebrow="About Our Practice"
        title="Dedicated to Advancing Urological Care"
        subtitle="For more than two decades, our clinic has been a regional leader in urology, combining academic excellence with compassionate, patient-centered care."
      >
        <div className="prose prose--centered">
          <p>
            Founded in 1999, UrologyCare Center began with a simple mission — to deliver
            advanced urological care in a community setting, close to home. Today our
            team of fellowship-trained specialists serves thousands of patients each
            year across three convenient locations.
          </p>
          <p>
            We believe the best outcomes come from listening. Every treatment plan is
            built around the individual, and we take the time to explain options so you
            can make truly informed decisions about your health.
          </p>
        </div>
      </Section>

      <Section
        className="section--alt"
        eyebrow="Our Values"
        title="What Guides Our Practice Every Day"
      >
        <div className="grid grid--3">
          <article className="value-card">
            <h3>Excellence</h3>
            <p>We pursue the highest standards in medicine, technology, and service — never settling for average.</p>
          </article>
          <article className="value-card">
            <h3>Integrity</h3>
            <p>Honest, transparent advice you can trust. We recommend only what we would for our own families.</p>
          </article>
          <article className="value-card">
            <h3>Empathy</h3>
            <p>We see the person first, the condition second. Compassion is not optional in our clinic.</p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Meet the Team"
        title="Specialists You Can Trust"
        subtitle="Our physicians are board-certified and actively involved in research and teaching, bringing tomorrow's standards of care to today's patients."
      >
        <div className="grid grid--3">
          <article className="team-card">
            <div className="team-avatar" aria-hidden="true">JS</div>
            <h3>Dr. James Smith, MD</h3>
            <p className="team-role">Chief of Urology · Robotic Surgery</p>
            <p>20 years experience specializing in minimally invasive robotic surgery and urologic oncology.</p>
          </article>
          <article className="team-card">
            <div className="team-avatar team-avatar--2" aria-hidden="true">MP</div>
            <h3>Dr. Maria Patel, MD</h3>
            <p className="team-role">Urologist · Female Pelvic Medicine</p>
            <p>15 years experience in female pelvic medicine, incontinence, and reconstructive urology.</p>
          </article>
          <article className="team-card">
            <div className="team-avatar team-avatar--3" aria-hidden="true">DR</div>
            <h3>Dr. David Rivera, MD</h3>
            <p className="team-role">Urologist · Endourology & Stones</p>
            <p>12 years experience managing complex kidney stone disease and benign prostate conditions.</p>
          </article>
        </div>
      </Section>
    </>
  );
}

export default About;
