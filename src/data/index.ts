export * from './events';
import type { ScheduleItem, Announcement, FAQ } from '../types';

export const schedule: ScheduleItem[] = [
  {
    id: "day1-opening",
    date: "2026-10-08",
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    event: "Opening Ceremony",
    category: "Ceremony",
    venue: "Main Venue",
    status: "Upcoming"
  },
  {
    id: "day1-tech",
    date: "2026-10-08",
    startTime: "10:00 AM",
    endTime: "01:00 PM",
    event: "Technical Events",
    category: "Technical",
    venue: "TBA",
    status: "Upcoming"
  },
  {
    id: "day2-cultural",
    date: "2026-10-09",
    startTime: "05:00 PM",
    endTime: "09:00 PM",
    event: "Cultural Performances",
    category: "Cultural",
    venue: "Main Venue",
    status: "Upcoming"
  }
];

export const announcements: Announcement[] = [
  {
    id: "reg-opening",
    title: "Registrations Opening Soon",
    description: "Get ready! Registrations for all events will open shortly.",
    date: "2026-09-01",
    priority: "High",
    status: "Active"
  },
  {
    id: "event-rules",
    title: "Event Rules Coming Soon",
    description: "Detailed rules and judging criteria will be updated on the event pages.",
    date: "2026-09-15",
    priority: "Normal",
    status: "Active"
  },
  {
    id: "schedule-tba",
    title: "Schedule Will Be Announced Soon",
    description: "The complete two-day schedule is being finalized.",
    date: "2026-09-20",
    priority: "Normal",
    status: "Active"
  },
  {
    id: "venue-tba",
    title: "Venue Details Coming Soon",
    description: "Campus map and specific venue locations for each event will be shared.",
    date: "2026-09-25",
    priority: "Normal",
    status: "Active"
  }
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Who can participate?",
    answer: "Participation is open to students from DRIEMS University as well as other colleges and universities. Some specific events may have different eligibility criteria.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Is participation open to students from other colleges?",
    answer: "Yes, students from other recognized colleges and universities are welcome to participate in most events.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "How do I register?",
    answer: "You can register through this website by clicking the 'Register Now' button or navigating to individual event pages.",
    category: "Registration"
  },
  {
    id: "faq-4",
    question: "Can I participate in multiple events?",
    answer: "Yes, you can participate in multiple events as long as their timings do not clash.",
    category: "Events"
  },
  {
    id: "faq-5",
    question: "What are the registration fees?",
    answer: "Registration fees vary by event. Please check the specific event page for details.",
    category: "Registration"
  },
  {
    id: "faq-6",
    question: "How do team registrations work?",
    answer: "One team leader should register the entire team and provide the details of all team members. The leader will receive the confirmation.",
    category: "Registration"
  },
  {
    id: "faq-7",
    question: "Where will the events take place?",
    answer: "This information will be announced by the organizing committee.",
    category: "Venue"
  },
  {
    id: "faq-8",
    question: "When will the rules be published?",
    answer: "This information will be announced by the organizing committee.",
    category: "Events"
  },
  {
    id: "faq-9",
    question: "How will participants receive confirmation?",
    answer: "Participants will receive a registration confirmation on the website which can be downloaded. An email or SMS confirmation may also be sent.",
    category: "Registration"
  },
  {
    id: "faq-10",
    question: "How can I contact the organizers?",
    answer: "You can reach out via the Contact section on this website, or use the official social media handles provided.",
    category: "General"
  }
];
