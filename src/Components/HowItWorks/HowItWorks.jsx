import React from 'react'
import { FaSearch, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa'

const steps = [
  {
    id: 1,
    title: "1. Find Your Tutor",
    desc: "Browse through our expert tutors by subject, availability, and teaching style.",
    icon: <FaSearch />,
    color: "#0063ff",
  },
  {
    id: 2,
    title: "2. Book a Session",
    desc: "Choose flexible lesson times that fit seamlessly into your daily routine.",
    icon: <FaCalendarAlt />,
    color: "#ea7516",
  },
  {
    id: 3,
    title: "3. Start Learning",
    desc: "Connect 1-on-1 in interactive live sessions and achieve your goals.",
    icon: <FaGraduationCap />,
    color: "#00c986",
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="container pt-6 pb-14 md:pt-8 md:pb-16 scroll-mt-20 md:scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-[600px] mx-auto space-y-3 mb-12">
        <p className="uppercase font-semibold text-orange-600 text-sm">
          Simple Steps
        </p>
        <h2 className="text-3xl font-semibold">
          How TutoSphere Works
        </h2>
      </div>

      {/* 3-Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="bg-[#f9f9f9] p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow"
          >
            <div 
              style={{ color: step.color, backgroundColor: step.color + "20" }} 
              className="w-14 h-14 rounded-full flex justify-center items-center text-2xl"
            >
              {step.icon}
            </div>
            <h3 className="font-semibold text-xl text-slate-800">{step.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks