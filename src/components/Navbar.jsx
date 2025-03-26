import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

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
            className="block py-1 md:py-0 hover:text-gray-500 md:hover:bg-transparent hover:bg-gray-200"
            onClick={onClick}
        >
            {label}
        </NavLink>
    </li>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white shadow-xl z-50">
            <div className="container mx-auto flex justify-between items-center py-2.5 md:py-3 px-4">

                <NavLink to="/">
                    <img src="logo.png" alt="FruitRush" className="h-8 w-auto" />
                </NavLink>

                <button
                    className="text-black md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <MenuItem key={index} {...link} />
                    ))}
                </ul>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <ul className="md:hidden bg-white text-center py-1">
                    {navLinks.map((link, index) => (
                        <MenuItem key={index} {...link} onClick={() => setIsOpen(false)} />
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;