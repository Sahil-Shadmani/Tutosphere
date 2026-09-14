import React from 'react'
import { useState } from 'react'
const NavbarBanner = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        isOpen && (
            <div className='bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative'>
                Are you a university or school student for an online tutoring
                partnership?
                <a href="#" className='text-secondary ml-2'>
                    Talk to us
                </a>
                <div className='absolute top-1/2 right-10 cursor-pointer -translate-y-1/2' onClick={() => {
                    setIsOpen(false)
                }}>
                    X
                </div>
            </div>
        )
    )
}

export default NavbarBanner