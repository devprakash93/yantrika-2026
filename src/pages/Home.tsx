import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Code, Palette, Gamepad2, Cpu, Zap, Trophy, Users, ChevronRight } from 'lucide-react';
import { events } from '../data';
import Countdown from '../components/Countdown';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      {/* Announcement Bar */}
      <div className="bg-primary/10 border-b border-primary/20 text-primary py-3 px-4 text-center text-sm font-bold tracking-wide backdrop-blur-sm relative z-50">
        <span className="animate-pulse mr-2">⚡</span> Registrations for YANTRIKA 2026 are opening soon! 
        <Link to="/events" className="underline underline-offset-4 ml-3 hover:text-white transition-colors">View Events &rarr;</Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20 pb-32">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" 
          />
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-bold text-primary mb-12 shadow-[0_0_15px_rgba(14,165,233,0.3)] backdrop-blur-md">
              <Zap className="h-4 w-4 mr-2" />
              THE ULTIMATE TECHNO-CULTURAL FEST
            </div>
            
            <h1 className="mb-10 flex justify-center">
              <span className="sr-only">YANTRIKA 2026</span>
              <img src="/logo.png" alt="YANTRIKA 2026 Logo" className="w-full max-w-4xl h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 glow-box rounded-3xl" />
            </h1>
            
            <p className="text-xl md:text-3xl text-gray-400 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              Where Technology Meets Creativity.<br/>
              <span className="text-white glow-text font-bold">Explore. Innovate. Compete. Create.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 text-sm md:text-base font-bold tracking-widest uppercase">
              <div className="flex items-center gap-3 bg-secondary/80 backdrop-blur-md py-3 px-6 rounded-xl border border-white/5 shadow-2xl">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-gray-200">08–09 OCTOBER 2026</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/80 backdrop-blur-md py-3 px-6 rounded-xl border border-white/5 shadow-2xl">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-200">DRIEMS UNIVERSITY</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <Link to="/events" className="group inline-flex items-center justify-center rounded-xl text-base font-bold transition-all bg-primary text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] hover:bg-primary/90 h-16 px-10">
                EXPLORE EVENTS <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/events" className="inline-flex items-center justify-center rounded-xl text-base font-bold transition-all border-2 border-primary/50 bg-background/50 backdrop-blur-sm text-primary hover:bg-primary/10 hover:border-primary h-16 px-10">
                REGISTER NOW
              </Link>
            </div>

            <div className="pt-10 border-t border-white/10 max-w-4xl mx-auto bg-card/30 backdrop-blur-lg p-8 rounded-3xl border border-white/5">
              <p className="text-sm font-bold text-primary tracking-widest uppercase mb-6 glow-text">Countdown to System Initialization</p>
              <Countdown />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-secondary/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 uppercase tracking-tighter">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">YANTRIKA</span> EXPERIENCE
            </h2>
            <p className="text-xl text-gray-400 font-medium tracking-wide">BUILD. COMPETE. PERFORM. CREATE.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "BUILD", icon: Cpu, desc: "Technical challenges and engineering competitions." },
              { title: "COMPETE", icon: Gamepad2, desc: "Competitive events, gaming, and robotics." },
              { title: "PERFORM", icon: Zap, desc: "Cultural, dance, and stage activities." },
              { title: "CREATE", icon: Palette, desc: "Photography, reels, and creative challenges." },
            ].map((pillar, i) => (
              <div key={i} className="group bg-card/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md hover:bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 glow-box">
                <pillar.icon className="h-14 w-14 text-primary mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
                <h3 className="text-2xl font-black font-display tracking-wide mb-4 text-white group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-display font-black mb-6 uppercase tracking-tighter">Event Domains</h2>
            <p className="text-xl text-gray-400">Select your arena and compete with the best minds.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/events?category=Technical" className="group block bg-card/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10 hover:border-primary transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="h-20 w-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                  <Code className="h-10 w-10 drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                </div>
                <h3 className="text-3xl font-black font-display mb-4 text-white">Technical</h3>
                <p className="text-gray-400 mb-8 font-medium leading-relaxed">For technology, engineering, robotics, coding and innovation-oriented competitions.</p>
                <span className="text-primary font-bold flex items-center uppercase tracking-widest text-sm">
                  Access Terminal <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </Link>

            <Link to="/events?category=Cultural" className="group block bg-card/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10 hover:border-pink-500 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="h-20 w-20 bg-pink-500/10 text-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-pink-500/20">
                  <Palette className="h-10 w-10 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                </div>
                <h3 className="text-3xl font-black font-display mb-4 text-white">Cultural</h3>
                <p className="text-gray-400 mb-8 font-medium leading-relaxed">For performance, creativity, photography, reels and entertainment on the big stage.</p>
                <span className="text-pink-500 font-bold flex items-center uppercase tracking-widest text-sm">
                  Access Terminal <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </Link>

            <Link to="/events?category=Gaming" className="group block bg-card/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10 hover:border-purple-500 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="h-20 w-20 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-purple-500/20">
                  <Gamepad2 className="h-10 w-10 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                </div>
                <h3 className="text-3xl font-black font-display mb-4 text-white">Gaming</h3>
                <p className="text-gray-400 mb-8 font-medium leading-relaxed">For competitive gaming, BGMI, Valorant, and other intense esports activities.</p>
                <span className="text-purple-500 font-bold flex items-center uppercase tracking-widest text-sm">
                  Access Terminal <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-32 bg-secondary/20 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-display font-black mb-6 uppercase tracking-tighter">Featured Events</h2>
              <p className="text-xl text-gray-400 font-medium">The most anticipated competitions of YANTRIKA 2026.</p>
            </div>
            <Link to="/events" className="inline-flex items-center justify-center rounded-xl border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 h-14 px-8 font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_15px_rgba(14,165,233,0.15)]">
              View All Events <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="group flex flex-col bg-card/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] transition-all duration-500 hover:-translate-y-2">
                <div className="h-56 bg-black relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
                  <img 
                    src={event.category === 'Cultural' ? 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80' : 
                         event.category === 'Robotics & Hardware' ? 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80' :
                         'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80'} 
                    alt={event.name} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 opacity-40 transition-all duration-700" 
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="inline-flex items-center rounded-lg bg-primary/20 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-primary border border-primary/30 uppercase tracking-widest shadow-[0_0_10px_rgba(14,165,233,0.3)]">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col relative z-20 -mt-4">
                  <h3 className="text-3xl font-black font-display mb-3 text-white">{event.name}</h3>
                  <p className="text-gray-400 line-clamp-2 mb-8 flex-grow font-medium">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                    <div className="flex flex-col bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Participants</span>
                      <span className="font-bold text-white flex items-center"><Users className="w-4 h-4 mr-2 text-primary" /> {event.participants}</span>
                    </div>
                    <div className="flex flex-col bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Fee</span>
                      <span className="font-bold text-white flex items-center"><Trophy className="w-4 h-4 mr-2 text-primary" /> {event.fee}</span>
                    </div>
                  </div>
                  
                  <Link to={`/events/${event.id}`} className="w-full inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all h-14 border border-primary/20 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                    INITIALIZE DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-primary/5"></div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" 
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 bg-primary/10 rounded-full mb-8 border border-primary/20 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            <Zap className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 uppercase tracking-tighter glow-text">
            SYSTEM READY. <br/>ARE YOU?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-gray-300 text-lg font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>08–09 OCT 2026</span>
            </div>
            <div className="hidden sm:block text-primary/50">•</div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>DRIEMS UNIVERSITY</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/events" className="inline-flex items-center justify-center rounded-xl bg-primary text-white text-lg font-black tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(14,165,233,0.5)] hover:shadow-[0_0_50px_rgba(14,165,233,0.8)] hover:bg-primary/90 hover:scale-105 active:scale-95 h-16 px-12">
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
