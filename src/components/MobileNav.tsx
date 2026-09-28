import { Link, useLocation } from 'react-router-dom';
import { Home, Ticket, CalendarClock, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'HOME',     path: '/',         icon: Home },
  { name: 'EVENTS',   path: '/events',   icon: Ticket },
  { name: 'SCHEDULE', path: '/schedule', icon: CalendarClock },
  { name: 'ABOUT',    path: '/about',    icon: Info },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-2 bg-paper border-t border-rule shadow-[0_-4px_16px_rgba(15,15,13,0.06)]"
      style={{ height: 68, paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {navItems.map((item) => {
        const isActive =
          location.pathname === item.path ||
          (item.path !== '/' && location.pathname.startsWith(item.path));

        return (
          <Link
            key={item.path}
            to={item.path}
            className="relative flex flex-col items-center justify-center h-full gap-1 flex-1 rounded-[12px]"
          >
            {/* Active highlight pill */}
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-x-1 top-2 bottom-2 rounded-[10px] bg-surface border border-rule shadow-sm"
                transition={{ type: 'spring', stiffness: 380, damping: 38 }}
              />
            )}

            <motion.div
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.18 }}
              className="relative z-10"
            >
              <item.icon
                className="h-[21px] w-[21px]"
                style={{
                  color: isActive ? '#FF4D00' : '#8C8C83',
                  strokeWidth: isActive ? 2.2 : 1.6,
                }}
              />
            </motion.div>

            <span
              className="relative z-10 text-[10px] font-mono tracking-widest leading-none mt-0.5"
              style={{ color: isActive ? '#FF4D00' : '#8C8C83' }}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
