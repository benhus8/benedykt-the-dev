"use client";

import { useTranslations } from "next-intl";

export const MyProjects = () => {
  const t = useTranslations("myProjects");

  return (
    <div className="relative  min-h-[475px] z-10">
      <div className="w-full flex flex-col justify-center items-center pt-5">
        <p className="pt-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-white font-bold text-4xl">
          {t("title")}
        </p>
      </div>
      <div className="w-full pt-10  px-8 sm:px-12 md:px-24 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-7 ">
          <div className="md:col-span-4 mx-2 my-2">
            <ProjectCard
              title={t("projects.genAI.title")}
              image="gen_ai_project.png"
            />
          </div>
          <div className="md:col-span-3 mx-2 my-2">
            <ProjectCard
              title={t("projects.newIdeas.title")}
              image="ideas_projct.png"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 mt-5">
          <div className="md:col-span-2 mx-2 my-2">
            <ProjectCard
              title={t("projects.vesselRecognition.title")}
              image="vessel_project.png"
            />
          </div>
          <div className="md:col-span-3 mx-2 my-2">
            <ProjectCard
              title={t("projects.speedDating.title")}
              image="speed_dating_project.png"
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
    <div className="relative h-[300px] px-8 pt-5 bg-secondary-transparentCard/40 rounded-lg overflow-hidden  transition-all ease-in hover:bg-[rgba(0,0,0,0.5)] hover:opacity-90">
      <div className="w-full flex flex-row justify-between">
        <p className="font-bold text-primary-white relative w-3/4  lg:text-lg">
          {props.title}
        </p>
        <img
          src="/source-arrow.svg"
          alt="Arrow"
          className="w-[16px] h-[16px] mt-2"
        />
      </div>
      <div>
        <img
          src="/stack/fastapi.svg"
          alt="Glow"
          className="w-[20px] h-[20px] mt-2"
        />
      </div>

      <img
        src={`/images/${props.image}`}
        alt="Glow"
        className="w-full rounded-b-lg mt-3 rounded-sm"
      />
    </div>
  );
};
