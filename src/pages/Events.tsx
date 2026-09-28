import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { events } from '../data';
import { getEventTheme, FILTER_COLORS } from '../data/eventThemes';
import { EventGraphic } from '../components/EventGraphics';

const FILTERS = ['ALL','TECH','ACADEMIC','CULTURAL','CREATIVE','FOOD','GAMING'] as const;
type Filter = typeof FILTERS[number];

const Label = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-mono text-[10px] tracking-[0.18em] uppercase ${className}`}>{children}</span>
);

export default function Events() {
  const [filter,    setFilter]    = useState<Filter>('ALL');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = events.filter(e =>
    filter === 'ALL' || getEventTheme(e.id).filterKey === filter
  );

  return (
    <div className="bg-paper text-ink font-sans min-h-screen">

      {/* ── Dark hero header ─────────────────────────────── */}
      <div className="bg-[#0F0F0D] text-paper">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-28 pb-12">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/40 hover:text-white/80 transition-colors mb-10">
            <ArrowLeft className="w-3 h-3" /> HOME
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Label className="text-white/30 block mb-3">YANTRIKA 2026 · DRIEMS UNIVERSITY</Label>
              <h1 className="font-display leading-none" style={{ fontSize: 'clamp(52px, 10vw, 130px)' }}>
                EVENT<br />
                <span style={{ color: '#FF4D00' }}>INDEX</span>
              </h1>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2">
              {FILTERS.slice(1).map(f => (
                <div key={f} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-white/30 tracking-widest">{f}</span>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: FILTER_COLORS[f] }}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Category filter bar ───────────────────────────── */}
      <div className="sticky top-[64px] z-30 bg-paper border-b border-rule">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex items-stretch overflow-x-auto scrollbar-none">
            {FILTERS.map((f, filterIdx) => {
              const active = filter === f;
              const col = FILTER_COLORS[f];
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`flex items-center gap-2.5 font-mono text-[11px] tracking-widest px-4 md:px-5 py-3.5 border-r border-rule flex-shrink-0 transition-all ${
                    active ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
                  }`}
                >
                  <span className="opacity-40 text-[9px]">{String(filterIdx+1).padStart(2,'0')}</span>
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: active ? '#FAF9F7' : col, opacity: active ? 1 : 0.7 }}
                  />
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Event rows ────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <Label className="text-muted block">NO EVENTS IN THIS CATEGORY</Label>
                <button onClick={() => setFilter('ALL')} className="mt-4 font-mono text-[11px] text-orange underline underline-offset-4">
                  CLEAR FILTER
                </button>
              </div>
            ) : (
              <div className="divide-y divide-rule">
                {filtered.map((event) => {
                  const theme  = getEventTheme(event.id);
                  const isHov  = hoveredId === event.id;
                  const globalIdx = events.findIndex(e => e.id === event.id) + 1;

                  return (
                    <div
                      key={event.id}
                      onMouseEnter={() => setHoveredId(event.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      style={{
                        borderLeft: `4px solid ${isHov ? theme.primary : 'transparent'}`,
                        backgroundColor: isHov ? `${theme.primary}08` : 'transparent',
                      }}
                      className="transition-all duration-200 -mx-6 md:-mx-10 px-6 md:px-10"
                    >
                      {/* ── Main visible row ── */}
                      <div className="flex items-center gap-4 md:gap-6 py-5 md:py-7">
                        {/* Number */}
                        <motion.span
                          animate={{ scale: isHov ? 1.15 : 1 }}
                          className="font-mono text-[13px] font-bold w-8 flex-shrink-0 select-none"
                          style={{ color: isHov ? theme.primary : '#8C8C83' }}
                        >
                          {String(globalIdx).padStart(2,'0')}
                        </motion.span>

                        {/* Name + type */}
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-display leading-none transition-colors"
                            style={{
                              fontSize: 'clamp(19px, 3vw, 40px)',
                              color: isHov ? theme.primary : '#0F0F0D',
                            }}
                          >
                            {event.name}
                          </p>
                          <p className="font-mono text-[10px] text-muted tracking-widest uppercase mt-1.5">
                            {event.type}
                          </p>
                        </div>

                        {/* Category + fee — desktop */}
                        <div className="hidden md:flex items-center gap-5 flex-shrink-0">
                          <span
                            className="font-mono text-[10px] tracking-widest px-2.5 py-1"
                            style={{ color: theme.primary, backgroundColor: `${theme.primary}15`, border: `1px solid ${theme.primary}30` }}
                          >
                            {theme.categoryLabel}
                          </span>
                          <span className="font-mono text-[11px] text-muted w-14 text-right">{event.fee}</span>
                        </div>

                        {/* Graphic — always visible, bigger on hover */}
                        <motion.div
                          animate={{ opacity: isHov ? 1 : 0.35, scale: isHov ? 1.05 : 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 hidden sm:block"
                        >
                          <EventGraphic
                            type={theme.graphicType}
                            color={theme.primary}
                            muted={theme.muted}
                            size={isHov ? 80 : 64}
                          />
                        </motion.div>

                        {/* View link */}
                        <Link
                          to={`/events/${event.id}`}
                          data-cursor-view
                          className="font-mono text-[10px] tracking-widest text-muted hover:text-ink transition-colors flex-shrink-0 ml-2"
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
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 pl-12 pb-7 pr-2">
                          <div className="space-y-3 max-w-2xl">
                            <p className="text-sm text-mid leading-relaxed">{event.description}</p>
                            <div className="flex flex-wrap gap-6 pt-1">
                              {[['TEAM', event.participants], ['FEE', event.fee], ['DATE', event.date]].map(([k,v]) => (
                                <div key={k}>
                                  <Label className="text-muted/60 block">{k}</Label>
                                  <p className="font-grotesk text-sm font-semibold text-ink mt-0.5">{v}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <Link
                            to={`/events/${event.id}`}
                            data-cursor-register
                            className="text-paper font-mono text-[10px] tracking-widest px-8 py-3.5 flex-shrink-0 inline-block text-center transition-opacity hover:opacity-80"
                            style={{ backgroundColor: theme.primary }}
                          >
                            REGISTER →
                          </Link>
                        </div>
                      </motion.div>

                      {/* Mobile: fee + category label */}
                      <div className="flex items-center gap-3 pb-4 pl-12 sm:hidden">
                        <span
                          className="font-mono text-[9px] tracking-widest px-2 py-0.5"
                          style={{ color: theme.primary, border: `1px solid ${theme.primary}30` }}
                        >
                          {theme.categoryLabel}
                        </span>
                        <span className="font-mono text-[10px] text-muted">{event.fee}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom strip ─────────────────────────────────── */}
      <div className="border-t border-rule mt-8 bg-[#0F0F0D]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-3">
          <Label className="text-white/30">ORGANISED BY — DEPT. OF CSE · DRIEMS UNIVERSITY</Label>
          <Label className="text-white/30">08—09 OCTOBER 2026</Label>
        </div>
      </div>
    </div>
  );
}
