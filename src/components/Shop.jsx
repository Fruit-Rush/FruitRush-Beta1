import React from "react";

function Shop() {
    const images = [
        "shop/amazon.png",
        "shop/flipkart.png",
        "shop/zepto.svg.png",
        "shop/blinkit.png",
        "shop/swiggy.jpg",
        "shop/amazon.png",
        "shop/flipkart.png",
        "shop/zepto.svg.png",
        "shop/blinkit.png",
        "shop/swiggy.jpg",
    ];

    return (
        <div className="animate-appear w-full flex flex-col justify-center items-center px-5 py-12 mb-30">
            <div className="flex items-center gap-4">
                <h3 className="text-[var(--navyblue)] text-7xl italic">Also seen on</h3>
            </div>
            <div className="mt-5 w-full flex overflow-hidden whitespace-nowrap">
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