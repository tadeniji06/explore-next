import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ClarityScript from "@/components/Clarity";

export const metadata: Metadata = {
	title: "Explore 360 - Media Production Company in Africa",
	description:
		"Leading media production consultancy specializing in African markets. Expert real estate investment opportunities, comprehensive travel services, and strategic market entry solutions across Africa's fastest-growing economies.",

	// Enhanced keywords for better SEO
	keywords: [
		"Media Production Africa",
		"African Film Industry",
		"Real Estate Investment Africa",
		"Travel Agency Africa",
		"Business Consultancy Africa",
		"African Economic Opportunities",
		"International Business Development",
		"African Real Estate",
		"Cross-border Business",
		"Emerging Markets Africa",
		"Business Setup Africa",
		"Investment Opportunities Africa",
		"Commercial Real Estate Africa",
		"Business Travel Services",
		"African Business Network",
		"Market Research Africa",
		"Strategic Business Planning",
		"African Trade Relations",
	],

	// Author and publisher information
	authors: [{ name: "Explore 360" }],
	publisher: "Explore 360",

	// Favicon and icons
	icons: {
		icon: "/fav.jpg",
		shortcut: "/fav.jpg",
		apple: "/fav.jpg",
	},
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
