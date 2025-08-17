import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
	title: "Explore 360 - Business Expansion Across Africa",
	icons: {
		icon: "/logo.png",
	},
	description: "Business Expansion Across Africa",
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
			</body>
		</html>
	);
}
