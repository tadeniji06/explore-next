import ServiceBody from "@/components/services/ServiceBody";
import ServiceHero from "@/components/services/ServiceHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Services – Business Expansion Across Africa | Unlock New Markets",
	description:
		"Join our exclusive business tours across Africa. Connect with top leaders, discover emerging opportunities, and position your brand for continental growth.",
	openGraph: {
		title: "Services – Business Expansion Across Africa",
		description:
			"Discover opportunities to expand your business across Africa. Network with leaders, explore markets, and grow your influence on the continent.",
		url: "https://theb360group.com/services",
		siteName: "The B360 Group",
		images: [
			{
				url: "https://theb360group.com/logo.png",
				width: 1200,
				height: 630,
				alt: "Business Expansion Tours Across Africa",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Services – Business Expansion Across Africa",
		description:
			"Unlock opportunities across Africa. Exclusive tours for businesses ready to scale regionally.",
		images: ["https://theb360group.com/logo.png"],
	},
};
const page = () => {
	return (
		<>
			<ServiceHero />
			<ServiceBody />
		</>
	);
};
export default page;
