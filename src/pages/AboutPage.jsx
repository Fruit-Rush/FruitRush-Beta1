import React from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';


function AboutPage() {
    return(
        <>
            <Navbar />
            <div className="mt-15">
                <div className="mt-15 relative">
                    <div className="animate-appear bg-[var(--green)] flex flex-col md:flex-row items-center justify-between py-10 px-5 md:px-20">

                        <div className="md:w-2/3 text-center md:text-left">
                            <h2 className="mt-5 text-4xl md:text-7xl font-bold text-[var(--navyblue)]">
                              Bringing back the joy of ice pops, bursting with
                              real fruits goodness
  
                              <span className="text-[var(--red)]"> real fruit goodness.</span>
                            </h2>
                            
                        </div>

                        <div className="md:w-1/3 flex justify-center md:mt-0">
                            <div className="mt-5 md:mt-15 w-[150px] h-[150px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden">
                                <img
                                    src="distributor.jpg"
                                    alt="FruitRush Ice Pops"
                                    className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
                                />
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-centre gap-2 py-10 px-5 md:px-20">
    {/* Left: Text Section */}
    <div className="md:w-2/3 text-center md:text-left">
        <p className="mt-5 text-lg md:text-xl text-gray-700">
            We missed the old-school taste of ice pops—natural, pure, and full of flavor. So, we brought it back with FruitRush!
            Made with real fruit, no artificial flavors, and no preservatives, our ice pops quickly won people’s hearts.
            Now, we’re creating new, exciting flavors while staying true to our purity and quality.
        </p>
    </div>

    {/* Right: Image Section (Smaller Image) */}
    <div className="md:w-1/4 flex justify-center">
        <div className="mt-5 md:mt-0 w-[120px] h-[160px] md:w-[180px] md:h-[220px] rounded-full overflow-hidden">
            <img 
                src="/GirlImage.png" 
                alt="Girl Image" 
                className="w-full h-full object-cover"
            />
        </div>
    </div>
</div>
                    
                    <div className="py-10 px-5 md:px-20">
                        <h3 className="text-3xl md:text-5xl font-bold text-[var(--navyblue)]">Chilling Moments</h3>
                        <p className="mt-4 text-lg md:text-xl text-gray-700">
                        We missed the old-school taste of ice pops—natural, pure, and full of flavor.
                        So, we brought it back with 
                        <h2>FruitRush!</h2>
                        Made with real fruit, no artificial flavors, and no preservatives, our ice pops
                        quickly won people’s hearts. Their love proved we were on the right path!
                        Now, we’re creating new, exciting flavors while staying true to our purity
                        and quality. 
                        FruitRush
                         isn’t just an ice pop—it’s a taste of childhood in every
                        bite!
                        </p>
                        
                    </div>

                    <div className="py-10 px-5 md:px-20 bg-[var(--lightblue)]">
                        <h3 className="text-3xl md:text-5xl font-bold text-[var(--navyblue)]">Our Growth</h3>
                        <ul className="mt-4 text-lg md:text-xl text-gray-700 list-disc list-inside">
                            <li>More flavors – Introduced new varieties based on customer preferences.</li>
                            <li>Bigger production – Scaled up to meet growing demand.</li>
                            <li>Wider reach – Now available in more stores and locations.</li>
                            <li>Customer love – Built a strong base of happy customers.</li>
                        </ul>
                    </div>

                    <div className="py-10 px-5 md:px-20">
                        <h3 className="text-3xl md:text-5xl font-bold text-[var(--navyblue)]">Our Mission</h3>
                        <p className="mt-4 text-lg md:text-xl text-gray-700">
                            "At FruitRush, our mission is to deliver pure, natural, and refreshing flavors for everyone to enjoy.
                            We use only real fruit, no artificial colors or preservatives, and ensure top quality in every product.
                            With every bite, we bring back the classic taste that people of all ages love."
                        </p>
                    </div>
                </div>
            </div>
            <Footer2/>
        </>
    )
}

export default AboutPage;