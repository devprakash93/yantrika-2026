import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, ArrowLeft, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { events } from '../data';

export default function Search() {
  const [query, setQuery] = useState('');

  const searchResults = query ? events.filter(e => 
    e.name.toLowerCase().includes(query.toLowerCase()) || 
    e.category.toLowerCase().includes(query.toLowerCase())
  ) : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Search Header */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <Link to="/" className="p-2 -ml-2 text-[#64748B] hover:text-[#0B1220]">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
            <input 
              type="text" 
              autoFocus
              placeholder="Search YANTRIKA..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-[#F5F8FC] border-none rounded-[12px] text-sm font-semibold text-[#0B1220] focus:ring-1 focus:ring-[#087BFF] focus:bg-white transition-all"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#CBD5E1] rounded-full text-white flex items-center justify-center text-xs font-bold"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {!query ? (
          <>
            <div className="mb-8">
              <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-4 flex items-center">
                <Clock className="w-4 h-4 mr-2" /> Recent Searches
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm font-semibold text-[#0B1220] cursor-pointer" onClick={() => setQuery('YantraRush')}>
                  <span>YantraRush</span> <ArrowLeft className="w-4 h-4 text-[#CBD5E1] rotate-45" />
                </div>
                <div className="flex items-center justify-between text-sm font-semibold text-[#0B1220] cursor-pointer" onClick={() => setQuery('Flash Mob')}>
                  <span>Flash Mob</span> <ArrowLeft className="w-4 h-4 text-[#CBD5E1] rotate-45" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" /> Popular
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Robotics', 'NirtyaSpandan', 'Photography', 'Gaming'].map(term => (
                  <button 
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 bg-[#F5F8FC] text-[#0B1220] text-sm font-semibold rounded-full border border-[#E2E8F0]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">Results</h3>
            {searchResults.length > 0 ? searchResults.map(event => (
              <Link key={event.id} to={`/events/${event.id}`} className="flex items-center p-4 bg-white border border-[#E2E8F0] rounded-[16px] shadow-sm hover:border-[#087BFF]">
                <div className="w-12 h-12 bg-[#F5F8FC] rounded-lg flex items-center justify-center mr-4 shrink-0 text-[#087BFF] font-bold text-lg">
                  {event.name.charAt(0)}
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-[#0B1220] text-sm">{event.name}</h4>
                  <p className="text-xs text-[#64748B] font-semibold mt-1">{event.category}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#CBD5E1]" />
              </Link>
            )) : (
              <div className="text-center py-12">
                <SearchIcon className="w-12 h-12 text-[#CBD5E1] mx-auto mb-4" />
                <p className="text-[#0B1220] font-bold">No results found for "{query}"</p>
                <p className="text-[#64748B] text-sm mt-1">Try searching for events or categories.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
