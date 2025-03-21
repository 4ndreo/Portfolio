import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			publishDate: z.coerce.date(),
			show: z.boolean(),
			link: z.string().optional(),
			description: z.string().max(255).optional(),
			tags: z.array(z.string()),
			img: z.string().optional(),
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
			organization_url: z.string().optional(),
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
			exam: z.string().optional(),
			organization: z.string().optional(),
		}),
	}),
	contact: defineCollection({
		type: 'content',
		schema: z.object({
			firstName: z.string(),
			lastName: z.string(),
			city: z.string(),
			country: z.string(),
			email: z.string(),
			phone: z.string(),
			birthDate: z.date(),
			linkedin: z.string(),
			github: z.string(),
		}),
	}),
};
