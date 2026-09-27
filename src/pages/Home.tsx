import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Gamepad2 } from 'lucide-react';
import { events } from '../data';
import Countdown from '../components/Countdown';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-[#0B1220]">
      
      {/* 4. HERO SECTION */}
      <section className="relative min-h-[90vh] bg-[#07111F] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Subtle technical background details */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-tech-grid opacity-5"></div>
          {/* Subtle gradient accent for the hero */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#087BFF]/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            <div className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-[#CBD5E1] uppercase mb-12 border border-[#CBD5E1]/20 rounded-full px-5 py-2 inline-block">
              DRIEMS UNIVERSITY TECHNICAL FEST 2026
            </div>
            
            <h1 className="mb-10 w-full flex justify-center">
              <span className="sr-only">YANTRIKA 2026</span>
              <img src="/logo.png" alt="YANTRIKA 2026 Logo" className="w-full max-w-3xl h-auto drop-shadow-xl" />
            </h1>
            
            <p className="text-sm md:text-base text-[#CBD5E1] font-medium mb-12 tracking-[0.2em] uppercase max-w-2xl mx-auto">
              WHERE TECHNOLOGY MEETS CREATIVITY
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mb-16 text-sm font-semibold tracking-widest text-white uppercase">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#64748B] text-xs">Date</span>
                <span>08 — 09 OCTOBER 2026</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-[#CBD5E1]/20"></div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#64748B] text-xs">Location</span>
                <span>DRIEMS UNIVERSITY</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/events" className="inline-flex items-center justify-center rounded-[10px] text-sm font-semibold transition-all bg-[#087BFF] text-white hover:bg-[#0667D9] hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(8,123,255,0.20)] h-[52px] px-8">
                EXPLORE EVENTS
              </Link>
              <Link to="/events" className="inline-flex items-center justify-center rounded-[10px] text-sm font-semibold transition-all border border-[#CBD5E1]/30 bg-transparent text-white hover:border-[#087BFF] hover:text-[#087BFF] h-[52px] px-8">
                REGISTER NOW
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. ABOUT SECTION */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-[#0B1220] mb-8 leading-[1.1] tracking-tight">
                MORE THAN A FEST.<br/>
                A PLATFORM TO CREATE.
              </h2>
              <p className="text-lg text-[#64748B] mb-12 leading-relaxed max-w-lg">
                YANTRIKA 2026 brings together thousands of students through intense technical challenges, breathtaking creative competitions, and competitive gaming across a sprawling university campus.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {[
                { number: "2", label: "DAYS" },
                { number: "30+", label: "EVENTS" },
                { number: "∞", label: "IDEAS" },
                { number: "1", label: "CAMPUS" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-5xl md:text-7xl font-display font-bold text-[#087BFF] mb-2">{stat.number}</span>
                  <span className="text-sm font-semibold tracking-widest text-[#64748B] uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. EVENT CATEGORY SECTION */}
      <section className="py-32 bg-[#F5F8FC] relative border-y border-[#E2E8F0]">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0B1220] tracking-tight">CHOOSE YOUR ARENA</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/events?category=Technical" className="group bg-white rounded-[16px] p-10 border border-[#E2E8F0] hover:border-[#087BFF] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <Code className="w-40 h-40" />
              </div>
              <div className="h-12 w-12 rounded-full bg-[#087BFF]/10 text-[#087BFF] flex items-center justify-center mb-8">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0B1220] mb-4">TECHNICAL</h3>
              <p className="text-[#64748B] font-medium">Build. Solve. Innovate.</p>
            </Link>

            <Link to="/events?category=Cultural" className="group bg-white rounded-[16px] p-10 border border-[#E2E8F0] hover:border-[#087BFF] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <Palette className="w-40 h-40" />
              </div>
              <div className="h-12 w-12 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center mb-8">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0B1220] mb-4">CULTURAL</h3>
              <p className="text-[#64748B] font-medium">Perform. Create. Express.</p>
            </Link>

            <Link to="/events?category=Gaming" className="group bg-white rounded-[16px] p-10 border border-[#E2E8F0] hover:border-[#087BFF] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <Gamepad2 className="w-40 h-40" />
              </div>
              <div className="h-12 w-12 rounded-full bg-[#111827]/5 text-[#111827] flex items-center justify-center mb-8">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0B1220] mb-4">GAMING</h3>
              <p className="text-[#64748B] font-medium">Compete. Strategize. Win.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FEATURED EVENTS */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0B1220] leading-[1.1] tracking-tight">
              EVENTS THAT<br/>DEFINE YANTRIKA
            </h2>
            <Link to="/events" className="inline-flex items-center text-[#087BFF] font-semibold hover:text-[#0667D9] transition-colors">
              VIEW ALL EVENTS <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="group bg-white rounded-[16px] border border-[#E2E8F0] hover:border-[#087BFF] transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
                <div className="p-8 flex-grow">
                  <div className="mb-6">
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${
                      event.category === 'Technical' || event.category === 'Robotics & Hardware' ? 'text-[#087BFF]' : 
                      event.category === 'Cultural' ? 'text-[#7C3AED]' : 'text-[#111827]'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-[#0B1220] mb-3 line-clamp-1">{event.name}</h3>
                  <p className="text-[#64748B] text-sm line-clamp-2 mb-8 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm border-b border-[#E2E8F0] pb-2">
                      <span className="text-[#64748B]">Date</span>
                      <span className="font-semibold text-[#0B1220]">{event.date}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-[#E2E8F0] pb-2">
                      <span className="text-[#64748B]">Team</span>
                      <span className="font-semibold text-[#0B1220]">{event.participants}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#64748B]">Fee</span>
                      <span className="font-semibold text-[#0B1220]">{event.fee}</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-8 pb-8 flex flex-col gap-3">
                  <Link to={`/events/${event.id}`} className="w-full inline-flex items-center justify-center rounded-[10px] text-sm font-semibold border border-[#CBD5E1] bg-transparent text-[#0B1220] hover:border-[#087BFF] hover:text-[#087BFF] h-11 transition-colors">
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. COUNTDOWN */}
      <section className="py-24 bg-[#07111F] relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-16">
            THE COUNTDOWN<br/>HAS BEGUN.
          </h2>
          <div className="w-full max-w-2xl mx-auto">
            <Countdown />
          </div>
        </div>
      </section>

      {/* 15. REGISTRATION CTA */}
      <section className="py-32 bg-[#0B1F36] relative overflow-hidden border-t border-[#07111F]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#087BFF] to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-8">
            READY TO ENTER<br/>THE YANTRIKA ARENA?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[#CBD5E1] text-sm tracking-widest uppercase mb-12">
            <span>08–09 OCTOBER 2026</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-[#087BFF]"></span>
            <span>DRIEMS UNIVERSITY</span>
          </div>
          <Link to="/events" className="inline-flex items-center justify-center rounded-[10px] text-sm font-semibold transition-all bg-[#087BFF] text-white hover:bg-[#0667D9] hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(8,123,255,0.20)] h-[52px] px-10">
            REGISTER NOW
          </Link>
        </div>
      </section>
    </div>
  );
}
