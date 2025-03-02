	import React from 'react';

	const handleScrollToPrizes = () => {
		setTimeout(() => {
			const prizeSection = document.getElementById('prizes');
			if (prizeSection) {
				prizeSection.scrollIntoView({ behavior: 'smooth' });
			} else {
				console.error('Element #prizes not found in the DOM.');
			}
		}, 100); 
	};
	

	const About = () => {
	return (
		<div className="relative bg-black min-h-screen overflow-hidden p-0">
		
		<div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/60 z-0"></div>
	
			<div className="container mx-auto px-4 py-6 md:py-16 flex flex-col md:flex-row sm:items-start justify-center relative z-5  ">
	

			<div className="w-full md:w-1/2 mb-0 md:mb-0 md:ml-4 lg:ml-0 relative md:mr-[15px] lg:mr-11 flex flex-col justify-start ">

				<h1 className="font-bebas-neue p-0 text-[90px] sm:text-[180px] lg:text-[250px] md:text-[170px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-50 via-red-400 to-red-600 mb-0 md:mb-6 flex flex-col justify-center align-middle items-center">
				ABOUT
				</h1>
			<div className="md:absolute top-[-30px] md:top-[50%] left-[0] md:left-[15%] z-20 w-full md:w-auto flex items-center justify-center md:justify-start">
	
				<img 
					src="image 100.png" 
					alt="Squid Game Characters" 
					className=" w-auto h-[200px] sm:h-[220px] md:h-[350px] lg:h-[400px] object-contain"/>
				</div>
			</div>
	<div className=" flex flex-col justify-start w-full md:w-1/2 text-white mt-[20px] md:mt-[50px] text-center md:text-left max-w-[600px] lg:pr-[60px]">
		<p className=" lg:mt-[100px] text-base sm:text-lg md:text-2xl font-sf italic mb-2 md:mb-6 text-wrap">
		Embark On A Coding Odyssey With CN SRM As We Proudly Present Our Flagship Event,
		</p>
		<h2 className="text-xl sm:text-3xl md:text-5xl font-sf bold mb-2 md:mb-4 text-red-700">
			"CAD: Ctrl+Alt+Del."
		</h2>
		<p className="text-base sm:text-lg md:text-2xl mb-3 md:mb-6 font-sf italic">
			This National Level Hackathon Is The Cornerstone Of An Immersive
			Fest, Blending Technical Prowess With Engaging Non-Technical Activities.
		</p>
		
		<div className="flex justify-center md:justify-end mt-10 md:mt-8 relative ">
			<div>
			
				<button onClick={handleScrollToPrizes}
				 	className="bg-gray-700/80 hover:bg-gray-600 text-white py-2 px-4 md:px-6 rounded flex md:items-center space-x-1 md:space-x-2">
					<span className="mr-1 md:mr-2">▶</span>
					<span>Prize Pool</span>
				</button>
			
				
			<div className='h-[100px] w-[100px] object-cover  md:ml-20 sm:pl-0 relative  '>
			<img src="arrow_image.png" alt="arrow" className='h-full w-full object-cover absolute md:left-[10px] left-[60px] '/>
			</div>
		</div>
		
		
		</div>
	</div>
	</div>
		
      
      
    </div>
  );
};

export default About;