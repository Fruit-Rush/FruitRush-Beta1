import React from "react";
import { FaStore, FaGift } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { motion } from "framer-motion";

const features = [
    { icon: FaStore, title: "Store", description: "Available at your nearest store" },
    { icon: TbTruckDelivery, title: "Instant Delivery", description: "Delivered to your doorstep" },
    { icon: FaGift, title: "Gift Wrap", description: "Send a sweet surprise to your loved ones" },
];

const iconStyles = "w-20 h-20 md:w-32 md:h-32 transition-transform duration-500 ease-in-out lg:hover:rotate-[360deg]";
const textStyles = "text-2xl md:text-4xl mt-2 md:mt-6 font-medium md:font-semibold text-[var(--navyblue)]";

function FeatureSection() {
    return (
        <motion.div
            className="flex justify-center items-center pb-30 px-6 md:px-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}  // Ensures animation triggers only once
        >
            <div className="relative py-10 mx-2 md:mx-15 w-full bg-[var(--green)] flex items-center shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105 h-1/2">

                <motion.img
                    src="/FruitRush-Beta1/basil.png"
                    alt="Decorative"
                    className="absolute bottom-[-95px] left-[-30px] w-40 h-40 md:w-52 md:h-52 object-contain z-10"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:divide-x divide-[var(--navyblue)] w-full">
                    {features.map(({ icon: Icon, title, description }, index) => (
                        <motion.div
                            key={index}
                            className="py-5 md:py-10 px-6 text-center flex flex-col items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Icon className={iconStyles} />
                            <h3 className={textStyles}>{title}</h3>
                            <p className="text-gray-600 mt-0 md:mt-2">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default FeatureSection;
