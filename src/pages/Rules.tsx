import { RULES_URL } from '../config';

export default function Rules() {
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
          <span className="section-label">Guidelines</span>
          <h1 className="section-heading mb-2">Rules & Regulations</h1>
          <p className="text-[#7A7A88] text-sm">YANTRIKA 2026 · All Events</p>
        </div>
      </div>

      <div className="container py-10">
        <div className="max-w-2xl">

          {/* Main card */}
          <div
            className="rounded-md border mb-6 overflow-hidden"
            style={{ background: '#13131A', borderColor: 'rgba(232,184,75,0.2)' }}
          >
            {/* Gold top bar */}
            <div style={{ height: '3px', background: 'linear-gradient(to right, transparent, #E8B84B, transparent)' }} aria-hidden="true" />

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(232,184,75,0.1)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <div>
                  <h2
                    className="text-ui text-base font-bold text-[#F2EEE4] mb-0.5"
                  >
                    Official Rules & Regulations
                  </h2>
                  <p className="text-ui text-xs" style={{ color: '#4A4A58' }}>YANTRIKA 2026 · All Events</p>
                </div>
              </div>

              <p className="leading-relaxed mb-6 text-sm" style={{ color: '#7A7A88' }}>
                Before registering, all participants are required to carefully read the official rules and
                regulations. The document contains complete information about:
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  'Eligibility criteria for all events',
                  'Competition format and match structure',
                  'Judging criteria and evaluation process',
                  'Code of conduct and participant responsibilities',
                  'Event-specific regulations for all 12 competitions',
                  'Disqualification conditions',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: '#7A7A88' }}
                  >
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#E8B84B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                id="view-rules-btn"
                href={RULES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold w-full"
                style={{ minHeight: '52px', fontSize: '0.85rem' }}
                aria-label="View official Rules and Regulations document"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                View Official Rules
              </a>
            </div>
          </div>

          {/* Note */}
          <p
            className="text-center text-xs"
            style={{ color: '#4A4A58', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            All participants are expected to read and adhere to the rules.<br />
            Violations may lead to disqualification from the event.
          </p>

        </div>
      </div>
    </div>
  );
}
