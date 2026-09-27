import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src="/logo.png" alt="YANTRIKA 2026 Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Organized by Department of Computer Science and Engineering, School of Engineering & Technology, DRIEMS University.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">IG</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">FB</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LI</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">YT</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition-colors">Schedule</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/events?category=technical" className="hover:text-primary transition-colors">Technical Events</Link></li>
              <li><Link to="/events?category=cultural" className="hover:text-primary transition-colors">Cultural Events</Link></li>
              <li><Link to="/events?category=gaming" className="hover:text-primary transition-colors">Gaming & Esports</Link></li>
              <li><Link to="/events?category=robotics" className="hover:text-primary transition-colors">Robotics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>DRIEMS University Campus</li>
              <li>Tangi, Cuttack, Odisha</li>
              <li className="pt-2">
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  Get in touch &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; 2026 YANTRIKA — DRIEMS University. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/rules" className="hover:text-foreground transition-colors">Rules</Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
