import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import NavbarBanner from './Components/Navbar/NavbarBanner'
import Hero from './Components/Hero/Hero'
const App = () => {
  return (
    <main className='overflow-hidden'>

      <Navbar />
      <NavbarBanner />
      <Hero/>
    </main>
  )
}

export default App