"use client";

const FooterItem = ({ text, targetId, bold, toTop }) => {
  const handleClick = () => {
    if (toTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <span
      onClick={handleClick}
      className={`
        cursor-pointer text-lg text-primary-white hover:text-primary-light transition-all duration-300 whitespace-nowrap ${bold ? " font-semibold " : ""}`}
    >
      {text}
    </span>
  );
};

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black text-white text-center">
      <div className="w-[100px] flex flex-row items-center justify-between mt-8">
        <a
          href="https://github.com/benhus8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.svg"
            alt="Arrow"
            className="w-[24px] h-[24px] mt-2"
          />
        </a>
        <a
          href="linkedin.com/in/benedykt-huszcza-478b69289/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/linkdin.svg"
            alt="Arrow"
            className="w-[24px] h-[24px] mt-2"
          />
        </a>
      </div>
      <p className="text-lg font-semiBold mt-4">{"benedykt.huszcza.dev"}</p>
      <div className="w-[500px] flex flex-row items-center justify-center mt-2 gap-20 text-lg whitespace-nowrap ">
        <FooterItem text={"Skills"} targetId={"skills"} />
        <FooterItem text={"Projects"} targetId={"projects"} />
        <FooterItem text={"Career"} targetId={"career"} />
        <FooterItem text={"Contact"} targetId={"contact"} />
      </div>
      <p className="text-sm font-light mt-4 mb-8">{`Designed and created by Benedytkt Huszcza @${new Date().getFullYear()}`}</p>
    </footer>
  );
}
