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
    desc: "Make lessons more engaging with interactive tools for explanations and collaboration.",
    icon: <FaChalkboardTeacher />,
    bgColor: "#fa6400",
  },

  {
    id: 4,
    title: "Affordable Prices",
    desc: "Explore tutors at different price points and choose an option that fits your budget.",
    icon: <FaWallet />,
    bgColor: "#fe6baa",
  },
];

const WhyChooseUs = () => {
  return (
    <div id='why-us' className='bg-[#f9fafc]'>
      <div className='container py-24'>

        {/* Header Section */}

        <div className='space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5'>
          <h1 className='uppercase font-semibold text-orange-600'>
            Why Choose Us
          </h1>

          <p className='font-semibold text-3xl'>
            Why Students Choose TutoSphere
          </p>
        </div>

        {/* Cards Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <div
                key={item.id}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">
                    {item.icon}
                  </div>
                </div>

                <p className="font-semibold text-lg">
                  {item.title}
                </p>

                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  )
}

export default WhyChooseUs