"use client";

import { motion } from "framer-motion";

const ComingSoon = () => {
	return (
		<section className='min-h-screen flex flex-col items-center justify-center bg-white text-black px-6'>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className='text-center max-w-lg'
			>
				<h1 className='text-4xl md:text-5xl font-bold mb-4'>
					Coming Soon
				</h1>
				<p className='text-lg md:text-xl text-gray-600 mb-8'>
					We’re preparing something new. Stay tuned for the launch.
				</p>

				{/* Optional: Email Notify */}
				<form
					onSubmit={(e) => {
						e.preventDefault();
						alert("Thanks! We'll notify you when we launch.");
					}}
					className='flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto'
				>
					<input
						type='email'
						placeholder='Enter your email'
						required
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
					/>
					<button
						type='submit'
						className='bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition'
					>
						Notify
					</button>
				</form>
			</motion.div>

			{/* Footer */}
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2 }}
				className='mt-12 text-gray-500 text-sm'
			>
				© {new Date().getFullYear()} Business 360 Africa. All rights
				reserved.
			</motion.p>
		</section>
	);
};

export default ComingSoon;
