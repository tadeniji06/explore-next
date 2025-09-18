"use client";
import { motion } from "framer-motion";
import { afri } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Chronicles = () => {
	return (
		<section className='py-20 px-6 bg-white'>
			<div className='text-center mb-12'>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>
					African Business Chronicles
				</h2>
				<p className='mt-3 text-lg text-gray-600 max-w-2xl mx-auto'>
					Your insider’s guide to Africa’s business evolution —
					spotlighting trends, voices, and opportunities shaping the
					continent’s future.
				</p>
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
						alt='Stylized map of Africa'
						width={320}
						height={320}
						className='w-[320px] h-auto object-contain drop-shadow-lg'
						quality={90}
					/>
				</motion.div>

				{/* Content Card */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className='bg-gradient-to-br from-[#D24726] to-[#B63D1E] text-white rounded-2xl p-8 md:p-10 w-full max-w-lg shadow-2xl'
				>
					<h3 className='text-2xl font-semibold mb-4'>
						Stories That Shape Africa’s Future
					</h3>
					<p className='text-base leading-relaxed text-white/90 mb-6'>
						Dive into rich perspectives on African markets,
						leadership, and innovation. Chronicles brings you in-depth
						interviews, strategic insights, and inspiring success
						stories that redefine what it means to do business on the
						continent.
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
							className='inline-block bg-white text-[#B63D1E] font-semibold px-7 py-3 rounded-full transition duration-300 hover:bg-gray-50'
						>
							Read the Chronicles
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Chronicles;
