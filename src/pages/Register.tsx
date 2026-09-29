import { REGISTER_NOW_URL } from '../config';

export default function Register() {
  return (
    <div className="page-enter page-body">
      <div className="page-header eng-grid">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-eyebrow">Registration</p>
          <h1 className="section-h" style={{ marginBottom: '0.5rem' }}>Register for YANTRIKA 2026</h1>
          <p className="ui" style={{ fontSize: '0.8rem', color: 'var(--tx-2)' }}>08–09 October 2026 · Academic Block–1, DRIEMS University</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div style={{ maxWidth: '500px' }}>

          <p style={{ color: 'var(--tx-2)', lineHeight: 1.75, fontSize: '0.92rem', marginBottom: '2rem' }}>
            Choose your event and complete registration through the official YANTRIKA 2026 form.
            All registrations are handled externally via Google Forms. No account required.
          </p>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.25rem' }}>
            {[
              { n: '01', t: 'Choose Your Event',  d: 'Browse all 12 competitions and select what suits you.' },
              { n: '02', t: 'Open the Form',       d: 'Tap Register Now to open the official Google Form.' },
              { n: '03', t: 'Fill Your Details',   d: 'Complete all required fields accurately.' },
              { n: '04', t: 'Show Up & Compete',   d: 'Arrive at Academic Block–1, SOET on 08–09 October 2026.' },
            ].map(({ n, t, d }) => (
              <div key={n} style={{ display: 'flex', gap: '1.25rem', padding: '1rem 1.25rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg-card)', alignItems: 'flex-start' }}>
                <span className="display" style={{ fontSize: '1.75rem', color: 'var(--border-lt)', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">{n}</span>
                <div>
                  <p className="ui" style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--tx)', marginBottom: '0.25rem' }}>{t}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--tx-2)', lineHeight: 1.6 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            id="reg-page-btn"
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ width: '100%', minHeight: '56px', fontSize: '0.88rem' }}
          >
            Register Now
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>

          <p className="ui" style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--tx-3)', marginTop: '1rem', lineHeight: 1.6 }}>
            No account required · No payment on this website<br />
            Registration handled externally via Google Forms
          </p>
        </div>
      </div>
    </div>
  );
}
