import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { BsArrowRepeat } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";

function BuyEatPage() {
    return (
        <div className="animate-appear flex justify-center items-center px-6 py-12 mb-30">
            <div className="max-w-screen-lg w-full">
                
                <h2 className="text-5xl italic text-center mb-20">Taste the Joy of Childhood Again!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <div className="w-55 h-55 bg-[var(--green)] rounded-full flex items-center justify-center transition-transform duration-500 ease-in-out hover:rotate-[360deg] hover:bg-teal-200">
                            <GiShoppingCart className="w-32 h-32 transform transition duration-300 ease-in-out hover:scale-115" />
                        </div>
                        <h3 className="mt-4 text-3xl font-semibold">Shop</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-55 h-55 bg-[var(--green)] rounded-full flex items-center justify-center transition-transform duration-500 ease-in-out hover:rotate-[360deg] hover:bg-teal-200">
                            <GiKnifeFork className="w-32 h-32 transform transition duration-300 ease-in-out hover:scale-110" />
                        </div>
                        <h3 className="mt-4 text-3xl font-semibold">Eat</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-55 h-55 bg-[var(--green)] rounded-full flex items-center justify-center transition-transform duration-500 ease-in-out hover:rotate-[360deg] hover:bg-teal-200">
                            <BsArrowRepeat className="w-32 h-32 transform transition duration-300 ease-in-out hover:scale-110" />
                        </div>
                        <h3 className="mt-4 text-3xl font-semibold">Repeat</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyEatPage;

