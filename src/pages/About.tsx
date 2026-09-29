import { useNavigate } from 'react-router-dom';
import { categories, categoryColors, categoryIcons } from '../data/events';
import { INSTAGRAM_URL, CONTACT_EMAIL, CONTACT_PHONE } from '../config';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="page-enter page-body">
      {/* Header */}
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
          <span className="section-label">About</span>
          <h1 className="section-heading mb-2">YANTRIKA 2026</h1>
          <p className="text-[#7A7A88] text-sm">Technical Fest · DRIEMS University</p>
        </div>
      </div>

      <div className="container py-10">
        <div className="max-w-3xl">

          {/* About text */}
          <section className="mb-10" aria-labelledby="about-desc-heading">
            <h2 id="about-desc-heading" className="text-ui text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#4A4A58' }}>
              About the Fest
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#7A7A88' }}>
              <p>
                <strong className="text-[#F2EEE4] font-semibold">YANTRIKA 2026</strong> is a university-level techno-cultural fest organized by the{' '}
                <strong className="text-[#F2EEE4] font-medium">Department of Computer Science & Engineering</strong>,
                School of Engineering & Technology, DRIEMS University.
              </p>
              <p>
                The fest brings together students to participate in technical challenges, coding competitions,
                innovation activities, academic presentations, gaming, and cultural events.
              </p>
              <p>
                From robotics and debugging to technical presentations, creative competitions, gaming, photography,
                food, and performances — YANTRIKA 2026 provides a platform for students to compete, create,
                collaborate, and showcase their skills.
              </p>
            </div>
          </section>

          <hr className="gold-divider mb-10" />

          {/* Organized by */}
          <section className="mb-10" aria-labelledby="organizer-heading">
            <h2 id="organizer-heading" className="text-ui text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#4A4A58' }}>
              Organized By
            </h2>
            <div
              className="rounded-md border p-5 sm:p-6"
              style={{ background: '#13131A', borderColor: '#1E1E28' }}
            >
              <p className="font-black text-xl text-[#F2EEE4] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                YANTRIKA 2026
              </p>
              <div className="space-y-0.5 text-sm" style={{ color: '#7A7A88' }}>
                <p>Department of Computer Science & Engineering</p>
                <p>School of Engineering & Technology</p>
                <p className="font-semibold text-[#F2EEE4]">DRIEMS University</p>
              </div>
            </div>
          </section>

          {/* Event details */}
          <section className="mb-10" aria-labelledby="event-details-heading">
            <h2 id="event-details-heading" className="text-ui text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#4A4A58' }}>
              Event Information
            </h2>
            <div className="rounded-md border overflow-hidden" style={{ borderColor: '#1E1E28', background: '#13131A' }}>
              {[
                {
                  icon: <svg className="w-4 h-4" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                  label: 'Date',
                  value: '08–09 October 2026',
                },
                {
                  icon: <svg className="w-4 h-4" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  label: 'Venue',
                  value: 'Academic Block–1, CSE, SOET · DRIEMS University',
                },
                {
                  icon: <svg className="w-4 h-4" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  label: 'Total Events',
                  value: '12 Competitions',
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="info-row px-5">
                  {icon}
                  <div>
                    <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>{label}</p>
                    <p className="text-ui text-sm font-semibold text-[#F2EEE4]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mb-10" aria-labelledby="categories-about-heading">
            <h2 id="categories-about-heading" className="text-ui text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#4A4A58' }}>
              Event Categories
            </h2>
            <div className="category-grid">
              {categories.map((cat) => {
                const cfg = categoryColors[cat];
                return (
                  <button
                    key={cat}
                    className="text-left p-4 rounded-sm border cursor-pointer bg-transparent transition-colors duration-200 group"
                    style={{ background: '#13131A', borderColor: '#1E1E28' }}
                    onClick={() => { navigate('/events'); window.scrollTo({ top: 0 }); }}
                    aria-label={`View ${cat} events`}
                  >
                    <span className="block text-xl mb-2" role="img" aria-hidden="true">{categoryIcons[cat]}</span>
                    <p className="text-ui text-xs font-semibold leading-snug" style={{ color: cfg.text }}>
                      {cat}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Contact */}
          <section aria-labelledby="contact-about-heading">
            <h2 id="contact-about-heading" className="text-ui text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#4A4A58' }}>
              Contact & Social
            </h2>
            <div className="rounded-md border overflow-hidden" style={{ borderColor: '#1E1E28', background: '#13131A' }}>
              {[
                {
                  label: 'Email',
                  value: CONTACT_EMAIL,
                  href: CONTACT_EMAIL.startsWith('PASTE') ? undefined : `mailto:${CONTACT_EMAIL}`,
                },
                {
                  label: 'Phone',
                  value: CONTACT_PHONE,
                  href: CONTACT_PHONE.startsWith('PASTE') ? undefined : `tel:${CONTACT_PHONE}`,
                },
                {
                  label: 'Instagram',
                  value: '@driems.yantrika',
                  href: INSTAGRAM_URL,
                },
              ].map(({ label, value, href }) => (
                <div key={label} className="info-row px-5">
                  <div>
                    <p className="text-ui text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: '#4A4A58' }}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-ui text-sm font-semibold transition-colors duration-200"
                        style={{ color: '#E8B84B' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-ui text-sm font-semibold text-[#F2EEE4]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
