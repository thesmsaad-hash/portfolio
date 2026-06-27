// ── Navigation Data ──────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio', badge: '⭐' },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '/services' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = [
  {
    title: 'Work',
    links: [
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Services', href: '/services' },
      { label: 'Resume', href: '/resume' },
    ],
  },
  {
    title: 'Content',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'RSS Feed', href: '/rss.xml' },
      { label: 'Search', href: '/search' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

export const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@SaadConnects',
    icon: 'youtube',
    color: '#FF0000',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/i_saad.shaik/',
    icon: 'instagram',
    color: '#E1306C',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sm-saad-a4b8a03b5/',
    icon: 'linkedin',
    color: '#0A66C2',
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=919133442880&text&type=phone_number&app_absent=0',
    icon: 'whatsapp',
    color: '#25D366',
  },
  {
    label: 'Email',
    href: 'mailto:thesmsaad@gmail.com',
    icon: 'email',
    color: '#1D9BF0',
  },
];
