"use client";
import { Typewriter } from "react-simple-typewriter";
import { useTranslations } from "next-intl";

export default function IntroSection() {
  const t = useTranslations("me");

  return (
    <div className="relative flex flex-col md:flex-row bg-primary-darkest min-h-[300px] px-4 py-1 md:py-8">
      <div className="text-primary-white flex w-full md:w-1/2">
        <div className="w-full flex flex-col items-center md:items-end justify-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold min-w-[280px] md:min-w-[600px] text-center md:text-right lg:text-left lg:pl-20">
              {t("hello")}
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold min-w-[280px] md:min-w-[600px] text-center md:text-right lg:text-left lg:pl-20">
              {t("i_am")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-white to-primary-light font-bold">
                {t("name")}
              </span>
              ,
            </h2>
          </div>
          <h3 className="text-3xl lg:text-5xl font-medium min-w-[280px] md:min-w-[600px] text-center md:text-right lg:text-left lg:pl-20">
            <span className="text-primary-white font-bold">
              <Typewriter
                words={[
                  "Software Engineer ",
                  "Backend Developer ",
                  "Fullstack Developer ",
                ]}
                loop={0}
                cursor
                cursorStyle={
                  <span style={{ fontWeight: "normal", fontSize: "inherit" }}>
                    |
                  </span>
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
      <div className="text-white flex flex-col items-center justify-center w-full md:w-1/2 min-h-[300px] mt-8 md:mt-0">
        <div className="border-primary-light border-[2px] rounded-xl px-1 shadow-2xl shadow-primary-light">
          <img
            src="/pretty_ben.png"
            alt="Me"
            className="max-w-[150px] md:max-w-[200px]"
          />
        </div>
        <div className="flex justify-between mt-4">
          <a
            href="https://www.linkedin.com/in/benedykt-huszcza-478b69289/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkdin.svg"
              alt="Linkedin"
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] mx-3 md:mx-5 mt-2 shadow-2xl shadow-primary-darkest"
            />
          </a>
          <a
            href="https://github.com/benhus8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.svg"
              alt="GitHub"
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] mx-3 md:mx-5 mt-2 shadow-2xl shadow-primary-darkest"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-[-145px] md:bottom-[-200px] left-[-50px] md:left-[-125px] mb-4 mr-4 z-0">
        <img
          src="/glow_elipse_me.svg"
          alt="Glow"
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] z-10"
        />
      </div>

      <div className="absolute top-[-100px] lg:top-[-125px] right-[-108px]  md:right-[-225px] mb-4 mr-4 z-0">
        <img
          src="/circle_blur.svg"
          alt="Glow"
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] z-10"
        />
      </div>
    </div>
  );
}
