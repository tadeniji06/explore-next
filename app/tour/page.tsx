// import Spotlight from "@/components/tour/Spotlight";
import TourHero from "@/components/tour/TourHero";
// import UpcomingTours from "@/components/tour/UpcomingTours";
import WhatToExpect from "@/components/tour/WhatToExpect";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Tours – Business Expansion Across Africa | Unlock New Markets",
	description:
		"Join our exclusive business tours across Africa. Connect with top leaders, discover emerging opportunities, and position your brand for continental growth.",
	openGraph: {
		title: "Tours – Business Expansion Across Africa",
		description:
			"Discover opportunities to expand your business across Africa. Network with leaders, explore markets, and grow your influence on the continent.",
		url: "https://thisisbusiness360.com/tour",
		siteName: "Business 360",
		images: [
			{
				url: "https://thisisbusiness360.com/logo.png",
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
		title: "Tours – Business Expansion Across Africa",
		description:
			"Unlock opportunities across Africa. Exclusive tours for businesses ready to scale regionally.",
		images: ["https://thisisbusiness360.com/logo.png"],
	},
};
const page = () => {
	return (
		<>
			<TourHero />
			{/* <UpcomingTours /> */}
			<WhatToExpect />
			{/* <Spotlight /> */}
		</>
	);
};
export default page;
