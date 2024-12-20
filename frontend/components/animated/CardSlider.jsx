"use client";

import {motion} from "framer-motion";
import "swiper/css";
import {useState} from "react";


export function Card({
                         isTop = false,
                         bgColor = "bg-primary-light",
                         textColor = "text-primary-darkest",
                         name = "JAVA",
                         shortDescription = "some Java experience",
                         longDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                     }) {
    return (
        <motion.div
            className={`absolute w-[275px] h-[400px] rounded-md ${bgColor} shadow-lg ${
                isTop ? "z-20" : "z-10"
            }`}
            style={{
                transform: isTop
                    ? "translateX(0) translateY(0)"
                    : "translateX(30px)",
                transition: "transform 0.5s ease",
            }}
        >
            <div className="p-4">
                <h2 className={`font-bold text-xl ${textColor}`}>{name}</h2>
                {isTop && (
                    <>
                        <p className="mt-2">{shortDescription}</p>
                        <p className="mt-4 text-sm">{longDescription}</p>
                    </>
                )}
            </div>
        </motion.div>
    );
}
export const CardSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const cards = [
        {
            name: "Java",
            bgColor: "primary-light",
            textColor: "white",
            shortDescription: "Experience with Java development",
            longDescription: "Java is a robust programming language used in many industries.",
        },
        {
            name: "Python",
            bgColor: "primary-light",
            textColor: "white",
            shortDescription: "Python for AI and Data Science",
            longDescription: "Python is popular for its simplicity and wide range of libraries.",
        },
        {
            name: "JS",
            bgColor: "primary-light",
            textColor: "black",
            shortDescription: "JavaScript for web development",
            longDescription: "JavaScript is the language of the web, enabling interactive UIs.",
        },
    ];

    return (
        <div className="relative w-[275px] h-[400px] mx-auto mt-20">
            {/* Render both cards */}
            {cards.map((card, index) => {
                const isTop = index === currentIndex;
                const isBehind = (index + 1) % cards.length === currentIndex;

                return (
                    <Card
                        key={index}
                        isTop={isTop}
                        // bgColor={card.bgColor}
                        textColor={card.textColor}
                        name={card.name}
                        shortDescription={card.shortDescription}
                        longDescription={card.longDescription}
                    />
                );
            })}

            {/* Button to move to the next card */}
            <button
                onClick={handleNext}
                className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-2 rounded-md shadow-md"
            >
                Next
            </button>
        </div>
    );
};

export default CardSlider;
