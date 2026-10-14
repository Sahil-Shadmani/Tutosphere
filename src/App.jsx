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
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Contact from './Components/Contact/Contact'
const BannerData1 = {
  image: Img1,
  tag: "LEARN ON YOUR SCHEDULE",
  title: "Find a Tutor That Fits Your Schedule",
  subtitle:
    "Choose a tutor based on your availability and learning goals. Find flexible lesson times that fit naturally into your daily routine.",
  buttonText: "Check Availability",
};

const BannerData2 = {
  image: Img2,
  tag: "FIND THE RIGHT TUTOR",
  title: "Learn From Tutors Who Match Your Goals",
  subtitle:
    "Explore tutors with different skills and teaching styles. Find someone who matches your subject, learning needs, and preferred way of studying.",
  buttonText: "Explore Tutors",
};

const App = () => {
  return (
    <main className="overflow-x-clip">

      <Navbar />
      <NavbarBanner />
      <Hero/>
      <NumberCounter/>
      <Banner {...BannerData1} />
      <Banner {...BannerData2} reverse={true}/>
      <SubjectCard/>
      <HowItWorks/>
      <WhyChooseUs/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </main>
  )
}

export default App