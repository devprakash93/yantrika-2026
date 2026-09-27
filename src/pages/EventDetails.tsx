import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data';
import { ArrowLeft, Calendar, MapPin, Users, IndianRupee, Trophy, Info } from 'lucide-react';
import RegistrationModal from '../components/RegistrationModal';
import { motion } from 'framer-motion';

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!event) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-display font-black mb-4">Event Not Found</h2>
        <Link to="/events" className="text-primary font-bold hover:underline">Return to Events Directory</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <RegistrationModal event={event} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <div className="bg-white border-b relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10">
          <Link to="/events" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Directory
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center rounded-lg px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-primary text-white shadow-sm">
                {event.category}
              </span>
              <span className="inline-flex items-center rounded-lg border px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-white text-gray-700 shadow-sm">
                {event.status}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tight leading-none text-gray-900">
              {event.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-6">{event.type}</p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">{event.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Date</p>
            <p className="font-bold text-gray-900 text-lg">{event.date}</p>
            <p className="text-sm font-medium text-gray-500 mt-1">{event.time}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Venue</p>
            <p className="font-bold text-gray-900 text-lg">{event.venue}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Team Size</p>
            <p className="font-bold text-gray-900 text-lg">{event.participants}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
              <IndianRupee className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Entry Fee</p>
            <p className="font-bold text-gray-900 text-lg">{event.fee}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-black font-display mb-6 flex items-center text-gray-900">
                <Info className="mr-3 text-primary h-6 w-6" /> Rules & Guidelines
              </h2>
              <ul className="space-y-4">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="h-6 w-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">{idx + 1}</span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-black font-display mb-6 flex items-center text-gray-900">
                <Trophy className="mr-3 text-primary h-6 w-6" /> Judging Criteria & Prizes
              </h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">Evaluation</h3>
                <ul className="space-y-4">
                  {event.judgingCriteria.map((criteria, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl border border-yellow-100">
                <h3 className="text-lg font-bold text-yellow-800 mb-4 uppercase tracking-wider text-sm flex items-center">
                  Awards
                </h3>
                <ul className="space-y-3">
                  {event.prizes.map((prize, idx) => (
                    <li key={idx} className="flex items-center text-yellow-900 font-medium">
                      <Trophy className="h-4 w-4 mr-2 text-yellow-600" /> {prize}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 sticky top-24">
              <div className="text-center mb-8">
                <h3 className="font-black text-2xl font-display mb-2">Ready to Compete?</h3>
                <p className="text-gray-500 text-sm">Secure your spot in {event.name} before registrations close.</p>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center rounded-2xl text-base font-bold transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary/90 h-14"
                disabled={event.status !== 'Registration Open'}
              >
                {event.status === 'Registration Open' ? 'Register Now' : 'Coming Soon - Not Open Yet'}
              </button>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Event Coordinators</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-1">Faculty</p>
                    {event.coordinators.faculty.map((name, idx) => (
                      <p key={idx} className="font-medium text-gray-700">{name}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-1">Student Leads</p>
                    {event.coordinators.student.map((name, idx) => (
                      <p key={idx} className="font-medium text-gray-700">{name}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-1">Contact Helpdesk</p>
                    <p className="font-medium text-primary">{event.coordinators.contact}</p>
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
