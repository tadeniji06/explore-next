"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { stu2 } from "@/assets";

const AboutHero = () => {
	return (
		<section className='relative w-full h-[80vh] flex items-center justify-center overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				<Image
					src={stu2}
					alt='Media Production Team'
					fill
					className='object-cover brightness-75'
					priority
				/>
				<div className='absolute inset-0 bg-black/40' />{" "}
				{/* overlay */}
			</div>

			{/* Content */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9, ease: "easeOut" }}
				className='relative z-10 text-center px-6 max-w-4xl'
			>
				<h1 className='text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg'>
					We Create Stories That Move People
				</h1>
				<p className='mt-6 text-lg md:text-xl text-gray-200 leading-relaxed'>
					At{" "}
					<span className='font-semibold text-white'>
						Business 360
					</span>
					, we’re more than just a media production company — we’re
					storytellers, creators, and innovators. From concept to
					final cut, we craft content that captivates, connects, and
					inspires.
				</p>

				<div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
					<motion.a
						href='/'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='px-6 py-3 rounded-full bg-primary-blue text-white font-semibold shadow-md hover:bg-[#b63d1e] transition'
					>
						See Our Work
					</motion.a>
					<motion.a
						href='/contact'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='px-6 py-3 rounded-full bg-white text-primary-blue font-semibold shadow-md hover:bg-gray-100 transition'
					>
						Let’s Collaborate
					</motion.a>
				</div>
			</motion.div>
		</section>
	);
};

export default AboutHero;
