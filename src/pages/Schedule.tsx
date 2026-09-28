import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../data';
import { getEventTheme } from '../data/eventThemes';

const Label = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-mono text-[10px] tracking-[0.18em] uppercase ${className}`}>{children}</span>
);

// Dummy schedule data using actual events
const SCHEDULE_DATA = [
  {
    day: '08 OCT 2026',
    title: 'DAY 01',
    items: [
      { time: '08:30 AM', eventId: 'yantrarush', type: 'event' },
      { time: '10:00 AM', title: 'INAUGURATION CEREMONY', type: 'milestone', color: '#8C8C83' },
      { time: '11:30 AM', eventId: 'bugvidhwans', type: 'event' },
      { time: '01:00 PM', title: 'LUNCH BREAK', type: 'milestone', color: '#8C8C83' },
      { time: '02:00 PM', eventId: 'kalpsetu', type: 'event' },
      { time: '03:30 PM', eventId: 'yantrabarta', type: 'event' },
      { time: '05:00 PM', eventId: 'yantrakhoj', type: 'event' },
      { time: '06:30 PM', eventId: 'swaad-sutra', type: 'event' },
    ]
  },
  {
    day: '09 OCT 2026',
    title: 'DAY 02',
    items: [
      { time: '09:00 AM', eventId: 'yantrasetu', type: 'event' },
      { time: '10:30 AM', eventId: 'chitramanch', type: 'event' },
      { time: '12:00 PM', eventId: 'sheeghrabudhi', type: 'event' },
      { time: '01:00 PM', title: 'LUNCH BREAK', type: 'milestone', color: '#8C8C83' },
      { time: '02:00 PM', eventId: 'ranbhoomi', type: 'event' },
      { time: '04:00 PM', eventId: 'drishya', type: 'event' },
      { time: '06:00 PM', eventId: 'nirtyaspandan', type: 'event' },
      { time: '08:00 PM', title: 'CLOSING CEREMONY & PRIZE DISTRIBUTION', type: 'milestone', color: '#FF4D00' },
    ]
  }
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<number>(0);

  return (
    <div className="bg-[#0F0F0D] text-paper font-sans min-h-screen pb-24">
      
      {/* ── Page header ──────────────────────────────────── */}
      <div className="border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-28 pb-10">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/40 hover:text-white/80 transition-colors mb-8">
            <ArrowLeft className="w-3 h-3" /> BACK TO HOME
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Label className="block mb-3 text-white/40">YANTRIKA 2026 · DRIEMS UNIVERSITY</Label>
              <h1 className="font-display leading-none text-paper" style={{ fontSize: 'clamp(44px, 8vw, 110px)' }}>
                SCHEDULE
              </h1>
            </div>
            <div className="text-right hidden md:block">
              <p className="font-mono text-[11px] text-white/40 tracking-widest">TIMELINE</p>
              <p className="font-mono text-[11px] text-white/40 tracking-widest mt-1">08—09 OCT 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Day selector ───────────────────────────────────── */}
      <div className="sticky top-[64px] z-30 bg-[#0F0F0D]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-0">
            {SCHEDULE_DATA.map((dayData, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`flex flex-col items-start gap-1 font-mono text-[11px] tracking-[0.18em] px-6 py-4 md:py-5 border-r border-white/10 transition-colors flex-shrink-0 ${
                  activeDay === i ? 'bg-paper text-ink' : 'text-white/40 hover:text-white'
                }`}
              >
                <span className={activeDay === i ? 'text-ink/50 text-[9px]' : 'text-white/30 text-[9px]'}>{dayData.day}</span>
                {dayData.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Timeline ────────────────────────────────────────── */}
      <div className="max-w-screen-md mx-auto px-6 md:px-10 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            {/* Vertical timeline line */}
            <div className="absolute left-[39px] md:left-[89px] top-4 bottom-4 w-px bg-white/10" />

            <div className="space-y-12">
              {SCHEDULE_DATA[activeDay].items.map((item, idx) => {
                const event = item.eventId ? events.find(e => e.id === item.eventId) : null;
                const theme = event ? getEventTheme(event.id) : null;
                
                const nodeColor = theme ? theme.primary : (item.color || '#8C8C83');
                const title = event ? event.name : item.title;
                const subtitle = event ? event.type : 'Festival Milestone';

                return (
                  <div key={idx} className="relative flex items-start group">
                    
                    {/* Time (Desktop) */}
                    <div className="hidden md:block w-[80px] flex-shrink-0 pt-0.5 text-right pr-6">
                      <span className="font-mono text-[11px] text-white/50 tracking-widest">{item.time}</span>
                    </div>

                    {/* Node / Marker */}
                    <div className="relative z-10 w-[20px] md:w-[20px] flex-shrink-0 flex justify-center mt-1">
                      <div 
                        className="w-3 h-3 rounded-full border-[2px] border-[#0F0F0D] transition-transform duration-300 group-hover:scale-150"
                        style={{ backgroundColor: nodeColor }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pl-6 md:pl-10">
                      {/* Time (Mobile) */}
                      <div className="md:hidden mb-2">
                        <span className="font-mono text-[10px] text-white/50 tracking-widest">{item.time}</span>
                      </div>
                      
                      <div 
                        className="p-6 md:p-8 border border-white/5 bg-white/0 transition-colors duration-300 group-hover:bg-white/5"
                        style={theme ? { borderLeft: `3px solid ${theme.primary}` } : { borderLeft: `3px solid ${nodeColor}` }}
                      >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div>
                            {theme && (
                              <span 
                                className="inline-block font-mono text-[9px] tracking-widest px-2 py-0.5 mb-3"
                                style={{ color: theme.primary, backgroundColor: `${theme.primary}15`, border: `1px solid ${theme.primary}30` }}
                              >
                                {theme.categoryLabel}
                              </span>
                            )}
                            <h3 className="font-display text-2xl md:text-3xl text-paper leading-none mb-2 group-hover:text-white transition-colors"
                                style={theme ? { color: theme.primary } : { color: '#FAF9F7' }}
                            >
                              {title}
                            </h3>
                            <p className="font-mono text-[11px] text-white/40 tracking-widest uppercase">{subtitle}</p>
                          </div>
                          
                          {event && (
                            <Link 
                              to={`/events/${event.id}`}
                              className="font-mono text-[10px] tracking-widest text-white/30 hover:text-white transition-colors flex-shrink-0 mt-2 md:mt-0"
                            >
                              VIEW DETAILS →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
