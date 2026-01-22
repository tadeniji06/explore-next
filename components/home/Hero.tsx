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
						Shaping the Narrative of <br />
						<span className='text-[var(--color-light-brown)]'>
							Global Business & Innovation
						</span>
					</h1>

					{/* Subheading */}
					<p className='text-lg md:text-xl font-medium leading-relaxed max-w-3xl text-gray-200'>
						Publication • Event • TV • People • Company • Industry{" "}
						<br />
						Connecting the dots between Tech, Finance, and the Future
						of Work. See who is winning the global tech race.
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
