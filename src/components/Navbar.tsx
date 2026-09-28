import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Bell } from 'lucide-react';
import NotificationPanel from './NotificationPanel';
import { notifications } from '../data/notifications';

const NAV_LINKS = [
  { name: 'HOME',     path: '/' },
  { name: 'EVENTS',   path: '/events' },
  { name: 'SCHEDULE', path: '/schedule' },
  { name: 'ABOUT',    path: '/about' },
  { name: 'REGISTER', path: '/events' },
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
          scrolled || indexOpen ? 'bg-paper/90 backdrop-blur-md border-b border-rule' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-[64px] flex items-center justify-between">

          {/* Left: wordmark */}
          <Link to="/" className="flex items-center gap-3" aria-label="YANTRIKA 2026 Home">
            <span className="font-display text-xl tracking-tight text-ink">YANTRIKA<span className="text-orange">26</span></span>
          </Link>

          {/* Center/Right: desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.slice(0, 4).map(link => (
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

          {/* Right: actions (Notification & INDEX) */}
          <div className="flex items-center gap-4">
            {/* Notification bell */}
            <button
              onClick={() => setNotifOpen(true)}
              className="relative p-2 text-muted hover:text-ink transition-colors flex items-center gap-2"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="hidden md:inline font-mono text-[10px] tracking-widest mt-0.5">NOTIFICATIONS</span>
              {unread > 0 && (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange rounded-full" />
              )}
            </button>

            {/* INDEX button */}
            <button
              onClick={() => setIndexOpen(true)}
              data-cursor-menu
              className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-ink border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
              aria-label="Open navigation index"
            >
              INDEX
            </button>
          </div>
        </div>
      </header>

      {/* ─── Full-screen INDEX overlay ────────────────── */}
      <AnimatePresence>
        {indexOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#0F0F0D] flex flex-col"
          >
            {/* Overlay header */}
            <div className="flex justify-between items-center px-6 md:px-10 h-[64px] border-b border-white/10">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/40">
                NAVIGATION INDEX // SYS.ACTIVE
              </span>
              <button
                onClick={() => setIndexOpen(false)}
                className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                aria-label="Close navigation"
              >
                CLOSE <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-6 md:px-16 max-w-screen-xl mx-auto w-full">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path + link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    className="flex items-end gap-6 py-4 md:py-6 border-b border-white/5 group"
                    onClick={() => setIndexOpen(false)}
                  >
                    <span className="font-mono text-[12px] md:text-[14px] text-white/20 group-hover:text-orange transition-colors w-8 mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-5xl md:text-7xl lg:text-8xl text-white group-hover:text-orange transition-colors leading-none tracking-tight">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Overlay footer */}
            <div className="px-6 md:px-16 py-8 border-t border-white/10 max-w-screen-xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-4">
                {['TECH', 'CULTURAL', 'GAMING'].map((cat, idx) => (
                  <div key={cat} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-blue-600' : idx === 1 ? 'bg-pink-600' : 'bg-red-600'}`} />
                    <span className="font-mono text-[10px] tracking-widest text-white/30">{cat}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
                08—09 OCT 2026 · DRIEMS UNIVERSITY · CSE
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
