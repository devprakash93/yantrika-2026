import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#07111F] pt-20 pb-10 border-t border-[#0B1F36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-4">
            <Link to="/" className="flex items-center mb-6">
              {/* Note: The logo might need a white version if the current one is dark, but the user provided a metallic one which should look fine on dark. */}
              <img src="/logo.png" alt="YANTRIKA 2026 Logo" className="h-10 w-auto opacity-90" />
            </Link>
            <p className="text-[#CBD5E1]/70 text-sm mb-8 leading-relaxed pr-4 font-medium">
              Organized by the Department of Computer Science and Engineering, School of Engineering & Technology, DRIEMS University.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h3 className="font-display font-bold text-white uppercase tracking-widest text-sm mb-6">
              EXPLORE
            </h3>
            <ul className="space-y-4 text-sm font-medium text-[#CBD5E1]">
              <li><Link to="/" className="hover:text-[#00C8FF] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#00C8FF] transition-colors">About</Link></li>
              <li><Link to="/schedule" className="hover:text-[#00C8FF] transition-colors">Schedule</Link></li>
              <li><Link to="/gallery" className="hover:text-[#00C8FF] transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-[#00C8FF] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display font-bold text-white uppercase tracking-widest text-sm mb-6">
              EVENTS
            </h3>
            <ul className="space-y-4 text-sm font-medium text-[#CBD5E1]">
              <li><Link to="/events?category=Technical" className="hover:text-[#00C8FF] transition-colors">Technical</Link></li>
              <li><Link to="/events?category=Cultural" className="hover:text-[#00C8FF] transition-colors">Cultural</Link></li>
              <li><Link to="/events?category=Gaming" className="hover:text-[#00C8FF] transition-colors">Gaming</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="font-display font-bold text-white uppercase tracking-widest text-sm mb-6">
              CONNECT
            </h3>
            <ul className="space-y-4 text-sm font-medium text-[#CBD5E1] mb-6">
              <li><a href="#" className="hover:text-[#00C8FF] transition-colors flex items-center"><ExternalLink className="w-4 h-4 mr-3" /> Instagram</a></li>
              <li><a href="#" className="hover:text-[#00C8FF] transition-colors flex items-center"><ExternalLink className="w-4 h-4 mr-3" /> LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#00C8FF] transition-colors flex items-center"><ExternalLink className="w-4 h-4 mr-3" /> YouTube</a></li>
              <li><Link to="/contact" className="hover:text-[#00C8FF] transition-colors block pt-2">Contact Us &rarr;</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-[#CBD5E1]/50 text-center md:text-left">
            &copy; 2026 YANTRIKA<br className="md:hidden" />
            <span className="hidden md:inline mx-2">|</span>
            DRIEMS UNIVERSITY
          </p>
        </div>
      </div>
    </footer>
  );
}
