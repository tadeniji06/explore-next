"use client";
import { Brands } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PublicationsPage = () => {
	const brands = Brands();

	return (
		<div className='bg-gray-50 min-h-screen py-16 px-4 md:px-8'>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
						Our Publications
					</h1>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Discover our diverse range of publications covering
						business, technology, and African innovation.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{brands.map((brand, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col'
						>
							<div className='relative h-56 w-full bg-gray-100'>
								<Image
									src={brand.image}
									alt={brand.title}
									fill
									className='object-cover'
								/>
							</div>
							<div className='p-8 flex-1 flex flex-col'>
								<div className='mb-6'>
									<div className='h-12 w-auto relative mb-4'>
										<Image
											src={brand.logo}
											alt={`${brand.title} logo`}
											fill
											className='object-contain object-left'
										/>
									</div>
									<h2 className='text-2xl font-bold text-gray-900 mb-3'>
										{brand.title}
									</h2>
									<p className='text-gray-600 leading-relaxed'>
										{brand.desc}
									</p>
								</div>
								<div className='mt-auto pt-6 border-t border-gray-100'>
									<Link
										href={brand.link}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center text-primary-blue font-semibold hover:text-primary-brown transition-colors group'
									>
										Visit Website
										<svg
											className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M17 8l4 4m0 0l-4 4m4-4H3'
											/>
										</svg>
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PublicationsPage;
