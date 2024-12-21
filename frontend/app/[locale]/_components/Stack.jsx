import CardSlider from "@/components/animated/CardSlider";
import Transition from "@/components/animated/Transition";

function AsymmetricEnding() {
  return (
    <div className="w-full h-[100px]">
      <svg
        viewBox="0 0 1440 800"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0 L1440 0 L1440 600 C1200 950 240 700 0 850 L0 0"
          fill="#03624C"
        />
      </svg>
    </div>
  );
}

const languagesStack = [
  {
    name: "JAVA",
    bgColor: "primary-light",
    textColor: "primary-darkest",
    shortDescription: "Experience with Java development",
    longDescription:
      "Java is a robust programming language used in many industries.",
  },
  {
    name: "PYTHON",
    bgColor: "secondary-lightest",
    textColor: "primary-white",
    shortDescription: "Python for AI and Data Science",
    longDescription:
      "Python is popular for its simplicity and wide range of libraries.",
  },
  {
    name: "JS",
    bgColor: "secondary-grayLight",
    textColor: "primary-darkest",
    shortDescription: "JavaScript for web development",
    longDescription:
      "JavaScript is the language of the web, enabling interactive UIs.",
  },
  {
    name: "KOTLIN",
    bgColor: "primary-darkest",
    textColor: "primary-white",
    shortDescription: "Experience with Java development",
    longDescription:
      "Java is a robust programming language used in many industries.",
  },
];

export default function StackSection() {
  return (
    <div>
      <div className="w-full min-h-[300px] bg-primary-dark mt-10 flex flex-col sm:flex-row justify-between items-center p-10">
        <div className="pl-10">
          <Transition delay={0.5}>
            <CardSlider cards={languagesStack} tooltip={true} />
          </Transition>
        </div>
        <div className="">
          <Transition delay={0.75}>
            <CardSlider cards={languagesStack} />
          </Transition>
        </div>
        <div className=" pr-20">
          <Transition delay={1}>
            <CardSlider cards={languagesStack} />
          </Transition>
        </div>
      </div>
      <AsymmetricEnding />
    </div>
  );
}
