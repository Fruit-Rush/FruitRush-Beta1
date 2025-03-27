import React from "react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Harshita",
        text: "Amazing service! The experience was seamless, and I would highly recommend it to everyone.",
        image: "/FruitRush-Beta1/review/Harshita.jpg",
        fruit: "/FruitRush-Beta1/mango.png",
    },
    {
        name: "Yashika",
        text: "Great quality and fast delivery. The customer support was very helpful as well!",
        image: "/FruitRush-Beta1/review/Yashika.jpg",
        fruit: "/FruitRush-Beta1/lemon.png",
    },
    {
        name: "Rahul",
        text: "Absolutely love it! The design and functionality exceeded my expectations.",
        image: "/FruitRush-Beta1/review/Rahul.jpg",
        fruit: "/FruitRush-Beta1/berry.png",
    },
];

const ReviewCard = ({ review, index }) => {
    const fruitStyles =
        index === 2
            ? "top-[-65px] right-0 w-70 h-30"
            : "top-[-65px] left-0 w-30 h-30";

    return (
        <motion.div
            className="relative bg-[var(--white)] py-12 mx-3 px-3 text-center shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)]"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
        >
            <img
                src={review.fruit}
                alt="fruit"
                className={`absolute transition-transform duration-300 ease-in-out hover:scale-110 ${fruitStyles}`}
                style={{ maxWidth: "100%" }}
            />
            <div className="flex justify-center mb-6">
                <img src={review.image} alt={review.name} className="w-30 h-30 rounded-full" />
            </div>
            <h3 className="text-2xl font-medium md:font-bold mb-6">{review.name}</h3>
            <p className="text-gray-700 text-sm">{review.text}</p>
        </motion.div>
    );
};

const ReviewSection = () => {
    return (
        <div className="animate-appear flex justify-center items-center px-5 py-12 mb-30">
            <div className="max-w-screen-lg w-full">
                <h2 className="text-4xl md:text-6xl italic text-center">HEAR FROM OUR CUSTOMERS!</h2>
                <div className="mt-25 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-15">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;