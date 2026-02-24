import { defineCollection, z } from "astro:content";

const posts = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.coerce.date(),
		draft: z.boolean().optional(),
		slug: z.string().optional(),
	}),
});

const thoughts = defineCollection({
	type: "content",
	schema: z.object({
		date: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().optional(),
	}),
});

export const collections = { posts, thoughts };
