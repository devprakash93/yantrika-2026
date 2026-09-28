export type GraphicType =
  | 'racing'
  | 'network'
  | 'terminal'
  | 'blueprint'
  | 'research'
  | 'poster'
  | 'kinetic'
  | 'arena'
  | 'food'
  | 'camera';

export interface EventTheme {
  primary: string;   // main color (bg, border, icon)
  dark:    string;   // darker shade for hero backgrounds
  muted:   string;   // lighter/desaturated for graphic detail
  filterKey:     string;
  categoryLabel: string;
  graphicType:   GraphicType;
}

const T: Record<string, EventTheme> = {
  yantrarush:    { primary:'#1D4ED8', dark:'#1E3A8A', muted:'#93C5FD', filterKey:'TECH',     categoryLabel:'ROBOTICS',  graphicType:'racing'    },
  yantrasetu:    { primary:'#0891B2', dark:'#164E63', muted:'#67E8F9', filterKey:'TECH',     categoryLabel:'IOT',       graphicType:'network'   },
  bugvidhwans:   { primary:'#65A30D', dark:'#14532D', muted:'#BEF264', filterKey:'TECH',     categoryLabel:'CODING',    graphicType:'terminal'  },
  kalpsetu:      { primary:'#7C3AED', dark:'#3B0764', muted:'#C4B5FD', filterKey:'TECH',     categoryLabel:'DESIGN',    graphicType:'blueprint' },
  yantrabarta:   { primary:'#2563EB', dark:'#1E3A8A', muted:'#BFDBFE', filterKey:'ACADEMIC', categoryLabel:'ACADEMIC',  graphicType:'research'  },
  chitramanch:   { primary:'#D97706', dark:'#78350F', muted:'#FCD34D', filterKey:'ACADEMIC', categoryLabel:'ACADEMIC',  graphicType:'poster'    },
  yantrakhoj:    { primary:'#0369A1', dark:'#0C4A6E', muted:'#7DD3FC', filterKey:'ACADEMIC', categoryLabel:'ACADEMIC',  graphicType:'research'  },
  sheeghrabudhi: { primary:'#4F46E5', dark:'#1E1B4B', muted:'#A5B4FC', filterKey:'ACADEMIC', categoryLabel:'ACADEMIC',  graphicType:'blueprint' },
  ranbhoomi:     { primary:'#DC2626', dark:'#7F1D1D', muted:'#FCA5A5', filterKey:'GAMING',   categoryLabel:'GAMING',    graphicType:'arena'     },
  'swaad-sutra': { primary:'#EA580C', dark:'#7C2D12', muted:'#FDBA74', filterKey:'FOOD',     categoryLabel:'FOOD FEST', graphicType:'food'      },
  nirtyaspandan: { primary:'#BE185D', dark:'#831843', muted:'#F9A8D4', filterKey:'CULTURAL', categoryLabel:'CULTURAL',  graphicType:'kinetic'   },
  drishya:       { primary:'#1C1917', dark:'#0C0A09', muted:'#F5E142', filterKey:'CREATIVE', categoryLabel:'CREATIVE',  graphicType:'camera'    },
};

const FALLBACK: EventTheme = {
  primary:'#0F0F0D', dark:'#000000', muted:'#8C8C83',
  filterKey:'TECH', categoryLabel:'EVENT', graphicType:'research',
};

export function getEventTheme(id: string): EventTheme {
  return T[id] ?? FALLBACK;
}

export const EVENT_THEMES = T;

export const FILTER_COLORS: Record<string, string> = {
  ALL:      '#0F0F0D',
  TECH:     '#1D4ED8',
  ACADEMIC: '#7C3AED',
  CULTURAL: '#BE185D',
  CREATIVE: '#1C1917',
  FOOD:     '#EA580C',
  GAMING:   '#DC2626',
};
