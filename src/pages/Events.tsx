import { useState } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data';
import { Search, Filter, ArrowLeft, Trophy, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORY_MAP: Record<string, string[]> = {
  'Technical': ['Robotics & Hardware', 'Coding & Development', 'Design & Innovation', 'Academic & Knowledge'],
  'Cultural': ['Cultural', 'Cultural / Creative'],
  'Gaming': ['Gaming']
};

export default function Events() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredEvents = events.filter(e => {
    let matchesFilter = true;
    
    if (filter !== 'All') {
      const allowedSubcategories = CATEGORY_MAP[filter] || [];
      matchesFilter = allowedSubcategories.includes(e.category);
    }

    const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase()) || 
                          e.type.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="mb-16 relative z-10 pt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-primary mb-8 transition-colors uppercase tracking-widest bg-secondary/50 px-4 py-2 rounded-lg border border-white/5">
            <ArrowLeft className="h-4 w-4 mr-2" /> Abort to Mainframe
          </Link>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tighter uppercase text-white glow-text">
            Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Directory</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12 font-medium">
            Explore 12 incredible competitions and events spanning technology, gaming, and culture. Initialize your participation.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center bg-card/60 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            {['All', 'Technical', 'Cultural', 'Gaming'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${filter === f ? 'bg-primary text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] border border-primary' : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by event or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-black/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all font-medium text-white placeholder-gray-500 shadow-inner"
            />
          </div>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {filteredEvents.map((event, idx) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            key={event.id}
          >
            <Link to={`/events/${event.id}`} className="group relative bg-card/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover opacity-5 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="p-8 flex-grow relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="inline-flex items-center rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 shadow-[0_0_10px_rgba(14,165,233,0.3)]">
                    {event.category}
                  </span>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest px-3 py-1.5 bg-white/10 rounded-lg border border-white/20 flex items-center">
                    <Shield className="w-3 h-3 mr-1" /> {event.status}
                  </span>
                </div>
                
                <h3 className="text-3xl font-black font-display mb-3 text-white group-hover:text-primary transition-colors leading-tight">
                  {event.name}
                </h3>
                
                <p className="text-sm font-bold text-primary mb-6 uppercase tracking-widest">{event.type}</p>
                <p className="text-sm text-gray-400 line-clamp-3 mb-8 leading-relaxed font-medium">{event.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm mt-auto">
                  <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Fee</p>
                    <p className="font-bold text-white flex items-center"><Trophy className="w-4 h-4 mr-2 text-primary" />{event.fee}</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Team</p>
                    <p className="font-bold text-white flex items-center line-clamp-1"><Users className="w-4 h-4 mr-2 text-primary" />{event.participants}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto relative z-10">
                <div className="w-full inline-flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-widest border border-primary/50 bg-primary/10 text-primary h-14 transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]">
                  INITIALIZE DETAILS &rarr;
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredEvents.length === 0 && (
        <div className="text-center py-32 bg-card/40 rounded-3xl border border-white/10 mt-8 backdrop-blur-md relative z-10">
          <Filter className="h-16 w-16 text-gray-600 mx-auto mb-6" />
          <p className="text-white text-xl font-bold mb-4">No events found in this sector.</p>
          <button onClick={() => { setFilter('All'); setSearch(''); }} className="text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
            Clear Filters / Reset Search
          </button>
        </div>
      )}
    </div>
  );
}
