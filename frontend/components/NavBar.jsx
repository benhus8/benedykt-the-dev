"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";

const NavItem = ({ text, targetId, onClick, bold, toTop }) => {
  const handleClick = () => {
    if (toTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (onClick) onClick();
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

const LanguageSwitcher = () => {
  const router = useRouter();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const currentLocale = window.location.pathname.split("/")[1];
    if (currentLocale === "pl" || currentLocale === "en") {
      setLocale(currentLocale);
    }
  }, []);

  const handleLanguageChange = (newLocale) => {
    if (newLocale !== locale) {
      const newPath = window.location.pathname.replace(
        `/${locale}`,
        `/${newLocale}`,
      );
      setLocale(newLocale);
      router.push(newPath);
    }
  };

  return (
    <div className="flex items-center space-x-2 text-primary-white text-sm">
      <button
        className={`${
          locale === "pl"
            ? "font-semiBold"
            : "font-light text-secondary-grayLight"
        } cursor-pointer hover:text-primary-light transition-all duration-300`}
        onClick={() => handleLanguageChange("pl")}
      >
        PL
      </button>
      <span>|</span>
      <button
        className={`${
          locale === "en"
            ? "font-semiBold"
            : "font-light text-secondary-grayLight"
        } cursor-pointer hover:text-primary-light transition-all duration-300`}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </button>
    </div>
  );
};

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-500 ease-in-out fixed w-full z-20 bg-opacity-80 backdrop-blur-lg`}
    >
      <div
        id="top"
        className="py-5 px-10 md:px-20 flex flex-col lg:flex-row lg:justify-between items-center"
      >
        <div className={`w-full flex flex-row justify-between items-center `}>
          <div className="z-20">
            <NavItem text={"benedykt.huszcza.dev"} toTop bold />
          </div>

          <div className="lg:hidden z-20">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#FFFFFF" />
          </div>
        </div>
        {isOpen ? (
          <hr
            className={`border-t w-full border-primary-light h-[1.5px] z-20 mt-2 lg:hidden`}
          />
        ) : null}

        <nav
          className={`z-20 ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <ul className="lg:flex lg:space-x-8 space-y-5 lg:space-y-0 flex flex-col lg:flex-row items-center mt-8 lg:mt-0">
            <li>
              <NavItem
                text={"Skills"}
                targetId="skills"
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <NavItem
                text={"Projects"}
                targetId="projects"
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <NavItem
                text={"Career"}
                targetId="career"
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <NavItem
                text={"Contact"}
                targetId="contact"
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
        {isOpen && (
          <div
            className="fixed bottom-0 top-0 right-0 left-0 bg-black z-10 overflow-auto"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
}
