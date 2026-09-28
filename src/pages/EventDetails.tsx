import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Label = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted ${className}`}>
    {children}
  </span>
);

const ACCENT: Record<string, string> = {
  'Robotics & Hardware':  '#0057FF',
  'Coding & Development': '#0057FF',
  'Design & Innovation':  '#0057FF',
  'Academic & Knowledge': '#8C8C83',
  'Cultural':             '#FF4D00',
  'Cultural / Creative':  '#FF4D00',
  'Gaming':               '#0F0F0D',
};

export default function EventDetails() {
  const { id }  = useParams();
  const event   = events.find(e => e.id === id);
  const eventIdx = events.findIndex(e => e.id === id) + 1;
  const [regOpen, setRegOpen] = useState(false);
  const accent = event ? (ACCENT[event.category] ?? '#0F0F0D') : '#0F0F0D';

  if (!event) {
    return (
      <div className="min-h-screen bg-paper flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-[11px] text-muted tracking-widest">EVENT NOT FOUND</p>
        <Link to="/events" className="font-mono text-[11px] text-orange underline underline-offset-4">
          ← RETURN TO INDEX
        </Link>
      </div>
    );
  }

  const prev = events[eventIdx - 2];
  const next = events[eventIdx];

  return (
    <div className="bg-paper text-ink font-sans min-h-screen">

      {/* ── Hero header ──────────────────────────────────── */}
      <div className="border-b border-rule" style={{ borderTopColor: accent, borderTopWidth: 3 }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-28 pb-12">
          {/* Back nav */}
          <Link
            to="/events"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted hover:text-ink transition-colors mb-10"
          >
            <ArrowLeft className="w-3 h-3" /> BACK TO EVENT INDEX
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              {/* Number + category */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[11px] text-muted">
                  {String(eventIdx).padStart(2, '0')} — {String(events.length).padStart(2, '0')}
                </span>
                <span
                  className="font-mono text-[10px] tracking-widest px-2 py-0.5"
                  style={{ color: accent, border: `1px solid ${accent}40` }}
                >
                  {event.category}
                </span>
              </div>

              {/* Event name */}
              <h1
                className="font-display leading-none tracking-tight"
                style={{ fontSize: 'clamp(44px, 8vw, 120px)', color: '#0F0F0D' }}
              >
                {event.name}
              </h1>
              <p className="font-mono text-[11px] text-muted tracking-widest uppercase mt-3">
                {event.type}
              </p>
            </motion.div>

            {/* Quick meta card */}
            <div className="border border-rule p-6 space-y-4 md:min-w-[220px]">
              {[
                ['DATE', event.date],
                ['TIME', event.time],
                ['VENUE', event.venue],
                ['TEAM', event.participants],
                ['FEE', event.fee],
                ['STATUS', event.status],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6">
                  <Label>{k}</Label>
                  <span
                    className={`font-mono text-[11px] text-right ${
                      k === 'STATUS' && v === 'Registration Open' ? 'text-green-600 font-semibold' : 'text-ink'
                    }`}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

        {/* Main column */}
        <div className="lg:col-span-2 space-y-14">

          {/* Description */}
          <section>
            <Label className="block mb-4">ABOUT THIS EVENT</Label>
            <p className="text-lg text-mid leading-relaxed">{event.description}</p>
          </section>

          {/* Rules */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Label>RULES & GUIDELINES</Label>
              <div className="flex-1 h-px bg-rule" />
            </div>
            <ol className="space-y-4">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-[10px] text-muted flex-shrink-0 mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-mid leading-relaxed">{rule}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Judging */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Label>JUDGING CRITERIA</Label>
              <div className="flex-1 h-px bg-rule" />
            </div>
            <ul className="space-y-3">
              {event.judgingCriteria.map((c, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: accent }} />
                  <p className="text-sm text-mid leading-relaxed">{c}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Prizes */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Label>PRIZES</Label>
              <div className="flex-1 h-px bg-rule" />
            </div>
            <ul className="space-y-3">
              {event.prizes.map((p, i) => (
                <li key={i} className="flex gap-4 items-baseline">
                  <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-grotesk font-semibold text-sm text-ink">{p}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Register CTA */}
          <div className="border border-rule p-8 space-y-5">
            <Label className="block">REGISTER FOR THIS EVENT</Label>
            <p className="text-sm text-mid leading-relaxed">
              Secure your spot in {event.name} before registrations close.
            </p>
            <button
              onClick={() => setRegOpen(true)}
              disabled={event.status !== 'Registration Open'}
              className="w-full bg-ink text-paper font-mono text-[10px] tracking-widest py-4 hover:bg-orange transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {event.status === 'Registration Open' ? 'REGISTER NOW →' : 'COMING SOON'}
            </button>
          </div>

          {/* Coordinator */}
          <div className="border border-rule p-8 space-y-5">
            <Label className="block">EVENT COORDINATORS</Label>
            <div className="space-y-4">
              <div>
                <Label className="text-muted/60 block mb-1">Faculty</Label>
                {event.coordinators.faculty.map((n, i) => (
                  <p key={i} className="text-sm text-ink font-grotesk">{n}</p>
                ))}
              </div>
              <div>
                <Label className="text-muted/60 block mb-1">Student</Label>
                {event.coordinators.student.map((n, i) => (
                  <p key={i} className="text-sm text-ink font-grotesk">{n}</p>
                ))}
              </div>
              <div>
                <Label className="text-muted/60 block mb-1">Contact</Label>
                <p className="text-sm text-orange font-grotesk">{event.coordinators.contact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Prev / Next ──────────────────────────────────── */}
      <div className="border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-0 grid grid-cols-2 divide-x divide-rule">
          {prev ? (
            <Link to={`/events/${prev.id}`} className="py-8 pr-8 hover:bg-surface transition-colors group">
              <Label className="block mb-2">← PREVIOUS</Label>
              <p className="font-display text-xl text-ink group-hover:text-orange transition-colors leading-none">
                {prev.name}
              </p>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/events/${next.id}`} className="py-8 pl-8 hover:bg-surface transition-colors group text-right">
              <Label className="block mb-2">NEXT →</Label>
              <p className="font-display text-xl text-ink group-hover:text-orange transition-colors leading-none">
                {next.name}
              </p>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* ── Registration modal (placeholder) ─────────────── */}
      {regOpen && (
        <div className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-4" onClick={() => setRegOpen(false)}>
          <div className="bg-paper w-full max-w-md p-10 space-y-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start">
              <div>
                <Label className="block mb-1">REGISTRATION</Label>
                <h2 className="font-display text-2xl">{event.name}</h2>
              </div>
              <button onClick={() => setRegOpen(false)} className="font-mono text-[11px] text-muted hover:text-ink">✕</button>
            </div>
            <p className="text-sm text-muted">Registration details will be available soon. Check back or contact the coordinators.</p>
            <p className="font-mono text-[11px] text-orange">{event.coordinators.contact}</p>
            <button onClick={() => setRegOpen(false)} className="w-full bg-ink text-paper font-mono text-[10px] tracking-widest py-4 hover:bg-orange transition-colors">
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
