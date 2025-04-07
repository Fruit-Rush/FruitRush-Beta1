import { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingImage = ({ src, alt }) => (
    <img
        src={src}
        alt={alt}
        className="absolute w-[100px] right-15 bottom-[20px] md:bottom-[90px] md:right-30 md:w-[220px] h-auto transform transition duration-300 ease-in-out hover:scale-110"
    />
);

const SignUpButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="shadow-lg cursor-pointer flex justify-between items-center bg-[var(--red)] text-white text-2xl font-bold px-2 py-2 rounded-full border-4 border-white w-full max-w-[300px] transform transition duration-300 ease-in-out hover:scale-110"
    >
        <span className="flex-1 text-center text-2xl md:text-3xl font-medium md:font-bold">SIGN UP</span>
        <div className="w-10 h-10 md:w-14 md:h-14 flex justify-center items-center">
            <FaUserPlus size={40} />
        </div>
    </button>
);

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="backdrop-blur-xl bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md relative">
                <button
                    onClick={onClose}
                    className="cursor-pointer absolute top-2 right-4 text-3xl font-bold text-gray-600 hover:text-gray-900"
                    aria-label="Close"
                >
                    &times;
                </button>

                <div className="mb-4 mt-6">
                    <h2 className="text-3xl mb-10 font-bold text-center">Sign Up</h2>
                </div>
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-2">
                    <input type="hidden" name="access_key" value="2f761c11-3877-4412-946a-c2946e153fd3"></input>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--red)]"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--red)]"
                        required
                    />
                    <button
                        type="submit"
                        className="mt-3 md:mt-4 lg:mt-10 shadow-xl cursor-pointer bg-[var(--red)] text-white 
                        px-2 py-1 md:px-6 md:py-2 lg:px-8 lg:py-2 
                        text-sm md:text-lg lg:text-xl 
                        rounded-full border-2 border-white 
                        hover:scale-110 transition"
                    >
                        <span className="text-center">Submit</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

function SignUpSection() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    return (
        <div className="relative">
            <div className={`${isModalOpen ? "filter blur-sm scale-[0.98]" : ""} transition duration-300`}>
                <div className="relative w-full">
                    <FloatingImage src="/FruitRush-Beta1/strawberry.png" alt="Floating Image" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                        <path
                            fill="#b4ebe6"
                            fillOpacity="1"
                            d="M0,32L20,37.3C40,43,80,53,120,58.7C160,64,200,64,240,58.7C280,53,320,43,360,58.7C400,75,440,117,480,128C520,139,560,117,600,112C640,107,680,117,720,106.7C760,96,800,64,840,64C880,64,920,96,960,101.3C1000,107,1040,85,1080,69.3C1120,53,1160,43,1200,64C1240,85,1280,139,1320,149.3C1360,160,1400,128,1420,112L1440,96L1440,320L0,320Z"
                        />
                    </svg>
                </div>

                <div className="flex justify-center items-center w-full bg-[var(--green)] px-5 pb-0 md:pb-20">
                    <div className="border border-black rounded-4xl w-full max-w-screen-lg text-center flex flex-col justify-center px-10 py-4 space-y-6">
                        <div>
                            <h4 className="text-2xl md:text-3xl py-4">Sign up for our Newsletter</h4>
                            <h2 className="font-medium md:font-bold text-4xl md:text-6xl p-2">FOR SOME HEALTHY TIPS</h2>
                        </div>
                        <div className="flex justify-center py-6">
                            <SignUpButton onClick={handleOpenModal} />
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default SignUpSection;
