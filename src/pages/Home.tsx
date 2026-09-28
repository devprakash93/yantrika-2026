import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Small reusable label in mono
const Label = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted ${className}`}>
    {children}
  </span>
);

// Corner technical marker
const CornerMark = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const cls: Record<string, string> = {
    tl: 'top-6 left-6 border-t border-l',
    tr: 'top-6 right-6 border-t border-r',
    bl: 'bottom-6 left-6 border-b border-l',
    br: 'bottom-6 right-6 border-b border-r',
  };
  return (
    <div className={`absolute ${cls[position]} border-muted/30 w-6 h-6 hidden md:block`} />
  );
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const [coords, setCoords] = useState({ x: '000.00', y: '000.00' });

  const gridX = useTransform(mouseX, [-1, 1], [-6, 6]);
  const gridY = useTransform(mouseY, [-1, 1], [-6, 6]);
  const typoX = useTransform(mouseX, [-1, 1], [-4, 4]);
  const typoY = useTransform(mouseY, [-1, 1], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect   = heroRef.current.getBoundingClientRect();
    const normX  = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    const normY  = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    mouseX.set(normX);
    mouseY.set(normY);
    setCoords({
      x: (normX * 90 + 20.24).toFixed(2),
      y: (normY * 40 + 85.82).toFixed(2),
    });
  };

  const observe = (el: Element | null, _id: string) => {
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { void entry; },
      { threshold: 0.15 }
    );
    obs.observe(el);
  };

  return (
    <div className="bg-paper text-ink font-sans">

      {/* ── 01. HERO ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex flex-col overflow-hidden pt-16"
        aria-label="Hero"
      >
        {/* Engineering grid — reacts to mouse */}
        <motion.div
          className="absolute inset-0 eng-grid pointer-events-none"
          style={{ x: gridX, y: gridY }}
        />

        {/* Corner marks */}
        <CornerMark position="tl" />
        <CornerMark position="tr" />
        <CornerMark position="bl" />
        <CornerMark position="br" />

        {/* Coordinates display (top-right) */}
        <div className="absolute top-20 right-8 hidden md:flex flex-col items-end gap-1">
          <Label>X — {coords.x}°N</Label>
          <Label>Y — {coords.y}°E</Label>
        </div>

        {/* Node status (bottom-left) */}
        <div className="absolute bottom-10 left-8 hidden md:flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
          <Label>NODE — 01 / SYSTEM ACTIVE</Label>
        </div>

        {/* Scroll indicator (bottom-right) */}
        <div className="absolute bottom-10 right-8 flex flex-col items-end gap-1">
          <Label>SCROLL ↓</Label>
        </div>

        {/* Top labels row */}
        <div className="flex justify-between items-center px-6 md:px-12 pt-8 pb-0">
          <Label>DRIEMS UNIVERSITY · CSE, SOE&T</Label>
          <Label className="hidden sm:block">08—09 OCT 2026</Label>
        </div>

        {/* ── Main typography ── */}
        <div className="flex-1 flex items-center px-6 md:px-12 py-12">
          <motion.div style={{ x: typoX, y: typoY }} className="w-full">
            {/* YANTRIKA */}
            <h1
              className="font-display text-ink leading-none tracking-tight select-none"
              style={{ fontSize: 'clamp(56px, 13vw, 210px)', lineHeight: 0.88 }}
            >
              YANTRIKA
            </h1>
            {/* 2026 — offset right + orange accent */}
            <div className="flex">
              <span
                className="font-display leading-none tracking-tight select-none ml-[8%] md:ml-[12%]"
                style={{
                  fontSize: 'clamp(56px, 13vw, 210px)',
                  lineHeight: 0.88,
                  color: '#FF4D00',
                }}
              >
                2026
              </span>
            </div>

            {/* Annotation bar */}
            <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-6 md:gap-10">
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-muted/40" />
                <Label>08.10.26 — 09.10.26</Label>
                <div className="h-px w-10 bg-muted/40" />
              </div>
              <div className="hidden md:flex items-center gap-3">
                <div className="w-1 h-1 bg-orange rounded-full" />
                <Label>TECHNICAL FEST</Label>
                <div className="w-1 h-1 bg-orange rounded-full" />
                <Label>CULTURAL FEST</Label>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 md:px-12 pb-14">
          <Link
            to="/events"
            data-cursor-view
            className="bg-ink text-paper font-mono text-[11px] tracking-[0.18em] px-8 py-4 hover:bg-orange transition-colors"
          >
            ENTER EVENT INDEX →
          </Link>
          <Link
            to="/schedule"
            className="font-mono text-[11px] tracking-[0.18em] text-muted hover:text-ink transition-colors underline underline-offset-4"
          >
            VIEW SCHEDULE
          </Link>
        </div>
      </section>

      {/* ── 02. TICKER ───────────────────────────────────────── */}
      <div className="border-y border-rule py-3 overflow-hidden bg-paper" aria-hidden>
        <div className="ticker-track flex gap-10 whitespace-nowrap w-max">
          {[...Array(2)].map((_, r) => (
            <span key={r} className="flex gap-10">
              {['YANTRIKA 2026', '08–09 OCT', 'DRIEMS UNIVERSITY', 'CSE DEPT', 'REGISTER NOW', 'EVENT INDEX', 'YANTRIKA 2026', '08–09 OCT', 'DRIEMS UNIVERSITY', 'CSE DEPT'].map((t, i) => (
                <span key={i} className="font-mono text-[11px] tracking-[0.18em] text-muted inline-flex items-center gap-10">
                  {t} <span className="text-orange">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── 03. EVENT INDEX PREVIEW ───────────────────────────── */}
      <EventPreview setObserve={observe} />

      {/* ── 04. ABOUT ─────────────────────────────────────────── */}
      <AboutSection />

      {/* ── 05. REGISTER CTA ──────────────────────────────────── */}
      <RegisterCTA />
    </div>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  EVENT PREVIEW                                          */
/* ─────────────────────────────────────────────────────── */
import { events } from '../data';

import { getEventTheme } from '../data/eventThemes';
import { EventGraphic } from '../components/EventGraphics';

const CATEGORY_BLOCKS = [
  { label: 'TECH',     color: '#1D4ED8', desc: 'Robotics, IoT, Coding & Design' },
  { label: 'ACADEMIC', color: '#7C3AED', desc: 'Paper, Poster & Quiz events' },
  { label: 'CULTURAL', color: '#BE185D', desc: 'Flash mob & performance' },
  { label: 'CREATIVE', color: '#1C1917', extra: '#F5E142', desc: 'Photography & Reels' },
  { label: 'FOOD',     color: '#EA580C', desc: 'Swaad Sutra food festival' },
  { label: 'GAMING',   color: '#DC2626', desc: 'BGMI competitive tournament' },
];

function EventPreview({ setObserve }: { setObserve: (_: Element|null, id: string) => void }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const preview = events.slice(0, 6);

  return (
    <section ref={el => setObserve(el, 'events')} className="bg-paper">
      {/* Category color blocks */}
      <div className="border-y border-rule overflow-x-auto scrollbar-none">
        <div className="flex min-w-max">
          {CATEGORY_BLOCKS.map(cat => (
            <Link
              key={cat.label}
              to="/events"
              className="flex-shrink-0 flex flex-col justify-between p-6 md:p-8 border-r border-rule hover:opacity-90 transition-opacity"
              style={{ backgroundColor: cat.color, minWidth: 160 }}
            >
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/50">{cat.label}</span>
              <div className="mt-8">
                <p className="font-display text-xl text-white leading-none">{cat.label}</p>
                <p className="font-mono text-[9px] text-white/50 mt-1.5 leading-relaxed">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Events list */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10 border-b border-rule pb-6">
          <div>
            <Label className="block mb-3 text-muted">02 — EVENT PREVIEW</Label>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-none">CHOOSE YOUR ARENA</h2>
          </div>
          <Link to="/events" data-cursor-view className="font-mono text-[11px] tracking-widest text-muted hover:text-ink transition-colors hidden md:block">
            VIEW ALL {events.length} →
          </Link>
        </div>

        <div className="divide-y divide-rule">
          {preview.map((event, i) => {
            const theme    = getEventTheme(event.id);
            const isHov    = hoveredId === event.id;
            return (
              <div
                key={event.id}
                onMouseEnter={() => setHoveredId(event.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  borderLeft: `4px solid ${isHov ? theme.primary : 'transparent'}`,
                  backgroundColor: isHov ? `${theme.primary}08` : 'transparent',
                }}
                className="-mx-6 md:-mx-10 px-6 md:px-10 transition-all duration-200"
              >
                <div className="flex items-center gap-4 md:gap-6 py-5 md:py-6">
                  <motion.span
                    animate={{ color: isHov ? theme.primary : '#8C8C83', scale: isHov ? 1.15 : 1 }}
                    className="font-mono text-[12px] font-bold w-8 flex-shrink-0"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </motion.span>
                  <div className="flex-1 min-w-0">
                    <p className="font-display leading-none truncate transition-colors" style={{ fontSize:'clamp(19px,3vw,36px)', color: isHov ? theme.primary : '#0F0F0D' }}>
                      {event.name}
                    </p>
                    <p className="font-mono text-[10px] text-muted tracking-widest uppercase mt-1">{event.type}</p>
                  </div>
                  <motion.div animate={{ opacity: isHov ? 1 : 0.3 }} className="flex-shrink-0 hidden sm:block">
                    <EventGraphic type={theme.graphicType} color={theme.primary} muted={theme.muted} size={60}/>
                  </motion.div>
                  <Link to={`/events/${event.id}`} data-cursor-view className="font-mono text-[10px] tracking-widest text-muted hover:text-ink transition-colors flex-shrink-0 ml-2">
                    VIEW →
                  </Link>
                </div>
                <motion.div initial={false} animate={{ height: isHov ? 'auto' : 0, opacity: isHov ? 1 : 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                  <div className="pl-12 pb-6 pr-2 flex flex-col md:flex-row md:items-end gap-4">
                    <p className="text-sm text-mid leading-relaxed max-w-xl">{event.description}</p>
                    <Link to={`/events/${event.id}`} data-cursor-register className="font-mono text-[10px] tracking-widest px-6 py-3 text-paper inline-block flex-shrink-0 transition-opacity hover:opacity-80" style={{ backgroundColor: theme.primary }}>
                      REGISTER →
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/events" className="font-mono text-[11px] tracking-widest text-muted hover:text-ink underline underline-offset-4">
            VIEW ALL {events.length} EVENTS →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  ABOUT SECTION                                          */
/* ─────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section className="border-t border-rule bg-ink text-paper py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <Label className="text-white/30 block mb-4">03 — ABOUT YANTRIKA</Label>
          <h2
            className="font-display text-paper leading-none"
            style={{ fontSize: 'clamp(40px, 6vw, 90px)' }}
          >
            MORE THAN<br />A FESTIVAL.
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-paper/70 text-lg leading-relaxed">
            YANTRIKA 2026 is the annual technical and cultural festival of the Department of Computer Science and Engineering, School of Engineering & Technology, DRIEMS University. It brings together students across disciplines for two days of intense competition, creative performance, and engineering excellence.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
            {[['2', 'DAYS'], ['10+', 'EVENTS'], ['1', 'CAMPUS']].map(([num, lbl]) => (
              <div key={lbl}>
                <p className="font-display text-4xl md:text-5xl text-orange">{num}</p>
                <Label className="text-white/30 mt-1 block">{lbl}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  REGISTER CTA                                           */
/* ─────────────────────────────────────────────────────── */
function RegisterCTA() {
  return (
    <section className="bg-orange py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <Label className="text-ink/50 block mb-3">04 — REGISTER</Label>
          <h2 className="font-display text-ink leading-none" style={{ fontSize: 'clamp(36px, 6vw, 88px)' }}>
            READY TO<br />COMPETE?
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            to="/events"
            data-cursor-register
            className="bg-ink text-paper font-mono text-[11px] tracking-widest px-10 py-5 hover:opacity-80 transition-opacity inline-block"
          >
            VIEW EVENT INDEX →
          </Link>
          <p className="font-mono text-[10px] text-ink/50 tracking-widest">
            08—09 OCTOBER 2026 · DRIEMS UNIVERSITY
          </p>
        </div>
      </div>
    </section>
  );
}
