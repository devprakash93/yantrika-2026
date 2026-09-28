import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { events } from '../data';
import { getEventTheme } from '../data/eventThemes';
import { EventGraphic } from '../components/EventGraphics';

const Label = ({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <span className={`font-mono text-[10px] tracking-[0.18em] uppercase ${className}`} style={style}>{children}</span>
);

export default function EventDetails() {
  const { id }   = useParams();
  const event    = events.find(e => e.id === id);
  const eventIdx = events.findIndex(e => e.id === id);
  const [regOpen, setRegOpen] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen bg-paper flex flex-col items-center justify-center gap-4 pt-16">
        <Label className="text-muted">EVENT NOT FOUND</Label>
        <Link to="/events" className="font-mono text-[11px] text-orange underline underline-offset-4">
          ← RETURN TO EVENT INDEX
        </Link>
      </div>
    );
  }

  const theme  = getEventTheme(event.id);
  const prev   = events[eventIdx - 1];
  const next   = events[eventIdx + 1];
  const numStr = String(eventIdx + 1).padStart(2, '0');
  const textOnDark = '#FAF9F7';

  return (
    <div className="bg-paper text-ink font-sans min-h-screen">

      {/* ── Colored full-width HERO ───────────────────────── */}
      <div
        style={{ backgroundColor: theme.dark }}
        className="relative overflow-hidden"
      >
        {/* Back nav */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 pt-24 md:pt-28 pb-0">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/50 hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> BACK TO EVENT INDEX
          </Link>
        </div>

        {/* Hero content grid */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 py-10 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          {/* Left: text */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {/* Number + category */}
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[11px]" style={{ color: `${textOnDark}40` }}>
                {numStr} — {String(events.length).padStart(2,'0')}
              </span>
              <span
                className="font-mono text-[10px] tracking-widest px-2.5 py-0.5"
                style={{ color: theme.muted, border: `1px solid ${theme.muted}40` }}
              >
                {theme.categoryLabel}
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-display leading-none tracking-tight"
              style={{ fontSize: 'clamp(44px, 8.5vw, 120px)', color: textOnDark }}
            >
              {event.name}
            </h1>

            {/* Type */}
            <p className="font-mono text-[12px] tracking-widest uppercase mt-4" style={{ color: theme.muted }}>
              {event.type}
            </p>

            {/* Quick meta pills */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                ['ENTRY', event.fee],
                ['TEAM', event.participants],
                ['DATE', event.date],
                ['STATUS', event.status],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5">
                  <Label className="block" style={{ color: `${textOnDark}35` }}>{k}</Label>
                  <span
                    className="font-grotesk text-sm font-semibold"
                    style={{ color: k === 'STATUS' && v === 'Registration Open' ? theme.muted : textOnDark }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: large graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block flex-shrink-0"
          >
            <EventGraphic
              type={theme.graphicType}
              color={theme.muted}
              muted={`${textOnDark}20`}
              size={260}
            />
          </motion.div>
        </div>

        {/* Mobile graphic strip */}
        <div
          className="md:hidden flex justify-center py-6 opacity-60"
          style={{ borderTop: `1px solid ${textOnDark}10` }}
        >
          <EventGraphic type={theme.graphicType} color={theme.muted} muted={`${textOnDark}20`} size={140}/>
        </div>

        {/* Bottom gradient fade to paper */}
        <div className="h-8 w-full" style={{ background: `linear-gradient(to bottom, ${theme.dark}, #FAF9F7)` }}/>
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

        {/* Main content column */}
        <div className="lg:col-span-2 space-y-12">
          {/* Description */}
          <section>
            <div className="flex items-center gap-4 mb-5">
              <Label className="text-muted">ABOUT THIS EVENT</Label>
              <div className="flex-1 h-px bg-rule"/>
            </div>
            <p className="text-lg text-mid leading-relaxed">{event.description}</p>
          </section>

          {/* Rules */}
          <section>
            <div className="flex items-center gap-4 mb-5">
              <Label className="text-muted">RULES & GUIDELINES</Label>
              <div className="flex-1 h-px bg-rule"/>
            </div>
            <ol className="space-y-4">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-[10px] text-muted flex-shrink-0 mt-0.5 w-5">
                    {String(i+1).padStart(2,'0')}
                  </span>
                  <p className="text-sm text-mid leading-relaxed">{rule}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Judging */}
          <section>
            <div className="flex items-center gap-4 mb-5">
              <Label className="text-muted">JUDGING CRITERIA</Label>
              <div className="flex-1 h-px bg-rule"/>
            </div>
            <ul className="space-y-3">
              {event.judgingCriteria.map((c, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: theme.primary }}/>
                  <p className="text-sm text-mid leading-relaxed">{c}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Prizes */}
          <section>
            <div className="flex items-center gap-4 mb-5">
              <Label className="text-muted">PRIZES</Label>
              <div className="flex-1 h-px bg-rule"/>
            </div>
            <ul className="space-y-3">
              {event.prizes.map((p, i) => (
                <li key={i} className="flex gap-4 items-baseline">
                  <span className="font-mono text-[10px] text-muted w-5">{String(i+1).padStart(2,'0')}</span>
                  <p className="font-grotesk font-semibold text-sm text-ink">{p}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Register CTA */}
          <div
            className="p-7 space-y-5"
            style={{ borderTop: `3px solid ${theme.primary}`, background: `${theme.primary}06`, border: `1px solid ${theme.primary}20` }}
          >
            <Label className="text-muted block">PARTICIPATE</Label>
            <div className="space-y-2">
              <p className="font-display text-2xl text-ink">{event.name}</p>
              <p className="font-mono text-[10px] text-muted">{event.type}</p>
            </div>
            <button
              onClick={() => setRegOpen(true)}
              disabled={event.status !== 'Registration Open'}
              className="w-full font-mono text-[11px] tracking-widest py-4 text-paper transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: theme.primary }}
            >
              {event.status === 'Registration Open' ? 'REGISTER NOW →' : 'COMING SOON'}
            </button>
            {event.status !== 'Registration Open' && (
              <p className="font-mono text-[10px] text-muted text-center">
                Registration details will be announced soon.
              </p>
            )}
          </div>

          {/* All info */}
          <div className="border border-rule p-7 space-y-4">
            <Label className="text-muted block">EVENT INFORMATION</Label>
            {[
              ['DATE',   event.date],
              ['TIME',   event.time],
              ['VENUE',  event.venue],
              ['TEAM',   event.participants],
              ['FEE',    event.fee],
              ['STATUS', event.status],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-rule last:border-0">
                <Label className="text-muted">{k}</Label>
                <span className="font-mono text-[11px] text-ink text-right">{v}</span>
              </div>
            ))}
          </div>

          {/* Coordinators */}
          <div className="border border-rule p-7 space-y-4">
            <Label className="text-muted block">COORDINATORS</Label>
            <div className="space-y-3">
              {[
                ['FACULTY', event.coordinators.faculty.join(', ')],
                ['STUDENT', event.coordinators.student.join(', ')],
                ['CONTACT', event.coordinators.contact],
              ].map(([k, v]) => (
                <div key={k}>
                  <Label className="text-muted/50 block mb-0.5">{k}</Label>
                  <p className="font-grotesk text-sm" style={{ color: k === 'CONTACT' ? theme.primary : '#0F0F0D' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Prev / Next ──────────────────────────────────── */}
      <div className="border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-0 grid grid-cols-2 divide-x divide-rule">
          {prev ? (
            <Link to={`/events/${prev.id}`} className="py-8 pr-6 hover:bg-surface transition-colors group flex flex-col gap-2">
              <span className="font-mono text-[10px] text-muted flex items-center gap-1">
                <ArrowLeft className="w-3 h-3"/> PREVIOUS
              </span>
              <p className="font-display text-xl text-ink group-hover:text-orange transition-colors leading-none">{prev.name}</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: getEventTheme(prev.id).primary }}/>
            </Link>
          ) : <div/>}
          {next ? (
            <Link to={`/events/${next.id}`} className="py-8 pl-6 hover:bg-surface transition-colors group flex flex-col items-end gap-2 text-right">
              <span className="font-mono text-[10px] text-muted flex items-center gap-1">
                NEXT <ArrowRight className="w-3 h-3"/>
              </span>
              <p className="font-display text-xl text-ink group-hover:text-orange transition-colors leading-none">{next.name}</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: getEventTheme(next.id).primary }}/>
            </Link>
          ) : <div/>}
        </div>
      </div>

      {/* ── Registration modal ────────────────────────────── */}
      <AnimatePresence>
        {regOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(15,15,13,0.75)' }}
            onClick={() => setRegOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95 }}
              className="bg-paper w-full max-w-md p-10 space-y-6"
              style={{ borderTop: `4px solid ${theme.primary}` }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start">
                <div>
                  <Label className="text-muted block mb-1">REGISTRATION</Label>
                  <h2 className="font-display text-2xl">{event.name}</h2>
                </div>
                <button onClick={() => setRegOpen(false)} className="font-mono text-[11px] text-muted hover:text-ink transition-colors">✕ CLOSE</button>
              </div>
              <p className="text-sm text-mid leading-relaxed">
                Registration details will be announced soon. Please check back or contact the event coordinators.
              </p>
              <p className="font-mono text-[11px]" style={{ color: theme.primary }}>{event.coordinators.contact}</p>
              <button
                onClick={() => setRegOpen(false)}
                className="w-full font-mono text-[10px] tracking-widest py-4 text-paper transition-opacity hover:opacity-80"
                style={{ backgroundColor: theme.primary }}
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
