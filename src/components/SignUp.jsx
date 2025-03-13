import { FaUserPlus } from "react-icons/fa";

function SignUp() {
    return (
        <div className="flex justify-center items-center w-full pb-0">
            <div className="border-2 border-black rounded-4xl w-full max-w-screen-lg text-center min-h-[55vh] flex flex-col justify-center px-10 py-4 space-y-6 bg-white shadow-lg">
                <h4 className="text-3xl">Sign up for our Newsletter</h4>
                <h2 className="font-bold text-6xl p-2">FOR SOME HEALTHY TIPS</h2>

                <div className="flex justify-center pt-6">
                    <button className="flex justify-between items-center bg-[var(--red)] text-white text-2xl font-bold px-2 py-2 rounded-full shadow-md hover:bg-[var(--hoverred)] transition duration-300 border-4 border-white w-full max-w-[300px]">
                        <span className="flex-1 text-center text-3xl font-bold">SIGN UP</span>
                        <div className="w-14 h-14 flex justify-center items-center bg-white rounded-full">
                            <FaUserPlus size={40} className="text-[var(--red)]" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
