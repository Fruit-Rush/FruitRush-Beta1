import React from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';

const FloatingImage = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={`transition-transform duration-300 ease-in-out hover:scale-110 ${className}`} />
);

const ListSection = ({ items }) => (
    <ul className="list-disc space-y-3 text-lg pl-5">
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

function DistributorPage() {
    return (
        <>
            <Navbar />

            <div className="mt-10 relative">
                <div className="animate-appear bg-[var(--green)] flex flex-col-reverse md:flex-row items-center justify-between">

                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-10 md:px-20">
                        <h2 className="mt-5 md:mt-15 text-4xl md:text-6xl font-bold text-[var(--navyblue)]">
                            Become a <span className="text-[var(--red)]">Distributor</span> & Join the FruitRush family!
                        </h2>
                        <p className="text text-lg md:text-2xl text-gray-700 mt-3">
                            Partner with India's Best Ice Pop Brand - FruitRush
                        </p>

                        <button className="my-5 shadow-lg cursor-pointer flex justify-center items-center bg-[var(--red)] text-white px-4 py-2 rounded-full border-2 border-white w-full max-w-[200px] hover:scale-110 transition">
                            <span className="text-2xl">Join us</span>
                        </button>
                    </div>

                    <div className="w-full flex justify-center mt-5 md:w-1/2 md:mt-0">
                        <div className="w-[150px] h-[150px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden">
                            <FloatingImage src="distributor.jpg" alt="Distributor" className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110" />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <FloatingImage src="lemon2.png" alt="Lemon" className="absolute w-[100px] right-10 md:bottom-[100px] md:right-30 md:w-[220px] h-auto transform transition duration-300 ease-in-out hover:scale-110" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#b4ebe6" fillOpacity="1" d="M0,64L20,85.3C40,107,80,149,120,149.3C160,149,200,107,240,96C280,85,320,107,360,133.3C400,160,440,192,480,176C520,160,560,96,600,90.7C640,85,680,139,720,170.7C760,203,800,213,840,186.7C880,160,920,96,960,80C1000,64,1040,96,1080,106.7C1120,117,1160,107,1200,122.7C1240,139,1280,181,1320,181.3C1360,181,1400,139,1420,117.3L1440,96V0H0Z"></path>
                    </svg>
                </div>
            </div>


            <div className="animate-appear flex justify-center items-center mb-30 mt-15 mx-1 md:mx-20 px-5">
                <div className="relative w-full flex flex-col md:flex-row items-stretch bg-[#fbf8ef] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105 h-full">

                    <FloatingImage src="house.png" alt="House" className="self-center w-40 h-40 md:h-50 md:w-50 lg:w-100 lg:h-100 object-contain" />

                    <div className="text-center md:text-left px-5 md:px-10 py-10 flex flex-col justify-center h-full">
                        <h2 className="px-5 text-3xl md:text-4xl font-bold text-[var(--navyblue)] mb-5 lg:mb-10">
                            Are you looking for profitable and
                            hassle-free <span className="text-[var(--red)]">Distribution</span> Business?
                        </h2>
                        <p className="text text-lg md:text-xl mt-3">
                            FruitRush offers an innovative range
                            of Ice Pops that require no cold
                            storage, making it easier than ever
                            for distributors and retailers to
                            stock, sell, and grow their business.
                        </p>
                    </div>

                </div>
            </div>

            <div className="animate-appear max-w-4xl py-5 pr-5 md:p-5 mb-30 mx-auto flex flex-col items-center space-y-5">
                {[
                    { img: "bullets/1.png", title: "A Business That Feels Like Family", desc: "Join the FruitRush Revolution!" },
                    { img: "bullets/2.png", title: "From Aspiration to Achievement", desc: "Let’s Grow Together with FruitRush!" },
                    { img: "bullets/3.png", title: "A Cool Business for a Bright Future", desc: "Partner with FruitRush!" }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 w-full"
                    >
                        <div className="w-full flex justify-center">
                            <img src={item.img} alt="Image" className="w-20 h-20 md:w-30 md:h-30 object-cover" />
                        </div>
                        <div className="w-full py-5 md:text-left">
                            <h4 className="text-xl font-medium md:font-semibold md:text-2xl">{item.title}</h4>
                            <p className="md:text-xl text-gray-700 mt-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="animate-appear flex flex-col md:flex-row justify-center items-center gap-10 md:gap-30 px-5 mx-5 md:mx-20 py-10 mb-30">

                <div className="flex flex-col items-center md:text-left w-full md:w-1/2">
                    <h2 className="text-4xl text-center sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-[var(--navyblue)]">
                        Why become a <span className="text-[var(--red)]">FruitRush</span> Distributor
                    </h2>
                    <div className="bg-[var(--red)] text-white rounded-t-full w-full px-5 md:px-10 lg:px-25 py-10 mt-10 mx-20">
                        <ListSection
                            items={["No need for cold storage", "Simplified distribution process", "Retailer-friendly approach", "High market demand", "Reliable delivery system"]}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center  md:text-left w-full md:w-1/2">
                    <div className="bg-[var(--red)] text-white rounded-b-full w-full px-5 md:px-10 lg:px-25 py-10 mb-10 mx-20">
                        <ListSection
                            items={["Attractive profit margins", "Expanding brand visibility", "Complete training & support", "Consistent market demand", "Dedicated after-sales service"]}
                            className="mb-10"
                        />
                    </div>
                    <h2 className="text-4xl text-center sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[var(--navyblue)]">
                        Benefits of being <span className="text-[var(--red)]">FruitRush</span> Distributor
                    </h2>
                </div>
            </div>


            <div className="animate-appear flex justify-center items-center mb-30 py-15 mx-2 md:mx-20 px-5">
                <div className="relative py-2 px-2 md:py-2 md:px-5 w-full flex items-center rounded-lg bg-[var(--green)] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105 h-1/2">

                    <FloatingImage src="strawberry.png" alt="Distributor" className="absolute top-0 left-0 w-40 h-40 md:w-52 md:h-52 object-contain z-10 
                       translate-x-[-20%] translate-y-[-50%]" />

                    <iframe
                        className="w-full h-64 md:h-96 rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="FruitRush Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="animate-appear mx-10 md:mx-0 mb-30 flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-40">
                <div className="flex flex-col items-center">
                    <img src="splash/1.png" className="w-30 h-30 md:w-50 md:h-50 object-cover" alt="Image 1" />
                    <p className="text-xl mt-2 text-black">No artificial color</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="splash/2.png" className="w-30 h-30 md:w-50 md:h-50 object-cover" alt="Image 2" />
                    <p className="text-xl mt-2 text-black">100% natural fruits</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="splash/3.png" className="w-30 h-30 md:w-50 md:h-50 object-cover" alt="Image 3" />
                    <p className="text-xl mt-2 text-black">Refreshing icepops</p>
                </div>
            </div>

            <div className="mb-30 animate-appear">
                <div className="flex md:text-center font-bold gap-4 px-4 md:px-20">
                    <h3 className="text-[var(--navyblue)] text-4xl sm:text-5xl md:text-5xl lg:text-6xl">Join the <span className="text-[var(--red)]">FruitRush</span> Distribution Network Today!</h3>
                </div>

                <div className="mt-5 md:mt-0 px-5 flex flex-col md:flex-row items-center justify-between md:mx-20">
                    <div className="w-full md:w-1/2 md:text-left pr-5 ">
                        <p className="text-lg sm:text-xl md:text-2xl">
                            Be part of a fast-growing and
                            profitable business opportunity in
                            the frozen treats market. Expand
                            your reach, maximize profits, and
                            grow with FruitRush Ice Pops!
                        </p>
                    </div>

                    <div className="w-full pt-5 md:w-1/2 flex flex-col md:text-right mt-10">
                        <h3 className="text-4xl font-semibold text-[var(--navyblue)] sm:mb-5">
                            Get in Touch:
                        </h3>
                        <h3 className="text-2xl">
                            Email: <span className="italic">info@fruitrushpops.com</span>
                            <br />
                            <span className="italic">help@fruitrushpops.com</span>
                        </h3>
                        <h3 className="text-2xl">
                            Call & WhatsApp: <span className="italic">+91 9350520969</span>
                        </h3>
                        <div className="md:self-end self-center w-full max-w-[200px]">
                            <button className="mt-5 shadow-xl cursor-pointer bg-[var(--red)] text-white px-1 py-1 rounded-full border-2 border-white w-full hover:scale-110 transition">
                                <span className="text-center text-2xl">Connect</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <Footer2 />
        </>
    );
}

export default DistributorPage;