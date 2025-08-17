import Image from "next/image";
import { heroImage } from "@/assets";

const Hero = () => {
	return (
		<div className='relative w-full h-[500px] md:h-[700px] overflow-hidden'>
			{/* Next.js Image component for background */}
			<Image
				src={heroImage}
				alt='Hero background'
				fill
				className='object-cover'
				priority
				quality={90}
				style={{ zIndex: -2 }} 
			/>

			{/* Dark overlay */}
			<div
				className='absolute inset-0 bg-black/60'
			/>

			{/* Content */}
			<div className='relative z-10 flex items-center justify-center h-full'>
				<div className='flex flex-col gap-6 text-white items-center px-4 max-w-4xl mx-auto text-center'>
					{/* Main heading */}
					<h1 className='text-4xl md:text-6xl font-bold leading-tight'>
						Grow And Expand Your Business In Africa With Confidence
					</h1>

					{/* Subheading */}
					<p className='text-lg md:text-xl font-medium leading-relaxed max-w-4xl'>
						Explore360 helps companies to start, grow and expand their
						businesses in african markets through Consulting, Content,
						Access, Data, Platforms, Tools and Technologies
					</p>

					{/* Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 mt-4'>
						<button className='bg-primary-brown hover:bg-primary-brown/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200'>
							Explore Our Products
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
