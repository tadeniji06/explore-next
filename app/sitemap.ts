import type { MetadataRoute } from "next";
import { getBlogPostsForSitemap } from "@/utils/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Fetch all blog posts from Sanity (optimized for sitemap)
	const blogPosts = await getBlogPostsForSitemap();

	// Create sitemap entries for blog posts
	const blogEntries: MetadataRoute.Sitemap = blogPosts.map(
		(post: any) => ({
			url: `https://theb360group.com/blog/${post.slug.current}`,
			lastModified: new Date(post.publishedAt),
			changeFrequency: "monthly" as const,
			priority: 0.6,
		}),
	);

	// Static pages
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: "https://theb360group.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://theb360group.com/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://theb360group.com/services",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://theb360group.com/publications",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: "https://theb360group.com/tv",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: "https://theb360group.com/events",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: "https://theb360group.com/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: "https://theb360group.com/contact",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
	];

	// Combine static pages and blog entries
	return [...staticPages, ...blogEntries];
}
