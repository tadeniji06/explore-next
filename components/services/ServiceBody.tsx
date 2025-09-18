"use client";

import { motion } from "framer-motion";
import {
	Camera,
	Film,
	Music,
	LineChart,
	Search,
	Lightbulb,
	Clapperboard,
	Scissors,
	Send,
} from "lucide-react";

const ServiceBody = () => {
	const services = [
		{
			name: "Video Production",
			icon: <Film size={28} />,
			desc: "Corporate films, commercials, documentaries, and brand stories — from concept to post-production.",
		},
		{
			name: "Photography",
			icon: <Camera size={28} />,
			desc: "Capture powerful stills with services including corporate headshots, lifestyle shoots, product photography, and event coverage.",
		},
		{
			name: "Audio Production",
			icon: <Music size={28} />,
			desc: "Podcasts, voiceovers, music scoring, and professional sound design that elevate your brand’s presence.",
		},
		{
			name: "Motion Graphics & Animation",
			icon: <LineChart size={28} />,
			desc: "Explainer videos, animated logos, and dynamic visuals that simplify complex ideas and engage audiences.",
		},
	];

	const processSteps = [
		{
			step: "Discovery",
			icon: <Search size={26} />,
			desc: "We start by listening. A detailed consultation to understand your goals, your audience, and your unique story.",
		},
		{
			step: "Strategy & Creative",
			icon: <Lightbulb size={26} />,
			desc: "Our team crafts a creative brief and develops a plan that aligns with your vision and budget.",
		},
		{
			step: "Production",
			icon: <Clapperboard size={26} />,
			desc: "This is where the magic happens. We handle everything on set, from lighting and sound to directing and capturing every detail.",
		},
		{
			step: "Post-Production",
			icon: <Scissors size={26} />,
			desc: "We meticulously edit, color grade, and sound design to perfect your project — we don’t stop until you’re thrilled.",
		},
		{
			step: "Delivery",
			icon: <Send size={26} />,
			desc: "We deliver your final product in the formats you need, ready to be shared with the world.",
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.1 },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section className='py-20 px-6 bg-white'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}
					className='text-center mb-16'
				>
					<motion.h2
						variants={cardVariants}
						className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight'
					>
						What We Do at{" "}
						<span className='text-light-brown'>Explore360</span>
					</motion.h2>
					<motion.p
						variants={cardVariants}
						className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'
					>
						From launching businesses across Africa to producing
						visually stunning stories — our integrated services help
						you succeed on every front.
					</motion.p>
				</motion.div>

				{/* Services Grid */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{
								y: -6,
								transition: { duration: 0.3, ease: "easeOut" },
							}}
							className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 p-6'
						>
							<div className='mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-light-brown/10 text-light-brown'>
								{service.icon}
							</div>
							<h3 className='text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-light-brown transition-colors duration-300'>
								{service.name}
							</h3>
							<p className='text-gray-600 leading-relaxed text-sm'>
								{service.desc}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* Our Process */}
				<section className='mt-28'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight'>
							Our <span className='text-light-brown'>Process</span>
						</h2>
						<p className='text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'>
							We follow a structured, collaborative approach so you
							know exactly what to expect at every stage.
						</p>
					</div>

					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
						variants={containerVariants}
						className='relative grid grid-cols-1 md:grid-cols-5 gap-8'
					>
						{processSteps.map((step, index) => (
							<motion.div
								key={index}
								variants={cardVariants}
								whileHover={{ scale: 1.05 }}
								className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition'
							>
								<div className='w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-light-brown/10 text-light-brown'>
									{step.icon}
								</div>
								<h3 className='text-lg font-bold text-gray-900 mb-2'>
									{step.step}
								</h3>
								<p className='text-gray-600 text-sm leading-relaxed'>
									{step.desc}
								</p>
							</motion.div>
						))}
					</motion.div>
				</section>

				{/* Call to Action */}
				<div className='text-center mt-20'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className='bg-gray-50 rounded-2xl p-10'
					>
						<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
							Ready to Elevate Your Business & Brand?
						</h3>
						<p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
							Whether you need strategic consulting or powerful
							storytelling, Explore360 is your partner in building
							something extraordinary.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='bg-primary-brown hover:bg-primary-brown/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg'
							>
								Get Started Today
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='bg-light-brown hover:bg-light-brown/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg'
							>
								Schedule Consultation
							</motion.button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ServiceBody;
