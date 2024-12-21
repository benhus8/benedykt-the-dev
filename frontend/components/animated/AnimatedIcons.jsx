"use client";

import { motion } from "framer-motion";

export default function AnimatedIcon({ src, alt, initialX, initialY, endX, endY, delay }) {

    return (
        <motion.img
            src={src}
            alt={alt}
            className="absolute w-10 h-10 cursor-grab active:cursor-grabbing"
            initial={{ x: initialX, y: initialY, opacity: 0 }}
            animate={{ x: endX, y: endY, opacity: 1 }}
            drag
            dragConstraints={{
                left: endX - 10,
                right: endX + 10,
                top: endY - 10,
                bottom: endY + 10
            }}
            transition={{
                duration: 0.8,
                delay: delay || 0,
                ease: "easeInOut",
            }}
        />
    );
}
