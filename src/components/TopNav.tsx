import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { REGISTER_NOW_URL } from '../config';

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home',   path: '/'       },
    { label: 'Events', path: '/events' },
    { label: 'Rules',  path: '/rules'  },
    { label: 'About',  path: '/about'  },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className={`top-nav ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container w-full">
        <nav className="flex items-center justify-between h-full">
          {/* Brand */}
          <button
            onClick={() => navigate('/')}
            className="flex flex-col leading-none group bg-transparent border-none cursor-pointer"
            aria-label="YANTRIKA 2026 Home"
          >
            <span
              className="font-bold tracking-widest text-base uppercase transition-colors duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: scrolled ? '#F2EEE4' : '#F2EEE4' }}
            >
              YANTRIKA
            </span>
            <span
              className="text-[0.55rem] font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#E8B84B' }}
            >
              2026
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {links.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer relative group ${
                    isActive(link.path) ? 'text-[#E8B84B]' : 'text-[#7A7A88] hover:text-[#F2EEE4]'
                  }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#E8B84B]" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Register CTA — desktop */}
          <a
            id="topnav-register-btn"
            href={REGISTER_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold hidden md:inline-flex"
            style={{ minHeight: '38px', padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}
          >
            Register Now
          </a>

          {/* Mobile: brand only, bottom nav handles navigation */}
          <span
            className="md:hidden text-[0.6rem] uppercase tracking-widest text-[#4A4A58]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            DRIEMS
          </span>
        </nav>
      </div>
    </header>
  );
}
