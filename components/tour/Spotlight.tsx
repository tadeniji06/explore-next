"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { logo, spot } from "@/assets";
import Image from "next/image";

const Spotlight = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				duration: 0.6,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
		hover: {
			scale: 1.02,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const scheduleItems = [
		{
			date: "October 15th - 19th, 2025",
			title: "Branch Show: regional agric and trade expo",
			icon: "mdi:office-building",
		},
		{
			date: "October 20th - 24th, 2025",
			title:
				"Nairobi International Trade Fair - massive business opportunity",
			icon: "mdi:store",
		},
		{
			date: "October 24th - 28th, 2025",
			title: "Kenya Branch Show - events and local innovations",
			icon: "mdi:factory",
		},
		{
			date: "October 29th - 30th, 2025",
			title:
				"Africa TravelTech Summit & Expo - cutting edge travel tech showcase",
			icon: "mdi:airplane",
		},
	];

	return (
		<div className='relative'>
			<div className='w-full h-[600px] md:h-[700px] relative overflow-hidden'>
				{/* Background Image */}
				<Image
					priority
					src={spot}
					alt='Kenya spotlight background'
					fill
					className='object-cover object-center transition-opacity duration-1000 ease-in-out'
					quality={90}
				/>

				{/* Dark overlay */}
				<div className='absolute inset-0 bg-black/70 z-10' />

				{/* Content */}
				<motion.div
					className='relative z-20 flex items-center justify-center h-full px-4'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}
				>
					<div className='max-w-4xl mx-auto w-full'>
						{/* Logo and Header */}
						<div className='text-center text-white mb-8'>
							<motion.div
								className='flex justify-center mb-6'
								variants={itemVariants}
							>
								<Image
									src={logo}
									alt='Explore360 Logo'
									width={80}
									height={80}
									className='h-16 md:h-20 w-auto filter brightness-0 invert drop-shadow-lg'
									priority
								/>
							</motion.div>

							<motion.h1
								className='text-3xl md:text-4xl font-bold tracking-wider mb-2'
								variants={itemVariants}
							>
								SPOTLIGHT ON KENYA
							</motion.h1>

							<motion.p
								className='text-lg md:text-xl opacity-90'
								variants={itemVariants}
							>
								October 15th - 30th, 2025
							</motion.p>
						</div>

						{/* Schedule Cards */}
						<motion.div
							className='space-y-4'
							variants={containerVariants}
						>
							{scheduleItems.map((item, index) => (
								<motion.div
									key={index}
									className='bg-white rounded-lg p-4 shadow-lg backdrop-blur-sm'
									variants={cardVariants}
									whileHover='hover'
								>
									<div className='flex items-start gap-4'>
										{/* Icon */}
										<div className='flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
											<Icon
												icon={item.icon}
												className='text-orange-600 text-xl'
											/>
										</div>

										{/* Content */}
										<div className='flex-1'>
											<p className='text-sm text-gray-600 mb-1 font-medium'>
												{item.date}
											</p>
											<h3 className='text-gray-900 font-semibold leading-tight'>
												{item.title}
											</h3>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Spotlight;
