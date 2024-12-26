"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Card({
  isTop = false,
  isBehind = false,
  bgColor = "bg-primary-light",
  textColor = "text-primary-darkest",
  name = "JAVA",
  shortDescription = "some Java experience",
  longDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  onDragEnd,
}) {
  const bgColors = {
    "secondary-grayLight": "bg-secondary-grayLight",
    "secondary-lightest": "bg-secondary-lightest",
    "primary-darkest": "bg-primary-darkest",
    "primary-light": "bg-primary-light",
  };

  return (
    <motion.div
      className={`absolute w-[275px] h-[400px] rounded-md ${bgColors[bgColor]} shadow-md cursor-grab active:cursor-grabbing`}
      style={{
        transform: isTop ? "translateX(0) translateY(0)" : "translateX(40px)",
        transition: "transform 0.5s ease",
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={onDragEnd}
      whileDrag={{ scale: 1.05 }}
      animate={{
        x: isTop ? 0 : 40,
        y: 0,
        zIndex: isTop ? 20 : isBehind ? 10 : 5,
        scale: isTop ? 1 : 0.99,
      }}
    >
      <div className="p-4">
        <div
          className={`flex flex-col ${isTop ? "items-start" : "items-end"} `}
        >
          {Array.from(name).map((letter, index) => (
            <span key={index} className={`font-bold text-xl text-${textColor}`}>
              {letter}
            </span>
          ))}
        </div>
        {isTop && (
          <>
            <p className={`mt-2 text-sm text-${textColor}`}>
              {shortDescription}
            </p>
            <p className={`mt-4 text-sm text-${textColor}`}>
              {longDescription}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export const CardSlider = ({ cards, tooltip }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(tooltip ?? false);

  const handleSwipe = (event, info) => {
    if (info.offset.x > 100 || info.offset.y <= 100) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      if (showTooltip) setShowTooltip(false);
    }
  };

  return (
    <div className="relative w-[275px] h-[400px] mx-auto mt-20">
      {cards.map((card, index) => {
        const isTop = index === currentIndex;
        const isBehind =
          index === (currentIndex === cards.length - 1 ? 0 : currentIndex + 1);

        return (
          <Card
            key={index}
            isTop={isTop}
            isBehind={isBehind}
            bgColor={card.bgColor}
            textColor={card.textColor}
            name={card.name}
            shortDescription={card.shortDescription}
            longDescription={card.longDescription}
            onDragEnd={isTop ? handleSwipe : undefined}
          />
        );
      })}

      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary-base opacity-100 scale-110" : "bg-primary-dark stroke-primary-darkest border-2 border-primary-darkest opacity-50 scale-100"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
