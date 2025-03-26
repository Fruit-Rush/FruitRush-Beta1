import React from "react";

const HeroImage = ({ src, text }) => (
    <div className="flex flex-col items-center">
        <img src={src} className="w-30 h-30 md:w-50 md:h-50 object-cover" alt="Hero Pop" />
        <p className="text-xl mt-2 text-black">{text}</p>
    </div>
);

const HeroPop = () => {
    const images = [
        { src: "splash/1.png", text: "No artificial color" },
        { src: "splash/2.png", text: "100% natural" },
        { src: "splash/3.png", text: "Fresh fruit pops" },
    ];

    return (
        <section className="animate-appear">
            <div className="mt-30 mx-10 md:mx-0 flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-40">
                {images.map(({ src, text }, index) => (
                    <HeroImage key={index} src={src} text={text} />
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-30 px-4 md:mx-20">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        UNFREEZE YOUR CHILDHOOD
                    </h1>
                    <h3 className="playful-heading text-5xl md:text-7xl text-[var(--navyblue)] mt-5">
                        SWEET MEMORIES
                    </h3>
                    <p className="text-xl text-gray-600">One pop at a time</p>
                </div>

                <img src="pops.png" className="w-70 py-10 mx-10 md:w-100" alt="Pops" />
            </div>
        </section>
    );
};

export default HeroPop;