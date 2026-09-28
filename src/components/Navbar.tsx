import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import NotificationPanel from './NotificationPanel';
import { notifications } from '../data/notifications';
import { Bell } from 'lucide-react';

const NAV_LINKS = [
  { name: 'HOME',     path: '/' },
  { name: 'EVENTS',   path: '/events' },
  { name: 'SCHEDULE', path: '/schedule' },
  { name: 'ABOUT',    path: '/about' },
  { name: 'CONTACT',  path: '/contact' },
];

export default function Navbar() {
  const [indexOpen, setIndexOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location = useLocation();

  const unread = notifications.filter(n => n.isNew).length;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close overlay on route change
  useEffect(() => { setIndexOpen(false); setNotifOpen(false); }, [location.pathname]);

  return (
    <>
      {/* ─── Main nav bar ─────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-rule' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-[64px] flex items-center justify-between">

          {/* Left: wordmark */}
          <Link to="/" className="flex items-center gap-3" aria-label="YANTRIKA 2026 Home">
            <img src="/logo.png" alt="YANTRIKA" className="h-8 w-auto" />
          </Link>

          {/* Center: desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-[11px] tracking-[0.18em] transition-colors ${
                  location.pathname === link.path
                    ? 'text-orange'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <button
              onClick={() => setNotifOpen(true)}
              className="relative p-2 text-muted hover:text-ink transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unread > 0 && (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange rounded-full" />
              )}
            </button>

            {/* Desktop register CTA */}
            <Link
              to="/events"
              data-cursor-register
              className="hidden md:inline-flex items-center gap-2 bg-ink text-paper font-mono text-[11px] tracking-widest px-5 py-2.5 hover:bg-orange transition-colors"
              aria-label="Register for events"
            >
              REGISTER
            </Link>

            {/* Mobile INDEX button */}
            <button
              onClick={() => setIndexOpen(true)}
              data-cursor-menu
              className="md:hidden font-mono text-[11px] tracking-[0.2em] text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors"
              aria-label="Open navigation index"
            >
              INDEX
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile full-screen INDEX overlay ────────────────── */}
      <AnimatePresence>
        {indexOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink flex flex-col"
          >
            {/* Overlay header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/40">
                NAVIGATION INDEX
              </span>
              <button
                onClick={() => setIndexOpen(false)}
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-baseline gap-6 py-5 border-b border-white/08 group"
                    onClick={() => setIndexOpen(false)}
                  >
                    <span className="font-mono text-[11px] text-white/30 group-hover:text-orange transition-colors w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-4xl text-white group-hover:text-orange transition-colors leading-none">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Overlay footer */}
            <div className="px-8 py-8">
              <Link
                to="/events"
                onClick={() => setIndexOpen(false)}
                className="w-full flex items-center justify-center bg-orange text-ink font-mono text-[11px] tracking-widest py-4 hover:opacity-90 transition-opacity"
              >
                REGISTER NOW
              </Link>
              <p className="font-mono text-[10px] text-white/20 text-center mt-4 tracking-widest">
                08—09 OCTOBER 2026 · DRIEMS UNIVERSITY
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Notification Panel ───────────────────────────────── */}
      <NotificationPanel isOpen={notifOpen} onClose={() => setNotifOpen(false)} />
    </>
  );
}
