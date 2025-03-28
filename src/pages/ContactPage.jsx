import React, { useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Navbar from "../components/Navbar";
import Footer2 from "../components/Footer2";

function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        inquiryType: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navbar />

            <div className="animate-appear mt-10 h-[50vh] bg-[var(--green)] flex items-center justify-end pr-10 relative">
                <h1 className="text-white text-5xl mx-5 md:text-8xl font-bold">
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
                    <path
                        fill="#b4ebe6"
                        fillOpacity="1"
                        d="M0,64L20,85.3C40,107,80,149,120,149.3C160,149,200,107,240,96C280,85,320,107,360,133.3C400,160,440,192,480,176C520,160,560,96,600,90.7C640,85,680,139,720,170.7C760,203,800,213,840,186.7C880,160,920,96,960,80C1000,64,1040,96,1080,106.7C1120,117,1160,107,1200,122.7C1240,139,1280,181,1320,181.3C1360,181,1400,139,1420,117.3L1440,96V0H0Z"
                    ></path>
                </svg>
            </div>

            <div className="animate-appear flex justify-center mt-30 items-center px-6 md:px-20 pb-25 mb-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
                    <div className="flex flex-col gap-6">
                        <div className="bg-[var(--green)] rounded-lg p-3 flex items-center gap-4 shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">
                            <div className="w-24 h-24 flex items-center justify-center">
                                <span className="px-4 text-3xl font-bold">
                                    <FaLocationDot />
                                </span>
                            </div>
                            <h2 className="text-xl md:text-2xl">
                                Location:{" "}
                                <span className="text-[var(--navyblue)] italic">Khet no. 306, Chandpur, Bulandshahr Dist. Uttar Pradesh - 203001</span>
                            </h2>
                        </div>

                        <div className="bg-[var(--green)] rounded-lg p-3 flex items-center gap-4 shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">
                            <div className="w-24 h-24 flex items-center justify-center">
                                <span className="px-2 text-3xl font-bold">
                                    <FaPhone />
                                </span>
                            </div>
                            <h2 className="text-xl md:text-2xl">
                                Phone number:{" "}
                                <span className="text-[var(--navyblue)] italic">
                                    +91 9350520969
                                </span>
                            </h2>
                        </div>

                        <div className="bg-[var(--green)] rounded-lg p-3 flex items-center gap-4 shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">
                            <div className="w-24 h-24 flex items-center justify-center">
                                <span className="px-4 text-3xl font-bold">
                                    <IoMdMail />
                                </span>
                            </div>
                            <h2 className="text-xl md:text-2xl">
                                E-mail:{" "}
                                <span className="text-[var(--navyblue)] italic">
                                    info@fruitrushpops.com
                                </span>
                                <br />
                                <span className="text-[var(--navyblue)] italic">help@fruitrushpops.com</span>
                            </h2>
                        </div>
                    </div>
                    <div className="bg-[var(--green)] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105 rounded-lg p-3 md:p-5">
                        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
                            <input type="hidden" name="access_key" value="2f761c11-3877-4412-946a-c2946e153fd3"></input>
                            <input type="text" name="fullName" placeholder="Full Name" className="border p-2 rounded-md" value={formData.fullName} onChange={handleChange} required/>
                            <input type="tel" name="phone" placeholder="Phone No." className="border p-2 rounded-md" value={formData.phone} onChange={handleChange} required/>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input type="email" name="email" placeholder="Email" className="border p-2 rounded-md w-full md:w-1/2" value={formData.email} onChange={handleChange} required />
                                <select name="inquiryType" className="border p-2 rounded-md w-full md:w-1/2" value={formData.inquiryType} onChange={handleChange} required>
                                    <option value="" disabled>Inquiry Type</option>
                                    <option value="distributor">Distributor</option>
                                    <option value="franchise">Franchise</option>
                                    <option value="hr">HR</option>
                                </select>
                            </div>
                            <textarea name="message" placeholder="Your Message" className="border p-2 rounded-md h-32" value={formData.message} onChange={handleChange} required></textarea>
                            <div className="flex justify-center">
                                <button type="submit" className="shadow-lg cursor-pointer bg-[var(--red)] text-white px-4 py-2 rounded-full border-2 border-white w-full max-w-[200px] hover:scale-110 transition">
                                    <span className="text-2xl">Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="animate-appear flex justify-center items-center pb-30 px-6">
                <div className="text-center py-2 md:py-10 px-2 md:px-10 mx-0 md:mx-15 w-full rounded-lg bg-[var(--green)] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3509.653797180575!2d77.81882857549229!3d28.399522775792693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIzJzU4LjMiTiA3N8KwNDknMTcuMSJF!5e0!3m2!1sen!2sin!4v1742805502672!5m2!1sen!2sin"
                        className="w-full h-[300px] md:h-[450px] border-1"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <Footer2 />
        </>
    );
}

export default ContactPage;