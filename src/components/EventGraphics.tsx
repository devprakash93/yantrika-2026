import type { GraphicType } from '../data/eventThemes';

interface G { color: string; muted: string; size?: number }

/* ── RACING — curved track, speed nodes, lap counter ─── */
export function RacingGraphic({ color, muted, size = 140 }: G) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      <path d="M 15 125 Q 15 55 80 28 Q 118 15 125 15" stroke={muted} strokeWidth="1.5" opacity="0.25"/>
      <path d="M 15 125 Q 15 55 80 28 Q 118 15 125 15" stroke={color} strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M 25 125 Q 25 65 82 38 Q 120 25 125 15" stroke={color} strokeWidth="1" opacity="0.3"/>
      {/* Speed tick marks */}
      {([[35,95],[57,64],[82,38]] as [number,number][]).map(([x,y],i) => (
        <g key={i}>
          <line x1={x-6} y1={y-6} x2={x+6} y2={y+6} stroke={color} strokeWidth="2" opacity={0.4+i*0.2}/>
          <circle cx={x} cy={y} r={3+i} fill={color} opacity={0.6}/>
        </g>
      ))}
      <rect x="10" y="120" width="10" height="12" fill={color}/>
      <circle cx="125" cy="15" r="7" fill={color}/>
      <path d="M 95 30 L 107 20 M 101 20 L 107 20 L 102 26" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="8" y="138" fontFamily="monospace" fontSize="9" fill={color} opacity="0.6">LAP 01 — F1 RC</text>
    </svg>
  );
}

/* ── NETWORK — IoT node graph ─────────────────────────── */
export function NetworkGraphic({ color, muted, size = 140 }: G) {
  const nodes: [number,number][] = [[70,18],[18,72],[122,72],[70,122],[44,44],[96,44],[44,96],[96,96]];
  const edges: [number,number][] = [[0,4],[0,5],[4,1],[5,2],[1,6],[2,7],[6,3],[7,3],[4,6],[5,7],[4,5],[6,7]];
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      {edges.map(([a,b],i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={muted} strokeWidth="1" opacity="0.4"/>)}
      {nodes.map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i<4?6:3.5} fill={i<4 ? color : muted} opacity={i<4?1:0.55}/>
          {i<4 && <circle cx={x} cy={y} r={12} stroke={color} strokeWidth="1" opacity="0.2"/>}
        </g>
      ))}
      <text x="38" y="135" fontFamily="monospace" fontSize="9" fill={color} opacity="0.6">NODES: 08 ACTIVE</text>
    </svg>
  );
}

/* ── TERMINAL — code debugger interface ───────────────── */
export function TerminalGraphic({ color, muted, size = 140 }: G) {
  const lines = [
    { txt: '> SCANNING...', col: muted,     op: 0.6 },
    { txt: '  ERR: line 47', col: '#EF4444', op: 1.0 },
    { txt: '  ERR: line 82', col: '#EF4444', op: 1.0 },
    { txt: '  Patching...', col: muted,     op: 0.6 },
    { txt: '> BUG CLEARED ✓', col: color,   op: 1.0 },
    { txt: '> SYSTEM OK',    col: color,    op: 0.8 },
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      <rect x="4" y="4" width="132" height="132" rx="4" stroke={color} strokeWidth="1.5" opacity="0.35"/>
      <rect x="4" y="4" width="132" height="20" fill={color} opacity="0.12"/>
      <circle cx="18" cy="14" r="4" fill={color} opacity="0.85"/>
      <circle cx="31" cy="14" r="4" fill={muted} opacity="0.5"/>
      <circle cx="44" cy="14" r="4" fill={muted} opacity="0.3"/>
      {lines.map((l,i) => (
        <text key={i} x="10" y={35+i*16} fontFamily="monospace" fontSize="9.5" fill={l.col} opacity={l.op}>{l.txt}</text>
      ))}
    </svg>
  );
}

/* ── BLUEPRINT — idea→build→scale flow ────────────────── */
export function BlueprintGraphic({ color, muted, size = 140 }: G) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      {/* Faint grid */}
      {[28,56,84,112].flatMap(v => [
        <line key={`h${v}`} x1="8" y1={v} x2="132" y2={v} stroke={muted} strokeWidth="0.4" opacity="0.18"/>,
        <line key={`v${v}`} x1={v} y1="8" x2={v} y2="132" stroke={muted} strokeWidth="0.4" opacity="0.18"/>,
      ])}
      {/* Nodes */}
      <circle cx="22" cy="70" r="13" stroke={color} strokeWidth="2"/>
      <text x="11" y="74" fontFamily="monospace" fontSize="9" fill={color}>IDEA</text>
      <rect x="57" y="57" width="26" height="26" rx="2" stroke={color} strokeWidth="2"/>
      <text x="58" y="73" fontFamily="monospace" fontSize="9" fill={color}>BUILD</text>
      <path d="M 105 57 L 120 70 L 105 83 Z" stroke={color} strokeWidth="2" fill="none"/>
      <text x="97" y="96" fontFamily="monospace" fontSize="9" fill={color}>SCALE</text>
      {/* Arrows */}
      <line x1="35" y1="70" x2="55" y2="70" stroke={color} strokeWidth="1.5"/>
      <polygon points="55,66 63,70 55,74" fill={color}/>
      <line x1="83" y1="70" x2="103" y2="70" stroke={color} strokeWidth="1.5"/>
      <polygon points="103,66 111,70 103,74" fill={color}/>
      <text x="10" y="128" fontFamily="monospace" fontSize="9" fill={color} opacity="0.6">INNOVATION MAP</text>
    </svg>
  );
}

/* ── RESEARCH — line chart with bars ──────────────────── */
export function ResearchGraphic({ color, muted, size = 140 }: G) {
  const data = [40, 62, 50, 78, 68, 92, 84];
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      <line x1="14" y1="10" x2="14" y2="108" stroke={muted} strokeWidth="1.5" opacity="0.45"/>
      <line x1="14" y1="108" x2="132" y2="108" stroke={muted} strokeWidth="1.5" opacity="0.45"/>
      {data.map((v,i) => {
        const h = (v/100)*88; const x = 22+i*16;
        return <rect key={i} x={x} y={108-h} width="10" height={h} fill={color} opacity={0.15+i*0.11}/>;
      })}
      <polyline points={data.map((v,i)=>`${27+i*16},${108-(v/100)*88}`).join(' ')} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {data.map((v,i) => <circle key={i} cx={27+i*16} cy={108-(v/100)*88} r="3.5" fill={color}/>)}
      <text x="14" y="125" fontFamily="monospace" fontSize="9" fill={color} opacity="0.6">FIG.01 — RESULTS</text>
    </svg>
  );
}

/* ── POSTER — layered poster with crop marks ──────────── */
export function PosterGraphic({ color, muted, size = 140 }: G) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      <rect x="12" y="22" width="82" height="106" fill={muted} opacity="0.1" transform="rotate(-7 53 75)"/>
      <rect x="28" y="16" width="82" height="106" fill={muted} opacity="0.15" transform="rotate(-2 69 69)"/>
      <rect x="24" y="10" width="92" height="114" fill={color} opacity="0.08"/>
      <rect x="24" y="10" width="92" height="114" stroke={color} strokeWidth="2"/>
      {/* Crop marks */}
      {[[24,10],[116,10],[24,124],[116,124]].map(([x,y],i) => {
        const dx = i%2===0 ? -10 : 10; const dy = i<2 ? -10 : 10;
        return <g key={i}>
          <line x1={x+dx} y1={y} x2={x} y2={y} stroke={color} strokeWidth="1"/>
          <line x1={x} y1={y+dy} x2={x} y2={y} stroke={color} strokeWidth="1"/>
        </g>;
      })}
      <rect x="34" y="20" width="72" height="9" rx="1" fill={color} opacity="0.65"/>
      <rect x="34" y="35" width="52" height="5" rx="1" fill={color} opacity="0.3"/>
      <rect x="34" y="46" width="62" height="5" rx="1" fill={color} opacity="0.2"/>
      <rect x="34" y="62" width="30" height="38" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8"/>
      <rect x="70" y="62" width="38" height="38" fill={color} opacity="0.06" stroke={color} strokeWidth="0.8"/>
      <text x="34" y="118" fontFamily="monospace" fontSize="9" fill={color} opacity="0.7">EXHIBITION 2026</text>
    </svg>
  );
}

/* ── KINETIC — motion trails / dance energy ───────────── */
export function KineticGraphic({ color, muted, size = 140 }: G) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      {/* Rhythm grid lines */}
      {[40,68,96].map(y => <line key={y} x1="10" y1={y} x2="130" y2={y} stroke={muted} strokeWidth="0.75" opacity="0.2"/>)}
      {/* Motion trails (increasing opacity toward primary stroke) */}
      {[{w:1,o:0.15},{w:1.5,o:0.28},{w:2,o:0.45},{w:2.5,o:0.65},{w:3.5,o:1}].map((s,i) => (
        <path key={i} d={`M ${28+i*8} 118 Q ${50+i*6} ${72-i*4}, ${80+i*5} ${22+i*3}`} stroke={color} strokeWidth={s.w} opacity={s.o} strokeLinecap="round"/>
      ))}
      <circle cx="68" cy="118" r="7" fill={color}/>
      <circle cx="105" cy="22" r="5" fill={color} opacity="0.8"/>
      {/* Small accent shapes */}
      <path d="M 20 40 L 30 32 L 40 40" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5"/>
      <text x="8" y="136" fontFamily="monospace" fontSize="9" fill={color} opacity="0.7">RHYTHM ///</text>
    </svg>
  );
}

/* ── ARENA — crosshair target ─────────────────────────── */
export function ArenaGraphic({ color, muted, size = 140 }: G) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      <circle cx="70" cy="70" r="58" stroke={muted} strokeWidth="1" opacity="0.18"/>
      <circle cx="70" cy="70" r="42" stroke={muted} strokeWidth="1" opacity="0.28"/>
      <circle cx="70" cy="70" r="26" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <circle cx="70" cy="70" r="10" stroke={color} strokeWidth="2.5"/>
      <circle cx="70" cy="70" r="3.5" fill={color}/>
      <line x1="70" y1="8"  x2="70" y2="60" stroke={color} strokeWidth="1.8" opacity="0.85"/>
      <line x1="70" y1="80" x2="70" y2="132" stroke={color} strokeWidth="1.8" opacity="0.85"/>
      <line x1="8"  y1="70" x2="60" y2="70" stroke={color} strokeWidth="1.8" opacity="0.85"/>
      <line x1="80" y1="70" x2="132" y2="70" stroke={color} strokeWidth="1.8" opacity="0.85"/>
      {/* Corner brackets */}
      {([[8,8],[132,8],[8,132],[132,132]] as [number,number][]).map(([x,y],i) => {
        const dx = i%2===0?8:-8; const dy = i<2?8:-8;
        return <path key={i} d={`M ${x} ${y+dy} L ${x} ${y} L ${x+dx} ${y}`} stroke={color} strokeWidth="2" fill="none"/>;
      })}
      <text x="40" y="136" fontFamily="monospace" fontSize="9" fill={color} opacity="0.7">ARENA — BGMI</text>
    </svg>
  );
}

/* ── FOOD — abstract plate composition ────────────────── */
export function FoodGraphic({ color, size = 140 }: G) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      <circle cx="70" cy="70" r="54" stroke={color} strokeWidth="1.5" opacity="0.25"/>
      <circle cx="70" cy="70" r="42" stroke={color} strokeWidth="1" opacity="0.4"/>
      {/* Abstract food form — curved organic shapes */}
      <path d="M 48 54 Q 70 38, 92 54 Q 105 65, 92 82 Q 70 98, 48 82 Q 36 68, 48 54 Z" fill={color} opacity="0.12" stroke={color} strokeWidth="1.5"/>
      <path d="M 54 60 Q 70 50, 86 60 Q 93 70, 86 80 Q 70 90, 54 80 Q 47 70, 54 60 Z" fill={color} opacity="0.22"/>
      {/* Abstract garnish dots */}
      {[[58,59],[70,53],[83,59],[88,70],[83,81],[70,87],[58,81],[52,70]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill={color} opacity={0.35+i*0.05}/>
      ))}
      {/* Menu underline */}
      <line x1="20" y1="130" x2="120" y2="130" stroke={color} strokeWidth="1" opacity="0.3"/>
      <text x="20" y="138" fontFamily="monospace" fontSize="9" fill={color} opacity="0.7">SWAAD SUTRA 2026</text>
    </svg>
  );
}

/* ── CAMERA — cinematic viewfinder ───────────────────── */
export function CameraGraphic({ color, muted, size = 140 }: G) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden>
      <rect x="4" y="4" width="132" height="132" stroke={color} strokeWidth="2" opacity="0.55"/>
      {/* Corner marks */}
      {([[4,4],[136,4],[4,136],[136,136]] as [number,number][]).map(([x,y],i) => {
        const dx=i%2===0?24:-24; const dy=i<2?24:-24;
        return <path key={i} d={`M ${x} ${y+dy} L ${x} ${y} L ${x+dx} ${y}`} stroke={color} strokeWidth="3.5" fill="none"/>;
      })}
      {/* Lens */}
      <circle cx="70" cy="70" r="32" stroke={color} strokeWidth="2" opacity="0.65"/>
      <circle cx="70" cy="70" r="22" stroke={color} strokeWidth="1.5" opacity="0.45"/>
      <circle cx="70" cy="70" r="9"  fill={color} opacity="0.25"/>
      <circle cx="70" cy="70" r="4"  fill={color}/>
      {/* REC indicator */}
      <circle cx="16" cy="16" r="6" fill={muted}/>
      <text x="28" y="20" fontFamily="monospace" fontSize="11" fontWeight="bold" fill={muted}>REC ●</text>
      {/* Frame counter */}
      <text x="14" y="132" fontFamily="monospace" fontSize="9" fill={color} opacity="0.7">FRAME 001</text>
      <text x="82" y="132" fontFamily="monospace" fontSize="9" fill={muted} opacity="0.9">00:08:26</text>
    </svg>
  );
}

/* ── SWITCHER ────────────────────────────────────────── */
interface EventGraphicProps {
  type: GraphicType;
  color: string;
  muted: string;
  size?: number;
}

export function EventGraphic({ type, color, muted, size }: EventGraphicProps) {
  const p = { color, muted, size };
  const map: Record<GraphicType, React.ReactElement> = {
    racing:    <RacingGraphic    {...p}/>,
    network:   <NetworkGraphic   {...p}/>,
    terminal:  <TerminalGraphic  {...p}/>,
    blueprint: <BlueprintGraphic {...p}/>,
    research:  <ResearchGraphic  {...p}/>,
    poster:    <PosterGraphic    {...p}/>,
    kinetic:   <KineticGraphic   {...p}/>,
    arena:     <ArenaGraphic     {...p}/>,
    food:      <FoodGraphic      {...p}/>,
    camera:    <CameraGraphic    {...p}/>,
  };
  return map[type] ?? <ResearchGraphic {...p}/>;
}
