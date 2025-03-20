import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white shadow-xl z-50">
            <div className="container mx-auto flex justify-between items-center py-5 px-2">

                <NavLink to="/" className="">
                    <img src="logo.png" alt="FruitRush" className="h-8 w-auto" />
                </NavLink>

                <button
                    className="text-black mx-2 md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>

                <ul className="hidden md:flex space-x-6">
                    <li>
                        <NavLink to="/" className="hover:text-gray-400">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/storepage" className=" hover:text-gray-400">
                            Store
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/franchisepage" className=" hover:text-gray-400">
                            Franchise
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/distributorpage" className="hover:text-gray-400">
                            Distributor
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutpage" className="hover:text-gray-400">
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactpage" className="hover:text-gray-400">
                            Connect
                        </NavLink>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <ul className="md:hidden bg-white text-center py-2">
                    <li>
                        <NavLink
                            to="/"
                            className="block py-2 hover:bg-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/storepage"
                            className="block py-2 hover:bg-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Store
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/franchisepage"
                            className="block py-2 hover:bg-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Become a Franchise
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/distributorpage"
                            className="block py-2 hover:bg-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Be a Distributor
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="block py-2 hover:bg-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contactpage"
                            className="block py-2 hover:bg-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Connect
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
