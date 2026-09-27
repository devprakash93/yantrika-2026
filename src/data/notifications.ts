// Announcement data — update this file to add/remove notifications
export interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  isNew: boolean;
  type: 'announcement' | 'event' | 'schedule' | 'update';
}

export const notifications: Notification[] = [
  {
    id: '1',
    title: '🎉 Registrations Now Open!',
    body: 'YANTRIKA 2026 registrations are officially open. Secure your spot before seats fill up!',
    time: 'Just now',
    isNew: true,
    type: 'announcement',
  },
  {
    id: '2',
    title: '🤖 YantraRush — RC Car Race',
    body: 'Team registrations for YantraRush F1 RC Car Race are now live. Max team size: 1 participant.',
    time: '2h ago',
    isNew: true,
    type: 'event',
  },
  {
    id: '3',
    title: '📅 Event Schedule Released',
    body: 'The complete two-day schedule for Oct 08–09 has been published. Check the Schedule page.',
    time: '5h ago',
    isNew: true,
    type: 'schedule',
  },
  {
    id: '4',
    title: '🎭 NirtyaSpandan — Flash Mob',
    body: 'Cultural event NirtyaSpandan Flash Mob registrations are now accepting entries.',
    time: '1d ago',
    isNew: false,
    type: 'event',
  },
  {
    id: '5',
    title: '📷 Drishya — Photography Contest',
    body: 'Drishya Photography & Reels Contest is open for solo participants. Entry fee: ₹50.',
    time: '1d ago',
    isNew: false,
    type: 'event',
  },
  {
    id: '6',
    title: '🎮 BGMI Tournament',
    body: 'BGMI Squad tournament registrations are open. Form your squad of 4 and register now.',
    time: '2d ago',
    isNew: false,
    type: 'event',
  },
];
