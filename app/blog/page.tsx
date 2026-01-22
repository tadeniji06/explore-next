import type { Metadata } from "next";
import BlogPostsClient from "./BlogPostsClient";

export const metadata: Metadata = {
	title: "Business 360 Blog | Insights for Global Business Growth",
	description:
		"Business 360 Blog shares expert insights, data-driven strategies, and tools to help companies start, grow, and expand their businesses.",
	openGraph: {
		title: "Business 360 Blog | Insights for Global Business Growth",
		description:
			"Stay ahead with Business 360 insights on consulting, expansion, and growth opportunities.",
		url: "https://thisisbusiness360.com/blog",
		siteName: "Business 360",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Business 360 Blog | Insights for Global Business Growth",
		description:
			"Discover expert content and strategies from Business 360 to grow your business.",
		images: ["https://thisisbusiness360.com/logo.png"],
	},
};

const BlogsPage = () => {
	return <BlogPostsClient />;
};

export default BlogsPage;
