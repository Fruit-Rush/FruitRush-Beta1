import React from "react";

const HeroPop = () => {
    return (
        <section className="animate-appear">
            <div className="mt-30 flex flex-wrap justify-center gap-8 md:gap-20 lg:gap-40">
                <img src="splash/1.png" className="w-50 h-50 object-cover" />
                <img src="splash/2.png" className="w-50 h-50 object-cover" />
                <img src="splash/3.png" className="w-50 h-50 object-cover" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-4 md:mx-20">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        UNFREEZE YOUR CHILDHOOD
                    </h1>
                    <h3 className="playful-heading-2 text-[var(--navyblue)] mt-1">
                        SWEET MEMORIES
                    </h3>
                    <p className="text-xl text-gray-600">
                        One pop at a time
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center mt-3">
                    <img
                        src="pops.png"
                        className="w-70 md:w-100"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroPop;
