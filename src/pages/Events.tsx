import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { events, categories, categoryColors, type EventCategory } from '../data/events';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((r, i) => {
              setTimeout(() => r.classList.add('visible'), i * 60);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export default function EventsPage() {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<EventCategory | 'All'>('All');
  useReveal(ref as React.RefObject<HTMLElement>);

  const filtered = activeFilter === 'All'
    ? events
    : events.filter((e) => e.category === activeFilter);

  return (
    <div ref={ref} className="page-enter page-body">
      {/* Page header */}
      <div
        className="pt-20 pb-8 border-b tech-grid relative"
        style={{ borderColor: '#1E1E28' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(232,184,75,0.04) 0%, transparent 70%)' }}
        />
        <div className="container relative z-10">
          <span className="section-label">Competitions</span>
          <h1 className="section-heading mb-2">All Events</h1>
          <p className="text-[#7A7A88] text-sm">12 competitions across 6 categories · 08–09 October 2026</p>
        </div>
      </div>

      <div className="container py-6">
        {/* Filter tabs */}
        <div
          className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1"
          role="group"
          aria-label="Filter by category"
          style={{ scrollbarWidth: 'none' }}
        >
          <button
            className="btn flex-shrink-0"
            style={{
              minHeight: '36px',
              padding: '0.4rem 1rem',
              fontSize: '0.7rem',
              background: activeFilter === 'All' ? '#E8B84B' : 'transparent',
              color: activeFilter === 'All' ? '#09090B' : '#7A7A88',
              border: activeFilter === 'All' ? '1px solid #E8B84B' : '1px solid #1E1E28',
            }}
            onClick={() => setActiveFilter('All')}
            aria-pressed={activeFilter === 'All'}
          >
            All
          </button>
          {categories.map((cat) => {
            const active = activeFilter === cat;
            const cfg = categoryColors[cat];
            return (
              <button
                key={cat}
                className="btn flex-shrink-0"
                style={{
                  minHeight: '36px',
                  padding: '0.4rem 1rem',
                  fontSize: '0.7rem',
                  background: active ? cfg.bg : 'transparent',
                  color: active ? cfg.text : '#7A7A88',
                  border: active ? `1px solid ${cfg.border}` : '1px solid #1E1E28',
                }}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={active}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Events grid */}
        <div className="events-grid">
          {filtered.map((event, i) => {
            const cfg = categoryColors[event.category];
            return (
              <article
                key={event.id}
                className="reveal event-card"
                style={{ transitionDelay: `${i * 50}ms` }}
                aria-labelledby={`ev-${event.id}-name`}
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="text-[2.25rem] leading-none font-black"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1E1E28' }}
                    aria-hidden="true"
                  >
                    {event.num}
                  </span>
                  <span
                    className="category-badge"
                    style={{ color: cfg.text, background: cfg.bg }}
                  >
                    {event.category}
                  </span>
                </div>

                {/* Name */}
                <div>
                  <h2
                    id={`ev-${event.id}-name`}
                    className="font-black text-xl text-[#F2EEE4] leading-tight mb-0.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {event.name}
                  </h2>
                  <p className="text-ui text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>
                    {event.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-grow" style={{ color: '#7A7A88' }}>
                  {event.description}
                </p>

                {/* Meta */}
                <div className="flex gap-4 pt-3 border-t" style={{ borderColor: '#1E1E28' }}>
                  <div>
                    <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Team Size</p>
                    <p className="text-ui text-xs font-semibold text-[#F2EEE4]">{event.teamSize}</p>
                  </div>
                  <div>
                    <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Entry Fee</p>
                    <p className="text-ui text-xs font-semibold" style={{ color: '#E8B84B' }}>{event.fee}</p>
                  </div>
                  {event.eligibility && (
                    <div>
                      <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Eligibility</p>
                      <p className="text-ui text-xs font-semibold" style={{ color: '#F87171' }}>{event.eligibility}</p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={() => { navigate(`/events/${event.id}`); window.scrollTo({ top: 0 }); }}
                  className="btn btn-ghost w-full"
                  style={{ minHeight: '44px', fontSize: '0.72rem', marginTop: 'auto' }}
                  aria-label={`View details for ${event.name}`}
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
