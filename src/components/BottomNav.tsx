import { useNavigate, useLocation } from 'react-router-dom';
import { REGISTER_NOW_URL } from '../config';

/* ── Icons ──────────────────────────────────────────────── */
const Home = ({ on }: { on: boolean }) => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill={on ? 'none' : 'none'} stroke={on ? '#EAB84A' : '#6B6B80'} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z" fill={on ? 'rgba(234,184,74,0.1)' : 'none'} />
    <path d="M9 21V13h6v8" />
  </svg>
);

const GridIcon = ({ on }: { on: boolean }) => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={on ? '#EAB84A' : '#6B6B80'} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="8" height="8" rx="1" fill={on ? 'rgba(234,184,74,0.12)' : 'none'} />
    <rect x="13" y="3" width="8" height="8" rx="1" fill={on ? 'rgba(234,184,74,0.12)' : 'none'} />
    <rect x="3" y="13" width="8" height="8" rx="1" fill={on ? 'rgba(234,184,74,0.12)' : 'none'} />
    <rect x="13" y="13" width="8" height="8" rx="1" fill={on ? 'rgba(234,184,74,0.12)' : 'none'} />
  </svg>
);

const DocIcon = ({ on }: { on: boolean }) => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={on ? '#EAB84A' : '#6B6B80'} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill={on ? 'rgba(234,184,74,0.08)' : 'none'} />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </svg>
);

const InfoIcon = ({ on }: { on: boolean }) => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={on ? '#EAB84A' : '#6B6B80'} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" fill={on ? 'rgba(234,184,74,0.08)' : 'none'} />
    <line x1="12" y1="8" x2="12" y2="8.01" strokeWidth="2.5" />
    <line x1="12" y1="11.5" x2="12" y2="16" />
  </svg>
);

const RegIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#EAB84A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" fill="rgba(234,184,74,0.1)" />
    <path d="M8.5 12h7M13.5 9l3 3-3 3" />
  </svg>
);

const items = [
  { id: 'home',   lbl: 'Home',   path: '/',       Icon: Home     },
  { id: 'events', lbl: 'Events', path: '/events', Icon: GridIcon },
  { id: 'rules',  lbl: 'Rules',  path: '/rules',  Icon: DocIcon  },
  { id: 'about',  lbl: 'About',  path: '/about',  Icon: InfoIcon },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = (p: string) => p === '/' ? pathname === '/' : pathname.startsWith(p);

  return (
    <nav className="bnav md:hidden" aria-label="Main navigation">
      {items.map(({ id, lbl, path, Icon }) => (
        <button
          key={id}
          id={`bn-${id}`}
          className={`bnav-item ${active(path) ? 'active' : ''}`}
          onClick={() => { navigate(path); window.scrollTo({ top: 0, behavior: 'instant' }); }}
          aria-label={lbl}
          aria-current={active(path) ? 'page' : undefined}
        >
          <Icon on={active(path)} />
          <span className="bnav-label">{lbl}</span>
        </button>
      ))}
      <a
        id="bn-register"
        href={REGISTER_NOW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bnav-item"
        aria-label="Register"
        style={{ color: 'var(--gold)' }}
      >
        <RegIcon />
        <span className="bnav-label">Register</span>
      </a>
    </nav>
  );
}
