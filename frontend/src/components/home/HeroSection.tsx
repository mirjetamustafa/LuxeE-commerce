import { Link } from 'react-router-dom'
import bgImage from '../../assets/images/bg.jfif'
import Navbar from '../layout/Navbar'
import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white p-4 z-10">
        <h6 className="text-md font-playfair text-[#D4A853] font-semibold mb-2 mt-9 uppercase">
          New collection 2026
        </h6>
        <h1 className="text-4xl font-playfair md:text-7xl font-bold mb-4">
          Elevate Your <br className="hidden md:block" /> Everyday Essentials
        </h1>
        <p className="text-lg md:text-xl text-center font-light mb-8 mt-4 max-w-sm md:max-w-xl">
          Discover our curated selection of thoughtfully designed products that
          blend form, function, and uncompromising quality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-sm">
          <Link to="/products">
            <Button variant="primary" size="large">
              Shop Now
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="blur" size="large">
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
