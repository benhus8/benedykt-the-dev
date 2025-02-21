"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NavItem({ text, targetId, bold = false }) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <h1
      onClick={handleClick}
      className={`${bold ? "font-bold" : "font-light"} text-lg text-primary-white hover:text-primary-light cursor-pointer transition-all duration-300`}
    >
      {text}
    </h1>
  );
}

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="about-me"
      className={`transition-all duration-500 ease-in-out fixed w-full z-20 ${
        isScrolled ? " bg-opacity-80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="py-5 px-20 flex justify-between whitespace-nowrap">
        <div>
          <NavItem text={"benedykt.huszcza.dev"} targetId="about-me" bold />
        </div>

        <nav className="w-1/2 mr">
          <div className="flex space-x-20 justify-end">
            <NavItem text={"Skills"} targetId="stack" />
            <NavItem text={"Projects"} targetId="experience" />
            <NavItem text={"Career"} targetId="contact-me" />
            <NavItem text={"Contact me"} targetId="contact-me" />
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
