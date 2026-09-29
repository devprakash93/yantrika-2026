import { useEffect, useRef } from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_URL } from '../config';

export default function Contact() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactItems = [
    {
      id: 'contact-venue',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: 'Venue',
      value: 'Academic Block–1, CSE, SOET\nDRIEMS University',
      href: null,
    },
    {
      id: 'contact-date',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
        </svg>
      ),
      label: 'Date',
      value: '08–09 October 2026',
      href: null,
    },
    {
      id: 'contact-email',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      id: 'contact-phone',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Contact',
      value: CONTACT_PHONE,
      href: `tel:${CONTACT_PHONE}`,
    },
    {
      id: 'contact-instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      label: 'Instagram',
      value: '@driems.yantrika',
      href: INSTAGRAM_URL,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-[#1A1A1A] bg-[#080808]"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left */}
          <div>
            <div className="reveal">
              <span className="gold-line" aria-hidden="true" />
              <p
                className="text-[0.65rem] font-semibold tracking-[0.25em] text-[#C8A96A] uppercase mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Get in Touch
              </p>
              <h2
                id="contact-heading"
                className="text-4xl md:text-5xl font-black leading-tight text-[#F0EDE6] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Us
              </h2>
              <p className="text-[#A0A09A] text-sm leading-relaxed mb-8 max-w-sm">
                For event-related queries, reach out through the contact details below or
                follow us on Instagram for updates and announcements.
              </p>
            </div>

            {/* Organizer card */}
            <div className="reveal border border-[#1E1E1E] rounded-sm p-6" style={{ transitionDelay: '100ms' }}>
              <p
                className="text-xs font-semibold text-[#C8A96A] tracking-widest uppercase mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Organized by
              </p>
              <h3 className="text-[#F0EDE6] font-bold text-base mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                YANTRIKA 2026
              </h3>
              <p className="text-[#808080] text-sm leading-relaxed">
                Department of Computer Science & Engineering<br />
                School of Engineering & Technology<br />
                DRIEMS University
              </p>
            </div>
          </div>

          {/* Right — Contact details */}
          <div className="flex flex-col gap-4">
            {contactItems.map(({ id, icon, label, value, href }, i) => (
              <div
                key={id}
                className="reveal flex items-start gap-4 border border-[#1A1A1A] rounded-sm p-5 hover:border-[#C8A96A]/40 transition-colors duration-300 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-[#C8A96A] flex-shrink-0 mt-0.5 group-hover:text-[#D4B87A] transition-colors duration-200">
                  {icon}
                </div>
                <div>
                  <p
                    className="text-[0.6rem] font-semibold tracking-widest text-[#505050] uppercase mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      id={id}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-[#F0EDE6] hover:text-[#C8A96A] transition-colors duration-200 font-medium"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      className="text-sm text-[#F0EDE6] font-medium whitespace-pre-line"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
