import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { events, categories, categoryColors, type EventCategory } from '../data/events';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((r, i) =>
            setTimeout(() => r.classList.add('visible'), i * 55)
          );
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.04 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

export default function EventsPage() {
  const nav = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<EventCategory | 'All'>('All');
  useReveal(ref as React.RefObject<HTMLElement>);

  const shown = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <div ref={ref} className="page-enter page-body">

      {/* Page header */}
      <div className="page-header eng-grid">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-eyebrow">Competitions</p>
          <h1 className="section-h" style={{ marginBottom: '0.5rem' }}>All Events</h1>
          <p className="ui" style={{ fontSize: '0.8rem', color: 'var(--tx-2)' }}>
            12 events · 6 categories · 08–09 October 2026
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '1.75rem', paddingBottom: '1.75rem' }}>

        {/* Filter tabs */}
        <div className="filter-tabs" role="group" aria-label="Filter by category" style={{ marginBottom: '1.75rem' }}>
          <button className={`filter-tab ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')} aria-pressed={filter === 'All'}>
            All (12)
          </button>
          {categories.map(cat => {
            const c = categoryColors[cat];
            const count = events.filter(e => e.category === cat).length;
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                className="filter-tab"
                style={isActive ? { background: c.text, color: '#0C0C12', borderColor: c.text } : {}}
                onClick={() => setFilter(cat)}
                aria-pressed={isActive}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="events-grid">
          {shown.map((ev, i) => {
            const c = categoryColors[ev.category];
            return (
              <article
                key={ev.id}
                className="reveal event-card"
                style={{ '--cat-color': c.text, transitionDelay: `${i * 45}ms` } as React.CSSProperties}
                aria-labelledby={`ev-${ev.id}`}
              >
                <span className="event-num-bg" aria-hidden="true">{ev.num}</span>

                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', paddingLeft: '0.5rem' }}>
                  <span className="cat-badge" style={{ color: c.text, background: c.bg }}>{ev.category}</span>
                  <span className="ui" style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--tx-3)', letterSpacing: '0.1em' }}>{ev.num}</span>
                </div>

                {/* Name */}
                <div style={{ paddingLeft: '0.5rem' }}>
                  <h2 id={`ev-${ev.id}`} className="display" style={{ fontSize: 'clamp(1.2rem,3vw,1.45rem)', color: 'var(--tx)', marginBottom: '0.2rem' }}>
                    {ev.name}
                  </h2>
                  <p className="ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                    {ev.subtitle}
                  </p>
                </div>

                {/* Desc */}
                <p style={{ fontSize: '0.84rem', color: 'var(--tx-2)', lineHeight: 1.65, paddingLeft: '0.5rem', flexGrow: 1 }}>
                  {ev.description}
                </p>

                {/* Eligibility note */}
                {ev.eligibility && (
                  <div style={{ paddingLeft: '0.5rem' }}>
                    <span className="ui" style={{ fontSize: '0.65rem', fontWeight: 700, color: '#F87171', letterSpacing: '0.05em' }}>
                      ⚠ {ev.eligibility}
                    </span>
                  </div>
                )}

                {/* Meta row */}
                <div style={{ display: 'flex', gap: '1.25rem', paddingLeft: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
                  <div>
                    <p className="ui" style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '0.2rem' }}>Team</p>
                    <p className="ui" style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--tx)' }}>{ev.teamSize}</p>
                  </div>
                  <div>
                    <p className="ui" style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '0.2rem' }}>Fee</p>
                    <p className="ui" style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)' }}>{ev.fee}</p>
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="btn btn-ghost"
                  style={{ width: '100%', minHeight: '44px', fontSize: '0.72rem' }}
                  onClick={() => { nav(`/events/${ev.id}`); window.scrollTo({ top: 0 }); }}
                  aria-label={`View details for ${ev.name}`}
                >
                  View Details
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
