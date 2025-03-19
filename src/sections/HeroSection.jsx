import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const banners = [
    "banners/banner1.jpg",
    "banners/banner2.jpg",
    "banners/banner3.jpg",
    "banners/banner4.jpg",
    "banners/banner5.jpg",
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    return (
        <div className="relative bg-dark mx-5 md:mx-10 lg:mx-20 mt-15 py-5 md:py-10 lg:py-12 text-white">
            <div className="relative flex justify-center">
                <img
                    className="img-fluid rounded-2xl shadow-xl"
                    src={banners[currentIndex]}
                    height={300}
                />

                <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
                    onClick={prevSlide}
                >
                    <FaChevronLeft size={24} />
                </button>

                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
                    onClick={nextSlide}
                >
                    <FaChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;