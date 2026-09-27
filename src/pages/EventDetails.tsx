import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data';
import { ArrowLeft, Calendar, MapPin, Users, Trophy, Info } from 'lucide-react';
import RegistrationModal from '../components/RegistrationModal';
import { motion } from 'framer-motion';

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!event) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-display font-bold mb-4 text-[#0B1220]">Event Not Found</h2>
        <Link to="/events" className="text-[#087BFF] font-medium hover:underline">Return to Events Directory</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-32 pt-24 font-sans">
      <RegistrationModal event={event} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <div className="border-b border-[#E2E8F0] bg-[#F5F8FC] pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link to="/events" className="inline-flex items-center text-sm font-semibold text-[#64748B] hover:text-[#087BFF] mb-10 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Directory
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="mb-6">
              <span className={`text-xs font-bold tracking-widest uppercase ${
                event.category === 'Technical' || event.category === 'Robotics & Hardware' ? 'text-[#087BFF]' : 
                event.category === 'Cultural' ? 'text-[#7C3AED]' : 'text-[#111827]'
              }`}>
                {event.category}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight leading-tight text-[#0B1220]">
              {event.name}
            </h1>
            <p className="text-lg text-[#64748B] font-medium mb-8 max-w-3xl leading-relaxed">{event.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-6 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E2E8F0]">
            <Calendar className="h-5 w-5 text-[#087BFF] mb-4" />
            <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Date</p>
            <p className="font-bold text-[#0B1220]">{event.date}</p>
            <p className="text-sm font-medium text-[#64748B] mt-1">{event.time}</p>
          </div>

          <div className="bg-white p-6 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E2E8F0]">
            <MapPin className="h-5 w-5 text-[#087BFF] mb-4" />
            <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Venue</p>
            <p className="font-bold text-[#0B1220]">{event.venue}</p>
          </div>

          <div className="bg-white p-6 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E2E8F0]">
            <Users className="h-5 w-5 text-[#087BFF] mb-4" />
            <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Team Size</p>
            <p className="font-bold text-[#0B1220]">{event.participants}</p>
          </div>

          <div className="bg-white p-6 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E2E8F0]">
            <Trophy className="h-5 w-5 text-[#087BFF] mb-4" />
            <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Entry Fee</p>
            <p className="font-bold text-[#0B1220]">{event.fee}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-24 md:pb-0">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 text-[#0B1220] flex items-center">
                <Info className="mr-3 text-[#087BFF] h-6 w-6" /> Rules & Guidelines
              </h2>
              <div className="bg-[#F5F8FC] p-8 rounded-[16px] border border-[#E2E8F0]">
                <ul className="space-y-4">
                  {event.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-[#0B1220] font-medium">
                      <span className="h-6 w-6 rounded-full bg-white border border-[#E2E8F0] text-[#087BFF] flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 text-[#0B1220] flex items-center">
                <Trophy className="mr-3 text-[#087BFF] h-6 w-6" /> Evaluation & Rewards
              </h2>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold text-[#64748B] mb-4 uppercase tracking-wider">Judging Criteria</h3>
                <ul className="space-y-4">
                  {event.judgingCriteria.map((criteria, idx) => (
                    <li key={idx} className="flex items-start text-[#0B1220] font-medium">
                      <div className="w-1.5 h-1.5 bg-[#087BFF] rounded-full mr-4 mt-2.5 flex-shrink-0" />
                      <span className="leading-relaxed">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#64748B] mb-4 uppercase tracking-wider">Prizes</h3>
                <ul className="space-y-3 bg-white border border-[#E2E8F0] rounded-[16px] p-6">
                  {event.prizes.map((prize, idx) => (
                    <li key={idx} className="flex items-center text-[#0B1220] font-bold">
                      <Trophy className="h-4 w-4 mr-3 text-[#087BFF]" /> {prize}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar (Desktop) */}
          <div className="hidden md:block">
            <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.03)] sticky top-28">
              <div className="text-center mb-8">
                <h3 className="font-bold text-xl font-display mb-2 text-[#0B1220]">Ready to Compete?</h3>
                <p className="text-[#64748B] text-sm font-medium">Secure your spot in {event.name} before registrations close.</p>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center rounded-[10px] text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-[#087BFF] text-white hover:bg-[#0667D9] hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(8,123,255,0.20)] h-12"
                disabled={event.status !== 'Registration Open'}
              >
                {event.status === 'Registration Open' ? 'REGISTER NOW' : 'NOT OPEN YET'}
              </button>
              
              <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
                <h4 className="font-bold text-[#0B1220] mb-6 uppercase tracking-wider text-xs">Event Coordinators</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-bold text-[#64748B] mb-1.5 uppercase tracking-widest">Faculty</p>
                    {event.coordinators.faculty.map((name, idx) => (
                      <p key={idx} className="font-semibold text-[#0B1220] text-sm">{name}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#64748B] mb-1.5 uppercase tracking-widest">Student Leads</p>
                    {event.coordinators.student.map((name, idx) => (
                      <p key={idx} className="font-semibold text-[#0B1220] text-sm">{name}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#64748B] mb-1.5 uppercase tracking-widest">Contact</p>
                    <p className="font-semibold text-[#087BFF] text-sm">{event.coordinators.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Sticky Bottom CTA */}
      <div className="md:hidden fixed bottom-[76px] left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-[#E2E8F0] z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full flex items-center justify-center rounded-[12px] text-sm font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-[#087BFF] text-white shadow-sm h-14"
          disabled={event.status !== 'Registration Open'}
        >
          {event.status === 'Registration Open' ? 'REGISTER NOW' : 'NOT OPEN YET'}
        </button>
      </div>
    </div>
  );
}

