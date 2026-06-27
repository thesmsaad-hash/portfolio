// ── Timeline Data ────────────────────────────────────────
export interface TimelineItem {
  year: string;
  title: string;
  org: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}

export const timeline: TimelineItem[] = [
  {
    year: '2025–Present',
    title: 'Podcast Video Editor & Reels Creator',
    org: 'Freelance — India',
    description:
      'Working with Indian creators, coaches, and brands to build powerful online presence through professional video content. Specializing in long-form podcast episodes and viral Instagram reels.',
    type: 'work',
  },
  {
    year: '2024–Present',
    title: "Master's Degree, Artificial Intelligence",
    org: 'Arena Animation',
    description:
      'Pursuing advanced studies in AI and its applications in creative industries, including AI-driven video editing, content generation, and automation workflows.',
    type: 'education',
  },
  {
    year: '2020–2024',
    title: 'B.Tech, Computer Science Engineering',
    org: 'Sri Venkateswara College of Engineering and Technology, Chittoor',
    description:
      'Completed a Bachelor of Technology in Computer Science Engineering, building a strong foundation in programming, data structures, and software engineering.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Animation and VFX',
    org: 'Arena Animation',
    description:
      'Completing professional training in Animation and VFX, gaining hands-on experience with motion graphics, visual effects, and 3D animation techniques.',
    type: 'education',
  },
];

// ── Statistics ────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const stats: Stat[] = [
  { value: 30, suffix: '+', label: 'Videos Edited', icon: '🎬' },
  { value: 25, suffix: '+', label: 'Podcasts', icon: '🎙️' },
  { value: 1, suffix: '+', label: 'Years Exp.', icon: '⭐' },
  { value: 10, suffix: '+', label: 'Happy Clients', icon: '😊' },
];

// ── Client Logos ──────────────────────────────────────────
export interface Client {
  name: string;
  logo?: string;
  initial: string;
  color: string;
}

export const clients: Client[] = [
  { name: 'The Growth Pod', initial: 'GP', color: '#10b981' },
  { name: 'Priya Sharma', initial: 'PS', color: '#f59e0b' },
  { name: 'Arjun Mehta', initial: 'AM', color: '#1D9BF0' },
  { name: 'Neha Kapoor', initial: 'NK', color: '#ef4444' },
];
