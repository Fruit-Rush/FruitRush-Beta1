import { FaFacebook, FaLinkedinIn, FaYoutube, FaPhone} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

function Footer() {
    return (
        <div className="w-full bg-[var(--white)] relative text-white">
            <div className="absolute bottom-0 w-full h-full">
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 200"
                    preserveAspectRatio="none"
                >
                    <path fill="#d20a2e" fill-opacity="1" d="M0,160L60,133.3C120,107,240,53,360,48C480,43,600,85,720,90.7C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>

            <img
                src="basil.png"
                alt="Floating Image"
                className="absolute bottom-[120px] left-10 w-[250px] h-auto ransform transition-transform duration-300 ease-in-out hover:scale-110 z-10"
            />

            <div className="relative flex flex-col items-center justify-center text-center px-8 pb-4 pt-40">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                    <div className="flex flex-col items-center md:items-start mt-20">
                        <div className="flex space-x-4 z-11">
                            <a href="https://www.facebook.com/share/18scDvLZNs/" target="_blank" rel="noopener noreferrer">
                                <button className="p-2 rounded-full">
                                    <FaFacebook className="w-7 h-7 cursor-pointer transform transition duration-300 ease-in-out hover:scale-115 hover:text-[var(--navyblue)]" />
                                </button>
                            </a>
                            <a href="https://www.instagram.com/fruitrushpops?igsh=MWRlOXgxOXhna3E0dw==" target="_blank" rel="noopener noreferrer">
                                <button className="p-2 rounded-full">
                                    <RiInstagramFill className="w-7 h-7 cursor-pointer transform transition duration-300 ease-in-out hover:scale-115 hover:text-[var(--navyblue)]" />
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/company/fruitrush/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                                <button className="p-2 rounded-ful">
                                    <FaLinkedinIn className="w-7 h-7 cursor-pointer transform transition duration-300 ease-in-out hover:scale-115 hover:text-[var(--navyblue)]" />
                                </button>
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <button className="p-2 rounded-full">
                                    <FaYoutube className="w-7 h-7 cursor-pointer transform transition duration-300 ease-in-out hover:scale-115 hover:text-[var(--navyblue)]" />
                                </button>
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <button className="p-2 rounded-full">
                                    <FaXTwitter className="w-7 h-7 cursor-pointer transform transition duration-300 ease-in-out hover:scale-115 hover:text-[var(--navyblue)]" />
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-semibold mb-4">Learn more</h2>
                        <ul className="space-y-1">
                            <li className="cursor-pointer hover:text-[var(--navyblue)]">Home</li>
                            <li className="cursor-pointer hover:text-[var(--navyblue)]">Store</li>
                            <li className="cursor-pointer hover:text-[var(--navyblue)]">Franchise</li>
                            <li className="cursor-pointer hover:text-[var(--navyblue)]">About us</li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
                        <ul className="space-y-1">
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <FaPhone one className="w-4 h-4 text-secondary" />
                                <a href="tel:9350520969" className="hover:underline text-white hover:text-[var(--navyblue)]">
                                    +91 9350520969
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 ">
                                <IoMdMail className="w-4 h-4 text-secondary" />
                                <a href="mailto:info@fruitrushpops.com" className="hover:underline text-white hover:text-[var(--navyblue)]">
                                    info@fruitrushpops.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="mt-5 text-center text-sm text-[var(--navyblue)]">
                    Copyright 2025 © FruitRush - All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;