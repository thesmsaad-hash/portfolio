// Internationalization strings — English
// Structure: keys are dot-separated for easy nesting
// Future: create es.ts, ar.ts, ur.ts in this folder

export const en = {
  // Navigation
  'nav.home': 'Home',
  'nav.portfolio': 'Portfolio',
  'nav.blog': 'Blog',
  'nav.services': 'Services',
  'nav.resume': 'Resume',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.hireMe': 'Hire Me',

  // Hero
  'hero.badge': 'Available for new projects',
  'hero.cta.portfolio': 'View Portfolio',
  'hero.cta.blog': 'Read Blog',
  'hero.cta.contact': 'Contact Me',

  // Common
  'common.readMore': 'Read More',
  'common.viewProject': 'View Project',
  'common.getQuote': 'Get a Quote',
  'common.viewAll': 'View All',
  'common.minuteRead': 'min read',
  'common.loading': 'Loading…',

  // Footer
  'footer.copyright': '© 2024 SM SAAD. All rights reserved.',
  'footer.rss': 'RSS Feed',
  'footer.privacy': 'Privacy Policy',
};

export type TranslationKey = keyof typeof en;

export function t(key: TranslationKey): string {
  return en[key] || key;
}
