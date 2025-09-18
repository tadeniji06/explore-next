import Image from "next/image";
import { heroImage } from "@/assets";
import Link from "next/link";

const Hero = () => {
	return (
		<div className='relative w-full h-[500px] md:h-[700px] overflow-hidden'>
			{/* Background */}
			<Image
				src={heroImage}
				alt='Hero background'
				fill
				className='object-cover'
				priority
				quality={90}
				style={{ zIndex: -2 }}
			/>

			{/* Overlay */}
			<div className='absolute inset-0 bg-black/70' />

			{/* Content */}
			<div className='relative z-10 flex items-center justify-center h-full'>
				<div className='flex flex-col gap-6 text-white items-center px-4 max-w-5xl mx-auto text-center'>
					{/* Heading */}
					<h1 className='text-4xl md:text-6xl font-extrabold leading-tight'>
						Amplifying Africa’s Voice <br />
						<span className='text-[var(--color-light-brown)]'>
							Through Powerful Stories
						</span>
					</h1>

					{/* Subheading */}
					<p className='text-lg md:text-xl font-medium leading-relaxed max-w-3xl text-gray-200'>
						From magazines to TV, we spotlight Africa’s creativity,
						culture, and innovation — helping brands and talents grow
						with confidence.
					</p>

					{/* Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 mt-6'>
						<Link href='/products'>
							<button className='bg-[var(--color-primary-brown)] hover:bg-[var(--color-light-brown)] text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200'>
								Explore Our Products
							</button>
						</Link>
						<Link href='/about'>
							<button className='bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 border border-white/30'>
								Learn More
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
