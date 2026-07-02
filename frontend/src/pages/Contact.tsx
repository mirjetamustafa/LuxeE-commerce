import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import GetInTouch from '../components/contact/GetInTouch'

const Contact = () => {
  return (
    <div className="mt-20 mx-5 md:mx-0">
      <GetInTouch />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto my-16 gap-7">
        <div className="w-full md:w-1/3">
          <ContactInfo />
        </div>
        <div className="w-full md:w-2/3">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
