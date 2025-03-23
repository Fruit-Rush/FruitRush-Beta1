import React from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

function StorePage() {
    return (
        <>
            <Navbar />
            <div className="mt-15">
                <div className="flex justify-center">
                    <img
                        className="img-fluid"
                        src={"banners/banner7.png"}
                        height={300}
                    />
                </div>
            </div>

            <div className="animate-appear pb-15 mt-15">
                <div className="relative w-full">
                    <img
                        src="basil.png"
                        alt="Floating Image"
                        className="absolute w-[140px] left-15 bottom-[20px] md:bottom-[20px] lg:bottom-[70px] md:right-30 md:w-[240px] h-auto transform transition duration-300 ease-in-out hover:scale-110"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                        <path
                            fill="#80cbc4"
                            fillOpacity="1"
                            d="M0,32L20,37.3C40,43,80,53,120,58.7C160,64,200,64,240,58.7C280,53,320,43,360,58.7C400,75,440,117,480,128C520,139,560,117,600,112C640,107,680,117,720,106.7C760,96,800,64,840,64C880,64,920,96,960,101.3C1000,107,1040,85,1080,69.3C1120,53,1160,43,1200,64C1240,85,1280,139,1320,149.3C1360,160,1400,128,1420,112L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
                        />
                    </svg>
                </div>

                <div className="text-center px-10 py-10 flex flex-col justify-center h-full bg-[#80cbc4]">
                    <h2 className="text-7xl font-bold text-[var(--navyblue)] mb-5 lg:mb-10">
                        Find <span className="text-[var(--red)]">FruitRush</span> near you
                    </h2>
                    <p className="text-xl md:text-3xl mt-3">
                        Craving a burst of fruity freshness?
                        <span className="text-[var(--red)]">FruitRush</span> Ice Pops are now
                        available at a store near you!
                        Experience the joy of 100%
                        natural, delicious ice pops in your
                        favorite flavors — no artificial
                        colors, no preservatives, just pure
                        fruity goodness.
                    </p>
                </div>

                <div className=" px-10 py-10 flex flex-col h-full bg-[#80cbc4]">
                    <h2 className="text-center text-5xl font-bold text-[var(--navyblue)] mb-5 lg:mb-10">
                        Why choose <span className="text-[var(--red)]">FruitRush</span> ?
                    </h2>

                    <div className="bg-[#80cbc4] py-15 flex flex-wrap justify-center gap-8 md:gap-20 lg:gap-40">
                        <img src="splash/4.png" className="w-50 h-50" />
                        <img src="splash/5.png" className="w-50 h-50" />
                        <img src="splash/6.png" className="w-50 h-50" />
                    </div>
                </div>

                <div className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#80cbc4" fillOpacity="1" d="M0,96L26.7,101.3C53.3,107,107,117,160,106.7C213.3,96,267,64,320,85.3C373.3,107,427,181,480,192C533.3,203,587,149,640,133.3C693.3,117,747,139,800,122.7C853.3,107,907,53,960,74.7C1013.3,96,1067,192,1120,224C1173.3,256,1227,224,1280,208C1333.3,192,1387,192,1413,192L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                    </svg>
                </div>
            </div>

            <div className="self-center justify-content align-items-center text-center mb-30">
                <h2 className="mt-15 text-5xl text-black">Cart will be added soon...</h2>
            </div>

            <div className="animate-appear flex justify-center items-center pb-30 px-5">
                <div className="text-center py-10 px-15 mx-15 w-full bg-[var(--green)] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">

                    <h2 className="text-5xl text-[var(--navyblue)] mb-10">Need Help? Contact us at</h2>

                    <div className="flex justify-center gap-40">
                        <a href="mailto:info@fruitrushpops.com" className="rounded-full border-1 p-4 hover:scale-110 transition">
                            <IoMdMail className="text-3xl md:text-5xl" />
                        </a>
                        <a href="tel:+919350520969" className="rounded-full border-1 p-4 hover:scale-110 transition">
                            <FaPhone className="text-3xl md:text-5xl" />
                        </a>
                    </div>
                </div>

            </div>

            <Footer2 />
        </>
    )
}

export default StorePage;