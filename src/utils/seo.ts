// ── SEO Utils ────────────────────────────────────────────
export const SITE_URL = 'https://smsaad.online';
export const SITE_NAME = 'SM SAAD';
export const SITE_DESCRIPTION =
  'Professional Video Editor, Motion Graphics Artist & AI Content Creator based online. Creating cinematic content for YouTube, brands, and creators worldwide.';
export const SITE_OG_IMAGE = '/images/og-image.png';
export const SITE_TWITTER_HANDLE = '@smsaad';

export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
  canonicalUrl?: string;
}

export function getFullTitle(title: string): string {
  if (title === SITE_NAME) return `${title} — Video Editor & Motion Graphics`;
  return `${title} | ${SITE_NAME}`;
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'SM SAAD',
    url: SITE_URL,
    sameAs: [
      'https://www.youtube.com/@SaadConnects',
      'https://instagram.com/smsaad',
      'https://linkedin.com/in/smsaad',
      'https://x.com/smsaad',
    ],
    jobTitle: 'Video Editor & Motion Graphics Artist',
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/images/profile.png`,
    email: 'hello@smsaad.online',
    knowsAbout: [
      'Video Editing',
      'Motion Graphics',
      'VFX',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'AI Content Creation',
      'DaVinci Resolve',
      'YouTube',
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateArticleSchema(post: {
  title: string;
  excerpt: string;
  date: Date;
  slug: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date.toISOString(),
    author: {
      '@type': 'Person',
      name: 'SM SAAD',
      url: SITE_URL,
    },
    image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}${SITE_OG_IMAGE}`,
    url: `${SITE_URL}/blog/${post.id}`,
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
  };
}

export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
