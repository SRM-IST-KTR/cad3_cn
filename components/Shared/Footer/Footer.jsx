'use client';
import Link from 'next/link';
import Image from 'next/image';
import bg from '@/public/footer_bg.png';
import cad from '@/public/cad2.png';
import dscrd from '@/public/dscrd.png';
import lkdn from '@/public/lkdn.png';
import ingrm from '@/public/ingrm.png';
import twtr from '@/public/twtr.png';

const Footer = () => {
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.error(`Element #${id} not found in the DOM.`);
		}
	};

	return (
		<>
			<footer
				className="relative w-full bg-black"
				id="footer">
				<div className="absolute inset-0 z-0">
					<Image
						src={bg}
						className="w-full h-full object-cover opacity-80"
						alt="Footer Background"
					/>
				</div>

				<div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
					<Image
						src={cad}
						className="object-contain lg:w-[500px] md:w-[400px] w-[400px]"
						alt="CAD Image"
					/>
				</div>

				<div className="relative bg-gradient-to-b from-black to-transparent z-20 flex flex-nowrap justify-center text-white lg:text-xl md:text-lg text-[9px] mb-4 py-2  font-bold tracking-wider space-x-4  md:space-x-12 lg:mb-8 lg:py-8">
					<button
						onClick={() => scrollToSection('about')}
						className="hover:text-red-500 transition-colors duration-300 py-2">
						ABOUT
					</button>
					<button
						onClick={() => scrollToSection('timeline')}
						className="hover:text-red-500 transition-colors duration-300 py-2">
						TIMELINE
					</button>
					<button
						onClick={() => scrollToSection('prizes')}
						className="hover:text-red-500 transition-colors duration-300 py-2">
						PRIZE POOL
					</button>
					<button
						onClick={() => scrollToSection('sponsors')}
						className="hover:text-red-500 transition-colors duration-300 py-2">
						OUR SPONSORS
					</button>
					<button
						onClick={() => scrollToSection('past-events')}
						className="hover:text-red-500 transition-colors duration-300 py-2">
						PAST EVENTS
					</button>
				</div>
				<div className="lg:h-[160px] md:h-[200px] h-[90px]"></div>

				<div className="bg-gradient-to-t from-[#FF0000] to-transparent relative z-20">
					<div className="flex items-center justify-center lg:gap-10 md:gap-6 gap-3 pb-4">
						<Link
							href="https://linkedin.com"
							target="_blank">
							<Image
								src={lkdn}
								className="lg:w-[50px] md:w-[40px]  w-[28px] cursor-pointer hover:scale-110 transition-transform duration-300"
								alt="LinkedIn"
							/>
						</Link>

						<Link
							href="https://twitter.com"
							target="_blank">
							<Image
								src={twtr}
								className="lg:w-[50px] md:w-[40px]  w-[28px] cursor-pointer hover:scale-110 transition-transform duration-300"
								alt="Twitter"
							/>
						</Link>

						<Link
							href="https://instagram.com"
							target="_blank">
							<Image
								src={ingrm}
								className="lg:w-[50px] md:w-[40px] w-[28px] cursor-pointer hover:scale-110 transition-transform duration-300"
								alt="Instagram"
							/>
						</Link>

						<Link
							href="https://discord.com"
							target="_blank">
							<Image
								src={dscrd}
								className="lg:w-[50px] md:w-[40px] w-[28px] cursor-pointer hover:scale-110 transition-transform duration-300"
								alt="Discord"
							/>
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
