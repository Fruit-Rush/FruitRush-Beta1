import React from "react";
import { GiShoppingCart, GiKnifeFork } from "react-icons/gi";
import { BsArrowRepeat } from "react-icons/bs";
import { motion } from "framer-motion";

function BuyEatPage() {
    return (
        <div className="animate-appear flex justify-center items-center px-6 py-12 mb-30">
            <div className="max-w-screen-lg w-full">
                <h2 className="playful-heading italic text-center">
                    Taste the Joy of Childhood Again!
                </h2>
                <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: <GiShoppingCart className="w-32 h-32 transition-transform duration-500 ease-in-out hover:rotate-[360deg] " />, text: "Shop" },
                        { icon: <GiKnifeFork className="w-32 h-32 transition-transform duration-500 ease-in-out hover:rotate-[360deg] " />, text: "Eat" },
                        { icon: <BsArrowRepeat className="w-32 h-32 transition-transform duration-500 ease-in-out hover:rotate-[360deg] " />, text: "Repeat" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <motion.div
                                className="w-55 h-55 bg-[var(--green)] rounded-full flex items-center justify-center hover:bg-teal-200"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -40, 0] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="buy-eat mt-4 text-3xl font-semibold">
                                {item.text}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BuyEatPage;