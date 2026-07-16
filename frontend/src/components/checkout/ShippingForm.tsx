import type { ShippingAddress } from '../../api/order/order.types'
import Button from '../ui/Button'
import Input from '../ui/Input'

interface ShippingFormProps {
  setStep: (step: number) => void
  shippingAddress: ShippingAddress
  setShippingAddress: (data: ShippingAddress) => void
}

const ShippingForm = ({
  setStep,
  setShippingAddress,
  shippingAddress,
}: ShippingFormProps) => {
  return (
    <div className="p-9">
      <h2 className="text-lg md:text-xl font-bold font-playfair mb-8">
        Shipping Information
      </h2>

      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault()
          setStep(2)
        }}
      >
        <div className="flex flex-col md:flex-row gap-3">
          <Input
            name="firstName"
            label="First Name *"
            variant="login"
            placeholder="Jane"
            required
            value={shippingAddress.firstName}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                firstName: e.target.value,
              })
            }
          />
          <Input
            name="lastName"
            label="Last Name *"
            variant="login"
            placeholder="Doe"
            required
            value={shippingAddress.lastName}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                lastName: e.target.value,
              })
            }
          />
        </div>
        <Input
          name="email"
          label="Email Address *"
          variant="login"
          placeholder="janedoe@gmail.com"
          value={shippingAddress.email}
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              email: e.target.value,
            })
          }
        />

        <Input
          name="phone"
          label="Phone Number"
          variant="login"
          placeholder=""
          required
          value={shippingAddress.phone}
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              phone: e.target.value,
            })
          }
        />

        <Input
          name="streetAddress"
          label="Street Address *"
          variant="login"
          placeholder=""
          required
          value={shippingAddress.streetAddress}
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              streetAddress: e.target.value,
            })
          }
        />
        <div className="flex flex-col md:flex-row gap-3">
          <Input
            name="city"
            label="City *"
            variant="login"
            placeholder=""
            required
            value={shippingAddress.city}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                city: e.target.value,
              })
            }
          />
          <Input
            name="state"
            label="State *"
            variant="login"
            placeholder=""
            required
            value={shippingAddress.state}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                state: e.target.value,
              })
            }
          />
          <Input
            name="zipCode"
            label="ZIP Code *"
            variant="login"
            placeholder=""
            required
            value={shippingAddress.zipCode}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                zipCode: e.target.value,
              })
            }
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="medium"
          // onClick={() => {
          //   setShippingAddress(shippingAddress)
          //   setStep(2)
          // }}
          fullWidth
        >
          Continue to Payment
        </Button>
      </form>
    </div>
  )
}

export default ShippingForm
