// home page with image background and style with tailwind css
import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServiceFeatures from '../components/home/ServiceFeatures'
import ShopByCategory from '../components/home/ShopByCategory'
import FeaturedEssentials from '../components/home/FeaturedEssentials'
import LimitedOffer from '../components/home/LimitedOffer'
import OurCustomers from '../components/home/OurCustomers'

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServiceFeatures />
      <ShopByCategory />
      <FeaturedEssentials />
      <LimitedOffer />
      <OurCustomers />
    </>
  )
}
export default Home
