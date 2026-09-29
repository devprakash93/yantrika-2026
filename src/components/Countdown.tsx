import { useState, useEffect } from 'react';
import { EVENT_START_DATE } from '../config';

interface T { days: number; hours: number; minutes: number; seconds: number; expired: boolean; }

function get(): T {
  const diff = EVENT_START_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

const p = (n: number) => String(n).padStart(2, '0');

export default function Countdown() {
  const [t, setT] = useState<T>(get);
  useEffect(() => { const id = setInterval(() => setT(get()), 1000); return () => clearInterval(id); }, []);

  if (t.expired) {
    return (
      <div className="text-center py-3">
        <p className="ui font-bold tracking-widest uppercase text-sm" style={{ color: '#EAB84A' }}>
          🎉 YANTRIKA 2026 IS LIVE
        </p>
      </div>
    );
  }

  const boxes = [
    { val: p(t.days),    lbl: 'Days'    },
    { val: p(t.hours),   lbl: 'Hours'   },
    { val: p(t.minutes), lbl: 'Min'     },
    { val: p(t.seconds), lbl: 'Sec'     },
  ];

  return (
    <div>
      <p className="ui text-center mb-3" style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--tx-3)' }}>
        Event Starts In
      </p>
      <div className="cd-wrap">
        {boxes.map(({ val, lbl }) => (
          <div key={lbl} className="cd-box">
            <span className="cd-num">{val}</span>
            <span className="cd-label">{lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
