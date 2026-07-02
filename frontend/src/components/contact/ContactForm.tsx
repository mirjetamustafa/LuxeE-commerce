import Button from '../ui/Button'
import Input from '../ui/Input'
import Select from '../ui/Select'
import Textarea from '../ui/Textarea'

const ContactForm = () => {
  return (
    <div>
      <h4 className="font-bold font-playfair text-xl md:text-2xl mb-6">
        Send us a Message
      </h4>

      <form className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            label="First Name*"
            type="text"
            variant="default"
            inputSize="md"
          />
          <Input
            label="Last Name*"
            type="text"
            variant="default"
            inputSize="md"
          />
        </div>
        <Input
          label="Email Address*"
          type="email"
          variant="default"
          inputSize="md"
        />

        <Select
          label="Subject"
          name="subject"
          value=""
          options={[
            { value: 'generalInquiry', label: 'General Inquiry' },
            { value: 'orderStatus', label: 'Order Status' },
            { value: 'returns&exchanges', label: 'Returns & Exchanges' },
            { value: 'productInformation', label: 'Product Information' },
            { value: 'press&partnerships', label: 'Press & Partnerships' },
          ]}
          onChange={(value) => console.log(value)}
        />
        <Textarea
          label="Message"
          name="message"
          value=""
          rows={6}
          onChange={(e) => console.log(e)}
        />
        <div className="mt-5">
          <Button type="submit" variant="default" size="medium">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
