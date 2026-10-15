import React, { useState } from "react";

const NavbarBanner = () => {

  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (

    <div className="bg-primary text-slate-900 text-xs sm:text-sm text-center font-medium py-2.5 px-10 relative">
      <span>
        Find the right tutor for your learning goals.
      </span>

      <a
        href="#tutors"
        className="text-secondary font-bold ml-1.5 hover:underline inline-flex items-center"
      >
        Explore Tutors →
      </a>

      <button
        type="button"
        aria-label="Close announcement"
        className="
          absolute
          top-1/2
          right-4
          sm:right-6
          -translate-y-1/2
          cursor-pointer
          text-lg
          font-semibold
          text-slate-800
          hover:text-secondary
          transition-colors
          duration-200
          leading-none"
        onClick={() => setIsOpen(false)}
      >
        ×
      </button>
    </div>
  );
};

export default NavbarBanner;