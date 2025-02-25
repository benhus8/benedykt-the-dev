"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const Career = () => {
  const t = useTranslations("career");
  return (
    <div className="relative w-full bg-black min-h-[475px] z-10 mt-10">
      <div className="w-full flex flex-col justify-center items-center pt-5">
        <p className="pt-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-white font-bold text-4xl">
          {t("title")}
        </p>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-32 lg:px-64 pb-10">
        {chapters.map((chapter, i) => (
          <CareerChapter
            key={i}
            id={i}
            year={chapter.year}
            month={chapter.month}
            technologies={chapter.technologies}
            tools={chapter.tools}
            position={chapter.position}
            company={chapter.company}
            color={chapter.color}
            secondary={chapter.secondary}
            t={t}
          />
        ))}
      </div>
    </div>
  );
};
export const chapters = [
  {
    color: "primary-light",
    secondary: "secondary-lightest",
    year: "2022",
    month: "07",
    position: "Backend Developer",
    company: "Prognosis z.o.o",
    technologies: [
      {
        name: "Java",
        tools: ["SpringBoot", "Hibernate", "JPA", "Scheduler", "Feign"],
      },
      {
        name: "Python",
        tools: ["FastAPI", "Alembic", "Pydantic", "Dotenv"],
      },
      { name: "PostreSQL", tools: [] },
    ],
    tools: [
      "IntelliJ IDEA",
      "Docker",
      "RabbitMQ",
      "Keycloak",
      "Consul",
      "Traefik",
    ],
  },
  {
    color: "primary-blue",
    secondary: "primary-darkerBlue",
    year: "2023",
    month: "07",
    position: "Fullstack Developer",
    company: "Prognosis z.o.o",
    technologies: [{ name: "Typescript", tools: ["React", "TanstackQuery"] }],
    tools: ["WebStorm"],
  },
  {
    color: "primary-white",
    secondary: "gray-500",
    year: "2025",
    month: "03",
    position: "Junior Software Engineer",
    company: "Software Mind",
    technologies: [
      { name: "Typescript", tools: ["React"] },
      { name: "Java", tools: ["SpringBoot"] },
    ],
    tools: [],
  },
];

const CareerChapter = (props) => {
  const t = props.t;

  return (
    <div className="lg:max-w-[1440px] lg:mx-auto flex flex-col sm:flex-row  items-center sm:items-start text-primary-white px-4 sm:px-0">
      <div>
        <div className="flex flex-row sm:flex-col justify-center items-center mt-6 sm:mt-0">
          <p className="text-4xl sm:text-2xl font-bold flex flex-col justify-end items-center ">
            {props.year}
          </p>
          <span className="sm:hidden text-4xl font-semiBold">{`\u00A0/\u00A0`}</span>
          <p className="text-4xl sm:text-7xl font-bold">{props.month}</p>
        </div>
      </div>
      <div className="w-full md:ml-4 lg:ml-8 h-full">
        <hr
          className={`border-t border-${props.color} w-full h-[1.5px] mt-8`}
        />
        <p className="font-semiBold text-2xl">{props.position}</p>
        <p className={` text-lg text-${props.secondary}`}>{props.company}</p>
      </div>
      {/*mapping section*/}
      <div className="flex flex-col">
        <div className="flex flex-row mt-3">
          <div className="h-full">
            <div className="flex flex-row">
              <BlinkingLight color={props.color} />
              <p className="text-xl font-semiBold text-primary-white ml-2">
                {t("tech")}
              </p>
            </div>

            {props?.technologies?.map((tech) => (
              <>
                <div className="flex flex-row ml-1.5">
                  <div className="w-[1px] h-[28px] bg-secondary-grayLight "></div>
                  <p
                    className={`text-md font-semiBold text-${props.secondary} ml-4`}
                  >
                    {tech.name}
                  </p>
                </div>
                <TechToolList tech={tech} t={t} />
              </>
            ))}
          </div>
        </div>

        {props.tools.length > 0 && (
          <div className="flex flex-row">
            <div className="h-full">
              <div className="flex flex-row">
                <BlinkingLight color={props.color} />
                <p className="text-xl font-semiBold text-primary-white ml-2">
                  {t("tools")}
                </p>
              </div>
              <ToolList tools={props.tools} secondary={props.secondary} t={t} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TechToolList = ({ tech, t }) => {
  const [expanded, setExpanded] = useState(false);
  const toolsToShow = expanded ? tech?.tools : tech?.tools?.slice(0, 3);

  return (
    <div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        {toolsToShow?.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
            className="flex flex-row ml-1.5 text-sm"
          >
            <div className="w-[1px] h-[24px] bg-secondary-grayLight"></div>
            <div className="w-[0.5px] h-[24px] bg-secondary-lightest ml-10"></div>
            <p className="text-gray-400 ml-2">{tool}</p>
          </motion.div>
        ))}
      </motion.div>

      {tech?.tools?.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-sm text-secondary-gray mt-2 ml-12 transition-all duration-300 hover:text-secondary-lightest"
        >
          {expanded ? t("collapse") : t("showMore")}
          <motion.div
            className="ml-1"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      )}
    </div>
  );
};

const ToolList = ({ tools, secondary, t }) => {
  const [expanded, setExpanded] = useState(false);
  const toolsToShow = expanded ? tools : tools?.slice(0, 3);

  return (
    <div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        {toolsToShow?.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
            className="flex flex-row ml-1.5"
          >
            <div className="w-[1px] h-[28px] bg-secondary-grayLight"></div>
            <p className={`text-sm font-semiBold text-${secondary} ml-4`}>
              {tool}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {tools?.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-sm text-secondary-gray mt-2 transition-all duration-300 hover:text-primary-base"
        >
          {expanded ? t("collapse") : t("showMore")}
          <motion.div
            className="ml-1"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      )}
    </div>
  );
};

const BlinkingLight = ({ color }) => {
  const randomDelay = Math.random() * (20 - 10) + 10;

  return (
    <motion.div
      className={`w-3.5 h-3.5 bg-${color} rounded-full relative shadow-[0_0_10px_4px] shadow-${color} mt-3`}
      animate={{ opacity: [1, 0.2, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: randomDelay,
        ease: "easeInOut",
      }}
    ></motion.div>
  );
};
