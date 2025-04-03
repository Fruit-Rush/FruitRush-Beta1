import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import navigation icons

const productImages = [
    "store/1.jpg",
    "store/2.jpg",
    "store/3.jpg",
    "store/4.jpg"
];

function ProductCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="pb-30 md:mx-20">
            <div className="animate-appear px-5 py-10 flex flex-col md:flex-row gap-10 justify-center items-center h-full w-full">

                <div className="relative flex items-center">

                    <button
                        onClick={prevImage}
                        className="cursor-pointer absolute left-10 bg-gray-500 rounded-full text-white p-2 hover:bg-transparent hover:text-black transition">
                        <FaChevronLeft size={10} />
                    </button>

                    <img
                        src={productImages[currentImageIndex]}
                        className="w-70 h-auto md:w-100 md:h-auto lg:w-[400px] lg:h-auto mx-5 transition-all duration-500 ease-in-out"
                        alt="Product"
                    />

                    <button
                        onClick={nextImage}
                        className="cursor-pointer absolute right-0 bg-gray-500 rounded-full text-white p-2 hover:bg-transparent hover:text-black transition">
                        <FaChevronRight size={10} />
                    </button>
                </div>
                
                <div className="flex flex-col max-w-[90%] md:max-w-[60%] mx-5">
                    <h2 className="text-xl lg:text-3xl font-medium text-[var(--navyblue)] mb-5 lg:mb-8">
                        FruitRush Ice Pops – 10 Pops (Strawberry, Mango, Orange, Grapes, Lemon), Made with Real Fruit Extracts, Freeze & Enjoy Anytime
                    </h2>
                    <div className="text-lg md:text-xl space-y-1 ">
                        <p><span className="font-semibold">Brand:</span> FruitRush</p>
                        <p><span className="font-semibold">Flavour:</span> Strawberry, Mango, Orange, Grapes, Lemon</p>
                        <p><span className="font-semibold">Item Weight:</span> 700 Grams</p>
                        <p><span className="font-semibold">Item Form:</span> Beverages, Ice pops</p>
                        <p><span className="font-semibold">Recommended Uses For Product:</span> Party, Fun</p>
                    </div>

                    <button className="bg-[var(--red)] text-white mt-10 px-5 py-1 text-lg rounded-full hover:scale-110 transition">
                        <a href="https://www.amazon.in/dp/B0F39K9NJQ?ref_=cm_sw_r_cp_ud_dp_MWEG91FT0CRR50YYWJ5T" target="_blank" rel="noopener noreferrer">Buy Now</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCarousel;
