import Button from '../ui/Button'

interface ReviewOrderProps {
  setStep: (step: number) => void
}
const ReviewOrder = ({ setStep }: ReviewOrderProps) => {
  return (
    <div className="p-9">
      <h2 className="text-lg md:text-xl font-bold font-playfair mb-8">
        Review Your Order
      </h2>
      <div className="border-b border-gray-300 pb-6">
        <h4 className="font-medium font-playfair">Shipping Address</h4>
        <div className="mt-3 text-sm text-[#333333]">
          <p>Jane Doe</p>
          <p>Mirali Sejdiu</p>
          <p>Viti, Kosovo 1xxx</p>
          <p>mustafamirjeta11@gmail.com</p>
        </div>
      </div>

      <div className="border-b border-gray-300 pb-6">
        <h4 className="font-medium font-playfair mt-5">Payment Method</h4>
        <div className="mt-3 text-sm text-[#333333]">
          <p>Card ending in 3456</p>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="font-medium font-playfair mt-5">Order Items</h4>
        <div className="flex justify-between mt-3 text-sm ">
          <p className="text-[#333333]">Hydrating Facial Serum × 1</p>
          <p className="font-medium">$48.00</p>
        </div>
        <div className="flex justify-between mt-3 text-sm ">
          <p className="text-[#333333]">Minimalist Wireless Headphones × 1</p>
          <p className="font-medium">$249.99</p>
        </div>
        <div className="flex justify-between mt-3 text-sm ">
          <p className="text-[#333333]">Minimalist Leather Tote × 1</p>
          <p className="font-medium">$48.00</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-7">
        <Button
          variant="secondary"
          size="large"
          fullWidth
          onClick={() => setStep(2)}
        >
          Back
        </Button>
        <Button
          variant="primary"
          size="large"
          fullWidth
          onClick={() => setStep(3)}
        >
          Review Order
        </Button>
      </div>
    </div>
  )
}

export default ReviewOrder
