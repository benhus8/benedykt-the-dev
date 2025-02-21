"use client";
import { useState } from "react";

export const skillsList = [
  {
    name: "Backend",
    description:
      "I have worked as backend developer bla bla blad adn really like work in JAva and \n" +
      "Python bla bla bla",
  },
  {
    name: "Frontend",
    description:
      "I have pleasure to work with React and the SSR Next.js i really like deign websites too",
  },
  {
    name: "AI",
    description:
      "I have pleasure to work with React and the SSR Next.js i really like deign websites too",
  },
  {
    name: "DevOps",
    description:
      "I have pleasure to work with React and the SSR Next.js i really like deign websites too asd asd asd asd asd asd asd asd assd assd  asdasd a asd asd asd asd asd asd asd asd ",
  },
];

export const MySkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="relative bg-black min-h-[475px] z-10 mt-10">
      <div className="w-full flex flex-col justify-center items-center pt-5">
        <p className="pt-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-white font-bold text-4xl">
          My skills
        </p>
        <p className="text-white text-md px-32 text-center break-words mt-2 mb-5">
          {" "}
          I really like experiment and invest my free time to extend my
          experience and knowledge about computer science, this is some of my
          area of interest ans skills
        </p>
      </div>
      <div className="w-full grid grid-cols-1 gap-1justify-center items-center ">
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
