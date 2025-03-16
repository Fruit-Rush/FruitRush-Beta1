// This code will change when banners will be ready

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banners = [
    "/banners/banner1.jpg",
    "/banners/banner2.jpg",
    "/banners/banner3.jpg"
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[75vh] flex justify-center items-center pb-60">
            {banners.map((banner, index) => (
                <motion.img
                    key={index}
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    className="absolute w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}
