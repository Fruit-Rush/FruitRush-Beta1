import React from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';

function AboutPage() {
    return (
        <>
            <Navbar />
            {/* Main Section */}
            <div className="animate-appear bg-[var(--green)] flex flex-col md:flex-row items-center justify-between py-10 px-5 md:px-20">
                {/* Text Section */}
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="mt-5 text-4xl md:text-7xl font-bold text-[var(--navyblue)]">
                        Bringing back the joy of ice pops, bursting with 
                        <span className="text-[var(--red)]"> real fruit goodness.</span>
                    </h2>
                </div>

                {/* Main Image */}
                <div className="md:w-1/3 flex justify-center">
                    <div className="mt-5 md:mt-12 w-[150px] h-[150px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden">
                        <img
                            src="distributor.jpg"
                            alt="FruitRush Ice Pops"
                            className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
                        />
                    </div>
                </div>
            </div>

            {/* Additional Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 py-10 px-5 md:px-20">
                {/* Left: Smaller Image */}
                <div className="md:w-1/3 flex justify-center">
                    <div className="w-[120px] h-[160px] md:w-[180px] md:h-[240px] rounded-full overflow-hidden">
                        <img 
                            src="/GirlImage.png" 
                            alt="Girl enjoying ice pop" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right: Description */}
                <div className="md:w-2/3 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">Chilling Moments</h3>
                    <p className="mt-5 text-lg md:text-xl text-gray-700">
                        We missed the old-school taste of ice pops—natural, pure, and full of flavor. So, we brought it back with <span className="text-[var(--red)]"> Fruit Rush !</span>
                        Made with real fruit, no artificial flavors, and no preservatives, our ice pops quickly won people’s hearts.
                        Now, we’re creating new, exciting flavors while staying true to our purity and quality.<span className="text-[var(--red)]"> Fruit Rush !</span> isn’t just an ice pop—it’s a taste of childhood in every bite!
                    </p>
                </div>
            </div>

            {/* Our Growth Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 py-10 px-5 md:px-20">
                <div className="py-10 px-5 md:px-20 bg-[var(--lightblue)]">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">Our Growth</h3>
                    <p className="mt-4 text-lg md:text-xl text-gray-700">
                        In just three years, FruitRush has grown from a simple idea into a trusted and loved ice pop brand. 
                        What started as a passion for reviving the old-school taste turned into a movement, with thousands enjoying 
                        our real fruit, no-preservative ice pops.
                    </p>
                    <ul className="mt-4 text-lg md:text-xl text-gray-700 list-none space-y-2">
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">More flavors – Introduced new varieties based on customer preferences.</span></li>
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">Bigger production – Scaled up to meet growing demand.</span></li>
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">Wider reach – Now available in more stores and locations.</span></li>
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">Customer love – Built a strong base of happy customers.</span></li>
                    </ul>
                    <p className="mt-4 text-lg md:text-xl text-gray-700">
                        As we grow, we’re excited to bring even more flavors and innovations while keeping our 
                        commitment to quality and purity. Thank you for being part of our journey!
                    </p>
                </div>

                
                <div className="md:w-1/3 flex justify-right mt-20">
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] ">
                        <img src="/AboutPage/Growth_Graph.png" alt="Kids enjoying ice pops" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="py-10 px-5 md:px-20">
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">Our Mission</h3>
                <p className="mt-4 text-lg md:text-xl text-gray-700">
                    "At FruitRush, our mission is to deliver pure, natural, and refreshing flavors for everyone to enjoy.
                    We use only real fruit, no artificial colors or preservatives, and ensure top quality in every product.
                    With every bite, we bring back the classic taste that people of all ages love."
                </p>
            </div>

            <Footer2 />
        </>
    );
}

export default AboutPage;
