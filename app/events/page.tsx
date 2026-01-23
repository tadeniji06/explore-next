"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const EventsPage = () => {
	const events = [
		{
			title: "The Executive Mixer",
			date: "Coming Soon",
			location: "Lagos, Nigeria",
			type: "Networking",
			color: "blue",
			icon: "mdi:glass-cocktail",
		},
		{
			title: "Lagos Tech Community Meetup",
			date: "Coming Soon",
			location: "Lagos, Nigeria",
			type: "Community",
			color: "green",
			icon: "mdi:account-group",
		},
		{
			title: "Afrique Blockchain Technology Summit",
			date: "Coming Soon",
			location: "Virtual & Physical",
			type: "Summit",
			color: "purple",
			icon: "mdi:cube-outline",
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4'>
			<div className='max-w-6xl w-full'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<span className='inline-block py-1 px-3 bg-red-100 text-red-600 rounded-full text-sm font-semibold tracking-wide mb-4'>
						UPCOMING EVENTS
					</span>
					<h1 className='text-4xl md:text-6xl font-black text-gray-900 mb-6'>
						Experiences That <br className='hidden md:block' />{" "}
						Connect & Inspire
					</h1>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Join us for industry-defining events, intimate mixers, and
						large-scale summits.
						<br />
						<span className='font-semibold'>
							Stay tuned for dates and details.
						</span>
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{events.map((event, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.15 }}
							className='bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300'
						>
							<div
								className={`absolute top-0 right-0 w-32 h-32 bg-${event.color}-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110`}
							></div>

							<div className='relative z-10'>
								<div
									className={`w-14 h-14 rounded-2xl bg-${event.color}-100 flex items-center justify-center mb-6 text-${event.color}-600`}
								>
									<Icon icon={event.icon} className='text-3xl' />
								</div>

								<span className='text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2 block'>
									{event.type}
								</span>
								<h3 className='text-2xl font-bold text-gray-900 mb-4 h-16'>
									{event.title}
								</h3>

								<div className='space-y-3'>
									<div className='flex items-center text-gray-600'>
										<Icon
											icon='mdi:calendar-clock'
											className='mr-2'
										/>
										<span>{event.date}</span>
									</div>
									<div className='flex items-center text-gray-600'>
										<Icon icon='mdi:map-marker' className='mr-2' />
										<span>{event.location}</span>
									</div>
								</div>

								<div className='mt-8 pt-6 border-t border-gray-100'>
									<button className='w-full py-3 rounded-xl bg-gray-50 text-gray-400 font-medium cursor-not-allowed'>
										Registration Opening Soon
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className='text-center mt-20'
				>
					<p className='text-gray-500'>
						Want to sponsor an event?{" "}
						<a
							href='/contact'
							className='text-primary-blue font-semibold hover:underline'
						>
							Contact us
						</a>
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default EventsPage;
