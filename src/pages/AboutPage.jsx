import React from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';

const FloatingImage = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={`transition-transform duration-300 ease-in-out hover:scale-110 ${className}`} />
);

function AboutPage() {
    return (
        <>
            <Navbar />

            <div className="mt-10 mb-30 relative">
                <div className="animate-appear bg-[var(--green)] pb-30 flex flex-col-reverse md:flex-row items-center justify-between">

                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-10 md:px-20">
                        <h2 className="mt-5 md:mt-15 text-4xl md:text-6xl font-bold text-[var(--navyblue)]">
                            Bringing back the joy of ice pops, bursting with
                            <span className="text-[var(--red)]"> real fruit goodness.</span>
                        </h2>
                    </div>

                    <div className="w-full flex justify-center mt-5 md:w-1/2 md:mt-0">
                        <div className="w-[150px] h-[150px] md:w-[280px] md:h-[280px] overflow-hidden">
                            <FloatingImage src="AboutPage/KidsGroup.png" alt="About" className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110" />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <FloatingImage src="/FruitRush-Beta1/basil.png" alt="basil" className="absolute top-0 md:top-[40px] lg:top-[40px] left-0 md:left-10 w-[80px] md:w-[250px]" />
                    <FloatingImage src="/FruitRush-Beta1/basil.png" alt="basil" className="absolute top-0 md:top-[40px] lg:top-[40px] right-0 md:right-10 w-[80px] md:w-[250px]" />
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#b4ebe6" fillOpacity="1" d="M0,64L20,85.3C40,107,80,149,120,149.3C160,149,200,107,240,96C280,85,320,107,360,133.3C400,160,440,192,480,176C520,160,560,96,600,90.7C640,85,680,139,720,170.7C760,203,800,213,840,186.7C880,160,920,96,960,80C1000,64,1040,96,1080,106.7C1120,117,1160,107,1200,122.7C1240,139,1280,181,1320,181.3C1360,181,1400,139,1420,117.3L1440,96V0H0Z"></path>
                    </svg>
                </div>
            </div>
            
            <div className=" flex flex-col md:flex-row items-center md:items-start justify-center gap-20 mt-6 py-10 px-5 md:px-20">
                {/* <div className="animate-appear md:w-1/3 flex justify-center">
                    <div className="w-[120px] h-[160px] md:w-[180px] md:h-[240px] rounded-full overflow-hidden">
                        <img 
                            src="AboutPage/GirlImage.png" 
                            alt="Girl enjoying ice pop" 
                            className="w-full h-full object-cover"
                        />
                        
                    </div>
                </div> */}

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
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">FruitRush- 2 years of growth</h3>
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

                
                <div className="animate-appear md:w-1/3 flex justify-right mr-16">
                    <img
                        src="strawberry.png"
                        className="absolute top-0 right-0 w-40 h-40 md:w-52 md:h-52 object-contain z-10 
                       translate-x-[-20%] translate-y-[-50%]"
                    />
                
                    
                    <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] gap-20 mt-10 py-10 px-5 md:px-20">
                        
                        <img src="AboutPage/Growth_Graph.png" alt="Kids enjoying ice pops" className="w-full h-full object-contain"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-6 gap-5 py-5 px-3 md:px-20">
                <div className="animate-appear md:w-1/2 flex justify-center">
                    <div className="w-[120px] h-[160px] md:w-[550px] md:h-[350px] ">
                        <img 
                            src="AboutPage/Working.png" 
                            alt="Working Professional" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                
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
            
            <div className="animate-appear flex flex-col md:flex-row items-center md:items-start justify-center gap-4 py-10 px-5 md:px-20">
                <div className=" animate-appear py-5 px-5 md:px-20 bg-[var(--lightblue)]">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">Established in 2023</h3>
                    <p className="mt-4 text-lg md:text-xl text-gray-700">
                    Starting FruitRush was tough. We worked hard to find the perfect natural taste, source quality
                    ingredients, and win people’s trust. Step by step, we improved, and with customer support,
                    FruitRush became a reality. This is just the beginning!
                    
                    
                    </p>
                </div>
                
                <div className="animate-appear md:w-1/3 flex justify-right mt-3">
                    <div className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] ">
                        <img src="AboutPage/Building.png" alt="Kids enjoying ice pops" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            <div className="animate-appear flex justify-center items-center mb-30 mt-15 mx-5 md:mx-20 px-5">
                <div className="relative w-full flex flex-col md:flex-row items-stretch bg-[#daeef4] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105 h-full">

                    <div className="text-center md:text-left px-10 py-10 flex flex-col justify-center h-full">
                        <p><h2 className="text-center font-bold font-stretch-50%">India's Best ice pop brand - <span className="text-[var(--red)]"> FruitRush</span> </h2>
                        <br/>
                        At FruitRush, we bring you the best ice pops in India
                        —made with real fruit, no preservatives, and the
                        perfect old-school taste. Loved by many, we’re on a
                        mission to make every bite refreshing, natural, and
                        unforgettable!

                        </p>
                    </div>
                    <div className="relative ">
                        <FloatingImage 
                            src="/FruitRush-Beta1/basil.png" 
                            alt="basil" 
                            className="absolute top-0 md:top-10 lg:top-10 left-0 md:left-10 w-[80px] md:w-[250px] object-contain"
                        />
                    </div>
                    
                

                </div>
                
                
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-6 gap-5 py-5 px-3 md:px-20">
            <div className="animate-appear md:w-1/3 flex justify-right mr-10">
                    <img
                        src="strawberry.png"
                        className="absolute top-0 left-0 w-40 h-40 md:w-52 md:h-52 object-contain z-10 
                       translate-x-[-20%] translate-y-[-50%]"
                    />
                
                    
                    <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] gap-5 mt-10 py-10 px-5 md:px-20">
                        
                        <img src="AboutPage/Vision.png" alt="Vision Mission" className="w-full h-full rounded-full object-cover"/>
                    </div>
                </div>
                
                <div className="animate-appear md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--navyblue)]">Our Vision</h3>
                    <p className="mt-3 text-lg md:text-xl text-gray-700">
                    At <span className="text-[var(--red)]"> FruitRush</span>, our mission is to bring back the
                    taste of childhood with our refreshing and
                    flavorful freeze-at-home ice pops. We believe
                    that everyone, regardless of age or location,
                    deserves to relive the joy of simple, nostalgic
                    treats.
                    <br/>
                    We are committed to making our delicious
                    and innovative ice pops accessible to every
                    person in the world—from bustling cities to
                    remote villages—by ensuring quality,
                    convenience, and affordability. Through
                    continuous innovation and expansion, we aim
                    to spread happiness, one ice pop at a time!

                    </p>
                </div>
            </div>
            <Footer2 />
        </>
    );
}

export default AboutPage;
