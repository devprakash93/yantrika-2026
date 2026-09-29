import { useState, useEffect } from 'react';
import { EVENT_START_DATE } from '../config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const target = EVENT_START_DATE.getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.expired) {
    return (
      <div className="text-center py-4">
        <p
          className="text-[#E8B84B] font-bold tracking-widest uppercase text-base"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          🎉 YANTRIKA 2026 IS LIVE
        </p>
      </div>
    );
  }

  const boxes = [
    { value: pad(time.days),    label: time.days    === 1 ? 'Day'    : 'Days'    },
    { value: pad(time.hours),   label: time.hours   === 1 ? 'Hour'   : 'Hours'   },
    { value: pad(time.minutes), label: time.minutes === 1 ? 'Minute' : 'Minutes' },
    { value: pad(time.seconds), label: time.seconds === 1 ? 'Second' : 'Seconds' },
  ];

  return (
    <div>
      <p
        className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#7A7A88] text-center mb-3"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Event Starts In
      </p>
      <div className="flex gap-2 sm:gap-3">
        {boxes.map(({ value, label }) => (
          <div key={label} className="countdown-box">
            <span className="countdown-number">{value}</span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
