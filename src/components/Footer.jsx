import { FaFacebook, FaLinkedinIn, FaYoutube, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const SocialLink = ({ href, Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <button className="p-2 rounded-full">
            <Icon className="w-7 h-7 cursor-pointer transform transition duration-300 ease-in-out hover:scale-115 hover:text-[var(--navyblue)]" />
        </button>
    </a>
);

const FooterLink = ({ to, label }) => (
    <li>
        <Link to={to} className="cursor-pointer hover:text-[var(--navyblue)]">
            {label}
        </Link>
    </li>
);

const ContactItem = ({ href, Icon, text }) => (
    <li className="flex items-center justify-center md:justify-start gap-2">
        <Icon className="w-4 h-4 text-secondary" />
        <a href={href} className="hover:underline text-white hover:text-[var(--navyblue)]">
            {text}
        </a>
    </li>
);

function Footer() {
    const socialLinks = [
        { href: "https://www.facebook.com/share/18scDvLZNs/", Icon: FaFacebook },
        { href: "https://www.instagram.com/fruitrushpops?igsh=MWRlOXgxOXhna3E0dw==", Icon: RiInstagramFill },
        { href: "https://www.linkedin.com/company/fruitrush/?viewAsMember=true", Icon: FaLinkedinIn },
        { href: "", Icon: FaYoutube },
        { href: "", Icon: FaXTwitter }
    ];

    return (
        <div className="nav-text w-full bg-[var(--green)] relative text-white">
            <div className="absolute bottom-0 w-full h-full">
                <svg
                    className="bottom-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 200"
                    preserveAspectRatio="none"
                >
                    <path fill="#d20a2e" fillOpacity="1" d="M0,160L60,133.3C120,107,240,53,360,48C480,43,600,85,720,90.7C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>

            <img
                src="basil.png"
                alt="Floating Image"
                className="absolute bottom-[350px] md:bottom-[120px] left-0 md:left-10 w-[140px] md:w-[250px] h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            />

            <div className="relative flex flex-col items-center justify-center text-center px-8 pb-4 pt-40">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                    <div className="flex flex-col items-center lg:items-start mt-40">
                        <div className="flex space-x-2 z-11 text-gray-300">
                            {socialLinks.map((link, index) => (
                                <SocialLink key={index} {...link} />
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-semibold mb-4">Learn more</h2>
                        <ul className="space-y-1 text-2xl">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/storepage" label="Store" />
                            <FooterLink to="/franchisepage" label="Franchise" />
                            <FooterLink to="/aboutpage" label="About us" />
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
                        <ul className="space-y-1 text-2xl">
                            <ContactItem href="tel:9350520969" Icon={FaPhone} text="+91 9350520969" />
                            <ContactItem href="mailto:info@fruitrushpops.com" Icon={IoMdMail} text="info@fruitrushpops.com" />
                        </ul>
                    </div>
                </div>

                <p className="text-xl mt-2 text-center text-[var(--navyblue)]">
                    Copyright 2025 © FruitRush - All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;