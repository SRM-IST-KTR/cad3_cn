import Image from 'next/image';

const Prize = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* CAD Background Image */}
      <Image 
        src="/CAD.png" 
        alt="CAD" 
        width={1250} 
        height={810} 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1250px] h-auto sm:top-[30px] md:top-[60px]" 
      />

      {/* Background Triangle Images (Visible only on Desktop) */}
      <Image 
        src="/triangle-left.png" 
        alt="Left Triangle" 
        width={900} 
        height={1100} 
        className="absolute left-[10px] top-0 hidden lg:block" 
        style={{ width: '900px', height: '1100px' }} 
      />
      <Image 
        src="/triangle-right.png" 
        alt="Right Triangle" 
        width={550} 
        height={1100} 
        className="absolute right-[10px] top-0 hidden lg:block" 
        style={{ width: '550px', height: '1100px' }} 
      />

      {/* Pool Image for Desktop */}
      <Image 
        src="/pool.png" 
        alt="Pool" 
        width={820} 
        height={400} 
        className="absolute left-[90px] top-[-100px] hidden lg:block z-10" 
      />

      {/* Main Content with Responsive Padding */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Pool Image for Mobile and Tablet */}
        <Image 
          src="/pool.png" 
          alt="Pool" 
          width={820} 
          height={400} 
          className="w-full max-w-[820px] h-auto lg:hidden" 
        />
        <Image 
          src="/prize.png" 
          alt="Prize" 
          width={500} 
          height={500} 
          className="w-full max-w-[500px] h-auto mt-4 lg:mt-[280px] lg:ml-[800px]" 
        />
      </div>
    </div>
  );
};

export default Prize;
