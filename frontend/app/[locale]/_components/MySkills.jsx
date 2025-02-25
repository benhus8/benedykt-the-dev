"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

export const MySkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const t = useTranslations("mySkills");

  const skillsList = [
    {
      id: "backend",
      name: t("skills.backend.name"),
      description: t("skills.backend.description"),
    },
    {
      id: "frontend",
      name: t("skills.frontend.name"),
      description: t("skills.frontend.description"),
    },
    {
      id: "ai",
      name: t("skills.ai.name"),
      description: t("skills.ai.description"),
    },
    {
      id: "devops",
      name: t("skills.devOps.name"),
      description: t("skills.devOps.description"),
    },
  ];

  return (
    <div className="relative bg-black min-h-[475px] z-10 mt-10 pb-10">
      <div className="w-full lg:max-w-[1440px] lg:mx-auto flex flex-col justify-center items-center pt-5">
        <p className="pt-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-white font-bold text-4xl">
          {t("title")}
        </p>
        <p className="text-white text-md px-8 md:px-20 lg:px-32 text-center break-words mt-2 mb-5">
          {t("intro")}
        </p>
      </div>
      <div className="w-full lg:max-w-[1440px] lg:mx-auto grid grid-cols-1 gap-1justify-center items-center mb-10">
        {skillsList.map((skill, i) => (
          <SkillRow
            key={i}
            id={i}
            name={skill.name}
            description={skill.description}
            isHovered={hoveredIndex === i}
            onMouseEnter={() => setHoveredIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

const SkillRow = (props) => {
  return (
    <div
      className={`mx-8 md:mx-20 lg:mx-32min-w-fit min-h-[75px] mt-0.5 p-3 flex flex-col md:flex-row rounded-md items-start md:items-center gap-2 ${props.isHovered ? "text-black bg-primary-light" : "bg-primary-darkest text-primary-white "} transition duration-300 ease-in-out  shadow-md hover:shadow-lg`}
      onMouseEnter={props.onMouseEnter}
    >
      <div className="flex flex-row justify-center items-center">
        <p className="ml-5 mr-3 text-sm"> {`0${props.id + 1}`} </p>
        <div className="min-w-[200px]">
          <p className="text-xl font-bold"> {props.name}</p>
        </div>
      </div>

      <p className="text-md break-words"> {props.description}</p>
    </div>
  );
};
