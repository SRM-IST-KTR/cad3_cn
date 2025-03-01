import Image from 'next/image';

const Prize = () => {
  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* CAD Background Image */}
      <Image 
        src="/CAD.png" 
        alt="CAD" 
        width={1250} 
        height={810} 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1250px] h-auto md:top-[60px] md:left-[53%] md:-translate-x-[35%]" 
      />

      {/* Background Triangle Images (Hidden on Mobile) */}
      <Image 
        src="/triangle-left.png" 
        alt="Left Triangle" 
        width={900} 
        height={1100} 
        className="absolute left-[10px] top-0 hidden md:block" 
        style={{ width: '900px', height: '1100px' }} 
      />
      <Image 
        src="/triangle-right.png" 
        alt="Right Triangle" 
        width={550} 
        height={1100} 
        className="absolute right-[10px] top-0 hidden md:block" 
        style={{ width: '550px', height: '1100px' }} 
      />

      {/* Pool Image for PC (Positioned relative to main container) */}
      <Image 
        src="/pool.png" 
        alt="Pool" 
        width={820} 
        height={400} 
        className="absolute left-[90px] top-[-100px] hidden md:block z-10" 
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full md:h-auto md:text-center">
        {/* Pool Image for Mobile */}
        <Image 
          src="/pool.png" 
          alt="Pool" 
          width={820} 
          height={400} 
          className="w-full max-w-[820px] h-auto md:hidden" 
        />
        <Image 
          src="/prize.png" 
          alt="Prize" 
          width={500} 
          height={500} 
          className="w-full max-w-[500px] h-auto mt-4 md:mt-[280px] md:ml-[800px]" 
        />
      </div>
    </div>
  );
};

export default Prize;