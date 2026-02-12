import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        client: z.string().optional(),
        tags: z.array(z.string()),
        lang: z.enum(['es', 'en']),
        // heroImage: z.string().optional(), // Descomentar cuando tengamos manejo de imágenes
    }),
});

const xray = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(), // Emoji or Icon name
        order: z.number().default(99),
        lang: z.enum(['es', 'en']),
    }),
});

const plugins = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        type: z.enum(['block', 'mod', 'theme', 'local', 'report', 'auth', 'enrol']),
        version: z.string(),
        description: z.string(),
        features: z.array(z.string()),
        repoUrl: z.string().url().optional(),
        downloadUrl: z.string().url().optional(),
        lang: z.enum(['es', 'en']),
        icon: z.string().optional(),
    }),
});

export const collections = {
    'case-studies': caseStudies,
    'xray': xray,
    'plugins': plugins,
};
