"use client";
import { stu1 } from "@/assets";
import Image from "next/image";

const AboutHero = () => {
	return (
		<div className='relative'>
			<div className='w-full h-[400px] md:h-[600px] relative overflow-hidden'>
				{/* Background Image */}
				<Image
					priority
					src={stu1}
					alt='About Explore360 background'
					fill
					className='object-cover object-center transition-opacity duration-1000 ease-in-out'
					quality={90}
				/>

				{/* Dark overlay */}
				<div className='absolute inset-0 bg-black/60 z-10' />

				{/* Content */}
				<div className='relative z-20 flex items-center justify-center h-full'>
					<div className='flex flex-col gap-6 text-white items-center px-4 max-w-4xl mx-auto text-center'>
						{/* Main heading */}
						<h1 className='text-4xl md:text-6xl font-bold leading-tight'>
							About Explore360
						</h1>

						{/* Subheading */}
						<p className='text-lg md:text-xl font-medium leading-relaxed max-w-3xl'>
							We are your trusted partner for business expansion,
							trade facilitation, and authentic African exploration—
							equipping you to grow confidently in one of the world’s
							most dynamic regions.
						</p>

						{/* Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 mt-4'>
							<button className='bg-primary-brown hover:bg-primary-brown/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200'>
								Explore Our Services
							</button>
							<button className='bg-light-brown hover:bg-light-brown/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200'>
								Book a Consultation
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
