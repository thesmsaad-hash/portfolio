import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Blog Collection ──────────────────────────────────────
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    author: z.string().default('SM SAAD'),
    featuredImage: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

// ── Portfolio Collection ─────────────────────────────────
const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'YouTube Editing',
      'Podcast Editing',
      'Shorts & Reels',
      'Motion Graphics',
      'VFX',
      'Thumbnail Design',
      'AI Content',
      'Social Media Ads',
    ]),
    filterTag: z.enum([
      'Video Editing',
      'Motion Graphics',
      'VFX',
      'AI',
      'Branding',
    ]),
    client: z.string(),
    shortDescription: z.string(),
    thumbnail: z.string(),
    gallery: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    software: z.array(z.string()).default([]),
    completionDate: z.coerce.date(),
    videoUrl: z.string().optional(),
    videoPlatform: z.enum(['youtube', 'vimeo', 'instagram']).optional(),
    videoDuration: z.string().optional(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    result: z.string().optional(),
    clientFeedback: z.string().optional(),
    featured: z.boolean().default(false),
    beforeImage: z.string().optional(),
    afterImage: z.string().optional(),
    downloadUrl: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
};
