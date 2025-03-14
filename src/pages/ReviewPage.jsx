import React from "react";

function ReviewPage() {
    const reviews = [
        {
            name: "Harshita",
            text: "Amazing service! The experience was seamless, and I would highly recommend it to everyone.",
            image: "Harshita.jpg",
            fruit: "mango.png",
        },
        {
            name: "Yashika",
            text: "Great quality and fast delivery. The customer support was very helpful as well!",
            image: "Yashika.jpg",
            fruit: "lemon.png",
        },
        {
            name: "Rahul",
            text: "Absolutely love it! The design and functionality exceeded my expectations.",
            image: "Rahul.jpg",
            fruit: "berry.png",
        },
    ];

    return (
        <div className="flex justify-center items-center px-6 py-12">
            <div className="max-w-screen-lg w-full">
                <h2 className="text-5xl italic text-center mb-20">HERE FROM OUR CUSTOMERS!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-[var(--white)] relative p-6 text-center shadow-[0px_50px_53px_-16px_rgba(0,_0,_0,_0.7)]">

                            <img
                                src={review.fruit}
                                alt="fruit"
                                className={`absolute ${index === 2
                                    ? "top-[-35px] right-0 w-55 h-25 translate-x-4 -translate-y-4"
                                        : "top-[-20px] left-0 w-22 h-22 -translate-x-4 -translate-y-4"
                                    }`}
                            />

                            <div className="flex justify-center mb-6">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-22 h-22 rounded-full"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{review.name}</h3>
                            <p className="text-gray-700 text-sm">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReviewPage;
