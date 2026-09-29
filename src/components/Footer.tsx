import { useNavigate } from 'react-router-dom';
import { REGISTER_NOW_URL, INSTAGRAM_URL } from '../config';

const links = [
  { label: 'Home',     path: '/' },
  { label: 'Events',   path: '/events' },
  { label: 'Rules',    path: '/rules' },
  { label: 'About',    path: '/about' },
  { label: 'Register', path: REGISTER_NOW_URL, ext: true },
];

export default function Footer() {
  const nav = useNavigate();

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: '#08080E' }} role="contentinfo">
      <div className="container" style={{ paddingTop: '2.75rem', paddingBottom: '2.75rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.25rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.25rem' }}>

            {/* Brand */}
            <div>
              <p className="ui" style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--tx)', marginBottom: '0.25rem' }}>
                YANTRIKA
              </p>
              <p className="ui" style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
                2026 · Technical Fest
              </p>
              <p className="ui" style={{ fontSize: '0.75rem', color: 'var(--tx-3)', lineHeight: 1.7 }}>
                08–09 October 2026<br />
                Dept. of CSE · SOET<br />
                DRIEMS University
              </p>
            </div>

            {/* Nav */}
            <div>
              <p className="ui" style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '1rem' }}>
                Navigation
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }} role="list">
                {links.map(l => (
                  <li key={l.label}>
                    {l.ext ? (
                      <a href={l.path} target="_blank" rel="noopener noreferrer"
                        className="ui" style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--tx-2)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--tx-2)')}
                      >
                        {l.label}
                        <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <button onClick={() => { nav(l.path); window.scrollTo({ top: 0 }); }}
                        className="ui bg-transparent border-none cursor-pointer p-0"
                        style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--tx-2)', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--tx)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--tx-2)')}
                      >
                        {l.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instagram */}
          <div>
            <p className="ui" style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)', marginBottom: '0.875rem' }}>
              Follow Us
            </p>
            <a id="footer-ig" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
              aria-label="Follow on Instagram"
            >
              <span style={{ width: '36px', height: '36px', borderRadius: '4px', border: '1px solid var(--border-lt)', background: 'var(--bg-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'border-color 0.2s ease' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-lt)')}
              >
                <svg width="16" height="16" fill="var(--tx-2)" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
              <span className="ui" style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--tx-2)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--tx-2)')}
              >
                @driems.yantrika
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          <p className="ui" style={{ fontSize: '0.72rem', color: 'var(--tx-3)' }}>© 2026 YANTRIKA 2026. All rights reserved.</p>
          <p className="ui" style={{ fontSize: '0.7rem', color: 'var(--tx-3)' }}>Dept. of CSE · SOET · DRIEMS University</p>
        </div>
      </div>
    </footer>
  );
}
