import { REGISTER_NOW_URL } from '../config';

export default function Register() {
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
          <span className="section-label">Registration</span>
          <h1 className="section-heading mb-2">Register for YANTRIKA 2026</h1>
          <p className="text-[#7A7A88] text-sm">08–09 October 2026 · Academic Block–1, DRIEMS University</p>
        </div>
      </div>

      <div className="container py-10">
        <div className="max-w-lg">

          <p className="text-sm leading-relaxed mb-8" style={{ color: '#7A7A88' }}>
            Choose your event and complete your registration through the official YANTRIKA 2026 registration form.
            All registrations are handled externally through Google Forms.
          </p>

          {/* How to register steps */}
          <div className="mb-8 space-y-4">
            {[
              { num: '01', title: 'Choose Your Event', desc: 'Browse all 12 competitions on the Events page and select the one that suits you.' },
              { num: '02', title: 'Open the Form', desc: 'Tap the Register Now button to open the official Google Form registration.' },
              { num: '03', title: 'Fill Your Details', desc: 'Complete all required fields in the form accurately.' },
              { num: '04', title: 'Show Up & Compete', desc: 'Arrive at Academic Block–1, CSE, SOET on 08–09 October 2026 and compete.' },
            ].map(({ num, title, desc }) => (
              <div
                key={num}
                className="flex gap-4 p-4 rounded-sm border"
                style={{ background: '#13131A', borderColor: '#1E1E28' }}
              >
                <span
                  className="text-2xl font-black leading-none flex-shrink-0"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#1E1E28' }}
                  aria-hidden="true"
                >
                  {num}
                </span>
                <div>
                  <p className="text-ui text-sm font-semibold text-[#F2EEE4] mb-1">{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#7A7A88' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            id="register-page-btn"
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold w-full"
            style={{ minHeight: '56px', fontSize: '0.9rem' }}
            aria-label="Open official YANTRIKA 2026 registration form"
          >
            Register Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>

          <p
            className="text-center text-xs mt-4"
            style={{ color: '#4A4A58', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            No account required · No payment on this website ·<br />
            Registration handled externally via Google Forms
          </p>
        </div>
      </div>
    </div>
  );
}
