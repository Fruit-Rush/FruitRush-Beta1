import React from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';

function AboutPage() {
    return(
        <>
            <Navbar />
            <div className="mt-15">
                <div className="mt-15 relative">
                    <div className="animate-appear bg-[var(--green)] flex flex-col md:flex-row items-center justify-between">

                        <div className="md:w-2/3 text-center md:text-left px-10 md:px-20">
                            <h2 className="mt-15 text-4xl md:text-7xl font-bold text-[var(--navyblue)]">Bringing back
                                the joy of ice
                                pops, bursting
                                with<span className="text-[var(--red)]"> real fruits goodness.</span></h2>
                        </div>


                        <div className="md:w-1/3 flex justify-center md:mt-0">
                            <div className="mt-5 md:mt-15 w-[150px] h-[150px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden">
                                <img
                                    src="distributor.jpg"
                                    alt="Floating Image"
                                    className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="lemon2.png"
                            alt="Floating Image"
                            className="absolute w-[100px] right-10 md:bottom-[100px] md:right-30 md:w-[220px] h-auto transform transition duration-300 ease-in-out hover:scale-110"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#b4ebe6" fillOpacity="1" d="M0,64L20,85.3C40,107,80,149,120,149.3C160,149,200,107,240,96C280,85,320,107,360,133.3C400,160,440,192,480,176C520,160,560,96,600,90.7C640,85,680,139,720,170.7C760,203,800,213,840,186.7C880,160,920,96,960,80C1000,64,1040,96,1080,106.7C1120,117,1160,107,1200,122.7C1240,139,1280,181,1320,181.3C1360,181,1400,139,1420,117.3L1440,96V0H0Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <Footer2/>
        </>
    )
}

export default AboutPage;
