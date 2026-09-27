import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-08T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-center mt-12 mb-8">
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-display font-bold bg-card border text-card-foreground w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg shadow-sm">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">Days</span>
      </div>
      <div className="text-3xl md:text-5xl font-bold text-muted-foreground py-2 md:py-4">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-display font-bold bg-card border text-card-foreground w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg shadow-sm">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">Hours</span>
      </div>
      <div className="text-3xl md:text-5xl font-bold text-muted-foreground py-2 md:py-4">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-display font-bold bg-card border text-card-foreground w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg shadow-sm">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">Mins</span>
      </div>
      <div className="text-3xl md:text-5xl font-bold text-muted-foreground py-2 md:py-4">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-display font-bold bg-card border text-card-foreground w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg shadow-sm">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">Secs</span>
      </div>
    </div>
  );
}
