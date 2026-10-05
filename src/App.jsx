import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import NavbarBanner from './Components/Navbar/NavbarBanner'
import Hero from './Components/Hero/Hero'
import NumberCounter from './Components/NumberCounter/NumberCounter'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
import Img1 from './assets/Banner1.png'
import Img2 from './assets/Banner2.png'
import Banner from './Components/Banner/Banner'
import SubjectCard from './Components/SubjectCard/SubjectCard'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
const BannerData1 = {
  image: Img1,
  tag: "LEARN ON YOUR SCHEDULE",
  title: "Find a Tutor That Fits Your Schedule",
  subtitle:
    "Choose a tutor based on your availability and learning goals. Find flexible lesson times that fit naturally into your daily routine.",
  link: "#tutors",
};

const BannerData2 = {
  image: Img2,
  tag: "FIND THE RIGHT TUTOR",
  title: "Learn From Tutors Who Match Your Goals",
  subtitle:
    "Explore tutors with different skills and teaching styles. Find someone who matches your subject, learning needs, and preferred way of studying.",
  link: "#tutors",
};

const App = () => {
  return (
    <main className='overflow-hidden'>

      <Navbar />
      <NavbarBanner />
      <Hero/>
      <NumberCounter/>
      <WhyChooseUs/>
      <Banner {...BannerData1} />
      <Banner {...BannerData2} reverse={true}/>
      <SubjectCard/>
      <Testimonials/>
      <Footer/>

    </main>
  )
}

export default App