import Image from "next/image";
import React from "react";

function Prize() {
  

  return (
    <div className="relative" id="prizes" >
      <div className="flex justify-center md:justify-end items-start h-screen md:items-center pt-20 md:pt-0">
        <Image
          src="/CAD.svg"
          alt="CAD"
          width={800}
          height={700}
          className="w-[55vw] sm:w-[60vw] md:w-[65vw] lg:w-[70vw] xl:w-[75vw] max-w-full md:max-w-none mx-auto md:mx-0"
        />
      </div>
      <Image
        src="/RedTriangle.svg"
        alt="Red Triangle"
        width={650}
        height={700}
        className="hidden md:block absolute top-0 left-0
        custom:top-2%] md:top-[20%] lg:top-[8%] xl:top-0 md:w-[50%] lg:w-[600px] xl:w-[650px]"
        
      />

      <Image
        src="/BlackTriangle.svg"
        alt="Black Triangle"
        width={600}
        height={700}
        className="hidden md:block absolute top-0 right-0"
      />

      <div className="flex">
        <Image
          src="/PrizePiggy.svg"
          alt="Prize Pool"
          width={580}
          height={700}
          className="absolute top-[10px] md:top-[53%] md:-translate-y-1/2 left-1/2 md:left-[8%] transform -translate-x-1/2 md:translate-x-0 
          w-[70%] sm:w-[55%] md:w-[45%] lg:w-[500px] xl:w-[600px]"
        />
        <Image
          src="/80k.svg"
          alt="Rupees 80,000"
          width={450}
          height={700}
          className="absolute top-[520px] sm:top-[70%] md:top-[55%] md:-translate-y-1/2 left-1/2 md:left-[55%] transform -translate-x-1/2 md:translate-x-0 
          w-[60%] sm:w-[50%] md:w-[38%] lg:w-[450px]"
        />
      </div>
    </div>
  );
}

export default Prize;