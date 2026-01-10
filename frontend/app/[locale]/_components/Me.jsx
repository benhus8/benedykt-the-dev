"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function IntroSection() {
  const t = useTranslations("me");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-darkest px-4 sm:px-6 lg:px-8 py-12 lg:py-0"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-[20%] -left-[10%] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] bg-primary-dark rounded-full mix-blend-screen filter blur-[80px] opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-[20%] -right-[10%] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-primary-blue rounded-full mix-blend-screen filter blur-[80px] opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-[-10%] left-[20%] w-[300px] h-[150px] lg:w-[600px] lg:h-[300px] bg-primary-base rounded-full mix-blend-screen filter blur-[100px] opacity-10"
        />
      </div>

      <div className="container mx-auto z-10 relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-primary-white tracking-wide"
            >
              {t("hello")} {t("i_am")}
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-7xl lg:text-8xl font-black text-primary-white tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-white via-primary-light to-primary-base">
                {t("name")}
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center lg:justify-start"
            >
              <span className="text-lg sm:text-2xl md:text-4xl font-bold text-primary-light font-mono whitespace-nowrap">
                &gt; <Typewriter
                  words={[
                    "Software Engineer",
                    "Backend Developer",
                    "Fullstack Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 pt-4"
          >
            <SocialButton href="https://www.linkedin.com/in/benedykt-huszcza-478b69289/" icon={Linkedin} label="LinkedIn" />
            <SocialButton href="https://github.com/benhus8" icon={Github} label="GitHub" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end group perspective-1000"
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">

            <div className="absolute inset-0 rounded-full border-2 border-primary-dark/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-primary-light/20 animate-[spin_15s_linear_infinite_reverse]" />

            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-light/10 to-transparent backdrop-blur-sm border border-primary-white/10 shadow-[0_0_40px_-10px_rgba(0,223,129,0.3)] transition-all duration-500 overflow-hidden flex items-end justify-center transform group-hover:scale-105 group-hover:shadow-[0_0_60px_-5px_rgba(0,223,129,0.5)]">
              <Image
                src="/pretty_ben.png"
                alt="Benedykt Huszcza"
                fill
                className="object-cover object-top scale-90 group-hover:scale-100 transition-transform duration-700 ease-in-out"
                priority
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 500px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary-darkest/80 via-transparent to-transparent opacity-60" />
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialButton({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-4 rounded-full bg-primary-white/5 border border-primary-white/10 hover:border-primary-light/50 hover:bg-primary-light/10 transition-all duration-300"
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-primary-white group-hover:text-primary-light transition-colors" />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary-darkest text-primary-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-primary-white/10">
        {label}
      </span>
    </a>
  );
}
