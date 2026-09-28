import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

// What to show in the cursor label for different hover contexts
const CURSOR_LABELS: Record<string, string> = {
  'data-cursor-view':     'VIEW',
  'data-cursor-open':     'OPEN',
  'data-cursor-register': 'JOIN',
  'data-cursor-explore':  'LOOK',
  'data-cursor-menu':     'MENU',
};

export default function CustomCursor() {
  const [label, setLabel]         = useState('');
  const [isHover, setIsHover]     = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useSpring(0, { stiffness: 800, damping: 60 });
  const mouseY = useSpring(0, { stiffness: 800, damping: 60 });
  const dotX   = useSpring(0, { stiffness: 1200, damping: 50 });
  const dotY   = useSpring(0, { stiffness: 1200, damping: 50 });

  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const update = () => {
      mouseX.set(posRef.current.x - 16);
      mouseY.set(posRef.current.y - 16);
      dotX.set(posRef.current.x - 3);
      dotY.set(posRef.current.y - 3);
    };

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);

      // Detect what we're hovering
      const el = e.target as HTMLElement;
      const closest = el.closest('[data-cursor-view],[data-cursor-open],[data-cursor-register],[data-cursor-explore],[data-cursor-menu]');

      if (closest) {
        const key = Object.keys(CURSOR_LABELS).find(k => closest.hasAttribute(k)) ?? '';
        setLabel(CURSOR_LABELS[key] ?? '');
        setIsHover(true);
      } else if (el.closest('a, button, [role=button]')) {
        setLabel('');
        setIsPointer(true);
        setIsHover(false);
      } else {
        setLabel('');
        setIsHover(false);
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafRef.current); };
  }, [mouseX, mouseY, dotX, dotY]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] select-none"
        style={{ x: mouseX, y: mouseY }}
      >
        <motion.div
          animate={{
            width:  isHover ? 72 : isPointer ? 40 : 32,
            height: isHover ? 72 : isPointer ? 40 : 32,
            x:      isHover ? -20 : isPointer ? -4 : 0,
            y:      isHover ? -20 : isPointer ? -4 : 0,
            borderColor: isHover ? '#FF4D00' : '#0F0F0D',
            backgroundColor: isHover ? 'rgba(255,77,0,0.08)' : 'transparent',
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border flex items-center justify-center"
        >
          {label && (
            <span className="font-mono text-[9px] font-medium tracking-wider text-[#FF4D00] whitespace-nowrap">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full"
        style={{ x: dotX, y: dotY, backgroundColor: isHover ? '#FF4D00' : '#0F0F0D' }}
      />
    </>
  );
}
