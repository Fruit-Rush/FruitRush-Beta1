import React from "react";
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';
import CountUp from 'react-countup';

const FloatingImage = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={`transition-transform duration-300 ease-in-out hover:scale-110 ${className}`} />
);

function AboutPage() {
    return (
        <>
            <Navbar />

            <div className="mt-10 mb-20 relative">
                <div className=" bg-[#80cbc4] pb-30 flex flex-col-reverse md:flex-row items-center justify-between">

                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-10 md:px-20">
                        <h2 className="mt-5 md:mt-15 text-4xl md:text-6xl font-bold text-[var(--navyblue)]">
                            Bringing back the joy of ice pops, bursting with
                            <span className="text-[var(--red)]"> real fruit goodness.</span>
                        </h2>
                    </div>

                    <div className="w-full flex justify-center mt-5 md:w-1/2 md:mt-0">
                        <div className="w-[150px] h-[150px] md:w-[280px] my-10 md:h-[280px] overflow-hidden">
                            <FloatingImage src="AboutPage/hero.png" alt="About" className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110" />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <FloatingImage src="/FruitRush-Beta1/basil.png" alt="basil" className="absolute top-0 md:top-[40px] lg:top-[40px] left-0 md:left-10 w-[80px] md:w-[250px]" />
                    <FloatingImage src="/FruitRush-Beta1/basil.png" alt="basil" className="absolute top-0 md:top-[40px] lg:top-[40px] right-0 md:right-10 w-[80px] md:w-[250px]" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#80cbc4" fillOpacity="1" d="M0,64L20,85.3C40,107,80,149,120,149.3C160,149,200,107,240,96C280,85,320,107,360,133.3C400,160,440,192,480,176C520,160,560,96,600,90.7C640,85,680,139,720,170.7C760,203,800,213,840,186.7C880,160,920,96,960,80C1000,64,1040,96,1080,106.7C1120,117,1160,107,1200,122.7C1240,139,1280,181,1320,181.3C1360,181,1400,139,1420,117.3L1440,96V0H0Z"></path>
                    </svg>
                </div>
            </div>

            <div className="mb-30 animate-appear flex flex-col md:flex-row items-center justify-center gap-20 mt-6 mx-10 md:mx-20">
                <div className="w-full">
                    <h3 className="text-3xl md:text-6xl font-bold text-[var(--navyblue)] text-center mx-auto">
                        Chilling Moments
                    </h3>
                    <p className="mt-5 text-lg md:text-xl text-gray-700 text-left md:text-center">
                        We missed the old-school taste of ice pops—natural, pure, and full of flavor. So, we brought it back with
                        <span className="text-[var(--red)]"> Fruit Rush!</span>
                        Made with real fruit, no artificial flavors, and no preservatives, our ice pops quickly won people’s hearts.
                        Now, we’re creating new, exciting flavors while staying true to our purity and quality.
                        <span className="text-[var(--red)]"> Fruit Rush!</span> isn’t just an ice pop—it’s a taste of childhood in every bite!
                    </p>
                </div>
            </div>

            <div className="mb-30 flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-4 px-5 md:mx-20">
                <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-4 md:mt-0">
                    <div className="w-[300px] h-[300px] md:w-[300px] md:h-auto">
                        <img src="AboutPage/Growth_Graph.png" alt="Kids enjoying ice pops" className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="text-left w-full px-5 md:px-10 bg-[var(--lightblue)]">
                    <h3 className="text-3xl md:text-5xl font-bold text-[var(--navyblue)]">FruitRush - 2 years of growth</h3>
                    <ul className="mt-10 text-lg md:text-xl text-gray-700 list-none space-y-2">
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">More flavors – Introduced new varieties based on customer preferences.</span></li>
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">Bigger production – Scaled up to meet growing demand.</span></li>
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">Wider reach – Now available in more stores and locations.</span></li>
                        <li className="flex items-center"><span className="text-green-500 text-xl">✔</span> <span className="ml-2">Customer love – Built a strong base of happy customers.</span></li>
                    </ul>
                </div>
            </div>


            <div className="mb-30 flex flex-col md:flex-row items-center md:items-start justify-center mt-6 gap-5 mx-5 md:mx-20">
                <div className="md:w-1/2 flex justify-center">
                    <div className="w-[300px] h-auto">
                        <img
                            src="AboutPage/Working.png"
                            alt="Working Professional"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="md:w-1/2 text-left">
                    <h3 className="text-3xl md:text-5xl font-bold text-[var(--navyblue)]">Our Struggle</h3>
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

            <div className="mb-30 flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-4 px-5 md:mx-20">
                <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-4 md:mt-0">
                    <div className="w-[250px] h-auto md:w-[200px] md:h-auto">
                        <img src="AboutPage/Building.png" alt="Kids enjoying ice pops" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="text-left w-full px-5 md:px-10 bg-[var(--lightblue)]">
                    <h3 className="text-3xl md:text-5xl font-bold text-[var(--navyblue)]">Established in 2023</h3>
                    <p className="mt-10 text-lg md:text-xl text-gray-700">
                        Starting FruitRush was tough. We worked hard to find the perfect natural taste, source quality
                        ingredients, and win people’s trust. Step by step, we improved, and with customer support,
                        FruitRush became a reality. This is just the beginning!
                    </p>
                </div>
            </div>

            <div className="mb-20 flex flex-col md:flex-row items-center md:items-start justify-center mt-6 gap-5 mx-10 md:mx-20">
                <div className="md:w-1/3 flex justify-right md:mr-10">
                    <div className="w-[300px] h-[300px] md:w-[450px] md:h-[400px] md:gap-5 px-5">
                        <img src="AboutPage/Vision.png" alt="Vision Mission" className="w-full h-full rounded-full object-cover" />
                    </div>
                </div>

                <div className=" md:w-1/2 text-left">
                    <h3 className="text-3xl md:text-5xl font-bold text-[var(--navyblue)]">Our Vision</h3>
                    <p className="mt-3 text-lg md:text-xl text-gray-700">
                        At <span className="text-[var(--red)]"> FruitRush</span>, our mission is to bring back the
                        taste of childhood with our refreshing and
                        flavorful freeze-at-home ice pops. We believe
                        that everyone, regardless of age or location,
                        deserves to relive the joy of simple, nostalgic
                        treats.
                        <br />
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

            <div className="mb-30 flex justify-center items-center mt-15 mx-5 md:mx-20 px-2">
                <div className="py-10 relative w-full flex flex-col md:flex-row items-stretch bg-[#daeef4] shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)] transform transition duration-300 ease-in-out hover:scale-105 h-full">

                    <div className="text-center md:text-left px-10 py-10 flex flex-col justify-center h-full">
                        <h2 className="text-center font-bold text-4xl font-stretch-50%">India's Best ice pop brand - <span className="text-[var(--red)]"> FruitRush</span> </h2>
                        <p className="mt-10 text-lg md:text-xl md:px-5">
                            At FruitRush, we bring you the best ice pops in India
                            —made with real fruit, no preservatives, and the
                            perfect old-school taste. Loved by many, we’re on a
                            mission to make every bite refreshing, natural, and
                            unforgettable!
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 bg-[ #5bbab1] gap-4">
                <h1 className="text-4xl md:text-6xl font-bold">Why choose us?</h1>
                <p className="mt-4 text-xl">
                    Frozen Moments, Melting Memories – Taste the Joy of Childhood Again
                </p>
            </div>
            <div className="mb-30 justify-center gap-6 mt-5">
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4 py-8">

                    <div className="bg-[#c4faf5] text-black text-center p-6 rounded-xl shadow-md w-40 md:w-48 hover:scale-105">
                        <CountUp
                            start={0}
                            end={10}
                            duration={7}
                            separator=" "
                            decimals={0}
                            decimal=","
                            prefix=" "
                            suffix=""
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                            delay={3}
                        >
                            {({ countUpRef }) => (
                                <div className="flex items-center justify-center">
                                    <span ref={countUpRef} className="text-3xl font-bold" />
                                    <span className="text-3xl font-bold">+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className="text-lg font-semibold">Super Stockist</p>
                    </div         >

                    <div className="bg-[#c4faf5] text-black text-center p-6 rounded-xl shadow-md w-40 md:w-48 hover:scale-105">
                        <CountUp
                            start={0}
                            end={30}
                            duration={6}
                            separator=" "
                            decimals={0}
                            decimal=","
                            prefix=" "
                            suffix=""
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                            delay={3}
                        >
                            {({ countUpRef }) => (
                                <div className="flex items-center justify-center">
                                    <span ref={countUpRef} className="text-3xl font-bold" />
                                    <span className="text-3xl font-bold">+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className="text-lg font-semibold">Distributor</p>
                    </div         >

                    <div className="bg-[#c4faf5] text-black text-center p-6 rounded-xl shadow-md w-40 md:w-48 hover:scale-105">
                        <CountUp
                            start={0}
                            end={350}
                            duration={4}
                            separator=" "
                            decimals={0}
                            decimal=","
                            prefix=" "
                            suffix=""
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                            delay={3}
                        >
                            {({ countUpRef }) => (
                                <div className="flex items-center justify-center">
                                    <span ref={countUpRef} className="text-3xl font-bold" />
                                    <span className="text-3xl font-bold">+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className="text-lg font-semibold">Vendors</p>
                    </div         >

                    <div className="bg-[#c4faf5] text-black text-center p-6 rounded-xl shadow-md w-40 md:w-48 hover:scale-105">
                        <CountUp
                            start={0}
                            end={20}
                            duration={6}
                            separator=" "
                            decimals={0}
                            decimal=","
                            prefix=" "
                            suffix=""
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                            delay={2}
                        >
                            {({ countUpRef }) => (
                                <div className="flex items-center justify-center">
                                    <span ref={countUpRef} className="text-3xl font-bold" />
                                    <span className="text-3xl font-bold">+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className="text-lg font-semibold">Cities</p>
                    </div>
                </div>

            </div>
            <div className="mb-0 md:mb-10 flex flex-col md:flex-row items-center md:items-start justify-center mt-6 gap-5 mx-10 md:px-20">
                <div className=" md:w-1/2 flex justify-center">
                    <div className="w-[250px] h-[250px] md:w-[550px] md:h-[350px] ">
                        <img
                            src="AboutPage/FounderImage.png"
                            alt="Working Professional"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div className="md:w-1/2 text-left">
                    <h3 className="text-3xl md:text-4xl font-bold">Dear <span className="text-[var(--red)]"> FruitRush</span> Family,</h3>
                    <p className="mt-5 text-lg md:text-xl text-gray-700">

                        At <span className="text-[var(--red)]"> FruitRush</span>, our customers are at the heart of everything we
                        do. You are not just buyers—you are our inspiration, our
                        motivation, and the reason we strive for excellence every day.
                        <br />
                        We believe that every smile matters, every moment of joy
                        counts, and every <span className="text-[var(--red)]"> FruitRush</span> ice pop you enjoy is a small part
                        of a bigger mission—to bring happiness to people everywhere.
                        <br />
                        For us, you are not just customers; you are our extended
                        family. Your love and trust fuel our journey to make <span className="text-[var(--red)]"> FruitRush, </span>
                        a global delight.
                        <br />
                        Thank you for being a part of our story. Let’s continue
                        spreading happiness, one ice pop at a time!
                        <br/>
                        <br/>
                        With gratitude,
                        <br />
                        Himang Bharadwaj
                        <br />
                        Founder, <span className="text-[var(--red)]"> FruitRush</span>
                    </p>
                </div>
            </div>

            <Footer2 />
        </>
    );
}

export default AboutPage;

