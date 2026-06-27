import Fuse from 'fuse.js';
import { services } from '@data/services';

// ── Search Types ─────────────────────────────────────────
export interface SearchItem {
  type: 'blog' | 'portfolio' | 'service';
  title: string;
  excerpt: string;
  slug?: string;
  id?: string;
  url: string;
  tags?: string[];
  category?: string;
  image?: string;
}

// ── Search Index Builder ─────────────────────────────────
export function buildSearchIndex(
  blogPosts: Array<{ slug: string; data: any }>,
  portfolioItems: Array<{ slug: string; data: any }>
): SearchItem[] {
  const items: SearchItem[] = [];

  // Blog posts
  for (const post of blogPosts) {
    items.push({
      type: 'blog',
      title: post.data.title,
      excerpt: post.data.excerpt,
      slug: post.id,
      url: `/blog/${post.id}`,
      tags: [...(post.data.tags || []), ...(post.data.categories || [])],
      image: post.data.featuredImage,
    });
  }

  // Portfolio items
  for (const project of portfolioItems) {
    items.push({
      type: 'portfolio',
      title: project.data.title,
      excerpt: project.data.shortDescription,
      slug: project.id,
      url: `/portfolio/${project.id}`,
      tags: project.data.tools || [],
      category: project.data.category,
      image: project.data.thumbnail,
    });
  }

  // Services
  for (const service of services) {
    items.push({
      type: 'service',
      title: service.title,
      excerpt: service.description,
      id: service.id,
      url: `/services#${service.id}`,
      tags: service.features,
    });
  }

  return items;
}

// ── Fuse.js Search ────────────────────────────────────────
export function createSearchEngine(items: SearchItem[]) {
  return new Fuse(items, {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'excerpt', weight: 0.3 },
      { name: 'tags', weight: 0.2 },
      { name: 'category', weight: 0.1 },
    ],
    threshold: 0.35,
    includeScore: true,
    minMatchCharLength: 2,
  });
}
