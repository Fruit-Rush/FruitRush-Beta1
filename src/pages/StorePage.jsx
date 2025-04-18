import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import ProductCarousel from "../components/ProductCarousel";

function StorePage() {

    return (
        <>
            <Navbar />

            <div className="relative mt-10">
                <div className="flex justify-center relative">
                    <img
                        className="img-fluid block md:hidden"
                        src="banners/mobileStore.jpg" 
                        alt="Fruity Bliss Banner"
                    />

                    <img
                        className="img-fluid hidden md:block"
                        src="banners/banner7.jpg"
                        alt="Fruity Bliss Banner"
                    />

                    <div className="absolute left-3 top-2/5 md:top-1/2 lg:top-2/5 transform -translate-y-1/2 pr-10 md:p-5 w-1/2 max-w-lg">
                        <h2 className="text-2xl md:text-6xl lg:text-6xl font-bold text-[var(--navyblue)]">
                            Your Favorite <span className="text-[var(--red)]">Fruity Bliss</span>,
                            <br /> Now Just Around the Corner!
                        </h2>

                        <a href="https://www.amazon.in/dp/B0F39K9NJQ?ref_=cm_sw_r_cp_ud_dp_MWEG91FT0CRR50YYWJ5T" target="_blank" rel="noopener noreferrer">
                            <button className="mt-5 md:mt-5 lg:mt-15 shadow-xl cursor-pointer bg-[var(--red)] text-white 
                   px-2 py-1 md:px-6 md:py-2 lg:px-8 lg:py-2 
                   text-sm md:text-lg lg:text-xl 
                   rounded-full border-2 border-white 
                   hover:scale-110 transition">
                                <span className="text-center">Order Now</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="pb-15">

                <div className="animate-appear px-5 py-10 flex flex-col md:flex-row gap-10 justify-center items-center h-full w-full">

                    <img
                        src="storeLocation.png"
                        className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] mx-5"
                        alt="Store Location"
                    />

                    <div className="flex flex-col max-w-[90%] md:max-w-[60%] mx-5">
                        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[var(--navyblue)] mb-5 lg:mb-10">
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

            <ProductCarousel />

            <div className="animate-appear flex justify-center items-center pb-30 px-7">
                <div className="text-center py-10 px-10 md:px-15 mx-15 w-full bg-[var(--green)] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">

                    <h2 className="text-3xl md:text-5xl text-[var(--navyblue)] mb-10">Any query? Connect to us.</h2>

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