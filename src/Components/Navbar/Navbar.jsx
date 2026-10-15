import React, { useState } from "react";
import { NavbarMenu } from "../../MockData/data";
import { MdComputer, MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="sticky top-0 z-50">
      <nav className="relative bg-white shadow-sm">
        <div className="container flex justify-between items-center py-5 lg:py-6">

          <a
            href="#home"
            className="text-2xl flex items-center gap-2 font-bold"
          >
            <MdComputer className="text-3xl text-secondary" />
            <p>TutoSphere</p>
          </a>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-5">
              {NavbarMenu.map((item) => {
                
                return (
                  
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="
                        inline-block
                        text-gray-600
                        text-sm
                        xl:text-base
                        py-1
                        px-2
                        xl:px-3
                        hover:text-secondary
                        transition-colors
                        duration-300
                        font-semibold
                      "
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-6">

            <a 
              href="#contact"
              className="font-medium text-gray-800 hover:text-secondary transition-colors duration-300"
            >
              Contact
            </a>

            <a
              href="#tutors"
              className="
                text-white
                bg-secondary
                font-semibold
                rounded-full
                px-6
                py-2.5
                hover:scale-105
                hover:shadow-lg
                transition-all
                duration-300"
            >
              Get Started
            </a>

          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu className="text-4xl" />
          </button>

        </div>
      </nav>

      <ResponsiveMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default Navbar;