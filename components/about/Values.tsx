"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const valuesData = [
	{
		icon: "mdi:shield-check",
		title: "Professionalism",
		description:
			"We uphold the highest standards of excellence in everything we do.We deliver with diligence and expertise that exceed expectations.",
	},
	{
		icon: "mdi:handshake",
		title: "Integrity",
		description:
			"Trust is the foundation of our relationships. We operate with transparency, honesty, and ethical practices in all engagements.",
	},
	{
		icon: "mdi:earth",
		title: "Pan-African Excellence",
		description:
			"We celebrate Africa’s diversity and opportunities. With cultural and market insights, we tailor content that truly resonate across regions.",
	},
	{
		icon: "mdi:lightbulb-on-outline",
		title: "Innovation",
		description:
			"We embrace creativity and adaptive thinking to solve unique challenges, delivering fresh ideas backed by proven structures.",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.2, duration: 0.6 },
	}),
};

const Values = () => {
	return (
		<section className='py-20 px-6 bg-gray-50'>
			<div className='max-w-7xl mx-auto text-center mb-14'>
				<h2 className='text-3xl md:text-5xl font-bold text-gray-900'>
					Our <span className='text-light-brown'>Values</span>
				</h2>
				<p className='text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed'>
					These principles define our brand and guide the impact we
					create for clients.
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
				{valuesData.map((value, index) => (
					<motion.div
						key={index}
						custom={index}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={cardVariants}
						className='bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300'
					>
						<div className='flex items-center gap-3 mb-5 text-light-brown'>
							<Icon icon={value.icon} width='28' height='28' />
							<h3 className='text-lg font-semibold text-gray-900'>
								{value.title}
							</h3>
						</div>
						<p className='text-gray-600 text-sm leading-relaxed'>
							{value.description}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Values;
