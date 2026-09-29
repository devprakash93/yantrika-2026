import { RULES_URL } from '../config';

export default function Rules() {
  return (
    <div className="page-enter page-body">
      <div className="page-header eng-grid">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-eyebrow">Guidelines</p>
          <h1 className="section-h" style={{ marginBottom: '0.5rem' }}>Rules & Regulations</h1>
          <p className="ui" style={{ fontSize: '0.8rem', color: 'var(--tx-2)' }}>YANTRIKA 2026 · All Events</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div style={{ maxWidth: '560px' }}>

          {/* Main card */}
          <div className="detail-card" style={{ marginBottom: '1.5rem' }}>
            <div style={{ height: '3px', background: 'linear-gradient(to right, var(--gold), transparent)' }} aria-hidden="true" />
            <div className="detail-card-header">
              <h2 className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tx-3)' }}>
                Official Rules & Regulations Document
              </h2>
            </div>
            <div style={{ padding: '1.5rem 1.25rem' }}>
              <p style={{ color: 'var(--tx-2)', lineHeight: 1.72, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Before registering, all participants are required to read the official rules and regulations document.
                It contains complete information about eligibility, competition format, judging criteria, code of conduct,
                and event-specific regulations for all 12 competitions.
              </p>

              {/* Checklist */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.75rem', listStyle: 'none', padding: 0 }}>
                {[
                  'Eligibility criteria for all events',
                  'Competition format and match structure',
                  'Judging criteria and evaluation process',
                  'Code of conduct and participant responsibilities',
                  'Event-specific regulations for all 12 competitions',
                  'Disqualification conditions',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.86rem', color: 'var(--tx-2)' }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                id="view-rules-btn"
                href={RULES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: '100%', minHeight: '52px', fontSize: '0.82rem' }}
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                View Official Rules
              </a>
            </div>
          </div>

          <p className="ui" style={{ fontSize: '0.72rem', color: 'var(--tx-3)', textAlign: 'center', lineHeight: 1.6 }}>
            All participants are expected to read and adhere to the rules.<br />
            Violations may result in disqualification.
          </p>

        </div>
      </div>
    </div>
  );
}
