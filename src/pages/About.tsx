import { useNavigate } from 'react-router-dom';
import { categories, categoryColors, categoryIcons } from '../data/events';
import { INSTAGRAM_URL, CONTACT_EMAIL, CONTACT_PHONE } from '../config';

export default function About() {
  const nav = useNavigate();

  return (
    <div className="page-enter page-body">
      <div className="page-header eng-grid">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-eyebrow">About</p>
          <h1 className="section-h" style={{ marginBottom: '0.5rem' }}>YANTRIKA 2026</h1>
          <p className="ui" style={{ fontSize: '0.8rem', color: 'var(--tx-2)' }}>Technical Fest · DRIEMS University</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          {/* About text */}
          <section aria-labelledby="about-desc">
            <h2 id="about-desc" className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '1rem' }}>
              About the Fest
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', color: 'var(--tx-2)', fontSize: '0.93rem', lineHeight: 1.75 }}>
              <p>
                <strong style={{ color: 'var(--tx)', fontWeight: 600 }}>YANTRIKA 2026</strong> is a university-level techno-cultural fest organized by the{' '}
                <strong style={{ color: 'var(--tx)', fontWeight: 600 }}>Department of Computer Science & Engineering</strong>,
                School of Engineering & Technology, DRIEMS University.
              </p>
              <p>
                The fest brings together students to participate in technical challenges, coding competitions,
                innovation activities, academic presentations, gaming, and cultural events.
              </p>
              <p>
                From robotics and debugging to technical presentations, creative competitions, gaming, photography,
                food, and performances — YANTRIKA 2026 provides a platform for students to compete, create,
                collaborate, and showcase their skills.
              </p>
            </div>
          </section>

          <hr className="rule-gold" />

          {/* Organizer */}
          <section aria-labelledby="org-heading">
            <h2 id="org-heading" className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '1rem' }}>
              Organized By
            </h2>
            <div className="detail-card">
              <div style={{ height: '3px', background: 'linear-gradient(to right, var(--gold), transparent)' }} aria-hidden="true" />
              <div style={{ padding: '1.25rem' }}>
                <p className="display" style={{ fontSize: '1.25rem', color: 'var(--tx)', marginBottom: '0.5rem' }}>YANTRIKA 2026</p>
                <p style={{ color: 'var(--tx-2)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  Department of Computer Science & Engineering<br />
                  School of Engineering & Technology<br />
                  <strong style={{ color: 'var(--tx)', fontWeight: 600 }}>DRIEMS University</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Event info */}
          <section aria-labelledby="ev-info-heading">
            <h2 id="ev-info-heading" className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '1rem' }}>
              Event Information
            </h2>
            <div className="detail-card">
              <div style={{ height: '3px', background: 'linear-gradient(to right, var(--gold), transparent)' }} aria-hidden="true" />
              {[
                { icon: '📅', label: 'Date',   value: '08–09 October 2026' },
                { icon: '📍', label: 'Venue',  value: 'Academic Block–1, CSE, SOET · DRIEMS University' },
                { icon: '🏆', label: 'Events', value: '12 Competitions across 6 Categories' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="info-row" style={{ padding: '0.875rem 1.25rem' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0 }} role="img" aria-hidden="true">{icon}</span>
                  <div>
                    <p className="ui" style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '0.2rem' }}>{label}</p>
                    <p className="ui" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--tx)' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="rule-gold" />

          {/* Categories */}
          <section aria-labelledby="cats-heading">
            <h2 id="cats-heading" className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '1rem' }}>
              Event Categories
            </h2>
            <div className="cat-grid">
              {categories.map(cat => {
                const c = categoryColors[cat];
                return (
                  <button
                    key={cat}
                    className="cat-card"
                    style={{ '--cat-color': c.text, textAlign: 'left', border: 'none', cursor: 'pointer' } as React.CSSProperties}
                    onClick={() => { nav('/events'); window.scrollTo({ top: 0 }); }}
                    aria-label={`View ${cat} events`}
                  >
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.5rem' }} role="img" aria-hidden="true">{categoryIcons[cat]}</span>
                    <p className="ui" style={{ fontSize: '0.7rem', fontWeight: 700, color: c.text, lineHeight: 1.3 }}>{cat}</p>
                  </button>
                );
              })}
            </div>
          </section>

          <hr className="rule-gold" />

          {/* Contact */}
          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '1rem' }}>
              Contact & Social
            </h2>
            <div className="detail-card">
              <div style={{ height: '3px', background: 'linear-gradient(to right, var(--gold), transparent)' }} aria-hidden="true" />
              {[
                { label: 'Email',     value: CONTACT_EMAIL,  href: CONTACT_EMAIL.startsWith('PASTE') ? undefined : `mailto:${CONTACT_EMAIL}` },
                { label: 'Phone',     value: CONTACT_PHONE,  href: CONTACT_PHONE.startsWith('PASTE') ? undefined : `tel:${CONTACT_PHONE}` },
                { label: 'Instagram', value: '@driems.yantrika', href: INSTAGRAM_URL },
              ].map(({ label, value, href }) => (
                <div key={label} className="info-row" style={{ padding: '0.875rem 1.25rem' }}>
                  <div>
                    <p className="ui" style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '0.2rem' }}>{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="ui" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--gold)', textDecoration: 'none' }}>
                        {value}
                      </a>
                    ) : (
                      <p className="ui" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--tx)' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
