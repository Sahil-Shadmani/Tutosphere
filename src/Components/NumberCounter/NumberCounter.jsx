import React from 'react'
import CountUp from 'react-countup'

const NumberCounter = () => {
  
  return (
    <div className='bg-secondary text-white py-12'>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp 
                    start={0} 
                    end={225} 
                    duration={3} 
                    />
                </p>
                <p>Expert Tutors</p>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp 
                    start={0}
                    separator=','
                    suffix='+' 
                    end={10000} 
                    duration={3} 
                    />
                </p>
                <p>Learning Hours</p>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp 
                    start={0} 
                    end={128} 
                    duration={3} 
                    />
                </p>
                <p>Subjects & Courses</p>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp 
                    start={0} 
                    separator=','
                    suffix='+'
                    end={7500} 
                    duration={3} 
                    />
                </p>
                <p>Active Students</p>
            </div>
        </div>
    </div>
  )
}

export default NumberCounter;