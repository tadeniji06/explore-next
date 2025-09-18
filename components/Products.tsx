"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { mag, stu2 } from "@/assets";
import Link from "next/link";

const Products = () => {
	const OurProducts = [
		{
			name: "Showcase Africa Magazine",
			image: mag,
			description:
				"A premier publication highlighting Africa's diverse cultures, innovations, and success stories.",
			link: "https://showcaseafricaonline.com/magazines",
		},
		{
			name: "Showcase Africa TV",
			image: stu2,
			description:
				"A dynamic platform showcasing Africa's vibrant stories, cultures, and innovations through engaging video content.",
			link: "https://youtube.com/@showcaseafricatv?si=kXdSwEwYt6KrVN4s",
		},
	];

	return (
		<div className='min-h-screen bg-black text-white'>
			{/* Hero Section */}
			<section className='relative h-[70vh] flex items-center justify-center text-center'>
				<Image
					src={stu2}
					alt='Showcase Africa Studio'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-black/80' />
				<div className='relative z-10 px-6'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-4xl md:text-6xl font-bold text-[var(--color-light-brown)]'
					>
						Our Products
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'
					>
						Platforms built to showcase Africa’s creativity, culture,
						and innovation to the world.
					</motion.p>
				</div>
			</section>

			{/* Products Section */}
			<section className='py-20 px-6 md:px-20'>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
					{OurProducts.map((product, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: i * 0.15 }}
							className='relative flex flex-col items-center'
						>
							{/* Tilted Image */}
							<div
								className={`relative w-72 h-96 overflow-hidden rounded-xl shadow-lg transform ${
									i % 2 === 0 ? "rotate-[-4deg]" : "rotate-[4deg]"
								} hover:rotate-0 transition-transform duration-500`}
							>
								<Image
									src={product.image}
									alt={product.name}
									fill
									className='object-cover'
								/>
							</div>

							{/* Floating Badge */}
							<div
								className={`mt-4 px-4 py-1 rounded-full text-sm font-semibold tracking-wide ${
									i === 0
										? "bg-blue-600"
										: i === 1
										? "bg-yellow-500 text-black"
										: "bg-teal-500"
								}`}
							>
								{product.name}
							</div>

							{/* Description */}
							<p className='mt-3 text-gray-400 text-center max-w-xs'>
								{product.description}
							</p>

							{/* CTA */}
							<Link
								href={product.link}
								target='_blank'
								rel='noopener noreferrer'
								className='mt-3 inline-block bg-[var(--color-primary-brown)] text-white px-4 py-2 rounded-lg font-medium hover:bg-[var(--color-light-brown)] transition'
							>
								Explore →
							</Link>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Products;
