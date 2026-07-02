import { Clock, Mail, MapPin, MoveRight, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const ContactInfo = () => {
  return (
    <div className="">
      <h4 className="font-bold font-playfair text-xl md:text-2xl mb-6">
        Contact Information
      </h4>

      <div className="flex gap-3 mb-6">
        <MapPin className="w-6 h-6 text-[#D4AF37] mt-1" />
        <div className="">
          <h3 className="font-medium font-playfair">Our Studio</h3>
          <p className="text-sm leading-relaxed">
            123 Design Avenue <br /> Suite 400 <br /> New York, NY 10001
          </p>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <Phone className="w-6 h-6 text-[#D4AF37] mt-1" />
        <div className="">
          <h3 className="font-medium font-playfair">Phone</h3>
          <p className="text-sm leading-relaxed">+1 (555) 123-4567</p>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <Mail className="w-6 h-6 text-[#D4AF37] mt-1" />
        <div className="">
          <h3 className="font-medium font-playfair">Email</h3>
          <p className="text-sm leading-relaxed">info@luxestudio.com</p>
        </div>
      </div>

      <div className="flex gap-3 mb-9">
        <Clock className="w-6 h-6 text-[#D4AF37] mt-1" />
        <div className="">
          <h3 className="font-medium font-playfair">Hours</h3>
          <p className="text-sm leading-relaxed">
            Mon-Fri: 9AM - 6PM EST <br /> Saturday - Sunday: Closed
          </p>
        </div>
      </div>

      <div className="w-90 bg-[#F9F9F9] border border-[#E5E7EB] space-y-2 p-6">
        <h3 className="font-bold font-playfair">Looking for answers</h3>
        <p className="text-sm mb-4">
          Check out our frequently asked questions for quick answers to common
          queries.
        </p>

        <div className="flex gap-1 text-[#D4AF37] hover:text-[#C09A4A] text-sm font-medium">
          <NavLink to="/faq">View FAQ</NavLink>
          <MoveRight className="w-4 h-4 mt-1" />
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
