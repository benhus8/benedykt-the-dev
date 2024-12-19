"use client";

import { motion } from "framer-motion";

export default function AnimatedLine({ className }) {
    return (
        <motion.div
            className={className}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
        />
    );
}
