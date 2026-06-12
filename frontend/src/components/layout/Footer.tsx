import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import Input from '../ui/Input'
import { ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-1">
          <div>
            <div className="text-2xl font-bold font-playfair uppercase text-gray-200 mb-6">
              <Link to="/">
                Luxe<span className="text-[#D4A853]">.</span>
              </Link>
            </div>
            <p className="pr-9 md:pr-5 text-gray-400 text-sm mb-6 leading-relaxed">
              Curating the finest minimalist essentials for your everyday life.
              Quality over quantity, always.
            </p>
            <div className="flex gap-5">
              <Link
                to="https://instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-[#D4A853]"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                to="https://facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-[#D4A853]"
              >
                <FaFacebook size={20} />
              </Link>

              <Link
                to="https://x.com"
                target="_blank"
                className="text-gray-400 hover:text-[#D4A853]"
              >
                <SiX size={17} />
              </Link>

              <Link
                to="https://youtube.com"
                target="_blank"
                className="text-gray-400 hover:text-[#D4A853]"
              >
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-playfair tracing-wider uppercase mb-6 text-white">
              Shop
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/electronics"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/clothing"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  to="/health&beauty"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  Health & Beauty
                </Link>
              </li>
              <li>
                <Link
                  to="/home&living"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  Home & Living
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  All products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracing-wider uppercase mb-6 text-white font-playfair">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contactUs"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/trackOrder"
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracing-wider uppercase mb-6 text-white font-playfair">
              newsletter
            </h3>
            <p className="pr-9 md:pr-5 text-gray-400 text-sm mb-6 leading-relaxed">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <Input
              inputSize="md"
              variant="default"
              placeholder="Enter your email address"
              rightIcon={
                <ArrowRight className="hover:text-[#D4A853]" size={20} />
              }
              className="bg-[#333333] text-gray-200 rounded-none"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#4d4d4d] pt-8 mt-12 ">
          <p className="text-xs text-gray-500 mb-2">
            © 2026 LUXE. All rights reserved.
          </p>

          <div className="flex space-x-5">
            <div className="text-xs text-gray-500 hover:text-white">
              <Link to="">Privacy Policy</Link>
            </div>
            <div className="text-xs text-gray-500 hover:text-white">
              <Link to="">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
