"use client";
import Image from "next/image";
import { heroImage } from "@/assets";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

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
				<div className='flex flex-col gap-8 text-white items-center px-4 max-w-6xl mx-auto text-center'>
					{/* Animated Heading */}
					<motion.h1
						className='text-3xl md:text-5xl font-extrabold leading-tight tracking-tight'
						variants={containerVariants}
						initial='hidden'
						animate='visible'
					>
						<motion.span variants={itemVariants} className='block'>
							Shaping the Narrative of
						</motion.span>
						<motion.span
							variants={itemVariants}
							className='block text-[var(--color-light-brown)] mt-2'
						>
							Africa Businesses, Entrepreneurs and Opportunities
						</motion.span>
						<motion.span
							variants={itemVariants}
							className='block text-xl md:text-3xl mt-4 font-bold text-gray-200'
						>
							through our well curated Data-driven Publications,
							Events and TV contents.
						</motion.span>
					</motion.h1>

					{/* Buttons */}
					<motion.div
						className='flex flex-col sm:flex-row gap-4 mt-4'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.6 }}
					>
						<Link href='/products'>
							<button className='bg-[var(--color-primary-brown)] hover:bg-[var(--color-light-brown)] text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
								Explore Our Products
							</button>
						</Link>
						<Link href='/about'>
							<button className='bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 border border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
								Learn More
							</button>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
