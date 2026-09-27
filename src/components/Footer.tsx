import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-4">
            <Link to="/" className="flex items-center mb-6">
              <img src="/logo.png" alt="YANTRIKA 2026 Logo" className="h-14 w-auto drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]" />
            </Link>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium pr-4">
              The ultimate techno-cultural festival. Organized by the Department of Computer Science and Engineering, School of Engineering & Technology, DRIEMS University.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h3 className="font-black text-white uppercase tracking-widest text-sm mb-6 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-primary" /> Navigation
            </h3>
            <ul className="space-y-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
              <li><Link to="/" className="hover:text-primary transition-colors">Home Base</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition-colors">Schedule</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <h3 className="font-black text-white uppercase tracking-widest text-sm mb-6 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-primary" /> Sectors
            </h3>
            <ul className="space-y-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
              <li><Link to="/events?category=technical" className="hover:text-primary transition-colors">Technical</Link></li>
              <li><Link to="/events?category=cultural" className="hover:text-primary transition-colors">Cultural</Link></li>
              <li><Link to="/events?category=gaming" className="hover:text-primary transition-colors">Esports</Link></li>
              <li><Link to="/events?category=robotics" className="hover:text-primary transition-colors">Robotics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="font-black text-white uppercase tracking-widest text-sm mb-6 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-primary" /> Communications
            </h3>
            <ul className="space-y-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
              <li className="text-gray-400">DRIEMS University Campus</li>
              <li className="text-gray-400">Tangi, Cuttack, Odisha</li>
              <li className="pt-4">
                <Link to="/contact" className="inline-flex items-center text-primary hover:text-white transition-colors bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 hover:border-primary/50">
                  Establish Link &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-gray-600 tracking-widest uppercase text-center md:text-left">
            &copy; 2026 YANTRIKA <span className="mx-2">|</span> DRIEMS UNIVERSITY SYSTEM
          </p>
          <div className="flex space-x-6 text-sm font-bold text-gray-600 uppercase tracking-widest">
            <Link to="/rules" className="hover:text-primary transition-colors">Directives</Link>
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
