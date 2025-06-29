import { atom } from "jotai";

export interface Therapist {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  description: string;
  avatar: string;
  personaId: string;
  experience: string;
  approach: string;
  specialty: string; // Added for the new format
}

export interface TherapyTopic {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface JournalEntry {
  mood: number;
  entry: string;
  date: string;
}

export interface SessionData {
  therapist: Therapist | null;
  topic: TherapyTopic | null;
  startTime: Date | null;
  endTime: Date | null;
  duration: number;
}

// Atoms
export const selectedTherapistAtom = atom<Therapist | null>(null);
export const selectedTopicAtom = atom<TherapyTopic | null>(null);
export const sessionDataAtom = atom<SessionData>({
  therapist: null,
  topic: null,
  startTime: null,
  endTime: null,
  duration: 0,
});
export const journalEntryAtom = atom<JournalEntry | null>(null);

// IMPORTANT: Replace these placeholder persona IDs with your actual persona IDs from your Tavus account
// Visit https://platform.tavus.io to find your persona IDs
// Each personaId should be replaced with a valid persona ID from your Tavus account
export const therapists: Therapist[] = [
  {
    id: 'dr-elena',
    name: 'Dr. Elena Rodriguez',
    title: 'Licensed Marriage & Family Therapist',
    specialty: 'Relationships & Family',
    specialties: ['Couples Therapy', 'Family Therapy', 'Communication', 'Relationship Issues'],
    description: 'Expert in relationship dynamics and family systems with a compassionate, solution-focused approach.',
    avatar: '👩‍🏫',
    personaId: 'REPLACE_WITH_YOUR_PERSONA_ID_1', // Replace with your actual persona ID
    experience: '8+ years',
    approach: 'Emotionally Focused Therapy (EFT)'
  },
  {
    id: 'dr-marcus',
    name: 'Dr. Marcus Williams',
    title: 'Licensed Trauma Specialist',
    specialty: 'Trauma & EMDR',
    specialties: ['Trauma Therapy', 'EMDR', 'PTSD', 'Complex Trauma'],
    description: 'Specialized in trauma-informed care using EMDR and other evidence-based approaches for healing.',
    avatar: '👨‍⚕️',
    personaId: 'REPLACE_WITH_YOUR_PERSONA_ID_2', // Replace with your actual persona ID
    experience: '12+ years',
    approach: 'EMDR & Trauma-Informed Care'
  },
  {
    id: 'victoria',
    name: 'Victoria Sterling',
    title: 'Career & Executive Coach',
    specialty: 'Career Coaching',
    specialties: ['Career Development', 'Executive Coaching', 'Leadership', 'Professional Growth'],
    description: 'Strategic career coaching and executive development for professional success and fulfillment.',
    avatar: '👩‍💼',
    personaId: 'REPLACE_WITH_YOUR_PERSONA_ID_3', // Replace with your actual persona ID
    experience: '10+ years',
    approach: 'Strategic Career Coaching'
  },
  {
    id: 'alex',
    name: 'Coach Alex Thunder',
    title: 'Peak Performance Coach',
    specialty: 'Peak Performance',
    specialties: ['Performance Coaching', 'Goal Achievement', 'Motivation', 'Success Mindset'],
    description: 'High-energy coaching focused on unlocking your potential and achieving peak performance in all areas.',
    avatar: '💪',
    personaId: 'REPLACE_WITH_YOUR_PERSONA_ID_4', // Replace with your actual persona ID
    experience: '6+ years',
    approach: 'Performance Psychology & Coaching'
  },
  {
    id: 'dr-aisha',
    name: 'Dr. Aisha Patel',
    title: 'Holistic Wellness Therapist',
    specialty: 'Holistic Wellness',
    specialties: ['Holistic Therapy', 'Mind-Body Connection', 'Stress Management', 'Wellness Coaching'],
    description: 'Integrative approach combining traditional therapy with holistic wellness practices for complete healing.',
    avatar: '🧘‍♀️',
    personaId: 'REPLACE_WITH_YOUR_PERSONA_ID_5', // Replace with your actual persona ID
    experience: '7+ years',
    approach: 'Integrative Holistic Therapy'
  },
  {
    id: 'sophia',
    name: 'Sophia Wisdom',
    title: 'Life Transition Specialist',
    specialty: 'Life Transitions',
    specialties: ['Life Transitions', 'Career Changes', 'Personal Growth', 'Identity Development'],
    description: 'Guiding individuals through major life changes with wisdom, support, and practical strategies.',
    avatar: '🌟',
    personaId: 'REPLACE_WITH_YOUR_PERSONA_ID_6', // Replace with your actual persona ID
    experience: '9+ years',
    approach: 'Narrative Therapy & Life Coaching'
  },
  {
    id: 'luna',
    name: 'Luna Starweaver',
    title: 'Art & Creative Therapist',
    specialty: 'Art & Creative Therapy',
    specialties: ['Art Therapy', 'Creative Expression', 'Expressive Arts', 'Creative Healing'],
    description: 'Using creative arts and expression as powerful tools for healing, self-discovery, and growth.',
    avatar: '🎨',
    personaId: 'REPLACE_WITH_YOUR_PERSONA_ID_7', // Replace with your actual persona ID
    experience: '6+ years',
    approach: 'Expressive Arts Therapy'
  }
];

export const therapyTopics: TherapyTopic[] = [
  {
    id: "anxiety",
    name: "Anxiety & Worry",
    description: "Managing overwhelming thoughts and anxious feelings",
    icon: "🌊",
    color: "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700"
  },
  {
    id: "depression",
    name: "Depression & Mood",
    description: "Working through sadness, low mood, and lack of motivation",
    icon: "🌱",
    color: "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700"
  },
  {
    id: "stress",
    name: "Stress Management",
    description: "Coping with work, life, and daily pressures",
    icon: "⚡",
    color: "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700"
  },
  {
    id: "relationships",
    name: "Relationships",
    description: "Improving communication and connection with others",
    icon: "💝",
    color: "bg-pink-100 dark:bg-pink-900/30 border-pink-300 dark:border-pink-700"
  },
  {
    id: "trauma",
    name: "Trauma & Healing",
    description: "Processing difficult experiences and finding healing",
    icon: "🕊️",
    color: "bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700"
  },
  {
    id: "self-esteem",
    name: "Self-Esteem",
    description: "Building confidence and self-worth",
    icon: "✨",
    color: "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700"
  },
  {
    id: "grief",
    name: "Grief & Loss",
    description: "Navigating loss and the grieving process",
    icon: "🤗",
    color: "bg-gray-100 dark:bg-gray-900/30 border-gray-300 dark:border-gray-700"
  },
  {
    id: "life-transitions",
    name: "Life Transitions",
    description: "Adapting to major life changes and new chapters",
    icon: "🦋",
    color: "bg-teal-100 dark:bg-teal-900/30 border-teal-300 dark:border-teal-700"
  }
];