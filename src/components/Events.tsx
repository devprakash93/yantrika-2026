import { useEffect, useRef, useState } from 'react';
import { REGISTER_NOW_URL } from '../config';

// ────────────────────────────────────────────────────────────
// Event Data
// ────────────────────────────────────────────────────────────
type EventCategory =
  | 'Robotics & Hardware'
  | 'Coding & Development'
  | 'Design & Innovation'
  | 'Academic & Knowledge'
  | 'Gaming'
  | 'Cultural';

interface EventItem {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  category: EventCategory;
  description: string;
  note?: string;
  teamSize: string;
  fee: string;
  eligibility?: string;
  buttonLabel: string;
  suggestedTopics?: string[];
}

const events: EventItem[] = [
  {
    id: 'yantrarush',
    num: '01',
    name: 'YantraRush',
    subtitle: 'F1 RC Car Race',
    category: 'Robotics & Hardware',
    description:
      'Put your driving skills and RC engineering to the test. Participants compete with remote-controlled cars on a challenging race track where speed, control, precision, and strategy matter.',
    teamSize: '1 Participant',
    fee: '₹200',
    buttonLabel: 'Register Now',
  },
  {
    id: 'yantrasetu',
    num: '02',
    name: 'YantraSetu',
    subtitle: 'IoT Challenge',
    category: 'Robotics & Hardware',
    description:
      'A technical challenge based around the Internet of Things. Participants demonstrate their ability to understand, design and present IoT-based solutions while solving a given technical challenge.',
    teamSize: '2–4 Participants',
    fee: '₹200',
    buttonLabel: 'Register Now',
  },
  {
    id: 'bugvidhwans',
    num: '03',
    name: 'BugVidhwans',
    subtitle: 'Code Debugging',
    category: 'Coding & Development',
    description:
      'Can you find the bug before time runs out? Participants are given programs containing errors and must identify, understand and fix them within the given time.',
    teamSize: '1 Participant',
    fee: '₹100',
    buttonLabel: 'Register Now',
  },
  {
    id: 'kalpsetu',
    num: '04',
    name: 'KalpSetu',
    subtitle: 'Business Model Challenge',
    category: 'Design & Innovation',
    description:
      'Turn an idea into a meaningful business concept. Participants develop and present a business or project idea covering the problem, proposed solution, target users, value proposition and business potential.',
    teamSize: '2–4 Participants',
    fee: '₹200',
    buttonLabel: 'Register Now',
  },
  {
    id: 'yantrabarta',
    num: '05',
    name: 'YantraBarta',
    subtitle: 'Technical Paper Presentation',
    category: 'Academic & Knowledge',
    description:
      'A platform for students to explore and present ideas, research, emerging technologies and technical concepts. Participants present a technical paper and demonstrate their understanding of the selected topic.',
    teamSize: '1 Participant',
    fee: '₹100',
    suggestedTopics: [
      'Artificial Intelligence', 'Machine Learning', 'Cybersecurity',
      'Cloud Computing', 'IoT', 'Data Science', 'Robotics',
      'Software Engineering', 'Emerging Technologies',
    ],
    buttonLabel: 'Register Now',
  },
  {
    id: 'chitramanch',
    num: '06',
    name: 'ChitraManch',
    subtitle: 'Poster Presentation',
    category: 'Academic & Knowledge',
    description:
      'Turn technical ideas into powerful visual communication. Participants create and present a poster based on a selected technical, scientific, social or innovative topic.',
    teamSize: '1 Participant',
    fee: '₹100',
    buttonLabel: 'Register Now',
  },
  {
    id: 'yantrakhoj',
    num: '07',
    name: 'YantraKhoj',
    subtitle: 'Guess the Gadget',
    category: 'Academic & Knowledge',
    description:
      'Think you know technology? Identify gadgets, devices, components and technology-related objects using visual clues, descriptions or other challenges.',
    teamSize: '1 Participant',
    fee: '₹100',
    buttonLabel: 'Register Now',
  },
  {
    id: 'sheeghrabudhi',
    num: '08',
    name: 'SheeghraBudhi',
    subtitle: 'Rapid Fire Contest',
    category: 'Academic & Knowledge',
    description:
      'Fast questions. Faster answers. A high-energy rapid-fire competition requiring quick thinking, technical awareness and presence of mind.',
    teamSize: '1 Participant',
    fee: '₹100',
    buttonLabel: 'Register Now',
  },
  {
    id: 'ranbhoomi',
    num: '09',
    name: 'Ranbhoomi',
    subtitle: 'Gaming Championship',
    category: 'Gaming',
    description:
      'Enter the battlefield. Compete with your squad. Claim the victory. Ranbhoomi is the gaming competition of YANTRIKA 2026.',
    teamSize: '4–6 Players',
    fee: '₹200 / Team',
    eligibility: 'DRIEMS University Students Only',
    note: 'Detailed game format, match structure and regulations will be provided in the official Rules & Regulations.',
    buttonLabel: 'Register Now',
  },
  {
    id: 'swaadsutra',
    num: '10',
    name: 'SwaadSutra',
    subtitle: 'Food Festival',
    category: 'Cultural',
    description:
      'Bring your culinary creativity to YANTRIKA 2026. SwaadSutra is a stall-based food festival where participants can prepare, present and serve food while creating an enjoyable experience for visitors.',
    teamSize: '2–5 Participants',
    fee: 'Own Expense',
    buttonLabel: 'Register / Book Stall',
  },
  {
    id: 'nirtyaspandan',
    num: '11',
    name: 'NirtyaSpandan',
    subtitle: 'Flash Mob / Group Dance',
    category: 'Cultural',
    description:
      'Bring energy, rhythm and creativity to the stage. NirtyaSpandan is a group performance event where teams showcase synchronized choreography and creative performance.',
    teamSize: '8–15 Participants',
    fee: '₹200',
    buttonLabel: 'Register Now',
  },
  {
    id: 'drishya',
    num: '12',
    name: 'Drishya',
    subtitle: 'Photography / Reels Contest',
    category: 'Cultural',
    description:
      'Capture the moment. Tell the story. Drishya challenges participants to showcase creativity through photography and short-form video content.',
    teamSize: '1 Participant',
    fee: '₹50',
    buttonLabel: 'Register Now',
  },
];

// ────────────────────────────────────────────────────────────
// Category config
// ────────────────────────────────────────────────────────────
const categoryConfig: Record<EventCategory, { color: string; bg: string }> = {
  'Robotics & Hardware':  { color: '#4A90D9', bg: 'rgba(74,144,217,0.1)' },
  'Coding & Development': { color: '#50C878', bg: 'rgba(80,200,120,0.1)' },
  'Design & Innovation':  { color: '#C8A96A', bg: 'rgba(200,169,106,0.1)' },
  'Academic & Knowledge': { color: '#9B7FD4', bg: 'rgba(155,127,212,0.1)' },
  'Gaming':               { color: '#FF6B6B', bg: 'rgba(255,107,107,0.1)' },
  'Cultural':             { color: '#FF8C42', bg: 'rgba(255,140,66,0.1)' },
};

const allCategories: EventCategory[] = [
  'Robotics & Hardware', 'Coding & Development', 'Design & Innovation',
  'Academic & Knowledge', 'Gaming', 'Cultural',
];

// ────────────────────────────────────────────────────────────
// Event Card
// ────────────────────────────────────────────────────────────
function EventCard({ event }: { event: EventItem }) {
  const cat = categoryConfig[event.category];
  return (
    <article className="event-card reveal" aria-labelledby={`event-${event.id}-name`}>
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <span
          className="text-[2.5rem] font-black leading-none text-[#1E1E1E]"
          aria-hidden="true"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {event.num}
        </span>
        <span
          className="category-badge"
          style={{ color: cat.color, background: cat.bg }}
        >
          {event.category}
        </span>
      </div>

      {/* Event name */}
      <div>
        <h3
          id={`event-${event.id}-name`}
          className="text-xl font-black text-[#F0EDE6] leading-tight mb-0.5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {event.name}
        </h3>
        <p
          className="text-xs font-semibold tracking-widest text-[#C8A96A] uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {event.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-[#808080] text-sm leading-relaxed flex-grow">
        {event.description}
      </p>

      {/* Suggested topics */}
      {event.suggestedTopics && (
        <div className="flex flex-wrap gap-1.5">
          {event.suggestedTopics.map((t) => (
            <span
              key={t}
              className="text-[0.6rem] px-2 py-0.5 rounded-sm border border-[#2A2A2A] text-[#606060]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Note */}
      {event.note && (
        <p className="text-[0.7rem] text-[#606060] italic border-l-2 border-[#2A2A2A] pl-3 leading-relaxed">
          {event.note}
        </p>
      )}

      {/* Meta row */}
      <div className="flex items-center gap-4 pt-2 border-t border-[#1E1E1E]">
        <div className="flex-1">
          <p className="text-[0.6rem] text-[#505050] uppercase tracking-widest mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Team Size
          </p>
          <p className="text-xs font-semibold text-[#F0EDE6]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {event.teamSize}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-[0.6rem] text-[#505050] uppercase tracking-widest mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Entry Fee
          </p>
          <p className="text-xs font-semibold text-[#F0EDE6]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {event.fee}
          </p>
        </div>
        {event.eligibility && (
          <div className="flex-1">
            <p className="text-[0.6rem] text-[#505050] uppercase tracking-widest mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Eligibility
            </p>
            <p className="text-xs font-semibold text-[#C8A96A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {event.eligibility}
            </p>
          </div>
        )}
      </div>

      {/* Register Button */}
      <a
        id={`register-${event.id}`}
        href={REGISTER_NOW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-register"
        aria-label={`Register for ${event.name} — ${event.subtitle}`}
      >
        {event.buttonLabel}
      </a>
    </article>
  );
}

// ────────────────────────────────────────────────────────────
// Summary Table
// ────────────────────────────────────────────────────────────
function EventSummaryTable() {
  return (
    <div className="mt-20 reveal">
      <h3
        className="text-2xl font-black text-[#F0EDE6] mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Event Summary
      </h3>
      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full border-collapse text-sm" role="table" aria-label="Event summary table">
          <thead>
            <tr className="border-b border-[#2A2A2A]">
              <th className="text-left py-3 pr-6 text-[0.65rem] font-semibold tracking-widest text-[#606060] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Event</th>
              <th className="text-left py-3 pr-6 text-[0.65rem] font-semibold tracking-widest text-[#606060] uppercase hidden sm:table-cell" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Category</th>
              <th className="text-left py-3 pr-6 text-[0.65rem] font-semibold tracking-widest text-[#606060] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Team Size</th>
              <th className="text-left py-3 text-[0.65rem] font-semibold tracking-widest text-[#606060] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Fee</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev, i) => {
              const cat = categoryConfig[ev.category];
              return (
                <tr
                  key={ev.id}
                  className={`border-b border-[#1A1A1A] hover:bg-[#141414] transition-colors duration-150 ${i % 2 === 0 ? '' : ''}`}
                >
                  <td className="py-3 pr-6">
                    <div>
                      <p className="font-semibold text-[#F0EDE6] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{ev.name}</p>
                      <p className="text-[0.65rem] text-[#606060] hidden sm:block">{ev.subtitle}</p>
                    </div>
                  </td>
                  <td className="py-3 pr-6 hidden sm:table-cell">
                    <span
                      className="text-[0.6rem] font-semibold px-2 py-0.5 rounded-sm"
                      style={{ color: cat.color, background: cat.bg, fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {ev.category}
                    </span>
                  </td>
                  <td className="py-3 pr-6 text-[#A0A09A] text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{ev.teamSize}</td>
                  <td className="py-3 font-semibold text-[#C8A96A] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{ev.fee}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Events Section
// ────────────────────────────────────────────────────────────
export default function Events() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<EventCategory | 'All'>('All');

  const filtered = activeFilter === 'All' ? events : events.filter((e) => e.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-[#1A1A1A] bg-[#080808]"
      aria-labelledby="events-heading"
    >
      <div className="section-container">

        {/* Section Header */}
        <div className="reveal mb-12">
          <span className="gold-line" aria-hidden="true" />
          <p
            className="text-[0.65rem] font-semibold tracking-[0.25em] text-[#C8A96A] uppercase mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Competitions
          </p>
          <h2
            id="events-heading"
            className="text-4xl md:text-5xl font-black leading-tight text-[#F0EDE6]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Events 2026
          </h2>
          <p className="text-[#A0A09A] mt-3 max-w-xl text-sm leading-relaxed">
            12 competitions across 6 categories. Choose your event, register through the official form, and compete.
          </p>
        </div>

        {/* Category Filters */}
        <div className="reveal mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter events by category">
          <button
            className={`text-[0.65rem] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-all duration-200 ${
              activeFilter === 'All'
                ? 'bg-[#C8A96A] text-[#0A0A0A] border-[#C8A96A]'
                : 'border-[#2A2A2A] text-[#808080] hover:border-[#C8A96A]/50 hover:text-[#F0EDE6]'
            }`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            onClick={() => setActiveFilter('All')}
            aria-pressed={activeFilter === 'All'}
          >
            All Events
          </button>
          {allCategories.map((cat) => {
            const cfg = categoryConfig[cat];
            return (
              <button
                key={cat}
                className={`text-[0.65rem] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-all duration-200 ${
                  activeFilter === cat
                    ? 'border-transparent text-[#0A0A0A]'
                    : 'border-[#2A2A2A] text-[#808080] hover:text-[#F0EDE6]'
                }`}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  ...(activeFilter === cat ? { background: cfg.color } : {}),
                  ...(activeFilter !== cat ? { '--hover-border': cfg.color } as React.CSSProperties : {}),
                }}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Summary Table */}
        <EventSummaryTable />

      </div>
    </section>
  );
}
