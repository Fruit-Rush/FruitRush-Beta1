import React from "react";
import { GiShoppingCart, GiKnifeFork } from "react-icons/gi";
import { BsArrowRepeat } from "react-icons/bs";
import { motion } from "framer-motion";

const items = [
    { icon: GiShoppingCart, text: "Buy" },
    { icon: GiKnifeFork, text: "Eat" },
    { icon: BsArrowRepeat, text: "Repeat" },
];

const iconStyles = "w-32 h-32 transition-transform duration-500 ease-in-out hover:rotate-[360deg]";
const containerStyles = "w-55 h-55 bg-[var(--green)] rounded-full flex items-center justify-center hover:bg-[var(--hovergreen)]";

function BuyEatSection() {
    return (
        <div className="animate-appear flex justify-center items-center px-5 py-12 mb-30">
            <div className="max-w-screen-lg w-full">
                <h2 className="playful-heading text-5xl md:text-7xl italic text-center">
                    Taste the Joy of Childhood Again!
                </h2>
                <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {items.map(({ icon: Icon, text }, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <motion.div
                                className={containerStyles}
                                initial={{ y: 0 }}
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                            >
                                <Icon className={iconStyles} />
                            </motion.div>
                            <h3 className="mt-4 text-4xl">{text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BuyEatSection;