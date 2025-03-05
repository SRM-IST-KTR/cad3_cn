const Timeline = () => {
    return (
        <div className="relative w-full flex justify-center items-center bg-black">
            <div className="text-center relative w-full max-w-[1300px] px-4 md:px-10 py-16 md:py-12 lg:py-12">
                <p className="inline-block font-title bg-gradient-to-r from-[#DBD9D9] to-[#FF4E4E] bg-clip-text text-transparent  
                text-5xl sm:text-6xl md:text-6xl lg:text-8xl pb-20 md:pb-32">TIMELINE</p>

                <div className="relative w-full max-w-[1150px] mx-auto">
                    <div className="absolute top-[-50px] md:top-[-60px] lg:top-[-75px] left-[5%] md:left-[8%] lg:left-[8%] text-white text-xs sm:text-sm md:text-base lg:text-lg text-center">
                        <p>22nd March</p>
                        <p>10 AM</p>
                        <p className="font-extrabold">Induction Starts</p>
                    </div>
                    <div className="absolute top-[-35px] md:top-[-40px] lg:top-[-50px] left-[48%] md:left-[52%] lg:left-[52%] text-white text-xs sm:text-sm md:text-base lg:text-lg text-center">
                        <p>23rd March</p>
                        <p className="font-extrabold">Final Review Result</p>
                    </div>
                    <img src="/timeline.png" alt="Timeline" className="block mx-auto w-full p-4 md:py-10 md:px-6" />
                    <div className="absolute bottom-[-50px] md:bottom-[-60px] lg:bottom-[-80px] left-[25%] md:left-[30%] lg:left-[32%] text-white text-xs sm:text-sm md:text-base lg:text-lg text-center">
                        <p>22nd March</p>
                        <p>2 PM</p>
                        <p className="font-extrabold">Hackathon Starts</p>
                    </div>
                    <div className="absolute bottom-[-60px] md:bottom-[-50px] lg:bottom-[-75px] left-[70%] md:left-[75%] lg:left-[80%] text-white text-xs sm:text-sm md:text-base lg:text-lg text-center">
                        <p>23rd March</p>
                        <p>3 PM</p>
                        <p className="font-extrabold">Closing Ceremony</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
