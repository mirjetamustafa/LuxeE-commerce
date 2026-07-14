import Button from '../ui/Button'
import Input from '../ui/Input'

interface ShippingFormProps {
  setStep: (step: number) => void
}

const ShippingForm = ({ setStep }: ShippingFormProps) => {
  return (
    <div className="p-9">
      <h2 className="text-lg md:text-xl font-bold font-playfair mb-8">
        Shipping Information
      </h2>

      <form className="space-y-5">
        <div className="flex flex-col md:flex-row gap-3">
          <Input
            name="firstName"
            label="First Name *"
            variant="login"
            placeholder="Jane"
          />
          <Input
            name="lastName"
            label="Last Name *"
            variant="login"
            placeholder="Doe"
          />
        </div>
        <Input
          name="email"
          label="Email Address *"
          variant="login"
          placeholder="janedoe@gmail.com"
        />

        <Input
          name="phone"
          label="Phone Number"
          variant="login"
          placeholder=""
        />

        <Input
          name="streetAddress"
          label="Street Address *"
          variant="login"
          placeholder=""
        />
        <div className="flex flex-col md:flex-row gap-3">
          <Input name="city" label="City *" variant="login" placeholder="" />
          <Input name="state" label="State *" variant="login" placeholder="" />
          <Input
            name="zipCode"
            label="ZIP Code *"
            variant="login"
            placeholder=""
          />
        </div>
        <Button
          variant="primary"
          size="medium"
          onClick={() => setStep(2)}
          fullWidth
        >
          Continue to Payment
        </Button>
      </form>
    </div>
  )
}

export default ShippingForm
