"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Video, PenTool, Layers, Share2 } from "lucide-react";

import {
	stu1,
	stu2,
	gift,
	isaac,
	isamil,
	peace,
	victoria,
	DO,
	ak2,
	ak1,
} from "@/assets";

const teamMembers = [
	{
		name: "Damilola Olanrewaju",
		img: DO,
		role: "Founder & CEO",
	},
	{
		name: "Akinsola Oladipo",
		img: ak1,
		role: "Head of Operations",
	},
	{
		name: "Ismail B. Odubowale",
		img: isamil,
		role: "Creative Director",
	},
	{
		name: "Isaac",
		img: isaac,
		role: "Production Coordinator",
	},
	{
		name: "Gift",
		img: gift,
		role: "Video Editor & Motion Designer",
	},
	{
		name: "Peace",
		img: peace,
		role: "Content Creator",
	},
	{
		name: "Victoria",
		img: victoria,
		role: "Videographer & Editor",
	},
];

const Team = () => {
	return (
		<section className='bg-black text-white py-20 px-6 md:px-20'>
			{/* Heading */}
			<div className='text-center mb-12'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-3xl md:text-5xl font-bold text-[var(--color-light-brown)]'
				>
					Meet The Team
				</motion.h2>
				<p className='text-gray-400 mt-2'>
					The minds & hands powering Explore360’s creativity
				</p>
			</div>

			{/* Team Grid */}
			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
				{teamMembers.map((member, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: i * 0.1 }}
						className='group bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-[var(--color-light-brown)] transition'
					>
						<div className='relative w-[150px] h-[150px] mx-auto rounded-full overflow-hidden border-4 border-[var(--color-primary-brown)] shadow-md mb-4'>
							<Image
								src={member.img}
								alt={member.name}
								fill
								className='object-cover'
							/>
						</div>
						<h3 className='text-lg font-semibold text-center'>
							{member.name}
						</h3>
						<p className='text-sm text-gray-400 text-center'>
							{member.role}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Team;
