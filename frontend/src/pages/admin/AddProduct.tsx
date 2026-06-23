import { useState } from 'react'
import Input from '../../components/ui/Input'
import Textarea from '../../components/ui/Textarea'
import Select from '../../components/ui/Select'
import Button from '../../components/ui/Button'

const AddProduct = () => {
  const [price, setPrice] = useState('0')
  const [comparePrice, setComparePrice] = useState('0')
  const [stock, setStock] = useState('0')
  return (
    <div className="max-w-5xl mx-auto flex gap-7 w-full">
      <div className="w-full">
        <h3 className="text-2xl font-bold">Add Product</h3>
        <form className="border border-gray-200 rounded-md bg-white space-y-5 mt-9 p-5">
          <h5 className="text-xl font-bold">General Information</h5>
          <div className="">
            <Input
              label="Product Name"
              type="text"
              variant="addProducts"
              placeholder="e.g Classic White T-Shirt"
            />
            <Textarea
              label="Description"
              placeholder="Describe your product..."
            />
          </div>
          <div className="flex gap-3">
            <Input
              label="Price"
              type="number"
              min="0"
              step="0.01"
              variant="addProducts"
              placeholder="0"
              leftIcon="$"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              label="Compare-at Price"
              type="number"
              min="0"
              step="0.01"
              variant="addProducts"
              placeholder="0"
              leftIcon="$"
              value={comparePrice}
              onChange={(e) => setComparePrice(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <Input
              label="SKU (Stock Keeping Unit) "
              type="text"
              variant="addProducts"
              placeholder="e.g APP-TSH-WHT-M"
            />
            <Input
              label="Quantity in Stock *"
              type="number"
              min="0"
              step="1"
              variant="addProducts"
              placeholder="0"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <div className="w-full">
              <Select
                label="Status"
                options={[
                  { value: 'active', label: 'Active' },
                  { value: 'draft', label: 'Draft' },
                ]}
                onChange={(value) => console.log(value)}
              />
            </div>

            <div className="w-full">
              <Select
                label="Category"
                options={[
                  { value: 'electronics', label: 'Electronics' },
                  { value: 'clothing', label: 'Clothng' },
                  { value: 'health&beauty', label: 'Health & Beauty' },
                  { value: 'home&living', label: 'Home & Living' },
                  { value: 'accessories', label: 'Accessories' },
                ]}
                onChange={(value) => console.log(value)}
              />
            </div>
          </div>

          <Input type="file" variant="addProducts" />

          <Button variant="admin" size="medium" fullWidth>
            Add Products
          </Button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
