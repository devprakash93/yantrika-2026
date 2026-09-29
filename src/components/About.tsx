import { useEffect, useRef } from 'react';

const highlights = [
  { icon: '⚙️', label: 'Robotics & Hardware' },
  { icon: '💻', label: 'Coding Competitions' },
  { icon: '💡', label: 'Innovation Challenges' },
  { icon: '📋', label: 'Academic Presentations' },
  { icon: '🎮', label: 'Gaming Events' },
  { icon: '🎭', label: 'Cultural Events' },
];

export default function About() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-[#1A1A1A]"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — Text */}
          <div>
            <div className="reveal">
              <span className="gold-line" aria-hidden="true" />
              <p
                className="text-[0.65rem] font-semibold tracking-[0.25em] text-[#C8A96A] uppercase mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                About the Fest
              </p>
              <h2
                id="about-heading"
                className="text-4xl md:text-5xl font-black leading-tight mb-6 text-[#F0EDE6]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What is<br />YANTRIKA 2026?
              </h2>
            </div>

            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <p className="text-[#A0A09A] text-base leading-relaxed mb-5">
                <strong className="text-[#F0EDE6] font-semibold">YANTRIKA 2026</strong> is a university-level techno-cultural fest organized by the{' '}
                <strong className="text-[#F0EDE6] font-medium">Department of Computer Science & Engineering</strong>,{' '}
                School of Engineering & Technology, DRIEMS University.
              </p>
              <p className="text-[#A0A09A] text-base leading-relaxed mb-5">
                The fest brings together students to participate in technical challenges, coding competitions,
                innovation activities, academic presentations, gaming, and cultural events.
              </p>
              <p className="text-[#A0A09A] text-base leading-relaxed">
                From robotics and debugging to technical presentations, creative competitions, gaming, photography,
                food, and performances — YANTRIKA 2026 provides a platform for students to compete, create,
                collaborate, and showcase their skills.
              </p>
            </div>

            {/* Key info */}
            <div className="reveal mt-8 pt-8 border-t border-[#1E1E1E] grid grid-cols-2 gap-4" style={{ transitionDelay: '200ms' }}>
              <div>
                <p className="text-xs text-[#606060] uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Date</p>
                <p className="text-[#F0EDE6] font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>08–09 October 2026</p>
              </div>
              <div>
                <p className="text-xs text-[#606060] uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Venue</p>
                <p className="text-[#F0EDE6] font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Academic Block–1, CSE</p>
              </div>
              <div>
                <p className="text-xs text-[#606060] uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>University</p>
                <p className="text-[#F0EDE6] font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>DRIEMS University</p>
              </div>
              <div>
                <p className="text-xs text-[#606060] uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Events</p>
                <p className="text-[#F0EDE6] font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>12 Competitions</p>
              </div>
            </div>
          </div>

          {/* Right — Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="reveal border border-[#1E1E1E] rounded-sm p-5 hover:border-[#C8A96A]/50 transition-colors duration-300 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="block text-2xl mb-3" role="img" aria-hidden="true">{h.icon}</span>
                <p
                  className="text-xs font-semibold text-[#A0A09A] group-hover:text-[#F0EDE6] transition-colors duration-200 leading-snug"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {h.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
