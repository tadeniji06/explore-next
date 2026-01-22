import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ClarityScript from "@/components/Clarity";

export const metadata: Metadata = {
	title: "Business 360 - The Future of Business, Tech & Innovation",
	description:
		"Your premier destination for Business, Publication, Events, TV, and Industry insights. Covering the global tech race, future of work, and emerging market opportunities.",

	// Enhanced keywords for better SEO
	keywords: [
		"Business 360",
		"B360TV",
		"Business Publication",
		"Tech News",
		"Global Innovation",
		"Future of Work",
		"African Tech Boom",
		"Startup Ecosystem",
		"Digital Economy",
		"AI and Automation",
		"Fintech Revolution",
		"Business Events",
		"Industry Insights",
	],

	// Author and publisher information
	authors: [{ name: "Business 360" }],
	publisher: "Business 360",

	// Favicon and icons
	icons: {
		icon: "/fav.jpg",
		shortcut: "/fav.jpg",
		apple: "/fav.jpg",
	},

	// OpenGraph Metadata
	openGraph: {
		title: "Business 360 - The Future of Business, Tech & Innovation",
		description:
			"Your premier destination for Business, Publication, Events, TV, and Industry insights. Covering the global tech race, future of work, and emerging market opportunities.",
		url: "https://thisisbusiness360.com",
		siteName: "Business 360",
		images: [
			{
				url: "https://thisisbusiness360.com/logo.png",
				width: 1200,
				height: 630,
				alt: "Business 360",
			},
		],
		locale: "en_US",
		type: "website",
	},

	// Twitter Metadata
	twitter: {
		card: "summary_large_image",
		title: "Business 360 - The Future of Business, Tech & Innovation",
		description:
			"Your premier destination for Business, Publication, Events, TV, and Industry insights.",
		images: ["https://thisisbusiness360.com/logo.png"],
	},

	metadataBase: new URL("https://thisisbusiness360.com"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className=''>
				<Header />
				{children}
				<Footer />
				<ClarityScript />
			</body>
		</html>
	);
}
