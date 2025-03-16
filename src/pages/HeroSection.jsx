import React, { useState, useEffect } from "react";

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

    return (
        <div className="bg-dark mt-15 text-white">
            <img
                className="img-fluid"
                src={banners[currentIndex]}
                height={500}
            />
        </div>
    );
};

export default HeroSection;
