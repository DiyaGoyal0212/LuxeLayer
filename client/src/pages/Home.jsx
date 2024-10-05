import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Bestseller />
      <OurPolicy />
      <Newsletter />
      
      
    </div>
  )
}

export default Home
