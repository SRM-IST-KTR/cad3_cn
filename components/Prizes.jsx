import Image from 'next/image';
import React from 'react';

function Prizes() {
	return (
		<div className="relative">
			<div className="flex justify-center md:justify-end items-start h-screen md:items-center pt-20 md:pt-0">
				<Image
					src="/prizes/CAD.svg"
					alt="CAD"
					width={800}
					height={700}
					className="w-[90vw] md:w-[75vw] max-w-full md:max-w-none mx-auto md:mx-0"
				/>
			</div>
			<Image
				src="/prizes/RedTriangle.svg"
				alt="Red Triangle"
				width={650}
				height={700}
				className="hidden md:block absolute top-0 left-0"
			/>
			<Image
				src="/prizes/BlackTriangle.svg"
				alt="Black Triangle"
				width={600}
				height={700}
				className="hidden md:block absolute top-0 right-0"
			/>

			<div className="flex">
				<Image
					src="/prizes/PrizePiggy.svg"
					alt="Prize Pool"
					width={600}
					height={700}
					className="absolute top-[100px] md:top-1/2 md:-translate-y-1/2 left-1/2 md:left-[8%] transform -translate-x-1/2 md:translate-x-0 
          w-[80%] md:w-[600px]"
				/>
				<Image
					src="/prizes/80k.svg"
					alt="Rupees 80,000"
					width={450}
					height={700}
					className="absolute top-[500px] md:top-[55%] md:-translate-y-1/2 left-1/2 md:left-[55%] transform -translate-x-1/2 md:translate-x-0 
          w-[80%] md:w-[450px]"
				/>
			</div>
		</div>
	);
}

export default Prizes;
