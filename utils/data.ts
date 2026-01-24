import { sm, atb, travel, tech, medias, b360 } from "@/assets";

export const navLinks = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Publications",
		link: "/publications",
	},
	{
		name: "TV",
		link: "/tv",
	},
	{
		name: "Events",
		link: "/events",
	},
	{
		name: "About Us",
		link: "/about",
	},
	{
		name: "Our Services",
		link: "/services",
	},
];

export const socials = [
	{
		name: "Facebook",
		link: "https://www.facebook.com",
	},
	{
		name: "Twitter",
		link: "https://www.twitter.com",
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com",
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com",
	},
	{
		name: "WhatsApp",
		link: "https://wa.me/2348064968725",
	},
];

export const Brands = () => {
	const brands = [
		{
			logo: sm,
			title: "Showcase Africa",
			image: medias,
			link: "https://showcaseafricaonline.com",
			desc: "Showcase Africa is a publication that documents developments, opportunities and events  in  the African HoReCa and Travel Industries",
			category: "Media Publication",
		},
		{
			logo: atb,
			title: "Africa Tech Business",
			image: tech,
			link: "https://africatechbusiness.com",
			desc: `Decoding Africa’s Tech, Business & Innovation Landscape
We analyze Africa’s startup ecosystem, digital markets, business trends, and regulatory shifts — bringing clear, data-backed storytelling to a rapidly growing innovation economy.`,
			category: "Media Production",
		},
		{
			logo: b360,
			title: "Business360",
			image: travel,
			link: "https://thisisbusiness360.com/",
			desc: "Business360 is a business expansion company that specializes in creating memorable business and production experiences for individuals and businesses.",
			category: "Business Expansion",
		},
	];

	return brands;
};
