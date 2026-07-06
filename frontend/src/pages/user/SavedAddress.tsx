import { Plus } from 'lucide-react'

const SavedAddress = () => {
  return (
    <div className="bg-white p-6 shadow-xs my-20 min-h-[500px]">
      <div className="flex justify-between">
        <h2 className="text-xl md:text-2xl font-bold font-playfair mb-4">
          Saved Addresses
        </h2>
        <button className="flex items-center gap-1 cursor-pointer text-[#D4A853] font-medium text-sm hover:text-[#C09A4A]">
          <Plus className="w-4 h-4" />
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-between border border-[#C09A4A] p-5">
          <div className="">
            <h3 className="font-medium font-playfair mb-2">Jane Doe</h3>
            <p className="text-sm text-gray-600 mb-1">123 Design Avenue</p>
            <p className="text-sm text-gray-600 mb-1">Apt 4B</p>
            <p className="text-sm text-gray-600 mb-4">New York, NY 10001</p>
            <div className="flex gap-3">
              <button className=" cursor-pointer text-gray-800  text-sm hover:text-[#C09A4A]">
                Edit
              </button>
              <button className=" cursor-pointer text-red-600  text-sm hover:text-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="">
            <span className="text-white text-xs top-4 font-bold px-2 py-1 right-4 bg-[#D4A853] uppercase">
              default
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedAddress
