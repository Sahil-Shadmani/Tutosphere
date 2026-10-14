import React from 'react'
import Slider from 'react-slick'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialsData = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Computer Science Student",
    text: "Finding a tutor that matched my schedule was so easy. The whole experience felt simple and convenient.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Alex Carter",
    role: "Mathematics Student",
    text: "I really liked how easy it was to explore different tutors and find someone who matched my learning style.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Engineering Student",
    text: "The flexible scheduling made it much easier to fit tutoring sessions around my classes and daily routine.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Daniel Wilson",
    role: "Programming Student",
    text: "The platform makes finding the right tutor feel straightforward. I could quickly compare my options.",
    img: "https://picsum.photos/105/105",
  },
  {
    id: 5,
    name: "Emily Johnson",
    role: "English Student",
    text: "I enjoyed the simple interface and the ability to choose a tutor based on my specific learning goals.",
    img: "https://picsum.photos/103/103",
  },
]

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section id="testimonials" className="bg-[#f9f9f9] pt-6 pb-14 md:pt-8 md:pb-16">
      <div className="container">

        {/* Header Section */}
        <div className="text-center max-w-[600px] mx-auto mb-10">
          <h2 className="uppercase font-semibold text-orange-600 text-sm">
            Our Testimonials
          </h2>
          <p className="font-semibold text-2xl md:text-3xl mt-2">
            What Our Students Say
          </p>
          <p className="text-gray-500 text-sm mt-2">
            See how students are finding the right tutors and making learning more flexible.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="testimonial-slider -mx-3">
          <Slider {...settings}>
            {TestimonialsData.map((item) => (
              <div key={item.id} className="px-3 pb-6">
                <div className="bg-[#f9fafc] border border-gray-200/80 rounded-xl p-6 min-h-[260px] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  
                  {/* Top Section */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center">
                        <FaQuoteLeft className="text-secondary text-sm" />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <FaStar key={index} className="text-primary text-xs" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>

                  {/* Student Info */}
                  <div className="border-t border-gray-200/60 mt-4 pt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm text-black/80">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  )
}

export default Testimonials