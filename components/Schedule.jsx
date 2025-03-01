import React from "react";

const Timeline = () => {
    return (
        <div className="text-center relative pb-32">
            <p className="inline-block font-title bg-gradient-to-r from-[#DBD9D9] to-[#FF4E4E] bg-clip-text text-transparent  
    text-5xl sm:text-6xl md:text-6xl lg:text-8xl pb-40">TIMELINE</p>

            <div className="font-txt relative mx-auto w-full max-w-[1150px]">
                <img src="/timeline.png" alt="Timeline" className="block mx-auto w-full p-4 sm:p-0" />

                <div className="absolute lg:top-[-80px] lg:left-[8%] top-[-60px] left-[5%] text-white text-sm sm:text-lg text-center">
                    <p>22nd March</p>
                    <p>10 AM</p>
                    <p className="font-extrabold">Induction Starts</p>
                </div>

                <div className="absolute lg:bottom-[-80px] lg:left-[32%] left-[25%] text-white text-sm sm:text-lg text-center">
                    <p>22nd March</p>
                    <p>2 PM</p>
                    <p className="font-extrabold">Hackathon Starts</p>
                </div>

                <div className="absolute lg:top-[-50px] lg:left-[55%] top-[-40px] left-[45%] text-white text-sm sm:text-lg text-center">
                    <p>23rd March</p>
                    <p className="font-extrabold">Final Review Result</p>
                </div>

                <div className="absolute lg:bottom-[-80px] lg:left-[80%] left-[67%] text-white text-sm sm:text-lg text-center">
                    <p>23rd March</p>
                    <p>3 PM</p>
                    <p className="font-extrabold">Closing Ceremony</p>
                </div>
            </div>
        </div>
    );
};

export default Timeline;