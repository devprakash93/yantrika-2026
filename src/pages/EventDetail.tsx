import { useParams, useNavigate } from 'react-router-dom';
import { events, categoryColors } from '../data/events';
import { REGISTER_NOW_URL } from '../config';

const ChevronLeft = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ExtLink = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const ev = events.find(e => e.id === id);

  if (!ev) {
    return (
      <div className="page-enter page-body" style={{ paddingTop: '80px' }}>
        <div className="container" style={{ paddingTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--tx-2)', marginBottom: '1.5rem' }}>Event not found.</p>
          <button className="btn btn-outline" onClick={() => nav('/events')} style={{ minHeight: '44px' }}>
            ← Back to Events
          </button>
        </div>
      </div>
    );
  }

  const c = categoryColors[ev.category];

  return (
    <div className="page-enter page-body">

      {/* ── Page header ── */}
      <div className="page-header eng-grid" style={{ borderLeft: `3px solid ${c.text}` }}>
        <div className="page-header-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Back link */}
          <button
            onClick={() => nav('/events')}
            className="btn bg-transparent border-none cursor-pointer"
            style={{ minHeight: 'auto', padding: '0', marginBottom: '1.5rem', color: 'var(--tx-2)', fontSize: '0.78rem', gap: '0.375rem' }}
          >
            <ChevronLeft />
            <span className="ui" style={{ fontWeight: 600 }}>All Events</span>
          </button>

          {/* Number */}
          <p className="display" style={{ fontSize: 'clamp(3rem,10vw,5.5rem)', color: 'var(--border-lt)', lineHeight: 1, marginBottom: '0.5rem' }} aria-hidden="true">
            {ev.num}
          </p>

          {/* Category */}
          <span className="cat-badge" style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}`, marginBottom: '0.75rem', display: 'inline-flex' }}>
            {ev.category}
          </span>

          {/* Title */}
          <h1 className="display" style={{ fontSize: 'clamp(2.25rem,7vw,4rem)', color: 'var(--tx)', lineHeight: 1.05, marginBottom: '0.4rem' }}>
            {ev.name}
          </h1>
          <p className="ui" style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            {ev.subtitle}
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div style={{ maxWidth: '640px' }}>

          {/* About */}
          <section style={{ marginBottom: '2.25rem' }} aria-labelledby="ev-about">
            <h2 id="ev-about" className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '0.875rem' }}>
              About This Event
            </h2>
            <p style={{ color: 'var(--tx-2)', lineHeight: 1.75, fontSize: '0.95rem' }}>
              {ev.description}
            </p>
          </section>

          {/* Suggested topics */}
          {ev.suggestedTopics && (
            <section style={{ marginBottom: '2.25rem' }} aria-labelledby="ev-topics">
              <h2 id="ev-topics" className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '0.875rem' }}>
                Suggested Topics
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {ev.suggestedTopics.map(t => (
                  <span key={t} className="ui" style={{ fontSize: '0.72rem', fontWeight: 600, padding: '0.3rem 0.7rem', borderRadius: '3px', border: '1px solid var(--border-lt)', color: 'var(--tx-2)', background: 'var(--bg-2)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Details card */}
          <section style={{ marginBottom: '2.25rem' }} aria-labelledby="ev-details">
            <h2 id="ev-details" className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '0.875rem' }}>
              Event Details
            </h2>
            <div className="detail-card">
              {/* Colored top bar */}
              <div style={{ height: '3px', background: `linear-gradient(to right, ${c.text}, transparent)` }} aria-hidden="true" />
              <div className="detail-card-header">
                <p className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--tx-3)' }}>
                  {ev.name} · {ev.subtitle}
                </p>
              </div>
              {/* Rows */}
              {[
                { icon: '👥', label: 'Team Size',        value: ev.teamSize,          col: 'var(--tx)' },
                { icon: '₹',  label: 'Entry Fee',        value: ev.fee,               col: 'var(--gold)' },
                { icon: '📅', label: 'Event Date',       value: '08–09 October 2026', col: 'var(--tx)' },
                { icon: '📍', label: 'Venue',            value: 'Academic Block–1, CSE, SOET · DRIEMS University', col: 'var(--tx)' },
                ...(ev.eligibility ? [{ icon: '⚠', label: 'Eligibility', value: ev.eligibility, col: '#F87171' }] : []),
              ].map(({ icon, label, value, col }) => (
                <div key={label} className="info-row" style={{ padding: '0.875rem 1.25rem', gap: '0.875rem' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0 }} role="img" aria-hidden="true">{icon}</span>
                  <div>
                    <p className="ui" style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '0.2rem' }}>{label}</p>
                    <p className="ui" style={{ fontSize: '0.88rem', fontWeight: 600, color: col }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Note */}
          {ev.note && (
            <div className="note-block" style={{ marginBottom: '2.25rem' }}>
              <strong className="ui" style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.35rem' }}>
                Note
              </strong>
              {ev.note}
            </div>
          )}

          {/* Register */}
          <a
            id={`reg-${ev.id}`}
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ width: '100%', minHeight: '52px', fontSize: '0.82rem' }}
            aria-label={`Register for ${ev.name}`}
          >
            {ev.registerLabel}
            <ExtLink />
          </a>

        </div>
      </div>
    </div>
  );
}
