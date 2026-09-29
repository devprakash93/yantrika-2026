import { REGISTER_NOW_URL, INSTAGRAM_URL } from '../config';

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const footerLinks = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',   href: '#about'    },
  { label: 'Events',  href: '#events'   },
  { label: 'Rules',   href: '#rules'    },
  { label: 'Contact', href: '#contact'  },
  { label: 'Register',href: REGISTER_NOW_URL, external: true },
];

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      className="border-t border-[#1A1A1A] bg-[#060606]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10">

          {/* Brand column */}
          <div>
            <p
              className="text-xl font-bold tracking-[0.15em] text-[#F0EDE6] uppercase mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              YANTRIKA
            </p>
            <p
              className="text-xs font-semibold tracking-[0.25em] text-[#C8A96A] uppercase mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              2026
            </p>
            <p className="text-xs text-[#505050] leading-relaxed mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Technical Fest · 08–09 October 2026
            </p>
            <p className="text-xs text-[#505050] leading-relaxed">
              Department of Computer Science & Engineering<br />
              School of Engineering & Technology<br />
              DRIEMS University
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[0.6rem] font-semibold tracking-[0.2em] text-[#606060] uppercase mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#606060] hover:text-[#C8A96A] transition-colors duration-200 inline-flex items-center gap-1.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {link.label}
                      <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="text-sm text-[#606060] hover:text-[#F0EDE6] transition-colors duration-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <p
              className="text-[0.6rem] font-semibold tracking-[0.2em] text-[#606060] uppercase mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Follow Us
            </p>
            <a
              id="footer-instagram-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
              aria-label="Follow YANTRIKA 2026 on Instagram"
            >
              <span className="w-9 h-9 rounded-sm border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#C8A96A] transition-colors duration-200">
                <svg className="w-4 h-4 text-[#808080] group-hover:text-[#C8A96A] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
              <span className="text-sm text-[#808080] group-hover:text-[#C8A96A] transition-colors duration-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                @driems.yantrika
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A1A1A] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs text-[#404040]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            © {currentYear} YANTRIKA 2026. All rights reserved.
          </p>
          <p
            className="text-xs text-[#404040]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Dept. of CSE · SOET · DRIEMS University
          </p>
        </div>
      </div>
    </footer>
  );
}
