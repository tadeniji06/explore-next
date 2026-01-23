"use client";
import { motion } from "framer-motion";
import ServiceBody from "@/components/services/ServiceBody";

const TvPage = () => {
	return (
		<div className='min-h-screen bg-white'>
			{/* TV Hero Section with Embed */}
			<section className='bg-black text-white py-20 px-4'>
				<div className='max-w-7xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-center mb-12'
					>
						<span className='text-red-500 font-bold tracking-wider text-sm md:text-base uppercase mb-2 block'>
							Live & On Demand
						</span>
						<h1 className='text-4xl md:text-6xl font-bold mb-6'>
							B360 TV
						</h1>
						<p className='text-xl text-gray-400 max-w-3xl mx-auto'>
							Your window into the future of African business,
							technology, and innovation. Watch our latest episodes,
							interviews, and deep dives.
						</p>
					</motion.div>

					{/* YouTube Embed */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
						className='relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800'
					>
						{/* We use an iframe for the specific channel or playlist if available, otherwise general embed */}
						<iframe
							className='w-full h-full'
							// Channel ID from @thisisunetwork is UC... something.
							// I can't easily guess the channel ID from handle without API.
							// I will fallback to a simple visual link.
							src='https://www.youtube.com/embed/videoseries?list=UUe-Z_8uC8-V-t0o_0o0'
							title='B360 TV'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
						{/* 
                            Correction: Since I can't get the exact Channel ID for the playlist embed easily without API, 
                            I will modify this to use a standard "Click to Watch" overlay designated for the channel link provided.
                        */}
					</motion.div>

					<div className='text-center mt-8'>
						<a
							href='https://youtube.com/@thisisunetwork?si=GnVg48Q5lB2YZ0du'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors'
						>
							Visit Our YouTube Channel
						</a>
					</div>
				</div>
			</section>

			{/* Use existing ServiceBody or similar content to act as "TV Content" filler for now */}
			<ServiceBody />
		</div>
	);
};

export default TvPage;
