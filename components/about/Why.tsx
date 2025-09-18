"use client";

import { motion } from "framer-motion";
import { stu2 } from "@/assets";
import Image from "next/image";

const Why = () => {
	return (
		<section className='mt-12 px-4'>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
				className='max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 bg-white rounded-2xl p-10 shadow-sm'
			>
				{/* Text Section */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex-1 space-y-6'
				>
					<h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
						Why Choose Explore360?
					</h2>
					<p className='text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl'>
						Because Africa deserves more than surface-level
						exploration. At Explore360, we combine market intelligence
						with cultural insight—helping you expand with clarity,
						build authentic partnerships, and unlock opportunities
						others overlook. Our team brings together consultants,
						trade experts, and tour curators who live and breathe
						Africa’s business and cultural landscape, ensuring every
						move you make drives real growth and lasting impact.
					</p>
				</motion.div>

				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex-1 w-full'
				>
					<div className='relative w-full aspect-[4/3]'>
						<Image
							src={stu2}
							alt='Why Choose Explore360'
							fill
							className='object-cover rounded-lg'
							sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw'
							quality={85}
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Why;
