"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about, media } from "@/assets";
import Link from "next/link";

const HomeAbout = () => {
	// Animation variants
	const textVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, delay: i * 0.2, ease: "easeOut" },
		}),
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
		},
	};

	return (
		<section className='py-20 px-4 md:px-10 max-w-7xl mx-auto'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
				{/* Text Content */}
				<div className='space-y-6'>
					<motion.span
						variants={textVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
						className='inline-block text-light-brown font-semibold text-sm uppercase tracking-wide'
					>
						About Explore360
					</motion.span>

					<motion.h2
						variants={textVariants}
						custom={1}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
						className='text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight'
					>
						We Don’t Just Produce Content —
						<span className='text-[var(--color-primary-brown)]'>
							{" "}
							We Create Impact
						</span>
					</motion.h2>

					<motion.p
						variants={textVariants}
						custom={2}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
						className='text-gray-600 text-lg leading-relaxed'
					>
						At{" "}
						<span className='font-semibold text-gray-800'>
							Explore360
						</span>
						, we’re more than just a media production company. We’re a
						team of passionate storytellers, creative thinkers, and
						technical experts dedicated to turning your ideas into
						powerful, unforgettable visual experiences.
					</motion.p>

					<motion.p
						variants={textVariants}
						custom={3}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
						className='text-gray-600 text-lg leading-relaxed'
					>
						From concept to final cut, we partner with you to create
						content that{" "}
						<span className='font-semibold text-gray-800'>
							captivates
						</span>
						,{" "}
						<span className='font-semibold text-gray-800'>
							connects
						</span>
						, and{" "}
						<span className='font-semibold text-gray-800'>
							converts
						</span>
						. Whether it’s film, music, branded campaigns, or digital
						storytelling, we craft visuals that not only look stunning
						but drive real impact for your brand.
					</motion.p>

					<motion.div
						variants={textVariants}
						custom={4}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
					>
						<Link href='/about'>
							<motion.button
								whileHover={{
									scale: 1.05,
									boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
								}}
								whileTap={{ scale: 0.95 }}
								className='bg-[var(--color-primary-brown)] hover:bg-[var(--color-light-brown)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md'
							>
								Read More
							</motion.button>
						</Link>
					</motion.div>
				</div>

				{/* Image Content */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={imageVariants}
					className='relative'
				>
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.3 }}
						className='relative overflow-hidden rounded-2xl shadow-2xl h-[400px] md:h-[500px]'
					>
						<Image
							src={media}
							alt='Explore360 Media Production Team'
							fill
							className='object-cover'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							quality={90}
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10' />
					</motion.div>

					{/* Decorative Blurs */}
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8, duration: 0.6 }}
						className='absolute -top-4 -right-4 w-20 h-20 bg-light-brown/20 rounded-full blur-xl'
					/>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 1, duration: 0.6 }}
						className='absolute -bottom-4 -left-4 w-16 h-16 bg-primary-brown/20 rounded-full blur-xl'
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default HomeAbout;
