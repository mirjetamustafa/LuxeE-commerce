// home page with image background and style with tailwind css
import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServiceFeatures from '../components/home/ServiceFeatures'

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServiceFeatures />
    </>
  )
}
export default Home
