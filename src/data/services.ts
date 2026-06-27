// ── Services Data ─────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Used with astro-icon, e.g., 'mdi:video-vintage' or just an emoji
  features: string[];
}

export const services: Service[] = [
  {
    id: 'podcast-video-editing',
    title: 'Podcast Video Editing',
    description: 'Full episode editing with multi-cam cuts, chapter markers, animated lower thirds, branded intro/outro, and B-roll integration.',
    icon: 'tabler:microphone-2',
    features: [
      'Multi-cam editing',
      'Chapter markers',
      'Animated lower thirds',
      'B-roll integration'
    ]
  },
  {
    id: 'short-form-reels',
    title: 'Short Form Reels',
    description: 'Viral-ready Instagram & YouTube Shorts with trending hooks, smooth transitions, audio sync, and maximum retention edits.',
    icon: 'tabler:device-mobile',
    features: [
      'Trending hooks',
      'Smooth transitions',
      'Audio sync',
      'Maximum retention edits'
    ]
  },
  {
    id: 'captions-and-subtitles',
    title: 'Captions & Subtitles',
    description: 'Word-by-word animated captions, SRT files, multi-language subtitles — perfectly timed and beautifully styled.',
    icon: 'tabler:closed-captioning',
    features: [
      'Animated captions',
      'SRT files provided',
      'Multi-language subtitles',
      'Custom styling'
    ]
  },
  {
    id: 'audio-enhancement',
    title: 'Audio Enhancement',
    description: 'Background noise removal, vocal clarity, EQ & compression, audio leveling for a crisp, professional podcast sound.',
    icon: 'tabler:volume',
    features: [
      'Noise removal',
      'Vocal clarity (EQ)',
      'Audio leveling',
      'Professional mastering'
    ]
  },
  {
    id: 'color-grading',
    title: 'Color Grading',
    description: 'Cinematic LUT application, skin tone correction, consistent look development — your brand, your vibe, every episode.',
    icon: 'tabler:palette',
    features: [
      'Cinematic LUTs',
      'Skin tone correction',
      'Look development',
      'Consistent branding'
    ]
  },
  {
    id: 'thumbnail-design',
    title: 'Thumbnail Design',
    description: 'Click-worthy podcast thumbnails and reel covers designed to boost your CTR and grow your audience organically.',
    icon: 'tabler:photo',
    features: [
      'High CTR designs',
      'Podcast thumbnails',
      'Reel covers',
      'Organic growth focus'
    ]
  }
];

// ── FAQs Data ─────────────────────────────────────────────
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'How long does a podcast edit usually take?',
    answer: 'For a standard 1-hour podcast episode, the turnaround time is typically 48 to 72 hours, depending on the complexity of the edit and any additional graphics required.'
  },
  {
    question: 'Do you offer unlimited revisions?',
    answer: 'I offer unlimited minor revisions to ensure you are 100% happy with the final product. Major structural changes after the first draft may incur an additional fee.'
  },
  {
    question: 'What do you need from me to get started?',
    answer: 'Just send over your raw video and audio files, any branding assets (logos, fonts, colors), and a brief outline of how you want the video to look and feel.'
  },
  {
    question: 'Do you provide thumbnail design as well?',
    answer: 'Yes! Thumbnail design is included in my premium podcast and reels packages. I can also do standalone thumbnail designs to boost your CTR.'
  }
];
