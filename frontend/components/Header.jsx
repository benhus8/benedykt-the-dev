"use client";


import {useEffect, useState} from "react";
function NavItem({ text, targetId, bold=false }) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <h1
      onClick={handleClick}
      className={`${ bold ? 'font-bold': 'font-light'} text-lg text-primary-white hover:text-primary-light cursor-pointer transition-all duration-300`}
    >
      {text}
    </h1>
  );
}
export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);  // Zmieniamy wartość 100 na dowolną wartość, po której ma się pojawić tło
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header
          id="about-me"
          className={`transition-all duration-500 ease-in-out fixed w-full z-20 ${
              isScrolled ? ' bg-opacity-80 backdrop-blur-lg' : 'bg-transparent'
          }`}
      >
        <div className="py-5 px-32 flex justify-between">
          <div>
            <NavItem text={"benedykt-huszcza.dev"} targetId="about-me" bold/>
          </div>

          <nav className="w-1/2 mr">
            <div className="flex space-x-20 justify-end">
              <NavItem text={"Skills"} targetId="stack"/>
              <NavItem text={"Projects"} targetId="experience"/>
              <NavItem text={"Career"} targetId="contact-me"/>
              <NavItem text={"Contact me"} targetId="contact-me"/>
            </div>
          </nav>

        </div>

      </header>
  );
}

