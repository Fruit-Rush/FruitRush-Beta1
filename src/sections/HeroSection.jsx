import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const banners = [
    "banners/banner1.png",
    "banners/banner2.png",
    "banners/banner3.png",
    "banners/banner4.png",
    "banners/banner5.png",
];

const buttonStyles = "absolute top-1/2 transform -translate-y-1/2 text-black cursor-pointer p-2 rounded-full hover:bg-opacity-75";

const NavigationButton = ({ direction, onClick }) => (
    <button
        className={`${buttonStyles} ${direction === "left" ? "left-2" : "right-2"} p-2 md:p-3 lg:p-4`}
        onClick={onClick}
    >
        {direction === "left" ? <FaChevronLeft className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" /> : <FaChevronRight className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />}
    </button>
);

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-dark mx-5 md:mx-10 lg:mx-20 mt-15 lg:mt-10 py-5 md:py-10 lg:py-12 text-white">
            <div className="relative flex justify-center">
                <img className="img-fluid rounded-2xl shadow-xl" src={banners[currentIndex]} height={300} />
                <NavigationButton direction="left" onClick={() => setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1))} />
                <NavigationButton direction="right" onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)} />
            </div>
        </div>
    );
};

export default HeroSection;