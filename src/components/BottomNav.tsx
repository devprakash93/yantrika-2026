import { useNavigate, useLocation } from 'react-router-dom';
import { REGISTER_NOW_URL } from '../config';

// SVG Icons — inline, no external deps
const HomeIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#E8B84B' : 'none'} stroke={active ? '#E8B84B' : '#7A7A88'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const EventsIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#E8B84B' : '#7A7A88'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1" fill={active ? 'rgba(232,184,75,0.15)' : 'none'} />
    <rect x="14" y="3" width="7" height="7" rx="1" fill={active ? 'rgba(232,184,75,0.15)' : 'none'} />
    <rect x="3" y="14" width="7" height="7" rx="1" fill={active ? 'rgba(232,184,75,0.15)' : 'none'} />
    <rect x="14" y="14" width="7" height="7" rx="1" fill={active ? 'rgba(232,184,75,0.15)' : 'none'} />
  </svg>
);

const RulesIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#E8B84B' : '#7A7A88'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill={active ? 'rgba(232,184,75,0.1)' : 'none'} />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </svg>
);

const AboutIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#E8B84B' : '#7A7A88'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill={active ? 'rgba(232,184,75,0.08)' : 'none'} />
    <line x1="12" y1="8" x2="12" y2="8.5" strokeWidth="2.5" />
    <line x1="12" y1="11.5" x2="12" y2="16" />
  </svg>
);

const RegisterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8B84B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="rgba(232,184,75,0.12)" />
    <path d="M9 12h6M13 9l3 3-3 3" />
  </svg>
);

const navItems = [
  { id: 'home',   label: 'Home',   path: '/',       Icon: HomeIcon   },
  { id: 'events', label: 'Events', path: '/events', Icon: EventsIcon },
  { id: 'rules',  label: 'Rules',  path: '/rules',  Icon: RulesIcon  },
  { id: 'about',  label: 'About',  path: '/about',  Icon: AboutIcon  },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav
      className="bottom-nav md:hidden"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Regular nav items */}
      {navItems.map(({ id, label, path, Icon }) => {
        const active = isActive(path);
        return (
          <button
            key={id}
            id={`bottom-nav-${id}`}
            className={`bottom-nav-item ${active ? 'active' : ''}`}
            onClick={() => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label={label}
            aria-current={active ? 'page' : undefined}
          >
            <Icon active={active} />
            <span className="bottom-nav-label">{label}</span>
          </button>
        );
      })}

      {/* Register — opens Google Form */}
      <a
        id="bottom-nav-register"
        href={REGISTER_NOW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bottom-nav-item"
        aria-label="Register for YANTRIKA 2026"
        style={{ color: '#E8B84B' }}
      >
        <RegisterIcon />
        <span className="bottom-nav-label">Register</span>
      </a>
    </nav>
  );
}
