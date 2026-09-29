import { useNavigate } from 'react-router-dom';
import { REGISTER_NOW_URL, INSTAGRAM_URL } from '../config';

const links = [
  { label: 'Home',     path: '/'         },
  { label: 'Events',   path: '/events'   },
  { label: 'Rules',    path: '/rules'    },
  { label: 'About',    path: '/about'    },
  { label: 'Register', path: REGISTER_NOW_URL, external: true },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      className="border-t"
      style={{ borderColor: '#1E1E28', background: '#060609' }}
      role="contentinfo"
    >
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <p
              className="text-ui text-base font-bold tracking-widest uppercase text-[#F2EEE4] mb-0.5"
            >
              YANTRIKA
            </p>
            <p
              className="text-ui text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: '#E8B84B' }}
            >
              2026
            </p>
            <p className="text-ui text-xs leading-relaxed" style={{ color: '#4A4A58' }}>
              Technical Fest · 08–09 October 2026<br />
              Dept. of CSE · SOET<br />
              DRIEMS University
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-ui text-[0.6rem] font-bold tracking-widest uppercase mb-4" style={{ color: '#4A4A58' }}>
              Navigation
            </p>
            <ul className="space-y-2.5" role="list">
              {links.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ui text-sm transition-colors duration-200 inline-flex items-center gap-1.5"
                      style={{ color: '#7A7A88' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#E8B84B')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#7A7A88')}
                    >
                      {l.label}
                      <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <button
                      onClick={() => { navigate(l.path); window.scrollTo({ top: 0 }); }}
                      className="text-ui text-sm bg-transparent border-none cursor-pointer transition-colors duration-200 p-0"
                      style={{ color: '#7A7A88' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#F2EEE4')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#7A7A88')}
                    >
                      {l.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-ui text-[0.6rem] font-bold tracking-widest uppercase mb-4" style={{ color: '#4A4A58' }}>
              Follow Us
            </p>
            <a
              id="footer-instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
              aria-label="Follow YANTRIKA 2026 on Instagram"
            >
              <span
                className="w-9 h-9 rounded-sm border flex items-center justify-center transition-colors duration-200 group-hover:border-[#E8B84B]"
                style={{ borderColor: '#1E1E28', background: '#13131A' }}
              >
                <svg className="w-4 h-4 transition-colors duration-200 group-hover:text-[#E8B84B]" style={{ color: '#7A7A88' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
              <span className="text-ui text-sm transition-colors duration-200 group-hover:text-[#E8B84B]" style={{ color: '#7A7A88' }}>
                @driems.yantrika
              </span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t flex flex-col sm:flex-row items-center justify-between gap-2 pt-6" style={{ borderColor: '#1E1E28' }}>
          <p className="text-ui text-xs" style={{ color: '#3A3A48' }}>
            © 2026 YANTRIKA 2026. All rights reserved.
          </p>
          <p className="text-ui text-xs" style={{ color: '#3A3A48' }}>
            Dept. of CSE · SOET · DRIEMS University
          </p>
        </div>
      </div>
    </footer>
  );
}
