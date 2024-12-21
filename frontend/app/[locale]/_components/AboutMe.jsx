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
                            I am <span className="text-primary-light font-bold">Benedykt</span>,
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
            <div className="text-white flex  items-center justify-center w-1/2 min-h-[300px]">
                <div className="relative flex  mt-0">
                    <img src="/elipse.svg" alt="elipse" className=" scale-[0.80] absolute bottom-0 border-primary-light "/>
                    <img
                        src="/me-image.png"
                        alt="Benedykt"
                        className="scale-75"
                    />
                    {icons.map((icon, index) => (
                        <AnimatedIcon
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            initialX={icon.initialX}
                            initialY={icon.initialY}
                            endX={icon.endX}
                            endY={icon.endY}
                            delay={index * 0.3}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
