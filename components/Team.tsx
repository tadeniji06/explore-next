"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Camera,
	Video,
	PenTool,
	Layers,
	Share2,
} from "lucide-react";

import {
	stu1,
	stu2,
	gift,
	isaac,
	isamil,
	peace,
	victoria,
	DO,
} from "@/assets";

const teamMembers = [
	{
		name: "Damilola Olanrewaju",
		img: DO,
		role: "Founder & CEO",
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
						<div className='relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-[var(--color-primary-brown)] shadow-md mb-4'>
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

			{/* Creative Director Highlight */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='mt-20 max-w-6xl mx-auto'
			>
				<h3 className='text-2xl md:text-4xl font-bold text-[var(--color-light-brown)] mb-8 text-center'>
					Creative Director Spotlight
				</h3>

				<div className='grid md:grid-cols-2 gap-12 items-start'>
					{/* Profile Image */}
					<div className='flex justify-center'>
						<div className='relative w-72 h-72 rounded-full overflow-hidden border-4 border-[var(--color-primary-brown)] shadow-xl shadow-[var(--color-light-brown)]'>
							<Image
								src={isamil}
								alt='Creative Director'
								fill
								className='object-cover'
							/>
						</div>
					</div>

					{/* Details */}
					<div className='space-y-6'>
						<p className='text-gray-300 leading-relaxed'>
							With over{" "}
							<span className='text-white font-semibold'>
								7 years
							</span>{" "}
							of experience in Photography and Video production,
							Ismail brings a blend of creativity and technical
							expertise. He has directed{" "}
							<span className='text-white font-semibold'>
								short films, documentaries, 90+ weddings, and 200+
								branded contents
							</span>
							. He’s worked with{" "}
							<span className='text-white font-semibold'>
								Burna Boy, Wizkid, 9ice
							</span>{" "}
							and other top artists, alongside producing shows like{" "}
							<em>Kreme Chats</em>, <em>Moni Talks</em>, and more.
						</p>

						{/* Two-column highlights */}
						<div className='grid sm:grid-cols-2 gap-4'>
							<div className='bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-[var(--color-light-brown)] transition'>
								<h4 className='font-semibold text-[var(--color-light-brown)] mb-2'>
									Core Competencies
								</h4>
								<ul className='text-sm space-y-1 text-gray-400'>
									<li className='flex items-center gap-2'>
										<Video size={16} /> Production & Directing
									</li>
									<li className='flex items-center gap-2'>
										<Camera size={16} /> Cinematography
									</li>
									<li className='flex items-center gap-2'>
										<Layers size={16} /> Editing & Post-Production
									</li>
									<li className='flex items-center gap-2'>
										<PenTool size={16} /> Storyboarding
									</li>
									<li className='flex items-center gap-2'>
										<Share2 size={16} /> Social Media Strategy
									</li>
								</ul>
							</div>

							<div className='bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-[var(--color-light-brown)] transition'>
								<h4 className='font-semibold text-[var(--color-light-brown)] mb-2'>
									Tools Expertise
								</h4>
								<ul className='text-sm space-y-1 text-gray-400'>
									<li>Adobe Premiere Pro</li>
									<li>After Effects & Photoshop</li>
									<li>Final Cut & Davinci Resolve</li>
									<li>Lightroom, Canva</li>
									<li>Plural Eyes</li>
									<li>Camera & Lighting Equipments</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Team;
