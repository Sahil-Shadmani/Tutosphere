import React from 'react'
import HeroImg from "../../assets/Hero-Image.png";
import {FaPlay} from 'react-icons/fa'
const Hero = () => {
  return (
    <>
        <div id='home' className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">

            {/* Brand Info */}

            <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0'>
                <div className='text-center md:text-left space-y-6'>
                    <p className='text-orange-600 uppercase font-semibold'>
                        PERSONALIZED LEARNING, MADE SIMPLE
                    </p>

                    <h1 className='text-5xl font-semibold lg:text-6xl leading-tight'>
                        Find Your Perfect <span className='text-primary'>Tutor</span> 
                    </h1>

                    <p className='primae'>
                        Find the right tutor for 1-on-1 lessons and learn at your own pace with a schedule that works for you.
                    </p>

                    {/* Button Section */}

                    <div className='flex gap-8 justify-center md:justify-start mt-8 items-center'>
                    <a href="#tutors" className='primary-btn'>
    Get Started
</a>
<a href="#how-it-works" className='flex justify-end items-center gap-2 font-semibold'>
    <span className='w-10 h-10 bg-secondary/15
    rounded-full flex justify-center items-center'>
        <FaPlay className='text-secondary'/>
    </span>
    See how it works
</a>
                    </div>
                </div>
            </div>

            {/* Hero Image */}

            <div className='flex justify-center items-center'>
                <img src={HeroImg} alt="" className='w-[350px] md:w[550px] xl:w-[700px]'/>
            </div>

        </div>
    </> 
   
  )
}

export default Hero