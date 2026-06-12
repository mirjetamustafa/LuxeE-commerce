import { Star } from 'lucide-react'
import costumer1 from '../../assets/images/costumer1.jfif'
import costumer2 from '../../assets/images/costumer2.jfif'
import costumer3 from '../../assets/images/costumer3.jfif'

const OurCustomers = () => {
  const customer = [
    {
      id: 1,
      name: 'Sarah Jenins',
      profession: 'Interior Designer',
      img: costumer1,
      description:
        "The quality of the ceramic pour-over set is exceptional. It's not just functional, it's a beautiful piece of art that sits on my counter.",
    },

    {
      id: 2,
      name: 'Michael Chen',
      profession: 'Creative Director',
      img: costumer2,
      description:
        "I've been searching for the perfect minimalist watch for years. The classic leather watch from LUXE exceeded all my expectations in both design and durability.",
    },
    {
      id: 3,
      name: 'Emma Thompson',
      profession: 'Lifestyle Blogger',
      img: costumer3,
      description:
        'Their organic cotton essentials have completely transformed my wardrobe. The attention to detail and sustainable materials make every purchase feel special.',
    },
  ]
  return (
    <div className="bg-[#F9F9F9] flex flex-col items-center py-12">
      <h2 className="text-[#1a1a1a] text-3xl font-bold font-playfair mb-4">
        What Our Customers Say
      </h2>
      <p className="text-[#333333]">Don't just take our word for it.</p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 py-9 gap-9">
          {customer.map((client) => (
            <div className="bg-white shadow-xs p-9">
              <div className="flex gap-2 mb-5">
                <Star stroke="#D4A853" fill="#D4A853" size={15} />
                <Star stroke="#D4A853" fill="#D4A853" size={15} />
                <Star stroke="#D4A853" fill="#D4A853" size={15} />
                <Star stroke="#D4A853" fill="#D4A853" size={15} />
                <Star stroke="#D4A853" fill="#D4A853" size={15} />
              </div>
              <p className="text-[#1a1a1a] italic mb-8 ">
                "{client.description}"
              </p>
              <div className="flex items-center mt-auto pt-5">
                <img
                  src={client.img}
                  alt=""
                  className="rounded-full w-12 h-12 object-cover mr-4"
                />
                <div>
                  <h4 className="font-playfair font-semibold text-[#1a1a1a]">
                    {client.name}
                  </h4>
                  <p className="text-xs text-gray-500">{client.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurCustomers
