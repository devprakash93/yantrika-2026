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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-3 bg-[#F5F8FC] border-t border-[#E2E8F0] shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
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
            className="relative flex flex-col items-center justify-center w-full h-full gap-1 rounded-[12px]"
          >
            {/* Active highlight pill */}
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-x-1 top-2 bottom-2 rounded-[10px] bg-white border border-[#E2E8F0] shadow-sm"
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
                  color: isActive ? '#087BFF' : '#94A3B8',
                  strokeWidth: isActive ? 2.2 : 1.6,
                }}
              />
            </motion.div>

            <span
              className="relative z-10 text-[10px] font-bold tracking-wide leading-none"
              style={{ color: isActive ? '#087BFF' : '#94A3B8' }}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
