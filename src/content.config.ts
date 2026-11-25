import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ pt: z.string(), en: z.string(), es: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    title: localized,
    summary: localized,
    impact: localized,
    stack: z.array(z.string()),
    github: z.string().url(),
    year: z.string().optional(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

export const collections = { projects };
