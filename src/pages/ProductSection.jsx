function ProductSection() {
    const products = [
        {
            id: 1,
            image: "product.png",
        },
        {
            id: 2,
            image: "product.png",
        },
        {
            id: 3,
            image: "product.png",
        },
    ];

    return (
        <div className="pb-15 mt-15">
            <div className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                    <path
                        fill="#b4ebe6"
                        fillOpacity="1"
                        d="M0,32L20,37.3C40,43,80,53,120,58.7C160,64,200,64,240,58.7C280,53,320,43,360,58.7C400,75,440,117,480,128C520,139,560,117,600,112C640,107,680,117,720,106.7C760,96,800,64,840,64C880,64,920,96,960,101.3C1000,107,1040,85,1080,69.3C1120,53,1160,43,1200,64C1240,85,1280,139,1320,149.3C1360,160,1400,128,1420,112L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="animate-appear flex justify-center items-center w-full bg-[var(--green)] px-5">
                <div className="max-w-screen-lg w-full">
                    <h3 className="text-[var(--darkgreen)] text-6xl text-center">OUR PRODUCT</h3>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-30 mx-20 p-2">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className={`bg-white px-3 rounded-2xl text-center transform transition duration-300 ease-in-out hover:scale-115 shadow-[0px_3px_5px_1px_rgba(0,_0,_0,_0.8)] ${product.id === 2 ? "py-12 h-64" : "py-6 h-52"
                                    }`}
                            >
                                <div className="flex justify-center">
                                    <img src={product.image} className="w-20 h-40" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#b4ebe6" fillOpacity="1" d="M0,96L26.7,101.3C53.3,107,107,117,160,106.7C213.3,96,267,64,320,85.3C373.3,107,427,181,480,192C533.3,203,587,149,640,133.3C693.3,117,747,139,800,122.7C853.3,107,907,53,960,74.7C1013.3,96,1067,192,1120,224C1173.3,256,1227,224,1280,208C1333.3,192,1387,192,1413,192L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    );
}

export default ProductSection;


