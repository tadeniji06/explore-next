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
				<div className='flex-1 space-y-6'>
					<h1 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight'>
						Our Services
					</h1>
					<p className='text-gray-700 text-lg leading-relaxed max-w-2xl'>
						At Explore360, we blend strategy and creativity to help
						you <strong>start, grow, and thrive</strong> across
						Africa. From business consulting to world-class media
						production, we provide end-to-end solutions that unlock
						growth, reduce risk, and bring your vision to life.
					</p>
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
							alt='Explore360 Services'
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
