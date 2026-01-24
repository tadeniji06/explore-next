"use client";
import { useState } from "react";
import { navLinks } from "../utils/data";
import { group } from "../assets/index";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className='sticky top-0 z-50 bg-primary-blue border-b shadow-lg'>
			<div className='flex items-center justify-between px-4 md:p-10 p-5 max-w-8xl mx-auto lg:px-6'>
				{/* Logo */}
				<div className='cursor-pointer flex-shrink-0'>
					<Link href='/' onClick={closeMobileMenu}>
						<Image
							className='md:w-auto md:h-[50px] w-[150px] h-[60px] object-contain'
							src={group}
							alt='Business 360 Logo'
						/>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className='hidden lg:flex'>
					<ul className='flex items-center gap-8 xl:gap-12'>
						{navLinks.map((link, index) => (
							<li key={index} className='cursor-pointer'>
								<Link
									href={link.link}
									className='text-white hover:text-gray-500 transition-colors duration-200 font-medium'
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Desktop CTA Button */}
				<div className='hidden lg:block'>
					{/* <Link to='/'>
						<Button
							className='py-3 px-6 xl:py-4 xl:px-8 bg-white text-primary-brown hover:bg-light-brown transition-colors duration-200'
							title='Book Consultation'
						/>
					</Link> */}
				</div>

				{/* Mobile Menu Button */}
				<button
					className='lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200'
					onClick={toggleMobileMenu}
					aria-label='Toggle mobile menu'
					aria-expanded={isMobileMenuOpen}
				>
					<Icon
						icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
						className='w-6 h-6 text-white'
					/>
				</button>
			</div>

			{/* Smooth Overlay Fix */}
			<div
				className={`fixed inset-0 bg-black transition-opacity duration-300 lg:hidden z-40 ${
					isMobileMenuOpen
						? "opacity-50 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				onClick={closeMobileMenu}
			/>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-primary-blue shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className='flex flex-col h-full'>
					{/* Mobile Menu Header */}
					<div className='flex items-center justify-between p-4 border-b'>
						<h2 className='text-lg font-semibold text-white'>Menu</h2>
						<button
							onClick={closeMobileMenu}
							className='p-2 rounded-md hover:bg-gray-100 transition-colors duration-200'
							aria-label='Close mobile menu'
						>
							<Icon icon='mdi:close' className='w-5 h-5 text-white' />
						</button>
					</div>

					{/* Mobile Navigation Links */}
					<nav className='flex-1 overflow-y-auto'>
						<ul className='py-4'>
							{navLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.link}
										onClick={closeMobileMenu}
										className='block px-6 py-4 text-white hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
