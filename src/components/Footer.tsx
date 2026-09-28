import { Link } from 'react-router-dom';

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted">{children}</span>
);

const LINKS = [
  { label: 'Events',     path: '/events' },
  { label: 'Schedule',   path: '/schedule' },
  { label: 'About',      path: '/about' },
  { label: 'Contact',    path: '/contact' },
  { label: 'Register',   path: '/events' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-white/10">
      {/* Large wordmark */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-16 pb-8 border-b border-white/10">
        <p
          className="font-display text-paper/10 leading-none select-none"
          style={{ fontSize: 'clamp(64px, 12vw, 180px)', lineHeight: 0.85 }}
        >
          YANTRIKA<br />
          <span className="text-orange/20">2026</span>
        </p>
      </div>

      {/* Footer body */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Institution */}
        <div className="space-y-3">
          <Label>Organised By</Label>
          <div className="mt-3 space-y-1">
            <p className="font-grotesk text-sm font-semibold text-paper">DRIEMS UNIVERSITY</p>
            <p className="font-grotesk text-xs text-paper/50 leading-relaxed">
              Department of Computer Science and Engineering<br />
              School of Engineering & Technology
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <Label>Navigation</Label>
          <ul className="mt-3 space-y-2.5">
            {LINKS.map(link => (
              <li key={link.path + link.label}>
                <Link to={link.path} className="font-grotesk text-sm text-paper/50 hover:text-paper transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <Label>Festival</Label>
          <div className="mt-3 space-y-2.5">
            <p className="font-mono text-xs text-paper/40 tracking-widest">DATE</p>
            <p className="font-grotesk text-sm text-paper/70">08 — 09 October 2026</p>
            <p className="font-mono text-xs text-paper/40 tracking-widest mt-4">CONTACT</p>
            <p className="font-grotesk text-sm text-paper/70">yantrika@driems.ac.in</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-5 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3">
        <Label>© 2026 YANTRIKA — DRIEMS UNIVERSITY · ALL RIGHTS RESERVED</Label>
        <Label>CSE DEPT · SOE&T</Label>
      </div>
    </footer>
  );
}
