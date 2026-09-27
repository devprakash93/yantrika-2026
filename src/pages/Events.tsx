import { useState } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data';
import {
  Search, ArrowLeft, Users, IndianRupee, ArrowRight,
  Cpu, Palette, Gamepad2, GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Category config ─────────────────────────────────────────────────────────
const CATEGORIES = [
  { label: 'All',       key: 'All',       icon: null,           color: '#087BFF', bg: '#EFF6FF' },
  { label: 'Technical', key: 'Technical',  icon: Cpu,            color: '#087BFF', bg: '#EFF6FF' },
  { label: 'Cultural',  key: 'Cultural',   icon: Palette,        color: '#7C3AED', bg: '#F5F3FF' },
  { label: 'Gaming',    key: 'Gaming',     icon: Gamepad2,       color: '#0B1220', bg: '#F1F5F9' },
  { label: 'Academic',  key: 'Academic',   icon: GraduationCap,  color: '#0EA5A4', bg: '#F0FDFA' },
];

const CATEGORY_MAP: Record<string, string[]> = {
  Technical: ['Robotics & Hardware', 'Coding & Development', 'Design & Innovation'],
  Cultural:  ['Cultural', 'Cultural / Creative'],
  Gaming:    ['Gaming'],
  Academic:  ['Academic & Knowledge'],
};

// ─── Per-subcategory theme ────────────────────────────────────────────────────
const SUBCATEGORY_THEME: Record<string, { color: string; bg: string; label: string }> = {
  'Robotics & Hardware':   { color: '#087BFF', bg: '#EFF6FF',  label: 'Robotics & Hardware' },
  'Coding & Development':  { color: '#0EA5A4', bg: '#F0FDFA',  label: 'Coding & Dev' },
  'Design & Innovation':   { color: '#F59E0B', bg: '#FFFBEB',  label: 'Design & Innovation' },
  'Academic & Knowledge':  { color: '#6366F1', bg: '#EEF2FF',  label: 'Academic' },
  'Cultural':              { color: '#7C3AED', bg: '#F5F3FF',  label: 'Cultural' },
  'Cultural / Creative':   { color: '#EC4899', bg: '#FDF2F8',  label: 'Creative' },
  'Gaming':                { color: '#0B1220', bg: '#F1F5F9',  label: 'Gaming' },
};

function matchesFilter(category: string, filter: string): boolean {
  if (filter === 'All') return true;
  return (CATEGORY_MAP[filter] ?? []).includes(category);
}

export default function Events() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = events.filter(e =>
    matchesFilter(e.category, filter) &&
    (e.name.toLowerCase().includes(search.toLowerCase()) ||
     e.type.toLowerCase().includes(search.toLowerCase()) ||
     e.category.toLowerCase().includes(search.toLowerCase()))
  );

  // Group by subcategory for structured display
  const grouped: Record<string, typeof events> = {};
  filtered.forEach(e => {
    if (!grouped[e.category]) grouped[e.category] = [];
    grouped[e.category].push(e);
  });

  return (
    <div className="min-h-screen bg-[#F5F8FC] font-sans">

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-[#64748B] hover:text-[#087BFF] mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-[#087BFF] uppercase tracking-widest mb-2">
                YANTRIKA 2026 — DRIEMS UNIVERSITY
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-[#0B1220] tracking-tight">
                Events Directory
              </h1>
              <p className="text-[#64748B] mt-3 font-medium text-base max-w-xl">
                {events.length} competitions across technology, culture, and gaming. Find your arena.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80 flex-shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-[10px] border border-[#E2E8F0] bg-[#F5F8FC] text-sm font-medium text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#087BFF]/30 focus:border-[#087BFF] transition-all"
              />
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mt-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-200 ${
                  filter === cat.key
                    ? 'border-transparent text-white shadow-sm'
                    : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#087BFF] hover:text-[#0B1220]'
                }`}
                style={filter === cat.key ? { backgroundColor: cat.color } : {}}
              >
                {cat.icon && <cat.icon className="h-3.5 w-3.5" />}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-24 bg-white rounded-[20px] border border-[#E2E8F0]"
            >
              <Search className="h-10 w-10 text-[#CBD5E1] mx-auto mb-4" />
              <p className="font-bold text-[#0B1220] text-lg mb-2">No events found</p>
              <button onClick={() => { setFilter('All'); setSearch(''); }} className="text-[#087BFF] text-sm font-semibold hover:underline">
                Clear filters
              </button>
            </motion.div>
          ) : (
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {Object.entries(grouped).map(([subcategory, subEvents]) => {
                const theme = SUBCATEGORY_THEME[subcategory] ?? { color: '#087BFF', bg: '#EFF6FF', label: subcategory };
                return (
                  <section key={subcategory} className="mb-16 last:mb-0">
                    {/* Subcategory heading */}
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
                        style={{ backgroundColor: theme.bg, color: theme.color }}
                      >
                        {theme.label}
                      </div>
                      <div className="flex-1 h-px bg-[#E2E8F0]"></div>
                      <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest">
                        {subEvents.length} {subEvents.length === 1 ? 'Event' : 'Events'}
                      </span>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subEvents.map((event, idx) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.06 }}
                        >
                          <EventCard event={event} theme={theme} />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Event Card ───────────────────────────────────────────────────────────────
interface EventCardProps {
  event: (typeof events)[0];
  theme: { color: string; bg: string; label: string };
}

function EventCard({ event, theme }: EventCardProps) {
  return (
    <div className="group bg-white rounded-[16px] border border-[#E2E8F0] hover:border-[#087BFF] hover:shadow-[0_4px_24px_rgba(8,123,255,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">

      {/* Colored top stripe */}
      <div className="h-1 w-full" style={{ backgroundColor: theme.color }} />

      <div className="p-6 flex flex-col flex-grow">
        {/* Badge + Type */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <span
            className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md"
            style={{ backgroundColor: theme.bg, color: theme.color }}
          >
            {event.category}
          </span>
          <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest text-right leading-tight">
            {event.type}
          </span>
        </div>

        {/* Event name */}
        <h3 className="text-xl font-display font-bold text-[#0B1220] mb-3 leading-snug group-hover:text-[#087BFF] transition-colors">
          {event.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2 mb-6 flex-grow font-medium">
          {event.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs font-bold text-[#64748B] border-t border-[#E2E8F0] pt-4 mb-5">
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-[#CBD5E1]" />
            {event.participants}
          </span>
          <span className="w-px h-3 bg-[#E2E8F0]" />
          <span className="flex items-center gap-1.5">
            <IndianRupee className="h-3.5 w-3.5 text-[#CBD5E1]" />
            {event.fee.replace('₹', '')}
          </span>
          <span className="w-px h-3 bg-[#E2E8F0]" />
          <span
            className="ml-auto px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wide"
            style={
              event.status === 'Registration Open'
                ? { backgroundColor: '#DCFCE7', color: '#16A34A' }
                : { backgroundColor: '#F1F5F9', color: '#94A3B8' }
            }
          >
            {event.status}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <Link
            to={`/events/${event.id}`}
            className="flex-1 inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider border border-[#E2E8F0] text-[#64748B] rounded-[8px] h-10 hover:border-[#087BFF] hover:text-[#087BFF] transition-colors"
          >
            Details
          </Link>
          <Link
            to={`/events/${event.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider rounded-[8px] h-10 text-white transition-all hover:opacity-90"
            style={{ backgroundColor: theme.color }}
          >
            Register <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
