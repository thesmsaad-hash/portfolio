// ── Testimonials Data ────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  rating: number;
  projectRef?: string;
  platform?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Kumar',
    role: 'Podcast Host',
    company: 'The Growth Pod',
    quote: "Saad transformed our podcast into a professional, binge-worthy show. The editing quality, captions, and overall presentation are top-notch. Our views doubled in a month!",
    rating: 5,
    platform: 'Podcast',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Life Coach & Content Creator',
    company: 'Instagram / YouTube',
    quote: "The reels Saad creates for us are always on point — trending sounds, perfect cuts, great hooks. Our Instagram went from 2K to 20K followers in 3 months!",
    rating: 5,
    platform: 'Instagram',
  },
  {
    id: '3',
    name: 'Arjun Mehta',
    role: 'Entrepreneur & Podcast Host',
    company: 'Independent',
    quote: "Quick turnaround, excellent communication, and the final result was beyond expectations. Our podcast now looks like it's produced by a full studio team!",
    rating: 5,
    platform: 'Podcast',
  },
  {
    id: '4',
    name: 'Neha Kapoor',
    role: 'Business Coach, Delhi',
    company: 'Independent',
    quote: "Saad's podcast clips and reels are insanely good. He understands what works for Indian audiences and delivers consistently. 100% recommend!",
    rating: 5,
    platform: 'Instagram',
  },
];
