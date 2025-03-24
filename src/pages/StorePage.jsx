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

            <div className="pb-15">
                <div className="relative w-full">
                    <img
                        src="basil.png"
                        alt="Floating Image"
                        className="absolute w-[140px] left-15 bottom-[20px] md:bottom-[20px] lg:bottom-[70px] md:right-30 md:w-[240px] h-auto transform transition duration-300 ease-in-out hover:scale-110"
                    />
                    <img
                        src="lemon2.png"
                        alt="Floating Image"
                        className="absolute w-[100px] right-13 bottom-[32px] md:bottom-[20px] lg:top-[-55px] md:right-65 md:w-[240px] h-auto transform transition duration-300 ease-in-out hover:scale-110"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#80cbc4" fill-opacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,186.7C274.3,160,343,96,411,106.7C480,117,549,203,617,218.7C685.7,235,754,181,823,138.7C891.4,96,960,64,1029,90.7C1097.1,117,1166,203,1234,234.7C1302.9,267,1371,245,1406,234.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                    </svg>
                </div>

                <div className="animate-appear px-5 py-10 flex flex-col md:flex-row gap-10 justify-center items-center h-full w-full">

                    <img
                        src="storeLocation.png"
                        className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] mx-5"
                        alt="Store Location"
                    />

                    <div className="flex flex-col max-w-[90%] md:max-w-[60%] mx-5">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navyblue)] mb-5 lg:mb-10">
                            Find <span className="text-[var(--red)]">FruitRush</span> near you
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 leading-relaxed">
                            Craving a burst of fruity freshness?
                            <span className="text-[var(--red)]"> FruitRush</span> Ice Pops are now
                            available at a store near you!
                            Experience the joy of 100%
                            natural, delicious ice pops in your
                            favorite flavors — no artificial
                            colors, no preservatives, just pure
                            fruity goodness.
                        </p>
                    </div>
                </div>

            </div>

            <div className="self-center justify-content align-items-center text-center mb-30">
                <h2 className="mt-15 text-5xl text-black">Cart will be added soon...</h2>
            </div>

            <div className="animate-appear flex justify-center items-center pb-30 px-5">
                <div className="text-center py-10 px-15 mx-15 w-full bg-[var(--green)] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">

                    <h2 className="text-5xl text-[var(--navyblue)] mb-10">Need Help? Contact us at</h2>

                    <div className="flex justify-center gap-40">
                        <a href="mailto:help@fruitrushpops.com" className="rounded-full border-1 p-4 hover:scale-110 transition">
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