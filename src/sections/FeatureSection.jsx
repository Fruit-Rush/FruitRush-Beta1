import React from "react";
import { FaStore, FaGift } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const features = [
    { icon: FaStore, title: "Store", description: "Available at your nearest store" },
    { icon: TbTruckDelivery, title: "Instant Delivery", description: "Delivered to your doorstep" },
    { icon: FaGift, title: "Gift Wrap", description: "Send a sweet surprise to your loved ones" },
];

const iconStyles = "w-32 h-32 transition-transform duration-500 ease-in-out hover:rotate-[360deg]";
const textStyles = "text-4xl mt-10 font-semibold text-[var(--navyblue)]";

function FeatureSection() {
    return (
        <div className="animate-appear flex justify-center items-center pb-30 px-5">
            <div className="relative py-10 mx-15 w-full bg-[var(--green)] flex items-center shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105 h-1/2">

                <img
                    src="basil.png"
                    alt="Decorative"
                    className="absolute bottom-[-95px] left-[-30px] w-40 h-40 md:w-52 md:h-52 object-contain z-10"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-[var(--navyblue)] w-full">
                    {features.map(({ icon: Icon, title, description }, index) => (
                        <div key={index} className="py-10 px-6 text-center flex flex-col items-center">
                            <Icon className={iconStyles} />
                            <h3 className={textStyles}>{title}</h3>
                            <p className="text-gray-600 mt-2">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;