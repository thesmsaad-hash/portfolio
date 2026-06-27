// ── Skills Data ──────────────────────────────────────────
export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'video' | 'motion' | 'design' | 'ai' | 'audio';
  icon?: string;
}

export const skills: Skill[] = [
  { name: 'Podcast Video Editing', level: 95, category: 'video' },
  { name: 'Short Form Reels', level: 95, category: 'video' },
  { name: 'Color Grading', level: 88, category: 'video' },
  { name: 'Audio Enhancement', level: 85, category: 'audio' },
  { name: 'Motion Graphics', level: 85, category: 'motion' },
];

// ── Software Logos ───────────────────────────────────────
export interface Software {
  name: string;
  icon: string; // emoji or icon name
  color: string;
}

export const software: Software[] = [
  { name: 'Premiere Pro', icon: '🎬', color: '#9999FF' },
  { name: 'After Effects', icon: '✨', color: '#9999FF' },
];
