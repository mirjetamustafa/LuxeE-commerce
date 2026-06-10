import { ArrowRight } from 'lucide-react'

import { Link } from 'react-router-dom'

interface Category {
  title: string
  image: string
  link: string
}

const CategoryCard = ({ item }: { item: Category }) => {
  return (
    <Link
      to={item.link}
      className="group relative w-full overflow-hidden cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute bottom-5 left-5 text-white">
        <h2 className="text-2xl font-semibold font-playfair">{item.title}</h2>

        <div className="mt-2 inline-flex items-center gap-2">
          <span className="text-sm font-semibold group-hover:text-[#D4A853]">
            Shop Collection
          </span>

          <span className="opacity-0 translate-x-[-5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#D4A853]">
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
