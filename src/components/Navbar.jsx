import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/storepage", label: "Store" },
    { path: "/franchisepage", label: "Franchise" },
    { path: "/", label: "B2B shop" },
    { path: "/distributorpage", label: "Be a Distributor" },
    { path: "/aboutpage", label: "About us" },
    { path: "/contactpage", label: "Contact us" }
];

const MenuItem = ({ path, label, onClick }) => (
    <li>
        <NavLink
            to={path}
            className="block py-3 md:py-0 hover:text-gray-500 md:hover:bg-transparent hover:bg-gray-200 transition-colors duration-300"
            onClick={onClick}
        >
            {label}
        </NavLink>
    </li>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className="fixed top-0 w-full bg-white shadow-xl z-50"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="container mx-auto flex justify-between items-center py-2.5 md:py-3 px-4">

                <NavLink to="/" className="flex items-center space-x-2">
                    <img src="/FruitRush-Beta1/logo.jpg" alt="FruitRush" className="h-8 w-auto" />
                    <span className="hidden lg:inline logo-text text-lg font-semibold">FruitRush</span>
                </NavLink>

                <button
                    className="text-black md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>

                {/* Desktop Navigation with Smooth Fade-In Effect */}
                <motion.ul
                    className="hidden md:flex space-x-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {navLinks.map((link, index) => (
                        <MenuItem key={index} {...link} />
                    ))}
                </motion.ul>
            </div>

            {/* Mobile Navigation with Slide-in Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="md:hidden bg-white text-center py-2"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {navLinks.map((link, index) => (
                            <MenuItem key={index} {...link} onClick={() => setIsOpen(false)} />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;