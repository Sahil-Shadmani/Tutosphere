import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/FooterImg.png";

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {

  return (

    <footer style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/5">

        <div className="container">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">

            <div className="px-4">
              <a
                href="#home"
                className="flex items-center gap-2 text-2xl font-bold"
              >
                <MdComputer className="text-secondary text-4xl" />
                <span>TutoSphere</span>
              </a>

              <p className="mt-5 max-w-[350px] text-gray-600 leading-6">
                Find the right tutor, explore subjects, and discover
                flexible learning options that fit your goals.
              </p>

              <div className="flex items-center gap-5 mt-6">

                <a
                  aria-label="Instagram"
                  className="hover:text-secondary hover:scale-110 transition-all duration-200"
                >
                  <FaInstagram className="text-2xl" />
                </a>

                <a
                  aria-label="LinkedIn"
                  className="hover:text-secondary hover:scale-110 transition-all duration-200"
                >
                  <FaFacebook className="text-2xl" />
                </a>

                <a
                  aria-label="GitHub"
                  className="hover:text-secondary hover:scale-110 transition-all duration-200"
                >
                  <FaXTwitter className="text-2xl" />
                </a>

                <a
                  aria-label="LinkedIn"
                  className="hover:text-secondary hover:scale-110 transition-all duration-200"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                
              </div>
            </div>

            <div className="px-4 md:flex md:justify-end">
              <div>

                <h2 className="text-lg font-bold mb-5">
                  Explore
                </h2>

                <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-600 hover:text-secondary transition-colors duration-200"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="#tutors"
                      className="text-gray-600 hover:text-secondary transition-colors duration-200"
                    >
                      Find Tutors
                    </a>
                  </li>

                  <li>
                    <a
                      href="#subjects"
                      className="text-gray-600 hover:text-secondary transition-colors duration-200"
                    >
                      Subjects
                    </a>
                  </li>

                  <li>
                    <a
                      href="#how-it-works"
                      className="text-gray-600 hover:text-secondary transition-colors duration-200"
                    >
                      How It Works
                    </a>
                  </li>

                  <li>
                    <a
                      href="#contact"
                      className="text-gray-600 hover:text-secondary transition-colors duration-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/10 py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-black/50">

              <p>
                © 2026 TutoSphere
              </p>

              <p>
                Built with React & Tailwind CSS
              </p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;