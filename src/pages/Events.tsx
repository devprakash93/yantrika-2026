import { useState } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const Label = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted ${className}`}>
    {children}
  </span>
);

/* ── Category definitions ──────────────────────────────── */
const FILTERS = ['ALL', 'TECH', 'ACADEMIC', 'CULTURAL', 'CREATIVE', 'FOOD', 'GAMING'] as const;
type Filter = typeof FILTERS[number];



const ACCENT: Record<string, string> = {
  TECH:     '#0057FF',
  ACADEMIC: '#8C8C83',
  CULTURAL: '#FF4D00',
  CREATIVE: '#FF4D00',
  FOOD:     '#F5E142',
  GAMING:   '#0F0F0D',
};

/* ── Main Events page ──────────────────────────────────── */
export default function Events() {
  const [filter, setFilter]       = useState<Filter>('ALL');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Derive filter from category + type
  const getFilter = (e: typeof events[0]): Filter => {
    if (e.type.toLowerCase().includes('food') || e.type.toLowerCase().includes('stall')) return 'FOOD';
    if (e.category === 'Gaming') return 'GAMING';
    if (e.category === 'Cultural / Creative') return 'CREATIVE';
    if (e.category === 'Cultural') return 'CULTURAL';
    if (e.category === 'Academic & Knowledge') return 'ACADEMIC';
    return 'TECH';
  };

  const filtered = events.filter(e => filter === 'ALL' || getFilter(e) === filter);

  return (
    <div className="bg-paper text-ink font-sans min-h-screen">

      {/* ── Page header ──────────────────────────────────── */}
      <div className="border-b border-rule">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-28 pb-10">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted hover:text-ink transition-colors mb-8">
            <ArrowLeft className="w-3 h-3" /> BACK TO HOME
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Label className="block mb-3">YANTRIKA 2026 · DRIEMS UNIVERSITY</Label>
              <h1 className="font-display leading-none text-ink" style={{ fontSize: 'clamp(44px, 8vw, 110px)' }}>
                EVENT<br />INDEX
              </h1>
            </div>
            <div className="text-right hidden md:block">
              <p className="font-mono text-[11px] text-muted tracking-widest">01 — {String(events.length).padStart(2,'0')}</p>
              <p className="font-mono text-[11px] text-muted tracking-widest mt-1">08—09 OCT 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter bar ───────────────────────────────────── */}
      <div className="border-b border-rule sticky top-[64px] z-30 bg-paper/90 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {FILTERS.map((f, i) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] px-4 md:px-6 py-4 border-r border-rule transition-colors flex-shrink-0 ${
                  filter === f ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
                }`}
              >
                <span className="text-[9px] opacity-50">{String(i + 1).padStart(2,'0')}</span>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Event rows ────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="divide-y divide-rule"
          >
            {filtered.map((event, i) => {
              const evFilter = getFilter(event);
              const accent   = ACCENT[evFilter] ?? '#0F0F0D';
              const isHov    = hoveredId === event.id;

              return (
                <div
                  key={event.id}
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`transition-colors duration-200 ${isHov ? 'bg-surface' : ''}`}
                >
                  {/* ── Main row ── */}
                  <div className="flex items-start md:items-center gap-4 md:gap-8 py-6 md:py-8">
                    {/* Number */}
                    <motion.span
                      animate={{ scale: isHov ? 1.2 : 1, color: isHov ? '#FF4D00' : '#8C8C83' }}
                      transition={{ duration: 0.18 }}
                      className="font-mono text-[11px] w-7 md:w-10 flex-shrink-0 pt-1"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.span>

                    {/* Name block */}
                    <div className="flex-1 min-w-0">
                      <motion.h2
                        animate={{ color: isHov ? accent : '#0F0F0D' }}
                        transition={{ duration: 0.18 }}
                        className="font-display leading-none"
                        style={{ fontSize: 'clamp(22px, 3.5vw, 48px)' }}
                      >
                        {event.name}
                      </motion.h2>
                      <p className="font-mono text-[10px] text-muted tracking-widest uppercase mt-1.5">
                        {event.type}
                      </p>
                    </div>

                    {/* Meta: category + fee */}
                    <div className="hidden md:flex items-center gap-6 flex-shrink-0">
                      <span
                        className="font-mono text-[10px] tracking-widest px-2 py-1"
                        style={{ color: accent, border: `1px solid ${accent}30`, background: `${accent}08` }}
                      >
                        {evFilter}
                      </span>
                      <span className="font-mono text-[11px] text-muted w-12 text-right">{event.fee}</span>
                    </div>

                    {/* View link */}
                    <Link
                      to={`/events/${event.id}`}
                      data-cursor-view
                      className="font-mono text-[10px] tracking-widest text-muted hover:text-ink transition-colors flex-shrink-0"
                      aria-label={`View ${event.name}`}
                    >
                      VIEW →
                    </Link>
                  </div>

                  {/* ── Hover expansion ── */}
                  <motion.div
                    initial={false}
                    animate={{ height: isHov ? 'auto' : 0, opacity: isHov ? 1 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-11 md:pl-[4.5rem] pb-8 pr-4 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                      <div className="space-y-3 max-w-2xl">
                        <p className="text-sm text-mid leading-relaxed">{event.description}</p>
                        <div className="flex flex-wrap gap-6 pt-2">
                          <div>
                            <Label className="block">Team Size</Label>
                            <p className="font-grotesk text-sm font-semibold text-ink mt-1">{event.participants}</p>
                          </div>
                          <div>
                            <Label className="block">Entry Fee</Label>
                            <p className="font-grotesk text-sm font-semibold text-ink mt-1">{event.fee}</p>
                          </div>
                          <div>
                            <Label className="block">Date</Label>
                            <p className="font-grotesk text-sm font-semibold text-ink mt-1">{event.date}</p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/events/${event.id}`}
                        data-cursor-register
                        className="bg-ink text-paper font-mono text-[10px] tracking-widest px-8 py-3.5 hover:bg-orange transition-colors flex-shrink-0 inline-block text-center"
                      >
                        REGISTER →
                      </Link>
                    </div>
                  </motion.div>
                </div>
              );
            })}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-mono text-[11px] text-muted tracking-widest">NO EVENTS IN THIS CATEGORY</p>
                <button onClick={() => setFilter('ALL')} className="mt-4 font-mono text-[11px] text-orange underline underline-offset-4">
                  CLEAR FILTER
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom organiser note ─────────────────────────── */}
      <div className="border-t border-rule mt-12">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4">
          <Label>ORGANISED BY — DEPT. OF CSE · DRIEMS UNIVERSITY</Label>
          <Label>08—09 OCTOBER 2026</Label>
        </div>
      </div>
    </div>
  );
}
