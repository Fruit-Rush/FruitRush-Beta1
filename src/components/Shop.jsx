import React from "react";

function Shop() {
    const images = [
        "/FruitRush-Beta1/shop/amazon.png",
        "/FruitRush-Beta1/shop/flipkart.png",
        "/FruitRush-Beta1/shop/zepto.svg.png",
        "/FruitRush-Beta1/shop/blinkit.png",
        "/FruitRush-Beta1/shop/swiggy.jpg",
        "/FruitRush-Beta1/shop/amazon.png",
        "/FruitRush-Beta1/shop/flipkart.png",
        "/FruitRush-Beta1/shop/zepto.svg.png",
        "/FruitRush-Beta1/shop/blinkit.png",
        "/FruitRush-Beta1/shop/swiggy.jpg",
    ];

    return (
        <div className="animate-appear w-full flex flex-col justify-center items-center px-5 py-12 mb-30">
            <div className="flex items-center gap-4">
                <h3 className="text-[var(--navyblue)] text-5xl md:text-7xl italic">Also seen on</h3>
            </div>
            <div className="mt-5 w-full flex overflow-hidden whitespace-nowrap">
                <div className="flex animate-marquee gap-16">
                    {images.concat(images).map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-30 h-30 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;