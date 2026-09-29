import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from '../components/Countdown';
import { REGISTER_NOW_URL } from '../config';
import { events, categories, categoryColors, categoryIcons, featuredEventIds } from '../data/events';

/* ── shared reveal hook ─────────────────────────────────── */
function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((r, i) =>
            setTimeout(() => r.classList.add('visible'), i * 75)
          );
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

/* ── HERO ───────────────────────────────────────────────── */
function Hero() {
  const nav = useNavigate();

  return (
    <section className="hero-wrap dot-grid diag-lines" aria-label="YANTRIKA 2026">
      {/* Centre glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 75% 60% at 50% 50%, rgba(234,184,74,0.055) 0%, transparent 65%)' }} />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }} />

      <div className="container relative z-10 flex flex-col items-center text-center">

        {/* ── chip ── */}
        <div className="mb-6" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.875rem', borderRadius: '3px', border: '1px solid rgba(234,184,74,0.22)', background: 'rgba(234,184,74,0.04)' }}>
          <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', animation: 'pulse-glow 2s infinite' }} aria-hidden="true" />
          <span className="ui" style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Technical Fest · DRIEMS University
          </span>
        </div>

        {/* ── Main title ── */}
        <h1 className="display gold-text" style={{ fontSize: 'clamp(3.5rem, 14vw, 9.5rem)', marginBottom: '0.25rem' }}>
          YANTRIKA
        </h1>
        <p className="ui" style={{ fontSize: 'clamp(1rem, 3.5vw, 2rem)', fontWeight: 700, letterSpacing: '0.45em', color: 'var(--tx-2)', marginBottom: '0.375rem' }}>
          2026
        </p>
        <p className="ui" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(234,184,74,0.55)', marginBottom: '2.5rem' }}>
          Technical Fest
        </p>

        {/* ── Countdown ── */}
        <div style={{ width: '100%', maxWidth: '22rem', marginBottom: '2.25rem' }}>
          <Countdown />
        </div>

        <hr className="hero-rule" style={{ marginBottom: '1.75rem' }} />

        {/* ── Event meta ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginBottom: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="14" height="14" fill="none" stroke="var(--gold)" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="ui" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--tx)', letterSpacing: '0.03em' }}>
              08–09 October 2026
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="14" height="14" fill="none" stroke="var(--gold)" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ui" style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--tx-2)', letterSpacing: '0.02em' }}>
              Academic Block–1, CSE, SOET · DRIEMS University
            </span>
          </div>
        </div>

        {/* ── CTAs ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '20rem' }}>
          <button
            id="hero-explore"
            className="btn btn-gold btn-w"
            onClick={() => { nav('/events'); window.scrollTo({ top: 0 }); }}
            style={{ minHeight: '50px', fontSize: '0.8rem' }}
          >
            Explore Events
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </button>
          <a
            id="hero-register"
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-w"
            style={{ minHeight: '50px', fontSize: '0.8rem' }}
          >
            Register Now
          </a>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2" aria-hidden="true">
          <span className="ui" style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)' }}>Scroll</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--gold-dim), transparent)' }} />
        </div>
      </div>
    </section>
  );
}

/* ── ABOUT SNAPSHOT ─────────────────────────────────────── */
function AboutSnap() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const nav = useNavigate();

  return (
    <section ref={ref} className="section" style={{ borderTop: '1px solid var(--border)' }} aria-labelledby="about-snap-h">
      <div className="container">
        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: '1fr' }}>

          {/* Text */}
          <div style={{ maxWidth: '640px' }}>
            <div className="reveal">
              <p className="section-eyebrow">About</p>
              <h2 id="about-snap-h" className="section-h" style={{ marginBottom: '1.25rem' }}>What is YANTRIKA?</h2>
            </div>
            <div className="reveal" style={{ transitionDelay: '70ms' }}>
              <p style={{ color: 'var(--tx-2)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--tx)', fontWeight: 600 }}>YANTRIKA 2026</strong> is a university-level
                techno-cultural fest organized by the{' '}
                <strong style={{ color: 'var(--tx)', fontWeight: 600 }}>Department of Computer Science & Engineering</strong>,
                School of Engineering & Technology, DRIEMS University.
              </p>
              <p style={{ color: 'var(--tx-2)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                The fest brings together students to compete, innovate, and collaborate across 12 events spanning
                robotics, coding, design, academics, gaming, and culture.
              </p>
              <button
                className="btn btn-outline"
                onClick={() => { nav('/about'); window.scrollTo({ top: 0 }); }}
                style={{ minHeight: '44px', fontSize: '0.75rem' }}
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal stat-grid" style={{ transitionDelay: '140ms' }}>
            {[
              { n: '12', l: 'Competitions' },
              { n: '6',  l: 'Categories'   },
              { n: '2',  l: 'Days'         },
              { n: '∞',  l: 'Possibilities'},
            ].map(({ n, l }) => (
              <div key={l} className="stat-cell">
                <p className="display" style={{ fontSize: 'clamp(2rem,5vw,2.75rem)', color: 'var(--gold)', marginBottom: '0.25rem' }}>{n}</p>
                <p className="ui" style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tx-3)' }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CATEGORIES ─────────────────────────────────────────── */
function Categories() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const nav = useNavigate();

  return (
    <section ref={ref} className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-1)' }} aria-labelledby="cats-h">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '2rem' }}>
          <p className="section-eyebrow">Explore</p>
          <h2 id="cats-h" className="section-h">Event Categories</h2>
        </div>
        <div className="cat-grid">
          {categories.map((cat, i) => {
            const c = categoryColors[cat];
            return (
              <button
                key={cat}
                className="reveal cat-card"
                style={{ '--cat-color': c.text, transitionDelay: `${i * 55}ms` } as React.CSSProperties}
                onClick={() => { nav('/events'); window.scrollTo({ top: 0 }); }}
                aria-label={`View ${cat} events`}
              >
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.625rem' }} role="img" aria-hidden="true">
                  {categoryIcons[cat]}
                </span>
                <p className="ui" style={{ fontSize: '0.72rem', fontWeight: 700, color: c.text, lineHeight: 1.3 }}>
                  {cat}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── FEATURED EVENTS ────────────────────────────────────── */
function FeaturedEvents() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const nav = useNavigate();
  const featured = events.filter(e => featuredEventIds.includes(e.id));

  return (
    <section ref={ref} className="section" style={{ borderTop: '1px solid var(--border)' }} aria-labelledby="feat-h">
      <div className="container">
        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem' }}>
          <div>
            <p className="section-eyebrow">Spotlight</p>
            <h2 id="feat-h" className="section-h">Featured Events</h2>
          </div>
          <button
            className="ui bg-transparent border-none cursor-pointer"
            style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', flexShrink: 0 }}
            onClick={() => { nav('/events'); window.scrollTo({ top: 0 }); }}
          >
            View All →
          </button>
        </div>

        <div className="events-grid">
          {featured.map((ev, i) => {
            const c = categoryColors[ev.category];
            return (
              <article
                key={ev.id}
                className="reveal event-card"
                style={{ '--cat-color': c.text, transitionDelay: `${i * 65}ms` } as React.CSSProperties}
                aria-labelledby={`feat-${ev.id}`}
              >
                {/* Watermark number */}
                <span className="event-num-bg" aria-hidden="true">{ev.num}</span>

                {/* Category + num row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', paddingLeft: '0.5rem' }}>
                  <span className="cat-badge" style={{ color: c.text, background: c.bg }}>{ev.category}</span>
                  <span className="ui" style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--tx-3)', letterSpacing: '0.1em' }}>
                    {ev.num}
                  </span>
                </div>

                {/* Name */}
                <div style={{ paddingLeft: '0.5rem' }}>
                  <h3 id={`feat-${ev.id}`} className="display" style={{ fontSize: 'clamp(1.25rem,3vw,1.5rem)', color: 'var(--tx)', marginBottom: '0.25rem' }}>
                    {ev.name}
                  </h3>
                  <p className="ui" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                    {ev.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.84rem', color: 'var(--tx-2)', lineHeight: 1.65, paddingLeft: '0.5rem', flexGrow: 1 }}>
                  {ev.description}
                </p>

                {/* Meta */}
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
                  style={{ width: '100%', marginLeft: '0', minHeight: '44px', fontSize: '0.72rem' }}
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
    </section>
  );
}

/* ── FINAL CTA ──────────────────────────────────────────── */
function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      className="section"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-1)', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="cta-h"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(234,184,74,0.05) 0%, transparent 70%)' }} />
      <div className="eng-grid absolute inset-0" aria-hidden="true" style={{ opacity: 0.4 }} />

      <div className="container relative z-10 text-center">
        <div className="reveal" style={{ maxWidth: '520px', margin: '0 auto' }}>
          <p className="section-eyebrow" style={{ justifyContent: 'center' }}>Join Us</p>
          <h2 id="cta-h" className="section-h" style={{ marginBottom: '1rem' }}>Ready to Compete?</h2>
          <p style={{ color: 'var(--tx-2)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
            Choose your event and register through the official YANTRIKA 2026 form. No account needed.
          </p>
          <a
            id="home-final-register"
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ minHeight: '52px', padding: '0.875rem 2.75rem', fontSize: '0.82rem', width: '100%', maxWidth: '280px' }}
          >
            Register Now
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── HOME ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="page-enter page-body">
      <Hero />
      <AboutSnap />
      <Categories />
      <FeaturedEvents />
      <FinalCTA />
    </div>
  );
}
