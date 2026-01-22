"use client";

import { motion } from "framer-motion";
import { why } from "@/assets";
import Image from "next/image";

const ServiceHero = () => {
	return (
		<section className='py-20 px-6 bg-gray-50'>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12'
			>
				{/* Text Content */}
				<div className='flex-1 space-y-6 text-center lg:text-left'>
					<h1 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight'>
						We Create Stories That Move People.
					</h1>
					<p className='text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0'>
						At <strong>Business 360</strong>, we’re more than a
						media production company — we’re storytellers, creatives,
						and technical experts dedicated to transforming your
						vision into powerful, unforgettable experiences.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='bg-primary-brown hover:bg-primary-brown/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg'
						>
							See Our Work
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='bg-light-brown hover:bg-light-brown/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg'
						>
							Let’s Collaborate
						</motion.button>
					</div>
				</div>

				{/* Image */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					className='flex-1 w-full'
				>
					<div className='relative w-full aspect-[4/3]'>
						<Image
							src={why}
							alt='Media production in action'
							fill
							className='object-cover rounded-2xl shadow-lg'
							sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw'
							quality={90}
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default ServiceHero;
