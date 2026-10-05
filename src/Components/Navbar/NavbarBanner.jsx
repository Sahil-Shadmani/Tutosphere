import React, { useState } from "react";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-primary text-sm text-center font-semibold py-2 px-10 relative">
      <span>
        Find the right tutor for your learning goals.
      </span>

      <a
        href="#tutors"
        className="text-secondary ml-2 hover:underline"
      >
        Explore Tutors →
      </a>

      <button
        type="button"
        aria-label="Close announcement"
        className="
          absolute
          top-1/2
          right-5
          -translate-y-1/2
          cursor-pointer
          font-bold
          hover:text-secondary
          transition-colors
          duration-200
        "
        onClick={() => setIsOpen(false)}
      >
        ×
      </button>
    </div>
  );
};

export default NavbarBanner;