import React from "react";
import { NavbarMenu } from "../../MockData/data";

const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  
  return (
    
    <div
      className={`
        absolute
        top-full
        left-0
        w-full
        z-20
        transition-all
        duration-300
        ease-in-out
        ${isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-5 opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="bg-primary text-white py-8 rounded-b-3xl shadow-xl">
        <ul className="flex flex-col justify-center items-center gap-6">
          {NavbarMenu.map((item) => {
            
            return (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="
                    inline-block
                    font-semibold
                    hover:text-secondary
                    transition-colors
                    duration-300"
                >
                  {item.title}
                </a>
              </li>
            );
          })}

          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
                font-semibold
                hover:text-secondary
                transition-colors
                duration-300"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="#tutors"
              onClick={() => setIsOpen(false)}
              className="
                inline-block
                bg-secondary
                text-white
                px-6
                py-2.5
                rounded-full
                font-semibold
                hover:scale-105
                hover:shadow-lg
                transition-all
                duration-300"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;