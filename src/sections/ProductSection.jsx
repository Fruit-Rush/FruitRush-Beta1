import React, { useState, useEffect } from "react";

function ProductSection() {
    const images = [
        "/FruitRush-Beta1/ProductHome.jpg",
        "/FruitRush-Beta1/product.jpg"
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-appear pb-30 mt-25">
            <div className="flex justify-center items-center pb-15 w-full">
                <div className="w-full h-[50%]">
                    <h3 className="text-[var(--darkgreen)] pb-5 md:pb-10 text-4xl md:text-6xl text-center">
                        OUR PRODUCT
                    </h3>

                    <img
                        src={images[currentImage]}
                        alt="Product"
                        className="w-full h-[50%] object-cover transition-opacity duration-1000 ease-in-out"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductSection;
