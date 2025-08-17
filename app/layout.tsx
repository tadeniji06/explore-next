import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ClarityScript from "@/components/Clarity";

export const metadata: Metadata = {
	title: "Explore 360 - Business Expansion Across Africa",
	description:
		"Leading business expansion consultancy specializing in African markets. Expert real estate investment opportunities, comprehensive travel services, and strategic market entry solutions across Africa's fastest-growing economies.",

	// Enhanced keywords for better SEO
	keywords: [
		"Business Expansion Africa",
		"African Market Entry",
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
		icon: "/logo.png",
		shortcut: "/logo.png",
		apple: "/logo.png",
	},

	// Open Graph for general social sharing
	openGraph: {
		title: "Explore 360 - Business Expansion Across Africa",
		description:
			"Leading business expansion consultancy specializing in African markets. Expert real estate investment opportunities, comprehensive travel services, and strategic market entry solutions.",
		url: "https://theexplore360.com", 
		siteName: "Explore 360",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/logo.png", // You'll need to create this image (1200x630px recommended)
				width: 1200,
				height: 630,
				alt: "Explore 360 - Business Expansion Across Africa",
				type: "image/jpeg",
			},
			{
				url: "/logo.png",
				width: 800,
				height: 600,
				alt: "Explore 360 Logo",
				type: "image/png",
			},
		],
	},

	// Twitter Card configuration
	twitter: {
		card: "summary_large_image",
		site: "@explore360", // Replace with your actual Twitter handle
		creator: "@explore360", // Replace with your actual Twitter handle
		title: "Explore 360 - Business Expansion Across Africa",
		description:
			"Leading business expansion consultancy specializing in African markets. Expert real estate, travel services, and strategic market entry solutions.",
		images: ["/logo.png"],
	},

	// Additional SEO enhancements
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	// Verification for search engines (add your actual verification codes)
	verification: {
		google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
		// yahoo: "your-yahoo-verification-code",
		// other: "your-other-verification-code",
	},

	// Alternate languages if you support multiple languages
	alternates: {
		canonical: "https://explore360.com", // Replace with your actual domain
		languages: {
			"en-US": "https://explore360.com",
			// Add other language versions if available
			// "fr-FR": "https://explore360.com/fr",
		},
	},

	// Category for better classification
	category: "Business Services",

	// Application name
	applicationName: "Explore 360",

	// Referrer policy
	referrer: "origin-when-cross-origin",

	// Format detection
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				{/* Additional meta tags that can't be set via Metadata API */}
				<meta name='theme-color' content='#000000' />
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content='default'
				/>
				<meta
					name='apple-mobile-web-app-title'
					content='Explore 360'
				/>

				{/* Preconnect to external domains for performance */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>

				{/* DNS prefetch for external resources */}
				<link rel='dns-prefetch' href='//www.google-analytics.com' />
			</head>
			<body className=''>
				<Header />
				{children}
				<Footer />
				<ClarityScript />
			</body>
		</html>
	);
}
