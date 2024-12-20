"use client";

import {Typewriter} from "react-simple-typewriter";

export default function IntroSection() {
    return (
        <div className="flex items-center justify-center bg-primary-darkest min-h-[300px]">
            <div className="text-primary-white flex justify-center items-center w-1/2">
                <div className="w-full flex flex-col items-center justify-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-4 min-w-[350px]">Hello</h1>
                        <h2 className="text-3xl font-bold mb-4 min-w-[350px]">
                            I am <span className="text-primary-light font-bold">Benedykt</span>,
                        </h2>
                    </div>
                    <h3 className="text-2xl font-medium min-w-[350px]">
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
            <div className="text-white flex justify-center w-1/2 min-h-[300px]">
                <div className="relative flex justify-center items-top mt-0">
                    <img src="/elipse.svg" alt="elipse" className=" scale-[0.80] absolute bottom-0 border-primary-light "/>
                    <img
                        src="/me-image.png"
                        alt="Benedykt"
                        className="scale-75 mt-0 mr-1"
                    />
                </div>
            </div>
        </div>
    );
}
