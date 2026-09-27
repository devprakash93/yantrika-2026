import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
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
        ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
        : "bg-transparent border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <img src="/logo.png" alt="YANTRIKA 2026 Logo" className="h-12 w-auto drop-shadow-[0_0_15px_rgba(14,165,233,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all duration-500" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-300",
                    location.pathname === link.path 
                      ? "text-primary bg-primary/10 shadow-[inset_0_-2px_0_rgba(14,165,233,1)]" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/events"
              className="group flex items-center bg-primary/10 border border-primary/50 text-primary px-6 py-2.5 rounded-lg font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-300"
            >
              <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" /> Initialize
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl absolute w-full left-0">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-4 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all",
                  location.pathname === link.path
                    ? "bg-primary/20 text-primary border border-primary/20"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/events"
              className="flex items-center justify-center w-full mt-6 bg-primary/20 border border-primary/50 text-primary px-4 py-4 rounded-xl font-black uppercase tracking-widest shadow-[0_0_15px_rgba(14,165,233,0.2)]"
            >
              <Zap className="w-4 h-4 mr-2" /> Initialize Registration
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
