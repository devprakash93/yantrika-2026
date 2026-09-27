import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
            {/* We're using a dark logo for the white navbar. Assuming the logo file is suitable or needs invert. Since they provided a metallic logo, we'll keep it as is, but scale it appropriately. */}
            <img src="/logo.png" alt="YANTRIKA 2026 Logo" className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0B1220] p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] shadow-lg absolute w-full left-0">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-semibold transition-all",
                  location.pathname === link.path
                    ? "bg-[#087BFF]/10 text-[#087BFF]"
                    : "text-[#64748B] hover:bg-[#F5F8FC] hover:text-[#0B1220]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/events"
              className="flex items-center justify-center w-full mt-4 bg-[#087BFF] text-white px-4 py-3 rounded-[10px] text-sm font-semibold shadow-sm"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
