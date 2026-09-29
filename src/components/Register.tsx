import { useEffect, useRef } from 'react';
import { REGISTER_NOW_URL } from '../config';

export default function Register() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="register"
      ref={sectionRef}
      className="py-24 md:py-36 border-t border-[#1A1A1A] relative overflow-hidden"
      aria-labelledby="register-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,169,106,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <div className="reveal">
            <span className="gold-line mx-auto" aria-hidden="true" />
            <p
              className="text-[0.65rem] font-semibold tracking-[0.25em] text-[#C8A96A] uppercase mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Join YANTRIKA 2026
            </p>
            <h2
              id="register-heading"
              className="text-4xl md:text-6xl font-black leading-tight mb-6 text-[#F0EDE6]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to<br />Compete?
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <p className="text-[#A0A09A] text-base leading-relaxed mb-10 max-w-lg mx-auto">
              Choose your event and register through the official YANTRIKA 2026 registration form.
              All registrations are handled externally through Google Forms.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <a
              id="main-register-cta-btn"
              href={REGISTER_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-12 py-4 inline-flex"
              aria-label="Open official YANTRIKA 2026 registration form"
            >
              Register Now
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Steps */}
          <div className="reveal mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left" style={{ transitionDelay: '300ms' }}>
            {[
              { step: '01', title: 'Choose Event', desc: 'Browse the 12 competitions and select what suits you.' },
              { step: '02', title: 'Fill the Form', desc: 'Open the official Google Form and fill in your details.' },
              { step: '03', title: 'Compete', desc: 'Arrive on 08–09 October 2026 and give your best.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="border border-[#1E1E1E] rounded-sm p-5 hover:border-[#C8A96A]/30 transition-colors duration-300">
                <span
                  className="block text-[2rem] font-black text-[#1E1E1E] leading-none mb-3"
                  aria-hidden="true"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step}
                </span>
                <p className="text-sm font-semibold text-[#F0EDE6] mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {title}
                </p>
                <p className="text-xs text-[#606060] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
