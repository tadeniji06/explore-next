import type { Metadata } from "next";
import BlogPostsClient from "./BlogPostsClient";

export const metadata: Metadata = {
  title: "Explore360 Blog | Insights for African Market Growth",
  description:
    "Explore360 Blog shares expert insights, data-driven strategies, and tools to help companies start, grow, and expand their businesses across African markets.",
  openGraph: {
    title: "Explore360 Blog | Insights for African Market Growth",
    description:
      "Stay ahead with Explore360 insights on consulting, expansion, and growth opportunities in Africa.",
    url: "https://theexplore360.com/blog",
    siteName: "Explore360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore360 Blog | Insights for African Market Growth",
    description:
      "Discover expert content and strategies from Explore360 to grow your business in Africa.",
    images: ["https://theexplore360.com/logo.png"],
  },
};

const BlogsPage = () => {
  return <BlogPostsClient />;
};

export default BlogsPage;
