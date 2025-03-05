import React from 'react';

const Hero = () => {
	return (
		<div className="relative w-full h-screen">
			{/* Background Image */}
			<img
				className="object-cover w-full h-full"
				src="heroback2.png"
				alt="Hero Background"
			/>

			{/* Centered Text */}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
				<div className="font-bebas-neue lg:text-[200px] md:text-[150px] text-[90px] leading-[180px] text-center mb-[20px]">
					<span className="bg-gradient-to-b from-[#FF2929] via-[#AC0707] to-[#AA0D0D] bg-clip-text text-transparent">
						CAD
					</span>{' '}
					3.0
				</div>

				<div className="font-sf lg:mt-[-20px] md:mt-[-40px] mt-[-80px] text-xl text-center lg:text-[40px] md:text-[30px] text-20px">
					CTRL + ALT + DELETE
				</div>

				<div className="mt-[30px]">
					<button className="text-[14px] bg-white font-bold text-black py-[5px] px-[15px] rounded-lg hover:shadow-[0_0_15px_#ffffff] hover:scale-105 transition duration-300 ease-in-out">
						Register
					</button>
				</div>
			</div>

			{/* Left Image */}
			<div className="absolute lg:left-[-50px] md:left-[-20px] left-[-10px] lg:bottom-[-180px] md:bottom-[-120px] bottom-[-90px] transform -translate-y-1/2">
				<img
					className="lg:w-[400px] md:w-[250px] w-[200px] h-auto"
					src="heroleft.png"
					alt="Hero Left"
				/>
			</div>

			{/* Right Image */}
			<div className="hidden md:block absolute lg:right-[-80px] md:right-[-80px] right-[-50px] lg:bottom-[-210px] md:bottom-[-150px] bottom-[-110px] transform -translate-y-1/2">
				<img
					className="lg:w-[600px] md:w-[400px] w-[300px] h-auto"
					src="heroright.png"
					alt="Hero Right"
				/>
			</div>
		</div>
	);
};

export default Hero;
