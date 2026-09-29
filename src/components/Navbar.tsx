import { useState, useEffect } from 'react';
import { REGISTER_NOW_URL } from '../config';

const navLinks = [
  { label: 'Home',   href: '#home'   },
  { label: 'About',  href: '#about'  },
  { label: 'Events', href: '#events' },
  { label: 'Rules',  href: '#rules'  },
  { label: 'Contact',href: '#contact'},
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (href: string) => {
    closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1E1E1E]' : 'bg-transparent'
        }`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 md:h-18">

            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="flex flex-col leading-none group"
              aria-label="YANTRIKA 2026 — Home"
            >
              <span className="text-lg font-bold tracking-[0.12em] text-[#F0EDE6] uppercase group-hover:text-[#C8A96A] transition-colors duration-200">
                YANTRIKA
              </span>
              <span className="text-[0.6rem] font-medium tracking-[0.2em] text-[#C8A96A] uppercase">
                2026
              </span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm font-medium tracking-wide text-[#A0A09A] hover:text-[#F0EDE6] transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8A96A] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                id="navbar-register-btn"
                href={REGISTER_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-5 py-2.5"
              >
                Register Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-[#F0EDE6] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#F0EDE6] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#F0EDE6] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-md flex flex-col transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="section-container flex flex-col flex-grow justify-center gap-2 pt-20">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="block py-4 border-b border-[#1E1E1E] text-2xl font-semibold tracking-wide text-[#F0EDE6] hover:text-[#C8A96A] transition-colors duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-8">
            <a
              href={REGISTER_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-primary w-full text-center justify-center py-4 text-sm"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
