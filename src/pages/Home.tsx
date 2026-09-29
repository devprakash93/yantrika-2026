import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from '../components/Countdown';
import { REGISTER_NOW_URL } from '../config';
import { events, categories, categoryColors, categoryIcons, featuredEventIds } from '../data/events';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((r, i) => {
              setTimeout(() => r.classList.add('visible'), i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

// ── Hero ─────────────────────────────────────────────────────
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero-section tech-grid" aria-label="YANTRIKA 2026 Hero">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(232,184,75,0.05) 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Overline chip */}
          <div
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-sm border"
            style={{ borderColor: 'rgba(232,184,75,0.25)', background: 'rgba(232,184,75,0.05)' }}
          >
            <span
              className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#E8B84B]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Technical Fest · DRIEMS University
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-display gold-text mb-2"
            style={{ fontSize: 'clamp(3rem,13vw,8rem)' }}
          >
            YANTRIKA
          </h1>
          <p
            className="text-ui font-bold tracking-[0.4em] uppercase mb-1"
            style={{ fontSize: 'clamp(0.9rem,3vw,1.5rem)', color: '#7A7A88' }}
          >
            2026
          </p>
          <p
            className="text-ui font-semibold tracking-[0.15em] uppercase mb-8"
            style={{ fontSize: 'clamp(0.7rem,2vw,0.85rem)', color: 'rgba(232,184,75,0.6)' }}
          >
            Technical Fest
          </p>

          {/* Countdown */}
          <div className="w-full max-w-sm mb-8">
            <Countdown />
          </div>

          {/* Event meta */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2" style={{ color: '#F2EEE4' }}>
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-ui font-semibold">08–09 October 2026</span>
            </div>
            <span className="hidden sm:block w-px h-4" style={{ background: '#1E1E28' }} aria-hidden="true" />
            <div className="flex items-center gap-2 text-center sm:text-left" style={{ color: '#F2EEE4' }}>
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-ui font-medium" style={{ color: '#7A7A88' }}>
                Academic Block–1, CSE, SOET · DRIEMS University
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              id="hero-explore-btn"
              onClick={() => { navigate('/events'); window.scrollTo({ top: 0 }); }}
              className="btn btn-gold btn-full"
            >
              Explore Events
            </button>
            <a
              id="hero-register-btn"
              href={REGISTER_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-full"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About Snapshot ───────────────────────────────────────────
function AboutSnapshot() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const navigate = useNavigate();

  return (
    <section ref={ref} className="section border-t" style={{ borderColor: '#1E1E28' }} aria-labelledby="about-snapshot-heading">
      <div className="container">
        <div className="reveal">
          <span className="section-label">About the Fest</span>
          <h2 id="about-snapshot-heading" className="section-heading mb-4">
            What is YANTRIKA 2026?
          </h2>
        </div>
        <div className="reveal" style={{ transitionDelay: '80ms' }}>
          <p className="text-[#7A7A88] leading-relaxed max-w-2xl mb-5" style={{ fontSize: '0.95rem' }}>
            YANTRIKA 2026 is a university-level techno-cultural fest organized by the{' '}
            <strong className="text-[#F2EEE4] font-semibold">Department of Computer Science & Engineering</strong>,{' '}
            School of Engineering & Technology, DRIEMS University. The fest brings together students to
            participate in technical challenges, coding competitions, innovation activities, academic
            presentations, gaming, and cultural events.
          </p>
          <button
            onClick={() => { navigate('/about'); window.scrollTo({ top: 0 }); }}
            className="btn btn-gold-outline"
            style={{ minHeight: '42px', padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}
          >
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Categories ───────────────────────────────────────────────
function CategoriesSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const navigate = useNavigate();

  return (
    <section ref={ref} className="section border-t" style={{ borderColor: '#1E1E28', background: '#111115' }} aria-labelledby="categories-heading">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Categories</span>
          <h2 id="categories-heading" className="section-heading mb-6">Event Categories</h2>
        </div>
        <div className="category-grid">
          {categories.map((cat, i) => {
            const cfg = categoryColors[cat];
            return (
              <button
                key={cat}
                className="reveal card text-left p-4 cursor-pointer bg-transparent border-none w-full group"
                style={{ transitionDelay: `${i * 50}ms`, background: '#13131A', border: `1px solid #1E1E28`, borderRadius: '6px' }}
                onClick={() => { navigate('/events'); window.scrollTo({ top: 0 }); }}
                aria-label={`View ${cat} events`}
              >
                <span className="block text-2xl mb-2" role="img" aria-hidden="true">{categoryIcons[cat]}</span>
                <p
                  className="text-xs font-semibold leading-snug transition-colors duration-200 group-hover:text-[#F2EEE4]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: cfg.text }}
                >
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

// ── Featured Events ──────────────────────────────────────────
function FeaturedEvents() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const navigate = useNavigate();

  const featured = events.filter((e) => featuredEventIds.includes(e.id));

  return (
    <section ref={ref} className="section border-t" style={{ borderColor: '#1E1E28' }} aria-labelledby="featured-heading">
      <div className="container">
        <div className="reveal flex items-end justify-between mb-6 gap-4">
          <div>
            <span className="section-label">Spotlight</span>
            <h2 id="featured-heading" className="section-heading">Featured Events</h2>
          </div>
          <button
            onClick={() => { navigate('/events'); window.scrollTo({ top: 0 }); }}
            className="text-ui text-xs font-semibold tracking-wide bg-transparent border-none cursor-pointer flex-shrink-0"
            style={{ color: '#E8B84B' }}
          >
            View All →
          </button>
        </div>

        <div className="events-grid">
          {featured.map((event, i) => {
            const cfg = categoryColors[event.category];
            return (
              <article
                key={event.id}
                className="reveal event-card"
                style={{ transitionDelay: `${i * 70}ms` }}
                aria-labelledby={`featured-${event.id}-name`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="text-[2.5rem] leading-none font-black"
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
                  <h3
                    id={`featured-${event.id}-name`}
                    className="font-black text-lg text-[#F2EEE4] leading-tight mb-0.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {event.name}
                  </h3>
                  <p className="text-ui text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>
                    {event.subtitle}
                  </p>
                </div>

                {/* Desc */}
                <p className="text-sm leading-relaxed flex-grow" style={{ color: '#7A7A88' }}>
                  {event.description}
                </p>

                {/* Meta */}
                <div className="flex gap-4 pt-2 border-t" style={{ borderColor: '#1E1E28' }}>
                  <div>
                    <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Team</p>
                    <p className="text-ui text-xs font-semibold text-[#F2EEE4]">{event.teamSize}</p>
                  </div>
                  <div>
                    <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>Fee</p>
                    <p className="text-ui text-xs font-semibold" style={{ color: '#E8B84B' }}>{event.fee}</p>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => { navigate(`/events/${event.id}`); window.scrollTo({ top: 0 }); }}
                  className="btn btn-ghost w-full"
                  style={{ minHeight: '44px', fontSize: '0.72rem' }}
                  aria-label={`View details for ${event.name}`}
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

// ── Final CTA ────────────────────────────────────────────────
function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      className="section border-t"
      style={{ borderColor: '#1E1E28', background: '#111115' }}
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <div className="reveal text-center max-w-lg mx-auto">
          <span className="section-label justify-center">Join Us</span>
          <h2 id="cta-heading" className="section-heading mb-4">Ready to Compete?</h2>
          <p className="text-[#7A7A88] text-sm leading-relaxed mb-8">
            Register for YANTRIKA 2026 through the official registration form. Choose your event and compete with the best.
          </p>
          <a
            id="home-cta-register-btn"
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ minHeight: '52px', padding: '0.875rem 2.5rem', fontSize: '0.85rem', width: '100%', maxWidth: '320px' }}
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Home Page ────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="page-enter page-body">
      <Hero />
      <AboutSnapshot />
      <CategoriesSection />
      <FeaturedEvents />
      <FinalCTA />
    </div>
  );
}
