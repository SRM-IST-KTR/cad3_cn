import React from 'react';

const Sponsors = () => {
	return (
	<div className='bg-black' id="sponsors">
		<div className='flex flex-col items-center'>
			<div className='lg:text-[158px] md:text-[90px] text-[70px] font-bebas-neue relative w-full'>
				<div className='flex justify-center gap-x-4 mt-[100px]'>
					OUR <span className='text-[#FF0000]'>SPONSORS</span>
				</div>
				<div className='flex flex-row justify-between absolute top-[-30px]'>
					<div>
						<img src='spotlightleft.png'/>
					</div>
					<div>
						<img src='spotlightright.png'/>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[100px]'>
				<div className='flex flex-col items-center text-[#D4D4D4] lg:text-[37px] bg-gradient-to-r from-[#F5F5F5] to-[#8F8F8F] text-transparent bg-clip-text font-sf'>
					<img className='lg:h-[350px] h-[300px]' src='platinum.png'/>
					Platinum
				</div>
				<div className='flex flex-col items-center text-[#F6D577] lg:text-[37px] font-sf'>
					<img className='lg:h-[350px] h-[300px]' src='gold.png'/>
					Gold
				</div>
				<div className='flex flex-col items-center text-[#D4D4D4] lg:text-[37px] font-sf'>
					<img className='lg:h-[350px] h-[300px]' src='silver.png'/>
					Silver
				</div>
				<div className='flex flex-col items-center text-[#FAA682] lg:text-[37px] font-sf'>
					<img className='lg:h-[350px] h-[300px]' src='bronze.png'/>
					Bronze
				</div>
			</div>
		</div>
	</div>
	)
};

export default Sponsors;