import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			link: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	background: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			grade: z.string().optional(),
			description: z.string(),
			organization: z.string(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			tags: z.array(z.string()),
		}),
	}),
	languages: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			grade: z.string(),
			exam: z.string(),
			organization: z.string(),
		}),
	}),
};
