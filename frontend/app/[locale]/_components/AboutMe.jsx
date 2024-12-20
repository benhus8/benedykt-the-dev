"use client";

import {Typewriter} from "react-simple-typewriter";

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
                </div>
            </div>
        </div>
    );
}
