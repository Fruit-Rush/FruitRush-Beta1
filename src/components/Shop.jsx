import React from "react";

function Shop() {
    const images = [
        "amazon.png",
        "flipkart.png",
        "zepto.svg.png",
        "blinkit.png",
        "swiggy.jpg",
        "amazon.png",
        "flipkart.png",
        "zepto.svg.png",
        "blinkit.png",
        "swiggy.jpg",
    ];

    return (
        <div className="w-full flex flex-col justify-center items-center py-12 overflow-hidden">
            <h3 className="text-5xl italic mb-4">Also seen on</h3>
            <div className="w-full flex overflow-hidden whitespace-nowrap">
                <div className="flex animate-marquee gap-16">
                    {images.concat(images).map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;
