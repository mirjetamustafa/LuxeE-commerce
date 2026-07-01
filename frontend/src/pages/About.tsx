import AboutHeroSection from '../components/about/AboutHeroSection'
import OurCoreValue from '../components/about/OurCoreValue'
import OurStory from '../components/about/OurStory'

const About = () => {
  return (
    <div className="mt-20 ">
      <AboutHeroSection />
      <OurStory />
      <OurCoreValue />
    </div>
  )
}

export default About
