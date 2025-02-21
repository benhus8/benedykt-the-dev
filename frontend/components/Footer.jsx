"use client";

const FooterItem = ({ text, targetId, bold, toTop, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
      return;
    }
    if (toTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <span
      onClick={handleClick}
      className={`cursor-pointer text-lg text-primary-white hover:text-primary-light transition-all duration-300 whitespace-nowrap ${
        bold ? "font-semibold" : ""
      }`}
    >
      {text}
    </span>
  );
};

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black text-white text-center py-6 px-4">
      <div className="flex flex-row items-center justify-center gap-6 mt-4">
        <a
          href="https://github.com/benhus8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.svg"
            alt="GitHub"
            className="w-[24px] h-[24px] mt-2 transition-transform duration-300 hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/benedykt-huszcza-478b69289/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/linkdin.svg"
            alt="LinkedIn"
            className="w-[24px] h-[24px] mt-2 transition-transform duration-300 hover:scale-110"
          />
        </a>
      </div>

      <p className="text-lg font-semiBold mt-4">{"benedykt.huszcza.dev"}</p>

      <div className="w-full flex flex-col sm:flex-row items-center justify-center mt-4 gap-4 sm:gap-8 text-lg">
        <FooterItem text={"Skills"} targetId={"skills"} />
        <FooterItem text={"Projects"} targetId={"projects"} />
        <FooterItem text={"Career"} targetId={"career"} />
        <FooterItem text={"Contact"} targetId={"contact"} />
        <FooterItem text={"Blog"} link="https://blog.huszcza.dev" />
      </div>

      <p className="text-sm font-light mt-4">
        {`Designed and created by Benedytkt Huszcza @${new Date().getFullYear()}`}
      </p>
    </footer>
  );
}
