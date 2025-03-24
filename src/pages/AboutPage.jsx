import React from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';

function AboutPage() {
    return (
        <>
            <Navbar />

            <div className="animate-appear bg-[var(--green)] flex flex-col md:flex-row items-center justify-between py-10 px-5 md:px-20">

                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="mt-15 text-4xl md:text-7xl font-bold text-[var(--navyblue)]">
                        Bringing back the joy of ice pops, bursting with 
                        <span className="text-[var(--red)]"> real fruit goodness.</span>
                    </h2>
                </div>

                <div className="md:w-1/3 flex justify-center">
                    <div className="mt-5 md:mt-12 w-[200px] h-[200px] md:w-[600px] md:h-[300px] ">
                        <img
                            src="/AboutPage/KidsGroup.png"
                            alt="FruitRush Ice Pops"
                            className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
                        />
                    </div>
                </div>
            
                {/* Wavy Bottom SVG
                <div className=" w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=" bottom-0 left-0 w-full ">
                        <path fill="var(--green)" fillOpacity="1" d="M0,64L20,85.3C40,107,80,149,120,149.3C160,149,200,107,240,96C280,85,320,107,360,133.3C400,160,440,192,480,176C520,160,560,96,600,90.7C640,85,680,139,720,170.7C760,203,800,213,840,186.7C880,160,920,96,960,80C1000,64,1040,96,1080,106.7C1120,117,1160,107,1200,122.7C1240,139,1280,181,1320,181.3C1360,181,1400,139,1420,117.3L1440,96V0H0Z"></path>
                    </svg>
                </div> */}
            </div>
            
            {/* Additional Section */}
            <div className=" flex flex-col md:flex-row items-center md:items-start justify-center gap-20 mt-6 py-10 px-5 md:px-20">
                {/* Left: Smaller Image */}
                <div className="animate-appear md:w-1/3 flex justify-center">
                    <div className="w-[120px] h-[160px] md:w-[180px] md:h-[240px] rounded-full overflow-hidden">
                        <img 
                            src="/GirlImage.png" 
                            alt="Girl enjoying ice pop" 
                            className="w-full h-full object-cover"
                        />
                        
                    </div>
                </div>

                {/* Right: Description */}
                <div className="animate-appear md:w-2/3 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">Chilling Moments</h3>
                    <p className="mt-5 text-lg md:text-xl text-gray-700">
                        We missed the old-school taste of ice pops—natural, pure, and full of flavor. So, we brought it back with <span className="text-[var(--red)]"> Fruit Rush !</span>
                        Made with real fruit, no artificial flavors, and no preservatives, our ice pops quickly won people’s hearts.
                        Now, we’re creating new, exciting flavors while staying true to our purity and quality.<span className="text-[var(--red)]"> Fruit Rush !</span> isn’t just an ice pop—it’s a taste of childhood in every bite!
                    </p>
                </div>
                <div className="animate-appear relative">
                    <img
                        src="lemon2.png"
                        alt="Floating Image"
                        className="absolute w-[100px] right-10 md:bottom-[100px] md:right-30 md:w-[220px] h-auto transform transition duration-300 ease-in-out hover:scale-110"
                    />
                    
                </div>
                
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 py-10 px-5 md:px-20">
                <div className="animate-appear py-10 px-5 md:px-20 bg-[var(--lightblue)]">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">Our Growth</h3>
                    <p className="mt-4 text-lg md:text-xl text-gray-700">
                        In just three years, FruitRush has grown from a simple idea into a trusted and loved ice pop brand. 
                        What started as a passion for reviving the old-school taste turned into a movement, with thousands enjoying 
                        our real fruit, no-preservative ice pops.
                    </p>
                    <ul className=" mt-4 text-lg md:text-xl text-gray-700 list-none space-y-2">
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">More flavors – Introduced new varieties based on customer preferences.</span></li>
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">Bigger production – Scaled up to meet growing demand.</span></li>
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">Wider reach – Now available in more stores and locations.</span></li>
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">Customer love – Built a strong base of happy customers.</span></li>
                    </ul>
                    <p className=" mt-4 text-lg md:text-xl text-gray-700">
                        As we grow, we’re excited to bring even more flavors and innovations while keeping our 
                        commitment to quality and purity. Thank you for being part of our journey!
                    </p>
                </div>

                
                <div className="animate-appear md:w-1/3 flex justify-right mt-20">
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] ">
                        <img src="/AboutPage/Growth_Graph.png" alt="Kids enjoying ice pops" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

            {/*Our Struggle*/}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-6 gap-5 py-5 px-3 md:px-20">
                {/* Left: Smaller Image */}
                <div className="animate-appear md:w-1/2 flex justify-center">
                    <div className="w-[120px] h-[160px] md:w-[550px] md:h-[350px] ">
                        <img 
                            src="/AboutPage/Working.png" 
                            alt="Working Professional" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Right: Description */}
                <div className="animate-appear md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">Our Struggle</h3>
                    <p className="mt-5 text-lg md:text-xl text-gray-700">
                    Starting FruitRush was tough.
                    We worked hard to find the
                    perfect natural taste, source
                    quality ingredients, and win
                    people’s trust. Step by step,
                    we improved, and with
                    customer support, FruitRush
                    became a reality. This is just
                    the beginning!

                    </p>
                </div>
            </div>
            {/* Established */}
            <div className="animate-appear flex flex-col md:flex-row items-center md:items-start justify-center gap-4 py-10 px-5 md:px-20">
                <div className=" animate-appear py-5 px-5 md:px-20 bg-[var(--lightblue)]">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">Established in 2023</h3>
                    <p className="mt-4 text-lg md:text-xl text-gray-700">
                    Starting FruitRush was tough. We worked hard to find the perfect natural taste, source quality
                    ingredients, and win people’s trust. Step by step, we improved, and with customer support,
                    FruitRush became a reality. This is just the beginning!
                    <br/>  
                    <span className="inline-block mt-15 ">
                        <img src="/AboutPage/BlueBerry.png" alt="BerryPic" className=" w-[300px] h-[300px] object-contain" />
                    </span>
                    </p>

                    
                </div>

                
                <div className="animate-appear md:w-1/3 flex justify-right mt-20">
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] ">
                        <img src="/AboutPage/Building.png" alt="Kids enjoying ice pops" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            <div className="animate-appear flex justify-center items-center mb-30 mt-15 mx-5 md:mx-20 px-5">
                <div className="relative w-full flex flex-col md:flex-row items-stretch bg-[#daeef4] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105 h-full">
        

                    <div className="text-center md:text-left px-10 py-10 flex flex-col justify-center h-full">
                        <p><h2>Dear FruitRush Family ,</h2>
                            <br/>
                        At FruitRush, our customers are at the heart of everything we
                        do. You are not just buyers—you are our inspiration, our
                        motivation, and the reason we strive for excellence every day.
                        <br/>
                        We believe that every smile matters, every moment of joy
                        counts, and every FruitRush ice pop you enjoy is a small part
                        of a bigger mission—to bring happiness to people everywhere.
                        <br/>
                        For us, you are not just customers; you are our extended
                        family. Your love and trust fuel our journey to make FruitRush
                        a global delight.
                        <br/>
                        Thank you for being a part of our story. Let’s continue
                        spreading happiness, one ice pop at a time!
                        <br/>
                        <br/>
                        <h2>With gratitude,</h2>
                        
                        <h2>Himang Bharadwaj</h2>
                        
                        <h2>Founder, FruitRush</h2></p>

                        
                    </div>

                </div>
            </div>
            
            <Footer2 />
        </>
    );
}

export default AboutPage;
