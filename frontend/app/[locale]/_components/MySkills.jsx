"use client";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Server, Layout, Brain, Container } from "lucide-react";

export const MySkills = () => {
  const t = useTranslations("mySkills");

  const skillsList = [
    {
      id: "backend",
      icon: Server,
      name: t("skills.backend.name"),
      description: t("skills.backend.description"),
      // Asymmetric spans for Bento Grid effect
      colSpan: "lg:col-span-7",
      gradient: "from-emerald-400 to-cyan-400",
      tags: ["Java", "Python", "Spring Boot", "FastAPI", "RabbitMQ"]
    },
    {
      id: "frontend",
      icon: Layout,
      name: t("skills.frontend.name"),
      description: t("skills.frontend.description"),
      colSpan: "lg:col-span-5",
      gradient: "from-pink-400 to-purple-400",
      tags: ["React", "Next.js", "TailwindCSS", "Figma"]
    },
    {
      id: "ai",
      icon: Brain,
      name: t("skills.ai.name"),
      description: t("skills.ai.description"),
      colSpan: "lg:col-span-5",
      gradient: "from-orange-400 to-rose-400",
      tags: ["OpenAI", "LLMs", "AWS Bedrock", "GenAI"]
    },
    {
      id: "devops",
      icon: Container,
      name: t("skills.devOps.name"),
      description: t("skills.devOps.description"),
      colSpan: "lg:col-span-7",
      gradient: "from-blue-400 to-indigo-400",
      tags: ["Docker", "AWS", "CI/CD", "Linux", "Git"]
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-primary-darkest overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-dark/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-4"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-primary-white">{t("prefix")}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-base">
              {t("title")}
            </span>
          </h2>
          <p className="text-secondary-grayLight text-lg md:text-xl max-w-2xl leading-relaxed border-l-2 border-primary-light/30 pl-6">
            {t("intro")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {skillsList.map((skill, index) => (
            <SpotlightCard
              key={skill.id}
              skill={skill}
              index={index}
              className={skill.colSpan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpotlightCard = ({ skill, index, className }) => {
  const Icon = skill.icon;
  const divRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative border border-primary-white/10 bg-secondary-darkest/40 backdrop-blur-xl overflow-hidden rounded-3xl ${className} flex flex-col`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 223, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative p-8 md:p-10 flex-grow flex flex-col z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-primary-white/5 border border-primary-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
            <Icon className="w-7 h-7 text-primary-light" />
          </div>
          <span className="text-6xl font-black text-primary-white/[0.04] pointer-events-none select-none">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-3xl font-bold text-primary-white mb-2 tracking-wide group-hover:translate-x-1 transition-transform duration-300">
          {skill.name}
        </h3>

        <div className="h-1 w-12 bg-primary-light/50 rounded-full group-hover:w-20 transition-all duration-300 mb-6" />

        <p className="text-secondary-grayLight/90 text-lg leading-relaxed font-light mb-8 group-hover:text-primary-white transition-colors duration-300">
          {skill.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {skill.tags && skill.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs md:text-sm font-medium text-primary-light bg-primary-light/5 border border-primary-light/10 rounded-full whitespace-nowrap group-hover:bg-primary-light/10 group-hover:border-primary-light/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};
