import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { REGISTER_NOW_URL } from '../config';

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { l: 'Home',   p: '/'       },
    { l: 'Events', p: '/events' },
    { l: 'Rules',  p: '/rules'  },
    { l: 'About',  p: '/about'  },
  ];

  const active = (p: string) => p === '/' ? pathname === '/' : pathname.startsWith(p);

  return (
    <header className={`top-nav ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container w-full">
        <nav className="flex items-center justify-between h-full">

          {/* ── Brand ── */}
          <button
            onClick={() => navigate('/')}
            className="flex flex-col leading-none bg-transparent border-none cursor-pointer"
            aria-label="Home"
          >
            <span className="ui font-bold tracking-[0.14em] uppercase" style={{ fontSize: '0.9rem', color: 'var(--tx)' }}>
              YANTRIKA
            </span>
            <span className="ui font-bold tracking-[0.3em] uppercase" style={{ fontSize: '0.52rem', color: 'var(--gold)' }}>
              2026 · TECHNICAL FEST
            </span>
          </button>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {links.map(({ l, p }) => (
              <li key={p}>
                <button
                  onClick={() => navigate(p)}
                  className="ui bg-transparent border-none cursor-pointer relative"
                  style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', color: active(p) ? 'var(--gold)' : 'var(--tx-2)', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => { if (!active(p)) (e.target as HTMLElement).style.color = 'var(--tx)'; }}
                  onMouseLeave={e => { if (!active(p)) (e.target as HTMLElement).style.color = 'var(--tx-2)'; }}
                  aria-current={active(p) ? 'page' : undefined}
                >
                  {l}
                  {active(p) && <span style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '1px', background: 'var(--gold)' }} />}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Register CTA ── */}
          <a
            id="topnav-register"
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold hidden md:inline-flex"
            style={{ minHeight: '36px', padding: '0.45rem 1.25rem', fontSize: '0.72rem' }}
          >
            Register Now
          </a>

          {/* Mobile: just DRIEMS label */}
          <span className="md:hidden ui" style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-3)' }}>
            DRIEMS
          </span>
        </nav>
      </div>
    </header>
  );
}
