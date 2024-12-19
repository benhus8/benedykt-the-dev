"use client";

import { Typewriter } from "react-simple-typewriter";

export default function IntroSection() {
    return (
        <div className="flex items-center justify-center bg-primary-darkest">
            <div className="mx-auto text-white flex items-center w-2/3">
                <div className="w-2/3 p-4">
                    <h1 className="text-4xl font-bold mb-4">Hello</h1>
                    <h2 className="text-3xl font-bold mb-4">
                        I am <span className="text-primary-light font-bold">Benedykt</span>,
                    </h2>
                    <h3 className="text-2xl font-medium">
                        <span className="text-primary-white font-bold">
                            <Typewriter
                                words={["Software Engineer ", "Backend Developer ", "Fullstack Developer "]}
                                loop={0}
                                cursor
                                cursorStyle={
                                    <span style={{ fontWeight: "normal", fontSize: "inherit" }}>|</span>
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
                <div className="mt-8">
                    <img
                        src="/me-image.png"
                        alt="Benedykt"
                        className="w-3/4 max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
