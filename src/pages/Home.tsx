import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Code, Palette, Gamepad2, Cpu, Zap, Trophy, Users } from 'lucide-react';
import { events } from '../data';
import Countdown from '../components/Countdown';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        Registrations for YANTRIKA 2026 are opening soon! <Link to="/events" className="underline underline-offset-2 ml-2 hover:text-white/80">View Events &rarr;</Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Subtle animated blobs */}
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" 
          />
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 shadow-sm">
              <Zap className="h-4 w-4 mr-2" />
              Official Technical & Cultural Fest
            </div>
            
            <h1 className="mb-6 flex justify-center">
              <span className="sr-only">YANTRIKA 2026</span>
              <img src="/logo.png" alt="YANTRIKA 2026 Logo" className="w-full max-w-4xl h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
              Where Technology Meets Creativity.<br/>
              <span className="text-foreground/80">Explore. Innovate. Compete. Create.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-14 text-base font-semibold">
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm py-2 px-5 rounded-full border border-black/5 shadow-sm">
                <Calendar className="h-5 w-5 text-primary" />
                <span>08–09 OCTOBER 2026</span>
              </div>
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm py-2 px-5 rounded-full border border-black/5 shadow-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <span>DRIEMS UNIVERSITY</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
              <Link to="/events" className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 h-14 px-10">
                Explore Events
              </Link>
              <Link to="/events" className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95 border-2 border-border bg-white text-foreground hover:bg-gray-50 hover:border-gray-300 h-14 px-10">
                Register Now
              </Link>
            </div>

            <div className="pt-8 border-t border-black/5 max-w-3xl mx-auto">
              <p className="text-sm font-bold text-muted-foreground tracking-widest uppercase mb-4">Countdown to Yantrika 2026</p>
              <Countdown />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                A FEST BUILT TO <br/>
                <span className="text-primary">CREATE, COMPETE & CONNECT</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                YANTRIKA 2026 brings together thousands of students through intense technical challenges, breathtaking creative competitions, vibrant cultural performances, competitive gaming, and interactive experiences across a sprawling university campus.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-border/50 bg-gray-50/50 p-6 rounded-2xl">
                  <h4 className="text-4xl font-display font-black text-primary mb-2">2</h4>
                  <p className="font-semibold text-foreground/80">Action-Packed Days</p>
                </div>
                <div className="border border-border/50 bg-gray-50/50 p-6 rounded-2xl">
                  <h4 className="text-4xl font-display font-black text-primary mb-2">30+</h4>
                  <p className="font-semibold text-foreground/80">Events & Competitions</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-400/20 rounded-[3rem] transform rotate-3 scale-105" />
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" alt="Tech Fest Crowd" className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Event Categories</h2>
            <p className="text-lg text-muted-foreground">Find your passion and compete with the best minds across different domains.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/events?category=Technical" className="group block bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 hover:-translate-y-2">
              <div className="h-16 w-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">Technical</h3>
              <p className="text-muted-foreground mb-6">For technology, engineering, robotics, coding and innovation-oriented competitions.</p>
              <span className="text-primary font-semibold group-hover:underline flex items-center">
                View Events <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link to="/events?category=Cultural" className="group block bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-pink-500/30 hover:-translate-y-2">
              <div className="h-16 w-16 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">Cultural</h3>
              <p className="text-muted-foreground mb-6">For performance, creativity, photography, reels and entertainment on the big stage.</p>
              <span className="text-pink-500 font-semibold group-hover:underline flex items-center">
                View Events <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link to="/events?category=Gaming" className="group block bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-purple-500/30 hover:-translate-y-2">
              <div className="h-16 w-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">Gaming / Esports</h3>
              <p className="text-muted-foreground mb-6">For competitive gaming, BGMI, Valorant, and other intense esports activities.</p>
              <span className="text-purple-600 font-semibold group-hover:underline flex items-center">
                View Events <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Featured Events</h2>
              <p className="text-lg text-muted-foreground">The most anticipated competitions of YANTRIKA 2026. Register early as slots fill up fast.</p>
            </div>
            <Link to="/events" className="inline-flex items-center justify-center rounded-full border-2 border-border bg-white text-foreground hover:bg-gray-50 h-12 px-6 font-semibold transition-colors whitespace-nowrap">
              Explore All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="group flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={event.category === 'Cultural' ? 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80' : 
                         event.category === 'Robotics & Hardware' ? 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80' :
                         'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80'} 
                    alt={event.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/30">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold font-display mb-3">{event.name}</h3>
                  <p className="text-muted-foreground line-clamp-2 mb-6 flex-grow">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">Participants</span>
                      <span className="font-semibold text-foreground flex items-center"><Users className="w-4 h-4 mr-2 text-primary" /> {event.participants}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">Fee</span>
                      <span className="font-semibold text-foreground flex items-center"><Trophy className="w-4 h-4 mr-2 text-primary" /> {event.fee}</span>
                    </div>
                  </div>
                  
                  <Link to={`/events/${event.id}`} className="w-full inline-flex items-center justify-center rounded-xl bg-gray-50 text-foreground font-semibold hover:bg-primary hover:text-white transition-colors h-12 border border-gray-200 hover:border-primary">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">THE YANTRIKA EXPERIENCE</h2>
            <p className="text-xl text-gray-400">BUILD. COMPETE. PERFORM. CREATE.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "BUILD", icon: Cpu, desc: "Technical challenges and engineering competitions." },
              { title: "COMPETE", icon: Gamepad2, desc: "Competitive events, gaming, and robotics." },
              { title: "PERFORM", icon: Zap, desc: "Cultural, dance, and stage activities." },
              { title: "CREATE", icon: Palette, desc: "Photography, reels, and creative challenges." },
            ].map((pillar, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <pillar.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-display tracking-wide mb-3">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-[100px]" 
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight">
            Ready to be part of YANTRIKA 2026?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-white/90 text-lg font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span>08–09 OCTOBER 2026</span>
            </div>
            <div className="hidden sm:block text-white/50">•</div>
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              <span>DRIEMS UNIVERSITY</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/events" className="inline-flex items-center justify-center rounded-full bg-white text-primary text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10 h-16 px-12">
              REGISTER NOW
            </Link>
            <Link to="/events" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-transparent text-white text-lg font-bold transition-all hover:bg-white/10 h-16 px-12">
              EXPLORE EVENTS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
