import React from 'react'

const Banner = ({ image, title, subtitle, buttonText, tag, reverse }) => {
  return (
    <div className='bg-[#f9f9f9] pt-8 pb-6'>
      <div id="tutors" className="container pt-24 -mt-24">
        <div className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>

          {/* Banner Image Section */}
          <div className={`flex justify-start items-center ${reverse && "md:order-last md:justify-end"}`}>
            <img src={image} alt="" className='w-[400px] h-full object-cover' />
          </div>

          {/* Banner Text Section */}
          <div className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]'>
            <p className='text-sm text-orange-600 font-semibold capitalize'>
              {tag}
            </p>

            <p className='text-xl lg:text-2xl font-semibold'>
              {title}
            </p>

            <p className='text-sm text-slate-500'>
              {subtitle}
            </p>

            <div className='flex justify-center md:justify-start'>
              <button 
                type="button" 
                className='primary-btn mt-5 cursor-default'
              >
                {buttonText}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner