"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const Story = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
			className='mt-12 px-4 py-10 bg-white rounded-xl shadow-lg'
		>
			<div className='max-w-6xl mx-auto space-y-12'>
				{/* Our Story Section */}
				<div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12'>
					{/* Icon + Title */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='flex items-center gap-3 min-w-[180px]'
					>
						<Icon
							icon='mdi:globe'
							className='text-light-brown'
							width='40'
							height='40'
						/>
						<h2 className='text-2xl font-semibold text-gray-800'>
							Our Story
						</h2>
					</motion.div>

					{/* Text */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-gray-700 text-base leading-relaxed max-w-3xl'
					>
						<p className='mb-4'>
							Business 360 was born from a simple conviction: Global
							stories, markets, and opportunities deserve to be seen
							on the global stage. What began as a boutique
							consultancy for market entry and trade support has grown
							into a multi-faceted platform for business and cultural
							exploration.
						</p>
						<p>
							From tailored consulting to curated business and leisure
							experiences, we connect people, ideas, and opportunities
							across borders. Today, Business 360 stands as a trusted
							partner for organisations and individuals ready to
							confidently expand, connect, and thrive across the
							globe.
						</p>
					</motion.div>
				</div>

				{/* Divider */}
				<div className='h-px w-full bg-gray-200' />

				{/* Our Mission Section */}
				<div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12'>
					{/* Icon + Title */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='flex items-center gap-3 min-w-[180px]'
					>
						<Icon
							icon='fluent:handshake-24-filled'
							className='text-light-brown'
							width='40'
							height='40'
						/>
						<h2 className='text-2xl font-semibold text-gray-800'>
							Our Mission
						</h2>
					</motion.div>

					{/* Text */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-gray-700 text-base leading-relaxed max-w-3xl'
					>
						<p>
							Our mission is simple but ambitious: to make Africa the
							next frontier of confident global business expansion.
							Through strategic consulting, trade facilitation, and
							immersive cultural tours, we break barriers, foster
							partnerships, and unlock growth—transforming bold
							visions into real, lasting impact across the continent.
						</p>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Story;
