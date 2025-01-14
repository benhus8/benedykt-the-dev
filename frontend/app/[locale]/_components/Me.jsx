"use client";

import {Typewriter} from "react-simple-typewriter";
import AnimatedIcon from "@/components/animated/AnimatedIcons";


const icons = [
    { src: "/stack/fast-api.png", alt: "FastAPI", initialX: 150, initialY: 150, endX: 0, endY: 40 },
    { src: "/stack/java.png", alt: "Java", initialX: 150, initialY: 150, endX: 50, endY: 90 },
    { src: "/stack/js.png", alt: "JavaScript", initialX: 150, initialY: 150, endX: 225, endY: 25 },
    { src: "/stack/postgres.png", alt: "PostgreSQL", initialX: 150, initialY: 150, endX: 300, endY:75 },
    { src: "/stack/python.png", alt: "Python", initialX: 150, initialY: 150, endX: -20, endY: 125 },
    { src: "/stack/next.png", alt: "Next", initialX: 150, initialY: 150, endX: -30, endY: 200 },
    { src: "/stack/rabbitmq.png", alt: "RabbitMQ", initialX: 150, initialY: 150, endX: 100, endY: 10 },
    { src: "/stack/react.png", alt: "React", initialX: 150, initialY: 150, endX: 320, endY: 175 },
    { src: "/stack/spring.png", alt: "Spring", initialX: 150, initialY: 150, endX: 250, endY: 130 },
];



export default function IntroSection() {
    return (
        <div className="flex bg-primary-darkest min-h-[300px] mt-5">
            <div className="text-primary-white flex w-1/2">
                <div className="w-full flex flex-col items-end justify-center">
                    <div>
                        <h1 className="text-5xl font-bold min-w-[600px]">Hello</h1>
                        <h2 className="text-5xl font-bold min-w-[600px]">
                            I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-white to-primary-light font-bold">Benedykt</span>,
                        </h2>
                    </div>
                    <h3 className="text-5xl font-medium min-w-[600px]">
                        <span className="text-primary-white font-bold ">
                            <Typewriter
                                words={["Software Engineer ", "Backend Developer ", "Fullstack Developer "]}
                                loop={0}
                                cursor
                                cursorStyle={
                                    <span style={{fontWeight: "normal", fontSize: "inherit"}}>|</span>
                                }
                                cursorBlinking={true}
                                cursorClassName="font-light"
                                typeSpeed={70}
                                deleteSpeed={30}
                                delaySpeed={4000}
                            />
                        </span>
                    </h3>
                </div>
            </div>
            <div className="text-white flex flex-col items-center justify-center w-1/2 min-h-[300px]">
                <div className="border-primary-light border-2 border-2 rounded-xl px-1">
                    <img
                        src="/pretty_ben.png"
                        alt="Me"
                        className="max-w-[200px]"
                    />
                </div>
                <div className="flex justify-between">
                    <a href="https://www.linkedin.com/in/benedykt-huszcza-478b69289/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/linkdin.svg"
                            alt="Linkedin"
                            className="w-[30px] h-[30px] mx-5 mt-2"
                        />
                    </a>
                    <a href="https://github.com/benhus8" target="_blank"
                       rel="noopener noreferrer">
                        <img
                            src="/github.svg"
                            alt="GitHub"
                            className="w-[30px] h-[30px] mx-5 mt-2"
                        />
                    </a>
                </div>

            </div>
        </div>
);
}
