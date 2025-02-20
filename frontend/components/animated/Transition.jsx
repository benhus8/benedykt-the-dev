"use client";

import { motion } from "framer-motion";

export default function Transition({ children, delay }) {
  return (
    <motion.div
      className="overflow-x-hidden"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay: delay ?? 0 }}
    >
      {children}
    </motion.div>
  );
}
