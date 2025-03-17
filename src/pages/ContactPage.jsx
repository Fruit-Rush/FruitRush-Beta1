import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';

function ContactPage() {
    return (
        <>
            <Navbar />
            <div className="animate-appear mt-15 h-[50vh] bg-[var(--green)] flex items-center justify-end pr-10 relative">
                <h1 className="text-white nav-text text-7xl md:text-9xl font-bold">
                    <span className="text-[var(--red)]">Connect </span>with Us
                </h1>
            </div>

            <div className="relative">
                <img
                    src="lemon2.png"
                    alt="Floating Image"
                    className="absolute w-[100px] right-10 md:bottom-[100px] md:right-30 md:w-[220px] h-auto transform transition duration-300 ease-in-out hover:scale-110"
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#b4ebe6" fillOpacity="1" d="M0,64L20,85.3C40,107,80,149,120,149.3C160,149,200,107,240,96C280,85,320,107,360,133.3C400,160,440,192,480,176C520,160,560,96,600,90.7C640,85,680,139,720,170.7C760,203,800,213,840,186.7C880,160,920,96,960,80C1000,64,1040,96,1080,106.7C1120,117,1160,107,1200,122.7C1240,139,1280,181,1320,181.3C1360,181,1400,139,1420,117.3L1440,96V0H0Z"></path>
                </svg>
            </div>

            <div className="animate-appear flex justify-center mt-30 items-center px-8 md:px-20 pb-25">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
                    <div className="flex flex-col gap-6">
                        <div className="bg-[var(--green)] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105 rounded-lg p-3 flex items-center gap-4">
                            <div className="w-24 h-24 flex items-center justify-center">
                                <span className="text-3xl font-bold"><FaLocationDot /></span>
                            </div>
                            <h2 className="text-2xl">Location: <span className="text-[var(--navyblue)] italic">Address</span></h2>
                        </div>

                        <div className="bg-[var(--green)] rounded-lg p-3 flex items-center gap-4 shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">
                            <div className="w-24 h-24 flex items-center justify-center">
                                <span className="text-3xl font-bold"><FaPhone /></span>
                            </div>
                            <h2 className="text-2xl">Phone number: <span className="text-[var(--navyblue)] italic">+91 9350520969</span></h2>
                        </div>

                        <div className="bg-[var(--green)] rounded-lg p-3 flex items-center gap-4 shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">
                            <div className="w-24 h-24 flex items-center justify-center">
                                <span className="text-3xl font-bold"><IoMdMail /></span>
                            </div>
                            <h2 className="text-2xl">E-mail: <span className="text-[var(--navyblue)] italic">info@fruitrushpops.com</span></h2>
                        </div>
                    </div>

                    <div className="bg-[var(--green)] rounded-lg p-6 shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="Full Name" className="border p-2 rounded-md" />
                            <input type="tel" placeholder="Phone No." className="border p-2 rounded-md" />
                            <input type="email" placeholder="Email" className="border p-2 rounded-md" />
                            <textarea placeholder="Your Message" className="border p-2 rounded-md h-32"></textarea>
                            <div className="flex justify-center">
                                <button className="shadow-lg cursor-pointer flex justify-between items-center bg-[var(--red)] text-white px-1 py-1 rounded-full border-2 border-white w-full max-w-[200px] hover:scale-110 transition">
                                    <span className="flex-1 text-center text-2xl">Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    );
}

export default ContactPage;
