import { useState } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data';
import { Search, Filter, ArrowLeft } from 'lucide-react';
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
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-[#64748B] hover:text-[#087BFF] mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-[#0B1220]">
            Events Directory
          </h1>
          <p className="text-lg text-[#64748B] max-w-2xl mb-12 font-medium">
            Explore incredible competitions and events spanning technology, gaming, and culture.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center bg-[#F5F8FC] p-4 rounded-[16px] border border-[#E2E8F0]">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['All', 'Technical', 'Cultural', 'Gaming'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-[10px] text-sm font-semibold transition-all ${
                  filter === f 
                    ? 'bg-[#087BFF] text-white shadow-sm' 
                    : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#087BFF] hover:text-[#0B1220]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-[10px] border border-[#E2E8F0] bg-white text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#087BFF] transition-all text-[#0B1220] placeholder-[#94A3B8]"
            />
          </div>
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, idx) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            key={event.id}
          >
            <div className="group bg-white rounded-[16px] border border-[#E2E8F0] hover:border-[#087BFF] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(8,123,255,0.05)] transition-all duration-300 flex flex-col h-full overflow-hidden">
              <div className="p-8 flex-grow">
                <div className="mb-6">
                  <span className={`text-[10px] font-bold tracking-widest uppercase ${
                    event.category === 'Technical' || event.category === 'Robotics & Hardware' ? 'text-[#087BFF]' : 
                    event.category === 'Cultural' ? 'text-[#7C3AED]' : 'text-[#111827]'
                  }`}>
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-[#0B1220] mb-3 leading-tight">
                  {event.name}
                </h3>
                
                <p className="text-[#64748B] text-sm line-clamp-3 mb-8 leading-relaxed font-medium">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-8 mt-auto">
                  <div className="flex justify-between text-sm border-b border-[#E2E8F0] pb-2">
                    <span className="text-[#64748B]">Date</span>
                    <span className="font-semibold text-[#0B1220]">{event.date}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-[#E2E8F0] pb-2">
                    <span className="text-[#64748B]">Team</span>
                    <span className="font-semibold text-[#0B1220] line-clamp-1 max-w-[120px] text-right">{event.participants}</span>
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
                <Link to={`/events/${event.id}`} className="w-full inline-flex items-center justify-center rounded-[10px] text-sm font-semibold bg-[#087BFF] text-white hover:bg-[#0667D9] h-11 transition-colors">
                  REGISTER
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredEvents.length === 0 && (
        <div className="text-center py-24 bg-[#F5F8FC] rounded-[16px] border border-[#E2E8F0] mt-8">
          <Filter className="h-10 w-10 text-[#CBD5E1] mx-auto mb-4" />
          <p className="text-[#0B1220] text-lg font-semibold mb-2">No events found matching your criteria.</p>
          <button onClick={() => { setFilter('All'); setSearch(''); }} className="text-[#087BFF] font-medium text-sm hover:underline">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
