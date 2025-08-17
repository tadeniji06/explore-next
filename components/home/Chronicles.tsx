"use client";
import { motion } from "framer-motion";
import { afri } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Chronicles = () => {
	return (
		<section className='py-16 px-4 bg-white'>
			<div className='flex items-center justify-center'>
				<h2 className='text-3xl font-semibold mb-2 text-center'>
					Read Our African Business Chronicles Magazine
				</h2>
			</div>
			<div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12'>
				{/* Africa Image */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className='flex-shrink-0'
				>
					<Image
						src={afri}
						alt='Africa map'
						width={300}
						height={300}
						className='w-[300px] h-auto object-cover'
						quality={85}
						priority={false}
					/>
				</motion.div>

				{/* Content Card */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className='bg-gradient-to-br from-[#D24726] to-[#B63D1E] text-white rounded-2xl p-8 md:p-10 w-full max-w-md shadow-xl'
				>
					<p className='text-sm leading-relaxed text-white/90 mb-6'>
						Stay informed with African Business Chronicles, our
						exclusive content series featuring insights, stories, and
						interviews on doing business and exploring Africa. Learn
						from industry leaders, uncover emerging opportunities, and
						be inspired by Africa's success stories.
					</p>
					<motion.div
						whileHover={{
							scale: 1.05,
							boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
						}}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							href='/blog'
							className='inline-block bg-white text-[#B63D1E] font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-gray-50'
						>
							Read Our Chronicles
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Chronicles;
