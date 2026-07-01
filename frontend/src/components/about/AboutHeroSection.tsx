import about1 from '../../assets/about/about1.jfif'
import about2 from '../../assets/about/about2.jfif'
import about3 from '../../assets/about/about3.jpg'

const AboutHeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 md:py-24 bg-white mb-5">
      <div className=" px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-bold font-playfair text-4xl md:text-6xl mb-6">
          Elevating the <br /> Everyday Experience.
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto ">
          We believe that the objects we interact with daily should bring joy,
          function flawlessly, and stand the test of time.
        </p>
      </div>

      <div className="flex gap-4 justify-center my-9">
        <div className="w-full md:w-2/3">
          <img
            src={about1}
            alt="About Hero"
            className=" w-full h-full object-cover shadow-lg"
          />
        </div>
        <div className="hidden md:flex md:w-1/3 flex-col gap-4">
          <img
            src={about2}
            alt="About Hero"
            className="w-full object-cover shadow-lg"
          />
          <img
            src={about3}
            alt="About Hero"
            className="w-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutHeroSection
