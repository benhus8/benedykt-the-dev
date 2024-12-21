"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaStackOverflow,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import AnimatedLine from "@/components/animated/AnimatedLine";

function NavItem({ text }) {
  return (
    <h1 className="font-light text-lg text-primary-white hover:text-primary-light cursor-pointer transition-all duration-300">
      {text}
    </h1>
  );
}
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Zmiana na floating menu po przewinięciu 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="p-4 flex justify-center">
        <nav className="w-1/2">
          <div className="flex justify-between mr-2 ml-2">
            <NavItem text={"About me"} />
            <NavItem text={"Stack"} />
            <NavItem text={"Experience"} />
            <NavItem text={"Contact   me"} />
          </div>
          <AnimatedLine className="mb-0 mt-1 left-0 h-0.25 bg-primary-white rounded-lg" />
        </nav>
      </div>

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed top-1/2 right-1 transform -translate-y-1/2 flex flex-col gap-4 bg-primary-darkest p-2 rounded-lg shadow-lg z-50"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FloatingIcon icon={<FaUser />} label={"About me"} />
            <FloatingIcon icon={<FaStackOverflow />} label={"Stack"} />
            <FloatingIcon icon={<FaBriefcase />} label={"Experience"} />
            <FloatingIcon icon={<FaEnvelope />} label={"Contact me"} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function FloatingIcon({ icon, label }) {
  const parentVariants = {
    hidden: {},
    visible: {},
  };

  const tooltipVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="relative cursor-pointer flex items-center justify-center"
      whileTap={{ scale: 0.9 }}
      initial="hidden"
      whileHover="visible"
      variants={parentVariants} // Rodzic nie animuje tooltipa
    >
      <motion.div className="group relative">
        <div className="text-primary-white text-2xl scale-75">{icon}</div>
        {/* Tooltip */}
        <motion.span
          className="absolute right-10 top-1/2 bg-primary-darkest text-primary-white text-sm px-2 py-1 rounded-lg shadow-lg"
          variants={tooltipVariants}
          initial="hidden"
          animate="hidden" // Domyślnie ukryty
          whileHover="visible" // Widoczny na hover
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
