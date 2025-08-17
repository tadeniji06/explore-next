import Chronicles from "@/components/home/Chronicles";
import Consult from "@/components/home/Consult";
import Explore from "@/components/home/Explore";
import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";

export default function Home() {
	return (
		<>
			<Hero />
			<HomeAbout />
			<hr className='border border-gray-400' />
			<Explore />
			<hr className='border border-gray-400' />
			<Consult />
			<hr className='border border-gray-400' />
			<Chronicles />
		</>
	);
}
