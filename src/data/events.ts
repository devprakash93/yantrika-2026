// ============================================================
//  YANTRIKA 2026 — Event Data
// ============================================================

export type EventCategory =
  | 'Robotics & Hardware'
  | 'Coding & Development'
  | 'Design & Innovation'
  | 'Academic & Knowledge'
  | 'Gaming'
  | 'Cultural';

export interface Event {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  category: EventCategory;
  description: string;
  teamSize: string;
  fee: string;
  eligibility?: string;
  note?: string;
  suggestedTopics?: string[];
  registerLabel: string;
}

export const categoryColors: Record<EventCategory, { text: string; bg: string; border: string }> = {
  'Robotics & Hardware':  { text: '#60A5FA', bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.2)'  },
  'Coding & Development': { text: '#34D399', bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.2)'  },
  'Design & Innovation':  { text: '#E8B84B', bg: 'rgba(232,184,75,0.08)',  border: 'rgba(232,184,75,0.2)'  },
  'Academic & Knowledge': { text: '#A78BFA', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)' },
  'Gaming':               { text: '#F87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.2)' },
  'Cultural':             { text: '#FB923C', bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.2)'  },
};

export const events: Event[] = [
  {
    id: 'yantrarush',
    num: '01',
    name: 'YantraRush',
    subtitle: 'F1 RC Car Race',
    category: 'Robotics & Hardware',
    description: 'Put your driving skills and RC engineering to the test. Participants compete with remote-controlled cars on a challenging race track where speed, control, precision, and strategy matter.',
    teamSize: '1 Participant',
    fee: '₹200',
    registerLabel: 'Register Now',
  },
  {
    id: 'yantrasetu',
    num: '02',
    name: 'YantraSetu',
    subtitle: 'IoT Challenge',
    category: 'Robotics & Hardware',
    description: 'A technical challenge based around the Internet of Things. Participants demonstrate their ability to understand, design and present IoT-based solutions while solving a given technical challenge.',
    teamSize: '2–4 Participants',
    fee: '₹200',
    registerLabel: 'Register Now',
  },
  {
    id: 'bugvidhwans',
    num: '03',
    name: 'BugVidhwans',
    subtitle: 'Code Debugging',
    category: 'Coding & Development',
    description: 'Can you find the bug before time runs out? Participants are given programs containing errors and must identify, understand and fix them within the given time.',
    teamSize: '1 Participant',
    fee: '₹100',
    registerLabel: 'Register Now',
  },
  {
    id: 'kalpsetu',
    num: '04',
    name: 'KalpSetu',
    subtitle: 'Business Model Challenge',
    category: 'Design & Innovation',
    description: 'Turn an idea into a meaningful business concept. Participants develop and present a business or project idea covering the problem, proposed solution, target users, value proposition and business potential.',
    teamSize: '2–4 Participants',
    fee: '₹200',
    registerLabel: 'Register Now',
  },
  {
    id: 'yantrabarta',
    num: '05',
    name: 'YantraBarta',
    subtitle: 'Technical Paper Presentation',
    category: 'Academic & Knowledge',
    description: 'A platform for students to explore and present ideas, research, emerging technologies and technical concepts. Participants present a technical paper and demonstrate their understanding of the selected topic.',
    teamSize: '1 Participant',
    fee: '₹100',
    suggestedTopics: ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Cloud Computing', 'IoT', 'Data Science', 'Robotics', 'Software Engineering', 'Emerging Technologies'],
    registerLabel: 'Register Now',
  },
  {
    id: 'chitramanch',
    num: '06',
    name: 'ChitraManch',
    subtitle: 'Poster Presentation',
    category: 'Academic & Knowledge',
    description: 'Turn technical ideas into powerful visual communication. Participants create and present a poster based on a selected technical, scientific, social or innovative topic.',
    teamSize: '1 Participant',
    fee: '₹100',
    registerLabel: 'Register Now',
  },
  {
    id: 'yantrakhoj',
    num: '07',
    name: 'YantraKhoj',
    subtitle: 'Guess the Gadget',
    category: 'Academic & Knowledge',
    description: 'Think you know technology? Identify gadgets, devices, components and technology-related objects using visual clues, descriptions or other challenges.',
    teamSize: '1 Participant',
    fee: '₹100',
    registerLabel: 'Register Now',
  },
  {
    id: 'sheeghrabudhi',
    num: '08',
    name: 'SheeghraBudhi',
    subtitle: 'Rapid Fire Contest',
    category: 'Academic & Knowledge',
    description: 'Fast questions. Faster answers. A high-energy rapid-fire competition requiring quick thinking, technical awareness and presence of mind.',
    teamSize: '1 Participant',
    fee: '₹100',
    registerLabel: 'Register Now',
  },
  {
    id: 'ranbhoomi',
    num: '09',
    name: 'Ranbhoomi',
    subtitle: 'Gaming Championship',
    category: 'Gaming',
    description: 'Enter the battlefield. Compete with your squad. Claim the victory. Ranbhoomi is the gaming competition of YANTRIKA 2026.',
    teamSize: '4–6 Players',
    fee: '₹200 / Team',
    eligibility: 'DRIEMS University Students Only',
    note: 'Detailed game format, match structure and regulations will be provided in the official Rules & Regulations.',
    registerLabel: 'Register Now',
  },
  {
    id: 'swaadsutra',
    num: '10',
    name: 'SwaadSutra',
    subtitle: 'Food Festival',
    category: 'Cultural',
    description: 'Bring your culinary creativity to YANTRIKA 2026. SwaadSutra is a stall-based food festival where participants can prepare, present and serve food while creating an enjoyable experience for visitors.',
    teamSize: '2–5 Participants',
    fee: 'Own Expense',
    registerLabel: 'Register / Book Stall',
  },
  {
    id: 'nirtyaspandan',
    num: '11',
    name: 'NirtyaSpandan',
    subtitle: 'Flash Mob / Group Dance',
    category: 'Cultural',
    description: 'Bring energy, rhythm and creativity to the stage. NirtyaSpandan is a group performance event where teams showcase synchronized choreography and creative performance.',
    teamSize: '8–15 Participants',
    fee: '₹200',
    registerLabel: 'Register Now',
  },
  {
    id: 'drishya',
    num: '12',
    name: 'Drishya',
    subtitle: 'Photography / Reels Contest',
    category: 'Cultural',
    description: 'Capture the moment. Tell the story. Drishya challenges participants to showcase creativity through photography and short-form video content.',
    teamSize: '1 Participant',
    fee: '₹50',
    registerLabel: 'Register Now',
  },
];

export const featuredEventIds = ['yantrarush', 'bugvidhwans', 'ranbhoomi', 'drishya'];

export const categories: EventCategory[] = [
  'Robotics & Hardware',
  'Coding & Development',
  'Design & Innovation',
  'Academic & Knowledge',
  'Gaming',
  'Cultural',
];

export const categoryIcons: Record<EventCategory, string> = {
  'Robotics & Hardware':  '⚙️',
  'Coding & Development': '💻',
  'Design & Innovation':  '💡',
  'Academic & Knowledge': '📋',
  'Gaming':               '🎮',
  'Cultural':             '🎭',
};
