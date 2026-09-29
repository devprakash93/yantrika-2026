import { useParams, useNavigate } from 'react-router-dom';
import { events, categoryColors } from '../data/events';
import { REGISTER_NOW_URL } from '../config';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="page-enter page-body">
        <div className="container pt-28 text-center">
          <p className="text-[#7A7A88] text-sm mb-4">Event not found.</p>
          <button
            onClick={() => navigate('/events')}
            className="btn btn-gold-outline"
            style={{ minHeight: '44px' }}
          >
            ← Back to Events
          </button>
        </div>
      </div>
    );
  }

  const cfg = categoryColors[event.category];

  return (
    <div className="page-enter page-body">
      {/* Back button + header */}
      <div
        className="pt-20 pb-8 border-b tech-grid relative"
        style={{ borderColor: '#1E1E28' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(232,184,75,0.04) 0%, transparent 70%)' }}
        />
        <div className="container relative z-10">
          <button
            onClick={() => navigate('/events')}
            className="text-ui text-xs font-semibold tracking-wide mb-5 flex items-center gap-2 bg-transparent border-none cursor-pointer"
            style={{ color: '#7A7A88' }}
            aria-label="Back to all events"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Events
          </button>

          {/* Event number */}
          <p
            className="font-black leading-none mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem,10vw,5rem)', color: '#1E1E28' }}
            aria-hidden="true"
          >
            {event.num}
          </p>

          {/* Category badge */}
          <span
            className="category-badge mb-3 block w-fit"
            style={{ color: cfg.text, background: cfg.bg, border: `1px solid ${cfg.border}` }}
          >
            {event.category}
          </span>

          {/* Title */}
          <h1
            className="font-black leading-tight text-[#F2EEE4] mb-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,7vw,3.5rem)' }}
          >
            {event.name}
          </h1>
          <p
            className="text-ui font-bold tracking-widest uppercase"
            style={{ color: '#E8B84B', fontSize: '0.75rem' }}
          >
            {event.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        <div className="max-w-2xl">

          {/* Description */}
          <section className="mb-8" aria-labelledby="event-desc-heading">
            <h2
              className="text-ui text-xs font-bold tracking-widest uppercase mb-3"
              id="event-desc-heading"
              style={{ color: '#4A4A58' }}
            >
              About This Event
            </h2>
            <p className="leading-relaxed" style={{ color: '#A0A0B0', fontSize: '0.95rem' }}>
              {event.description}
            </p>
          </section>

          {/* Suggested Topics */}
          {event.suggestedTopics && (
            <section className="mb-8" aria-labelledby="topics-heading">
              <h2
                className="text-ui text-xs font-bold tracking-widest uppercase mb-3"
                id="topics-heading"
                style={{ color: '#4A4A58' }}
              >
                Suggested Topics
              </h2>
              <div className="flex flex-wrap gap-2">
                {event.suggestedTopics.map((t) => (
                  <span
                    key={t}
                    className="text-ui text-xs px-2.5 py-1 rounded-sm border"
                    style={{ borderColor: '#1E1E28', color: '#7A7A88', background: '#13131A' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Event details card */}
          <div
            className="rounded-md border mb-8"
            style={{ background: '#13131A', borderColor: '#1E1E28' }}
          >
            <div className="p-5 border-b" style={{ borderColor: '#1E1E28' }}>
              <h2
                className="text-ui text-xs font-bold tracking-widest uppercase"
                style={{ color: '#4A4A58' }}
              >
                Event Details
              </h2>
            </div>
            <div className="divide-y" style={{ borderColor: '#1E1E28' }}>
              <div className="info-row px-5">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Team Size</p>
                  <p className="text-ui text-sm font-semibold text-[#F2EEE4]">{event.teamSize}</p>
                </div>
              </div>
              <div className="info-row px-5">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Registration Fee</p>
                  <p className="text-ui text-sm font-semibold" style={{ color: '#E8B84B' }}>{event.fee}</p>
                </div>
              </div>
              {event.eligibility && (
                <div className="info-row px-5">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#F87171' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Eligibility</p>
                    <p className="text-ui text-sm font-semibold" style={{ color: '#F87171' }}>{event.eligibility}</p>
                  </div>
                </div>
              )}
              <div className="info-row px-5">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Event Date</p>
                  <p className="text-ui text-sm font-semibold text-[#F2EEE4]">08–09 October 2026</p>
                </div>
              </div>
              <div className="info-row px-5">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Venue</p>
                  <p className="text-ui text-sm font-semibold text-[#F2EEE4]">Academic Block–1, CSE, SOET · DRIEMS University</p>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          {event.note && (
            <div
              className="rounded-sm border-l-2 p-4 mb-8 text-sm leading-relaxed"
              style={{ borderColor: '#E8B84B', background: 'rgba(232,184,75,0.04)', color: '#7A7A88' }}
            >
              <strong className="text-[#E8B84B] font-semibold text-xs uppercase tracking-widest block mb-1">Note</strong>
              {event.note}
            </div>
          )}

          {/* Register Button */}
          <a
            id={`detail-register-${event.id}`}
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold w-full"
            style={{ minHeight: '52px', fontSize: '0.85rem' }}
            aria-label={`Register for ${event.name}`}
          >
            {event.registerLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
