import { useEffect, useRef } from 'react';
import { RULES_URL } from '../config';

export default function Rules() {
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
      id="rules"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-[#1A1A1A]"
      aria-labelledby="rules-heading"
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">

          <div className="reveal">
            <span className="gold-line mx-auto" aria-hidden="true" />
            <p
              className="text-[0.65rem] font-semibold tracking-[0.25em] text-[#C8A96A] uppercase mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Guidelines
            </p>
            <h2
              id="rules-heading"
              className="text-4xl md:text-5xl font-black leading-tight text-[#F0EDE6] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Rules &<br />Regulations
            </h2>
          </div>

          <div className="reveal mt-4" style={{ transitionDelay: '100ms' }}>
            {/* Main card */}
            <div className="border border-[#C8A96A]/30 rounded-sm p-8 md:p-12 bg-[#0E0E0E] text-left">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-sm bg-[#C8A96A]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C8A96A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-[#F0EDE6] mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Official Rules & Regulations
                  </h3>
                  <p className="text-sm text-[#606060]">YANTRIKA 2026 · All Events</p>
                </div>
              </div>

              <p className="text-[#A0A09A] text-sm leading-relaxed mb-8">
                Check the official rules and guidelines before registering. The document contains detailed
                information about eligibility, competition format, judging criteria, and event-specific
                regulations for all 12 competitions.
              </p>

              <a
                id="view-rules-btn"
                href={RULES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm py-3.5"
                aria-label="View official Rules and Regulations document"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                View Rules & Regulations
              </a>
            </div>
          </div>

          {/* Note */}
          <div className="reveal mt-6" style={{ transitionDelay: '200ms' }}>
            <p className="text-xs text-[#505050] text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              All participants are expected to read and follow the rules before the event.
              Violations may lead to disqualification.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
