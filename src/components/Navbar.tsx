import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled 
        ? "bg-white/90 backdrop-blur-md border-[#E2E8F0] shadow-sm" 
        : "bg-white border-[#E2E8F0]"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="YANTRIKA 2026 Logo" className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-semibold transition-colors duration-200",
                    location.pathname === link.path 
                      ? "text-[#087BFF]" 
                      : "text-[#64748B] hover:text-[#0B1220]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/events"
              className="bg-[#087BFF] text-white px-6 py-3 rounded-[10px] text-sm font-semibold hover:bg-[#0667D9] hover:-translate-y-[2px] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(8,123,255,0.20)]"
            >
              REGISTER NOW
            </Link>
          </div>

          {/* Mobile Right Action - Bell instead of Hamburger */}
          <div className="md:hidden flex items-center">
            <button className="relative p-2 text-[#0B1220] hover:text-[#087BFF] transition-colors focus:outline-none">
              <Bell className="h-6 w-6 stroke-[1.5]" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
