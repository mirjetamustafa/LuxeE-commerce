const OurCoreValue = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 ">
      <h2 className="font-bold font-playfair text-center text-2xl md:text-3xl mb-16">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="flex items-center justify-center font-bold font-playfair text-xl rounded-full bg-[#D4A853]/10 text-[#D4A853] w-12 h-12 mx-auto mb-4">
            01
          </div>
          <h3 className="font-bold text-xl mb-2"> Intentional Design</h3>
          <p className="text-gray-800 px-9">
            We strip away the unnecessary, focusing on clean lines, intuitive
            function, and timeless aesthetics that transcend fleeting trends.
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center font-bold font-playfair text-xl rounded-full bg-[#D4A853]/10 text-[#D4A853] w-12 h-12 mx-auto mb-4">
            02
          </div>
          <h3 className="font-bold text-xl mb-2">Quality</h3>
          <p className="text-gray-800 px-9">
            From the initial sketch to the final stitch, we partner with master
            craftspeople and use premium materials to ensure longevity.
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center font-bold font-playfair text-xl rounded-full bg-[#D4A853]/10 text-[#D4A853] w-12 h-12 mx-auto mb-4">
            03
          </div>
          <h3 className="font-bold text-xl mb-2">Ethics</h3>
          <p className="text-gray-800 px-7">
            We are committed to minimizing our environmental footprint through
            responsible sourcing, ethical manufacturing, and durable products.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurCoreValue
