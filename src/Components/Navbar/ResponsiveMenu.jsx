import React from 'react'

const ResponsiveMenu = ({ isOpen }) => {
    return (
        <div
            className={`
    absolute top-20 left-0 w-full z-20
    transition-all duration-300 ease-in-out
    ${isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }
  `}
        >
            <div className="text-xl font-semibold uppercase bg-primary text-white py-10 rounded-3xl shadow-xl">
                <ul className="flex flex-col justify-center items-center gap-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default ResponsiveMenu