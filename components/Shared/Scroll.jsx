import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<div className="fixed bottom-20 right-16 max-md:right-4 max-md:bottom-4 z-50">
			{isVisible && (
				<div className="flex items-end justify-end lg:p-3 lg:-mt-[5%] md:-mt-[8%] md:p-2 -mt-[12%] p-2">
					<button
						onClick={scrollToTop}
						className="bg-white lg:py-2 lg:px-6 lg:rounded-xl rounded-md text-black lg:text-xl md:text-[13px] text-[9px] md:px-5 md:py-2 px-3 py-1 hover:scale-110 transition-transform duration-300 cursor-pointer">
						<p>Register</p>
					</button>
				</div>
			)}
		</div>
	);
};

export default ScrollToTopButton;
