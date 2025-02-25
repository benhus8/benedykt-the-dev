"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export const MyProjects = () => {
  const t = useTranslations("myProjects");

  return (
    <div className="relative  min-h-[475px] lg:max-w-[1440px] lg:mx-auto z-10 ">
      <div className="w-full flex flex-col justify-center items-center pt-5">
        <p className="pt-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-white font-bold text-4xl">
          {t("title")}
        </p>
      </div>
      <div className="w-full  pt-10  px-8 sm:px-12 md:px-24 lg:px-48 ">
        <div className="grid grid-cols-1 md:grid-cols-7 ">
          <div className="md:col-span-4 mx-2 my-2">
            <ProjectCard
              title={t("projects.genAI.title")}
              image="gen_ai_project.png"
              technologies={[
                "python",
                "fastapi",
                "react",
                "docker",
                "aws",
                "postgresql",
                "swagger",
              ]}
              link={t("projects.genAI.link")}
              tooltip={t("projects.tooltip")}
            />
          </div>
          <div className="md:col-span-3 mx-2 my-2">
            <ProjectCard
              title={t("projects.resume.title")}
              image="ideas_projct.png"
              technologies={["nextjs", "tailwindcss", "docker"]}
              link={t("projects.resume.link")}
              tooltip={t("projects.tooltip")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 mt-5">
          <div className="md:col-span-2 mx-2 my-2">
            <ProjectCard
              title={t("projects.vesselRecognition.title")}
              image="vessel_project.png"
              technologies={["python", "pytorch"]}
              link={t("projects.vesselRecognition.link")}
              tooltip={t("projects.tooltip")}
            />
          </div>
          <div className="md:col-span-3 mx-2 my-2">
            <ProjectCard
              title={t("projects.speedDating.title")}
              image="speed_dating_project.png"
              technologies={[
                "python",
                "django",
                "nextjs",
                "tailwindcss",
                "docker",
              ]}
              link={t("projects.speedDating.link")}
              tooltip={t("projects.tooltip")}
            />
          </div>
        </div>
      </div>
      {/* GLOW */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 mt-[250px]">
        <div className="w-80 h-52 bg-green-500 rounded-full blur-2xl opacity-20"></div>
      </div>
    </div>
  );
};

const ProjectCard = (props) => {
  return (
    <div className="relative h-[300px] px-8 pt-5 bg-secondary-transparentCard/40 rounded-lg overflow-hidden transition-all ease-in hover:bg-[rgba(0,0,0,0.5)] hover:opacity-90">
      <div className="w-full flex flex-row justify-between">
        <p className="font-bold text-primary-white relative w-4/5 lg:text-lg">
          {props.title}
        </p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Tooltip tech={props.tooltip} position="left">
            <img
              src="/source-arrow.svg"
              alt="Arrow"
              className="w-[16px] h-[16px] mt-2"
            />
          </Tooltip>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {props.technologies.map((tech, index) => (
          <Tooltip key={index} tech={tech} position="right">
            <img
              src={`/stack/${tech}.svg`}
              alt={tech}
              className="w-[20px] h-[20px] transition-transform hover:scale-110"
            />
          </Tooltip>
        ))}
      </div>

      <img
        src={`/images/${props.image}`}
        alt="Glow"
        className="w-full rounded-b-lg mt-3 rounded-sm"
      />
    </div>
  );
};

const Tooltip = ({ tech, children, position = "right" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const positionClass =
    position === "left"
      ? "-translate-x-1/2 right-1/2"
      : "-translate-x-1/2 left-1/2";

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className={`absolute z-50 bg-black text-white text-xs rounded-lg p-2 opacity-90 shadow-lg top-full mt-1 ${positionClass}`}
        >
          {tech.toUpperCase()}
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
