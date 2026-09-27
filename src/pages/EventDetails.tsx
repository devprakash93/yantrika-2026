import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data';
import { ArrowLeft, Calendar, MapPin, Users, Trophy, Info, Shield, Zap } from 'lucide-react';
import RegistrationModal from '../components/RegistrationModal';
import { motion } from 'framer-motion';

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!event) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-foreground">
        <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-widest glow-text">Event Not Found</h2>
        <Link to="/events" className="text-primary font-bold hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Return to Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-24 text-foreground selection:bg-primary/30">
      <RegistrationModal event={event} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-blue-500/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/events" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-primary mb-10 transition-colors uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Directory
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="inline-flex items-center rounded-lg px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                {event.category}
              </span>
              <span className="inline-flex items-center rounded-lg border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-white/10 text-white backdrop-blur-md">
                <Shield className="w-3 h-3 mr-2 text-primary" /> {event.status}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 tracking-tighter leading-none text-white glow-text uppercase">
              {event.name}
            </h1>
            <p className="text-xl md:text-3xl text-primary font-bold mb-8 tracking-wide uppercase flex items-center">
              <Zap className="w-6 h-6 mr-3" /> {event.type}
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl leading-relaxed font-medium">{event.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Calendar, label: "Date & Time", value: event.date, sub: event.time },
            { icon: MapPin, label: "Venue", value: event.venue, sub: "DRIEMS Campus" },
            { icon: Users, label: "Team Size", value: event.participants, sub: "Members per team" },
            { icon: Trophy, label: "Entry Fee", value: event.fee, sub: "Per registration" }
          ].map((stat, i) => (
            <div key={i} className="bg-card/60 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl flex flex-col group hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-5 border border-primary/20 group-hover:scale-110 transition-transform">
                <stat.icon className="h-7 w-7 drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="font-black text-white text-xl uppercase">{stat.value}</p>
              <p className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-card/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-black font-display mb-8 flex items-center text-white uppercase tracking-wide">
                <Info className="mr-4 text-primary h-8 w-8" /> Parameters & Directives
              </h2>
              <ul className="space-y-6">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="h-8 w-8 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-sm font-black mr-4 flex-shrink-0 mt-0.5 glow-box">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed font-medium text-lg pt-1">{rule}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="bg-card/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-black font-display mb-8 flex items-center text-white uppercase tracking-wide">
                <Trophy className="mr-4 text-primary h-8 w-8" /> Evaluation & Rewards
              </h2>
              
              <div className="mb-10">
                <h3 className="text-sm font-black text-primary mb-5 uppercase tracking-widest bg-primary/10 inline-block px-4 py-2 rounded-lg border border-primary/20">Evaluation Criteria</h3>
                <ul className="space-y-4">
                  {event.judgingCriteria.map((criteria, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 font-medium text-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                      <span className="leading-relaxed">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/5 p-8 rounded-2xl border border-yellow-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Trophy className="w-32 h-32 text-yellow-500" />
                </div>
                <h3 className="text-sm font-black text-yellow-500 mb-6 uppercase tracking-widest relative z-10 flex items-center">
                  Bounty / Awards
                </h3>
                <ul className="space-y-4 relative z-10">
                  {event.prizes.map((prize, idx) => (
                    <li key={idx} className="flex items-center text-white font-bold text-lg">
                      <Trophy className="h-5 w-5 mr-4 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" /> {prize}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl sticky top-24">
              <div className="text-center mb-8">
                <h3 className="font-black text-3xl font-display mb-3 text-white uppercase tracking-tight">System Access</h3>
                <p className="text-gray-400 text-sm font-medium">Secure your node in {event.name} before server capacity is reached.</p>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center rounded-2xl text-lg font-black uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] hover:bg-primary/90 h-16 border border-primary/50"
                disabled={event.status !== 'Registration Open'}
              >
                {event.status === 'Registration Open' ? 'INITIALIZE REGISTRATION' : 'ACCESS DENIED'}
              </button>
              
              <div className="mt-10 pt-10 border-t border-white/10">
                <h4 className="font-black text-white mb-6 uppercase tracking-widest text-sm flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-primary" /> Node Administrators
                </h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">Faculty</p>
                    {event.coordinators.faculty.map((name, idx) => (
                      <p key={idx} className="font-bold text-gray-300 text-sm">{name}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">Student Leads</p>
                    {event.coordinators.student.map((name, idx) => (
                      <p key={idx} className="font-bold text-gray-300 text-sm">{name}</p>
                    ))}
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 mt-4">
                    <p className="text-xs font-black text-gray-500 mb-1 uppercase tracking-widest">Comms Link</p>
                    <p className="font-black text-primary">{event.coordinators.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
