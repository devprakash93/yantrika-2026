export type EventCategory = string;
export type EventStatus = 'Registration Open' | 'Coming Soon' | 'Registration Closed' | 'Event Completed';

export interface EventData {
  id: string;
  name: string;
  category: EventCategory;
  type: string;
  participants: string;
  fee: string;
  date: string;
  time: string;
  venue: string;
  status: EventStatus;
  description: string;
  rules: string[];
  judgingCriteria: string[];
  prizes: string[];
  coordinators: {
    faculty: string[];
    student: string[];
    contact: string;
  };
}

export interface ScheduleItem {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  event: string;
  category: EventCategory | 'Ceremony' | 'Other';
  venue: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  priority: 'High' | 'Normal';
  status: 'Active' | 'Archived';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
