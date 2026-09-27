import { Link, useLocation } from 'react-router-dom';
import { Home, Ticket, CalendarClock, Search, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home',     path: '/',         icon: Home },
  { name: 'Events',   path: '/events',   icon: Ticket },
  { name: 'Schedule', path: '/schedule', icon: CalendarClock },
  { name: 'Search',   path: '/search',   icon: Search },
  { name: 'About',    path: '/about',    icon: Info },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-2"
      style={{
        background: '#07111F',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        height: 68,
        paddingBottom: 'env(safe-area-inset-bottom)',
        boxShadow: '0 -8px 32px rgba(0,0,0,0.35)',
      }}
    >
      {navItems.map((item) => {
        const isActive =
          location.pathname === item.path ||
          (item.path !== '/' && location.pathname.startsWith(item.path));

        return (
          <Link
            key={item.path}
            to={item.path}
            className="relative flex flex-col items-center justify-center w-full h-full gap-1"
          >
            {/* Active pill background */}
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-x-1 top-2 bottom-2 rounded-[12px]"
                style={{ backgroundColor: 'rgba(8,123,255,0.15)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              />
            )}

            <motion.div
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.18 }}
              className="relative z-10"
            >
              <item.icon
                className="h-[22px] w-[22px]"
                style={{
                  color: isActive ? '#087BFF' : '#64748B',
                  strokeWidth: isActive ? 2 : 1.5,
                }}
              />
            </motion.div>

            <span
              className="relative z-10 text-[10px] font-bold tracking-wide"
              style={{ color: isActive ? '#087BFF' : '#475569' }}
            >
              {item.name}
            </span>

            {/* Active dot indicator */}
            {isActive && (
              <motion.div
                layoutId="nav-dot"
                className="absolute bottom-1.5 w-1 h-1 rounded-full"
                style={{ backgroundColor: '#087BFF' }}
                transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
