"use client";

import { useEffect, useRef, useState } from "react";

const WhatToExpect = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.3,
				rootMargin: "0px",
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	const expectationItems = [
		{
			title: "Business Training ( 3 Days)",
			description:
				"Comprehensive training sessions covering market entry strategies, local business practices, and regulatory compliance.",
		},
		{
			title: "1 on 1 Legal Advisory",
			description:
				"Personal consultation with local legal experts to navigate regulatory requirements and business setup procedures.",
		},
		{
			title: "Meet Up Industry Leaders",
			description:
				"Exclusive networking opportunities with established business leaders and potential partners in your target market.",
		},
		{
			title: "Attend Top Business Events",
			description:
				"Access to premium business conferences, trade shows, and industry gatherings throughout your tour.",
		},
		{
			title: "Nature, Safari, and Adventure",
			description:
				"Cultural immersion experiences including wildlife safaris and adventure activities to understand the local environment.",
		},
		{
			title: "Flight and Accommodation",
			description:
				"Complete travel package including round-trip flights and premium accommodation throughout your business tour.",
		},
	];

	return (
		<>
			<style jsx>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(-20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes fadeInLeft {
					from {
						opacity: 0;
						transform: translateX(-30px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}

				.animate-fade-in-up {
					animation: fadeInUp 0.6s ease-out forwards;
				}

				.animate-fade-in-left {
					animation: fadeInLeft 0.6s ease-out forwards;
				}

				.stagger-1 {
					animation-delay: 0.15s;
				}
				.stagger-2 {
					animation-delay: 0.3s;
				}
				.stagger-3 {
					animation-delay: 0.45s;
				}
				.stagger-4 {
					animation-delay: 0.6s;
				}
				.stagger-5 {
					animation-delay: 0.75s;
				}
				.stagger-6 {
					animation-delay: 0.9s;
				}

				.expectation-item {
					opacity: 0;
					transform: translateX(-30px);
					transition: all 0.3s ease;
				}

				.expectation-item.visible {
					opacity: 1;
					transform: translateX(0);
				}

				.expectation-item:hover {
					transform: translateX(0) scale(1.02);
				}

				.icon-circle {
					transition: all 0.3s ease;
				}

				.expectation-item:hover .icon-circle {
					transform: scale(1.1);
					background-color: #fed7aa;
				}

				.expectation-item:hover .item-title {
					color: #ea580c;
				}
			`}</style>

			<section
				ref={sectionRef}
				className='py-16 px-4 max-w-6xl mx-auto'
			>
				<div className='grid lg:grid-cols-2 gap-12 items-start'>
					{/* Left Column - Title and Description */}
					<div
						className={`${
							isVisible ? "animate-fade-in-up" : "opacity-0"
						}`}
					>
						<h2 className='text-3xl md:text-4xl font-bold text-orange-600 mb-6'>
							What To Expect
						</h2>
						<p className='text-gray-600 text-lg leading-relaxed'>
							Join the Explore360 tour for a seamless blend of
							business insights, cultural immersion, and unforgettable
							experiences
						</p>
					</div>

					{/* Right Column - Expectation Items */}
					<div className='space-y-6'>
						{expectationItems.map((item, index) => (
							<div
								key={index}
								className={`expectation-item ${
									isVisible
										? `visible animate-fade-in-left stagger-${
												index + 1
										  }`
										: ""
								} flex items-start gap-4 group cursor-pointer`}
							>
								{/* Icon Circle */}
								<div className='icon-circle flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1'>
									<div className='w-3 h-3 bg-orange-600 rounded-full'></div>
								</div>

								{/* Content */}
								<div className='flex-1'>
									<h3 className='item-title text-lg font-semibold text-gray-900 mb-1 transition-colors duration-300'>
										{item.title}
									</h3>
									<p className='text-gray-600 leading-relaxed'>
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default WhatToExpect;
