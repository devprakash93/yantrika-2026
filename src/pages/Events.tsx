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
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight">
            Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Directory</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10">
            Explore 12 incredible competitions and events spanning technology, gaming, and culture.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center bg-white p-4 rounded-2xl border shadow-sm">
          <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {['All', 'Technical', 'Cultural', 'Gaming'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${filter === f ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by event or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all font-medium"
            />
          </div>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredEvents.map((event, idx) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            key={event.id}
          >
            <Link to={`/events/${event.id}`} className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-8 flex-grow relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                    {event.category}
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-2 py-1 bg-gray-100 rounded-md border border-gray-200">
                    {event.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black font-display mb-3 group-hover:text-primary transition-colors leading-tight">
                  {event.name}
                </h3>
                
                <p className="text-sm font-semibold text-blue-600 mb-4">{event.type}</p>
                <p className="text-sm text-gray-500 line-clamp-3 mb-8 leading-relaxed">{event.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm mt-auto">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Fee</p>
                    <p className="font-bold text-gray-800">{event.fee}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Team</p>
                    <p className="font-bold text-gray-800 line-clamp-1">{event.participants}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 pt-0 mt-auto relative z-10">
                <div className="w-full inline-flex items-center justify-center rounded-xl text-sm font-bold border-2 border-gray-100 bg-white h-12 transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary shadow-sm">
                  View Details &rarr;
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredEvents.length === 0 && (
        <div className="text-center py-32 bg-gray-50 rounded-3xl border border-gray-100 mt-8">
          <Filter className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg font-medium mb-2">No events found matching your criteria.</p>
          <button onClick={() => { setFilter('All'); setSearch(''); }} className="text-primary font-bold hover:underline">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
