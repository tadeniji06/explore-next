"use client";

import { motion } from "framer-motion";
import { stu2 } from "@/assets"; 
import Image from "next/image";

const Why = () => {
	return (
		<section className='mt-16 px-4'>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
				className='max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 bg-white rounded-2xl p-10 shadow-lg'
			>
				{/* Text Section */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex-1 space-y-6'
				>
					<h2 className='text-3xl md:text-4xl font-extrabold text-gray-900'>
						Why Work With Us?
					</h2>
					<p className='text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl'>
						We’re not just a media production team — we’re storytellers.
						From concept to final cut, we transform your vision into powerful
						visuals that captivate and connect. Whether it’s{" "}
						<span className='font-semibold'>video, photography, audio, or motion graphics</span>, 
						we craft content that makes your brand unforgettable.
					</p>

					<ul className='space-y-4'>
						<li className='flex items-start gap-3'>
							<span className='w-3 h-3 rounded-full bg-[#D24726] mt-2'></span>
							<p className='text-gray-800'>
								<strong>Creative Direction:</strong> Bold ideas that bring your story to life.
							</p>
						</li>
						<li className='flex items-start gap-3'>
							<span className='w-3 h-3 rounded-full bg-[#D24726] mt-2'></span>
							<p className='text-gray-800'>
								<strong>High-End Production:</strong> Cinematic visuals, crisp audio, flawless edits.
							</p>
						</li>
						<li className='flex items-start gap-3'>
							<span className='w-3 h-3 rounded-full bg-[#D24726] mt-2'></span>
							<p className='text-gray-800'>
								<strong>End-to-End Process:</strong> From brainstorming to delivery, we handle it all.
							</p>
						</li>
					</ul>
				</motion.div>

				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex-1 w-full'
				>
					<div className='relative w-full aspect-[4/3] rounded-lg overflow-hidden'>
						<Image
							src={stu2} // Swap this with a more "production" themed image (cameras, editing suite, set, etc.)
							alt='Media Production in Action'
							fill
							className='object-cover'
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
