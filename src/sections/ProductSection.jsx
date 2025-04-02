// import React, { useState, useEffect } from "react";

// function ProductSection() {
//     const desktopImages = [
//         "/FruitRush-Beta1/ProductHome.jpg",
//         "/FruitRush-Beta1/product.jpg"
//     ];
//     const mobileImages = [
//         "/FruitRush-Beta1/productHomeMobile.jpg",
//         "/FruitRush-Beta1/productMobile.jpg"
//     ];

//     const [currentImage, setCurrentImage] = useState(0);
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImage((prevImage) => (prevImage + 1) % desktopImages.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     const images = isMobile ? mobileImages : desktopImages;

//     return (
//         <div className="animate-appear pb-30 mt-25">
//             <div className="flex justify-center items-center pb-15 w-full">
//                 <div className="w-full md:mx-20 md:my-20 h-[50%] relative">
//                     <h3 className="text-[var(--darkgreen)] pb-5 md:pb-10 text-4xl md:text-6xl text-center">
//                         OUR PRODUCT
//                     </h3>

//                     <div className="relative w-full h-[50%]">
//                         <img
//                             src={images[currentImage]}
//                             alt="Product"
//                             className="w-full h-[50%] md:rounded-4xl object-cover transition-opacity duration-1000 ease-in-out"
//                         />
//                         {images[currentImage].includes("product") && (
//                             <div className="absolute inset-0 bg-transparent bg-opacity-30 hidden md:flex items-center px-5 md:px-10">
//                                 <div className="text-black max-w-[50%]">
//                                     <p className="text text-xl md:text-5xl font-medium leading-snug">
//                                         Frozen <br /> Moments, <br />
//                                         Melting <br /> Memories – <br />
//                                         Taste the Joy of <br />
//                                         Childhood <br /> Again
//                                     </p>
//                                     <button className="cursor-pointer mt-2 md:mt-5 bg-[var(--red)] text-white px-3 md:px-6 py-1 md:py-3 text-lg font-medium rounded-4xl">
//                                         Buy Now
//                                     </button>
//                                     <p className="text text-sm">At your nearest store</p>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductSection;


import React, { useState, useEffect } from "react";

function ProductSection() {
    const desktopImages = [
        "/FruitRush-Beta1/ProductHome.jpg",
        "/FruitRush-Beta1/product.jpg"
    ];
    const mobileImages = [
        "/FruitRush-Beta1/productHomeMobile.jpg",
        "/FruitRush-Beta1/productMobile.jpg"
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % desktopImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const images = isMobile ? mobileImages : desktopImages;

    return (
        <div className="animate-appear pb-30 mt-25">
            <div className="flex justify-center items-center pb-15 w-full">
                <div className="w-full md:mx-20 md:my-20 h-[50%] relative">
                    <h3 className="text-[var(--darkgreen)] pb-5 md:pb-10 text-4xl md:text-6xl text-center">
                        OUR PRODUCT
                    </h3>

                    <div className="relative w-full h-[50%]">
                        <img
                            src={images[currentImage]}
                            alt="Product"
                            className="w-full h-[50%] md:rounded-4xl object-cover transition-opacity duration-1000 ease-in-out"
                        />

                        {/* Desktop: Show text on product image */}
                        {!isMobile && images[currentImage].includes("product") && (
                            <div className="absolute inset-0 bg-transparent bg-opacity-30 hidden md:flex items-center px-5 md:px-10">
                                <div className="text-black max-w-[50%]">
                                    <p className="text-xl md:text-5xl font-medium leading-snug">
                                        Frozen <br /> Moments, <br />
                                        Melting <br /> Memories – <br />
                                        Taste the Joy of <br />
                                        Childhood <br /> Again
                                    </p>
                                    <button
                                        onClick={() => window.location.href = "https://www.amazon.in/dp/B0F39K9NJQ?ref_=cm_sw_r_cp_ud_dp_MWEG91FT0CRR50YYWJ5T"}
                                        className="cursor-pointer mt-2 md:mt-5 bg-[var(--red)] text-white px-3 md:px-6 py-1 md:py-3 text-lg font-medium rounded-4xl"
                                    >
                                        Buy Now
                                    </button>
                                    <p className="text-sm">At your nearest store</p>
                                </div>
                            </div>
                        )}

                        {isMobile && images[currentImage].includes("productMobile") && (
                            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center">
                                <button
                                    onClick={() => window.location.href = "https://www.amazon.in/dp/B0F39K9NJQ?ref_=cm_sw_r_cp_ud_dp_MWEG91FT0CRR50YYWJ5T"}
                                    className="cursor-pointer bg-[var(--red)] border-2 text-white px-4 py-2 text-lg font-medium rounded-4xl"
                                >
                                    Buy Now
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;
