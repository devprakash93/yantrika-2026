import { REGISTER_NOW_URL } from '../config';

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="YANTRIKA 2026 Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,169,106,0.06) 0%, transparent 70%)',
        }}
      />
      {/* Subtle top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, #0A0A0A, transparent)' }}
      />

      <div className="section-container relative z-10 flex flex-col items-center text-center pt-28 pb-20">

        {/* Overline */}
        <div className="animate-fade-up" style={{ animationDelay: '0ms', opacity: 0 }}>
          <span
            className="inline-block text-[0.65rem] font-semibold tracking-[0.25em] text-[#C8A96A] uppercase mb-5 px-3 py-1.5 border border-[#C8A96A]/30 rounded-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical Fest · DRIEMS University
          </span>
        </div>

        {/* Main Heading */}
        <div className="animate-fade-up" style={{ animationDelay: '100ms', opacity: 0 }}>
          <h1
            className="text-[clamp(3.5rem,12vw,8.5rem)] font-black leading-none tracking-[-0.02em] mb-4 gold-shimmer"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            YANTRIKA
          </h1>
          <p
            className="text-[clamp(1rem,4vw,2rem)] font-light tracking-[0.35em] text-[#A0A09A] uppercase mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            2026
          </p>
        </div>

        {/* Tagline */}
        <div className="animate-fade-up" style={{ animationDelay: '200ms', opacity: 0 }}>
          <p
            className="text-[0.8rem] font-semibold tracking-[0.3em] text-[#C8A96A]/80 uppercase mt-4 mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            EXPLORE &nbsp;·&nbsp; INNOVATE &nbsp;·&nbsp; COMPETE
          </p>
        </div>

        {/* Divider */}
        <hr className="gradient-rule w-24 mb-8 animate-fade-in" style={{ animationDelay: '250ms', opacity: 0 }} />

        {/* Event Meta */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-10 text-sm"
          style={{ animationDelay: '300ms', opacity: 0, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C8A96A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
            </svg>
            <span className="text-[#F0EDE6] font-medium tracking-wide">08–09 October 2026</span>
          </div>
          <span className="hidden sm:block w-px h-5 bg-[#2A2A2A]" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C8A96A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-[#F0EDE6] font-medium tracking-wide text-center sm:text-left">
              Academic Block–1, CSE, SOET · DRIEMS University
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center gap-4"
          style={{ animationDelay: '400ms', opacity: 0 }}
        >
          <a
            id="hero-explore-btn"
            href="#events"
            onClick={(e) => { e.preventDefault(); scrollTo('#events'); }}
            className="btn-primary text-sm px-8 py-3.5"
          >
            Explore Events
          </a>
          <a
            id="hero-register-btn"
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-8 py-3.5"
          >
            Register Now
          </a>
        </div>

        {/* Scroll cue */}
        <div
          className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          style={{ animationDelay: '800ms', opacity: 0 }}
          aria-hidden="true"
        >
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A0A09A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C8A96A]/50 to-transparent" />
        </div>

      </div>
    </section>
  );
}
