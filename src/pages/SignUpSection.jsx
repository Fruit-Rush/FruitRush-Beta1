import { FaUserPlus } from "react-icons/fa";

function SignUpSection() {
    return (
        <div className="animate-appear">
            <div className="relative w-full">
                <img
                    src="strawberry.png"
                    alt="Floating Image"
                    className="absolute bottom-[60px] right-30 w-[220px] h-auto transform transition duration-300 ease-in-out hover:scale-110 hidden lg:block md:block"
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                    <path
                        fill="#b4ebe6"
                        fillOpacity="1"
                        d="M0,32L20,37.3C40,43,80,53,120,58.7C160,64,200,64,240,58.7C280,53,320,43,360,58.7C400,75,440,117,480,128C520,139,560,117,600,112C640,107,680,117,720,106.7C760,96,800,64,840,64C880,64,920,96,960,101.3C1000,107,1040,85,1080,69.3C1120,53,1160,43,1200,64C1240,85,1280,139,1320,149.3C1360,160,1400,128,1420,112L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="flex justify-center items-center w-full bg-[var(--green)] px-5 pb-30">
                <div className="border-1 border-black rounded-4xl w-full max-w-screen-lg text-center flex flex-col justify-center px-10 py-4 space-y-6">
                    <div className="items-center">
                        <h4 className="text-3xl py-4">Sign up for our Newsletter</h4>
                        <h2 className="font-bold text-6xl p-2">FOR SOME HEALTHY TIPS</h2>
                    </div>

                    <div className="flex justify-center py-6">
                        <button className="shadow-lg cursor-pointer flex justify-between items-center bg-[var(--red)] text-white text-2xl font-bold px-2 py-2 rounded-full border-4 border-white w-full max-w-[300px] transform transition duration-300 ease-in-out hover:scale-110">
                            <span className="flex-1 text-center text-3xl font-bold">SIGN UP</span>
                            <div className="w-14 h-14 flex justify-center items-center bg-white rounded-full">
                                <FaUserPlus size={40} className="text-[var(--red)]" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </ div>
    );
}

export default SignUpSection;
