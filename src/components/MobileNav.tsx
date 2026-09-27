import { Link, useLocation } from 'react-router-dom';
import { Home, Ticket, CalendarClock, Search, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Events', path: '/events', icon: Ticket },
  { name: 'Schedule', path: '/schedule', icon: CalendarClock },
  { name: 'Search', path: '/search', icon: Search },
  { name: 'About', path: '/about', icon: Info },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E2E8F0] pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.03)] h-[76px] flex items-center justify-between px-2">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));

        return (
          <Link
            key={item.path}
            to={item.path}
            className="relative flex flex-col items-center justify-center w-full h-full space-y-1"
          >
            <motion.div
              animate={{
                scale: isActive ? 1.08 : 1,
                color: isActive ? '#087BFF' : '#64748B'
              }}
              transition={{ duration: 0.2 }}
            >
              <item.icon className="h-6 w-6 stroke-[1.5]" />
            </motion.div>

            <motion.span
              animate={{ color: isActive ? '#087BFF' : '#64748B' }}
              className={cn(
                "text-[10px] font-semibold tracking-wide",
                isActive ? "text-[#087BFF]" : "text-[#64748B]"
              )}
            >
              {item.name}
            </motion.span>

            {isActive && (
              <motion.div
                layoutId="mobile-nav-indicator"
                className="absolute bottom-2 w-1 h-1 rounded-full bg-[#087BFF]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
