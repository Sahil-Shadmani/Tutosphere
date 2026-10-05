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
  {
    id: 6,
    name: "Michael Brown",
    role: "Physics Student",
    text: "It was easy to find a tutor who understood what I needed help with. The flexible sessions were a big plus.",
    img: "https://picsum.photos/106/106",
  },
  {
    id: 7,
    name: "Olivia Davis",
    role: "Psychology Student",
    text: "The clean interface made everything easy to understand, and I could quickly find a tutor that suited my goals.",
    img: "https://picsum.photos/107/107",
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
    <section id="testimonials" className="bg-[#f9fafc] py-20">

      <div className="container">

        {/* Header Section */}

        <div className="text-center max-w-[600px] mx-auto mb-12">
          <h2 className="uppercase font-semibold text-orange-600">
            Our Testimonials
          </h2>

          <p className="font-semibold text-3xl md:text-4xl mt-3">
            What Our Students Say
          </p>

          <p className="text-gray-500 mt-4">
            See how students are finding the right tutors and making
            learning more flexible.
          </p>
        </div>

        {/* Testimonial Slider */}

        <div className="testimonial-slider -mx-3">

          <Slider {...settings}>

            {TestimonialsData.map((item) => (
              <div key={item.id} className="px-3 pb-8">

                <div className="bg-white border border-gray-200 rounded-2xl p-7 min-h-[310px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  {/* Top Section */}

                  <div className="flex justify-between items-center mb-6">

                    <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center">
                      <FaQuoteLeft className="text-secondary" />
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-primary text-sm"
                        />
                      ))}
                    </div>

                  </div>

                  {/* Testimonial */}

                  <p className="text-gray-600 text-sm leading-7 min-h-[120px]">
                    "{item.text}"
                  </p>

                  {/* Student */}

                  <div className="border-t border-gray-100 mt-6 pt-5">

                    <div className="flex items-center gap-4">

                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-semibold text-black/80">
                          {item.name}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
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