import React from 'react'
import { FaUserGraduate, FaCalendarAlt, FaChalkboardTeacher, FaWallet } from 'react-icons/fa'

const WhyChooseData = [
  {
    id: 1,
    title: "One-on-One Learning",
    desc: "Get personalized attention with lessons tailored to your learning goals.",
    icon: <FaUserGraduate />,
    bgColor: "#0063ff",
  },
  {
    id: 2,
    title: "Flexible Scheduling",
    desc: "Choose learning times that fit your schedule and daily routine.",
    icon: <FaCalendarAlt />,
    bgColor: "#73bc00",
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Make lessons more engaging with interactive tools for explanations.",
    icon: <FaChalkboardTeacher />,
    bgColor: "#fa6400",
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Explore tutors at different price points that fit your budget.",
    icon: <FaWallet />,
    bgColor: "#fe6baa",
  },
];

const WhyChooseUs = () => {

  return (
    <div id='why-us' className='bg-[#f9fafc] scroll-mt-10 md:scroll-mt-15'>
      <div className='container pt-14 pb-6 md:pt-16 md:pb-8'>

        <div className='space-y-3 p-4 text-center max-w-[500px] mx-auto mb-8'>
          <h2 className='uppercase font-semibold text-orange-600 text-sm'>
            Why Choose Us
          </h2>
          <p className='font-semibold text-2xl md:text-3xl'>
            Why Students Choose TutoSphere
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WhyChooseData.map((item) => (
            <div
              key={item.id}
              className="space-y-3 p-5 bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div
                style={{ backgroundColor: item.bgColor }}
                className="w-10 h-10 rounded-lg flex justify-center items-center text-white text-xl"
              >
                {item.icon}
              </div>

              <h3 className="font-semibold text-base text-gray-800">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs;