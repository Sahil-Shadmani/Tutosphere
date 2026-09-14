import React from 'react'

const ResponsiveMenu = ({isOpen}) => {
  return (
    <div className='absolute top-20
     left-0 w-full h-screen z-20'>

        {isOpen && <div className='text-xl font-semibold uppercase bg-primary text-white py-10 rounded-3xl shadow-md'>
            
            <ul className='flex flex-col justify-center items-center gap-10'>

                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>

            </ul>
        
        </div>}
        
    </div>
  )
}

export default ResponsiveMenu