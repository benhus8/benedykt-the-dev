"use client";
import {Typewriter} from "react-simple-typewriter";

export default function IntroSection() {
    return (
        <div className="relative flex bg-primary-darkest min-h-[300px]">
            <div className="text-primary-white flex w-1/2">
                <div className="w-full flex flex-col items-end justify-center">
                    <div>
                        <h1 className="text-5xl font-bold min-w-[600px]">Hello</h1>
                        <h2 className="text-5xl font-bold min-w-[600px]">
                            I am <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-white to-primary-light font-bold">Benedykt</span>,
                        </h2>
                    </div>
                    <h3 className="text-5xl font-medium min-w-[600px]">
                        <span className="text-primary-white font-bold ">
                            <Typewriter
                                words={["Software Engineer ", "Backend Developer ", "Fullstack Developer "]}
                                loop={0}
                                cursor
                                cursorStyle={<span style={{fontWeight: "normal", fontSize: "inherit"}}>|</span>}
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
                <div className="border-primary-light border-[2px] rounded-xl px-1 shadow-2xl shadow-primary-light">
                    <img
                        src="/pretty_ben.png"
                        alt="Me"
                        className="max-w-[200px]"
                    />
                </div>
                <div className="flex justify-between">
                    <a href="https://www.linkedin.com/in/benedykt-huszcza-478b69289/" target="_blank"
                       rel="noopener noreferrer">
                        <img
                            src="/linkdin.svg"
                            alt="Linkedin"
                            className="w-[30px] h-[30px] mx-5 mt-2 shadow-2xl shadow-primary-darkest"
                        />
                    </a>
                    <a href="https://github.com/benhus8" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/github.svg"
                            alt="GitHub"
                            className="w-[30px] h-[30px] mx-5 mt-2 shadow-2xl shadow-primary-darkest"
                        />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-[-200px] left-[-125px] mb-4 mr-4 z-0">
                <img
                    src="/glow_elipse_me.svg"
                    alt="Glow"
                    className="w-[300px] h-[300px] z-10"
                />
            </div>

            <div className="absolute top-[-200px] right-[-225px] mb-4 mr-4 z-0">
                <img
                    src="/circle_blur.svg"
                    alt="Glow"
                    className="w-[300px] h-[300px] z-10"
                />
            </div>
        </div>
    );
}

