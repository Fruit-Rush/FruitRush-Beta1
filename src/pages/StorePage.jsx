import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const ProductCard = ({ image, name, price, link }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="bg-[var(--green)] p-6 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col items-center text-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={image} className="w-28 h-56 sm:w-35 sm:h-70 md:w-40 md:h-80 mb-5" alt={name} />

            {!hovered ? (
                <div className="w-full flex flex-col sm:flex-row justify-between px-2 text-xl">
                    <p className="sm:w-2/3 sm:text-left text-center">{name}</p>
                    <p className="font-semibold sm:w-1/3 sm:text-right text-center">Rs. {price}</p>
                </div>
            ) : (
                <button className="bg-[var(--red)] text-white px-5 py-1 text-lg rounded-full border-2 border-white hover:scale-110 transition">
                    <a href={link} target="_blank" rel="noopener noreferrer">Buy Now</a>
                </button>
            )}
        </div>
    );
};

function StorePage() {

    const products = [
        { image: "store/product-1.png", name: "FruitRush Icepops", price: 90, link: "https://www.meesho.com/s/p/8k7ndo?utm_source=s_w" },
        { image: "store/product-2.png", name: "FruitRush Icepops - 10 pops", price: 95, link: "https://www.amazon.in/dp/B0F39K9NJQ" },
    ];

    return (
        <>
            <Navbar />

            <div className="relative mt-10">
                <div className="flex justify-center relative">
                    <img
                        className="img-fluid block md:hidden"
                        src="banners/mobileStore.jpg" 
                        alt="Fruity Bliss Banner"
                    />

                    <img
                        className="img-fluid hidden md:block"
                        src="banners/banner7.jpg"
                        alt="Fruity Bliss Banner"
                    />

                    <div className="absolute left-3 top-2/5 md:top-1/2 lg:top-2/5 transform -translate-y-1/2 pr-10 md:p-5 w-1/2 max-w-lg">
                        <h2 className="text-2xl md:text-6xl lg:text-6xl font-bold text-[var(--navyblue)]">
                            Your Favorite <span className="text-[var(--red)]">Fruity Bliss</span>,
                            <br /> Now Just Around the Corner!
                        </h2>

                        <a href="https://www.amazon.in/dp/B0F39K9NJQ?ref_=cm_sw_r_cp_ud_dp_MWEG91FT0CRR50YYWJ5T" target="_blank" rel="noopener noreferrer">
                            <button className="mt-5 md:mt-5 lg:mt-15 shadow-xl cursor-pointer bg-[var(--red)] text-white 
                   px-2 py-1 md:px-6 md:py-2 lg:px-8 lg:py-2 
                   text-sm md:text-lg lg:text-xl 
                   rounded-full border-2 border-white 
                   hover:scale-110 transition">
                                <span className="text-center">Order Now</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="pb-15">

                <div className="animate-appear px-5 py-10 flex flex-col md:flex-row gap-10 justify-center items-center h-full w-full">

                    <img
                        src="storeLocation.png"
                        className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] mx-5"
                        alt="Store Location"
                    />

                    <div className="flex flex-col max-w-[90%] md:max-w-[60%] mx-5">
                        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[var(--navyblue)] mb-5 lg:mb-10">
                            Find <span className="text-[var(--red)]">FruitRush</span> near you
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 leading-relaxed">
                            Craving a burst of fruity freshness?
                            <span className="text-[var(--red)]"> FruitRush</span> Ice Pops are now
                            available at a store near you!
                            Experience the joy of 100%
                            natural, delicious ice pops in your
                            favorite flavors — no artificial
                            colors, no preservatives, just pure
                            fruity goodness.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="mb-40 mx-7">
                <div className="mb-30 md:mx-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} image={product.image} name={product.name} price={product.price} link={product.link} />
                    ))}
                </div>

            </div> */}

            <div className="pb-30">
                <div className="animate-appear px-5 py-10 flex flex-col md:flex-row gap-10 justify-center items-center h-full w-full">

                    <img
                        src="store/product-1.png"
                        className="w-30 h-auto sm:w-20 sm:h-auto md:w-56 md:h-auto lg:w-[200px] lg:h-auto mx-5"
                        alt="product"
                    />

                    <div className="flex flex-col max-w-[90%] md:max-w-[60%] mx-5">
                        <h2 className="text-xl lg:text-3xl font-medium text-[var(--navyblue)] mb-5 lg:mb-10">
                            FruitRush Ice Pops – 10 Pops (Strawberry, Mango, Orange, Grapes, Lemon), Made with Real Fruit Extracts, Freeze & Enjoy Anytime
                        </h2>
                        <div className="text-lg md:text-xl space-y-2">
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


            <div className="animate-appear flex justify-center items-center pb-30 px-7">
                <div className="text-center py-10 px-15 mx-15 w-full bg-[var(--green)] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">

                    <h2 className="text-3xl md:text-5xl text-[var(--navyblue)] mb-10">Lorem, ipsum.</h2>

                    <div className="flex justify-center gap-40">
                        <a href="mailto:help@fruitrushpops.com" className="rounded-full border-1 p-4 hover:scale-110 transition">
                            <IoMdMail className="text-3xl md:text-5xl" />
                        </a>
                        <a href="tel:+919350520969" className="rounded-full border-1 p-4 hover:scale-110 transition">
                            <FaPhone className="text-3xl md:text-5xl" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default StorePage;