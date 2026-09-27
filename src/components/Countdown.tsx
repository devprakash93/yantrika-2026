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
        <div className="text-3xl md:text-5xl font-display font-bold bg-[#0B1F36] border border-white/12 text-white w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-[12px] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#087BFF]"></div>
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <span className="text-xs md:text-sm text-[#087BFF] mt-3 font-semibold uppercase tracking-widest">Days</span>
      </div>
      <div className="text-3xl md:text-5xl font-bold text-white/30 py-4 md:py-6">:</div>
      
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-display font-bold bg-[#0B1F36] border border-white/12 text-white w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-[12px] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#087BFF]"></div>
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <span className="text-xs md:text-sm text-[#087BFF] mt-3 font-semibold uppercase tracking-widest">Hours</span>
      </div>
      <div className="text-3xl md:text-5xl font-bold text-white/30 py-4 md:py-6">:</div>
      
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-display font-bold bg-[#0B1F36] border border-white/12 text-white w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-[12px] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#087BFF]"></div>
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <span className="text-xs md:text-sm text-[#087BFF] mt-3 font-semibold uppercase tracking-widest">Mins</span>
      </div>
      <div className="text-3xl md:text-5xl font-bold text-white/30 py-4 md:py-6">:</div>
      
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-display font-bold bg-[#0B1F36] border border-white/12 text-white w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-[12px] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#087BFF]"></div>
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <span className="text-xs md:text-sm text-[#087BFF] mt-3 font-semibold uppercase tracking-widest">Secs</span>
      </div>
    </div>
  );
}
