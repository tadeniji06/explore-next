import { Icon } from "@iconify/react/dist/iconify.js";

const categories = [
	{
		title: "Future, Innovation & Global Tech",
		items: [
			"The Future of Work: How AI, Automation & Remote Culture Are Redefining Careers",
			"Inside the Global Tech Race: Who Is Winning Between the US, China, Europe & Africa?",
			"From Silicon Valley to Silicon Savannah: Africa’s Place in the Next Tech Boom",
			"Emerging Technologies That Will Disrupt Business in the Next 5 Years",
			"Tech Trends Nobody Is Talking About — But Should",
		],
	},
	{
		title: "Business, Startups & Digital Economy",
		items: [
			"Building Billion-Dollar Startups in Developing Markets: Myths, Realities & Opportunities",
			"Tech as the New Oil: How Data Is Becoming the World’s Most Valuable Asset",
			"Scaling a Tech Business: From Local Startup to Global Brand",
			"Funding the Future: Venture Capital, Angel Investors & Alternative Financing in Tech",
			"Why Most Tech Startups Fail — And How the Successful Ones Survive",
		],
	},
	{
		title: "AI, Data & Digital Transformation",
		items: [
			"Artificial Intelligence in Everyday Business: Beyond the Hype",
			"Can AI Replace CEOs, Managers & Creatives? The Truth About Automation",
			"Data Is Power: How Companies Are Using Analytics to Dominate Markets",
			"Ethics in AI: Who Controls the Machines That Control Us?",
			"Cybersecurity in a Digital World: Are Our Businesses Truly Safe?",
		],
	},
	{
		title: "Tech + Industries",
		items: [
			"Fintech Revolution: How Digital Payments Are Reshaping Global Economies",
			"Tech in Media & Entertainment: The Future of Content, Creators & Audiences",
			"HealthTech & BioTech: How Technology Is Extending Human Life",
			"Smart Cities & IoT: How Technology Is Redesigning Urban Living",
			"Digital Identity, Privacy & Surveillance: Is the World Becoming Too Transparent?",
		],
	},
	{
		title: "High-Engagement Angles",
		items: [
			"Is Big Tech Too Powerful for Governments to Control?",
			"Will Africa Leapfrog the World Through Mobile & AI Innovation?",
			"Tech Millionaires Under 30: Is Talent More Valuable Than Capital Today?",
		],
	},
];

export default function TvPage() {
	return (
		<main className='min-h-screen bg-white'>
			{/* Hero Section */}
			<section className='relative py-24 bg-[var(--color-primary-blue)] text-white overflow-hidden'>
				<div className='absolute inset-0 bg-black/20'></div>
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-4xl md:text-6xl font-extrabold mb-6 tracking-tight'>
						B360
						<span className='text-[var(--color-light-brown)]'>
							TV
						</span>
					</h1>
					<p className='text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light'>
						Everything around business - from tech, finance, and
						beyond. Visualizing the stories that shape our world.
					</p>
				</div>
			</section>

			{/* Content Grid */}
			<section className='py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					{categories.map((category, idx) => (
						<div
							key={idx}
							className='bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100'
						>
							<h2 className='text-2xl font-bold text-[var(--color-primary-blue)] mb-6 flex items-center gap-3'>
								<Icon
									icon='mdi:play-circle-outline'
									className='w-8 h-8 opacity-80'
								/>
								{category.title}
							</h2>
							<ul className='space-y-4'>
								{category.items.map((item, i) => (
									<li
										key={i}
										className='flex items-start gap-3 group cursor-pointer'
									>
										<Icon
											icon='mdi:chevron-right'
											className='w-5 h-5 text-[var(--color-light-brown)] mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform'
										/>
										<span className='text-gray-700 font-medium group-hover:text-[var(--color-primary-brown)] transition-colors'>
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className='bg-gray-900 text-white py-20'>
				<div className='max-w-4xl mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Have a Story to Tell?
					</h2>
					<p className='text-xl text-gray-300 mb-8'>
						Join the conversation on B360TV. We are always looking for
						the next big idea.
					</p>
					<button className='bg-[var(--color-light-brown)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-primary-blue)] transition-colors duration-300'>
						Contact Us
					</button>
				</div>
			</section>
		</main>
	);
}
