import Input from '../../components/ui/Input'
import Textarea from '../../components/ui/Textarea'
import Select from '../../components/ui/Select'
import Button from '../../components/ui/Button'

import Checkboxes from '../../components/ui/Checkboxes'
import { useProducts } from '../../hooks/useProducts'
import { useParams } from 'react-router-dom'
import { useCategories } from '../../hooks/useCategories'
import { useCreateProduct } from '../../hooks/useCreateProduct'

const EditProduct = () => {
  const { id } = useParams()
  const { products } = useProducts()
  const { categories } = useCategories()

  const product = products.find((p) => p._id === id)

  const { form, handleChange, handleFileChange, handleSubmit } =
    useCreateProduct(product || null)

  if (!product) {
    return <p className="p-5">Loading product...</p>
  }

  return (
    <div className="max-w-5xl mx-auto flex gap-7 w-full">
      <div className="w-full">
        <h3 className="text-2xl font-bold"> Edit Product</h3>
        <form
          onSubmit={handleSubmit}
          className="border border-gray-200 rounded-md bg-white space-y-5 mt-9 p-5"
        >
          <h5 className="text-xl font-bold">General Information</h5>
          <div className="">
            <Input
              label="Product Name"
              name="title"
              variant="addProducts"
              placeholder="e.g Classic White T-Shirt"
              value={form.title}
              onChange={handleChange}
            />
            <Textarea
              label="Description"
              name="description"
              placeholder="Describe your product..."
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-3">
            <Input
              label="Price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              variant="addProducts"
              placeholder="0"
              leftIcon="$"
              value={form.price}
              onChange={handleChange}
            />
            <Input
              label="Compare-at Price"
              name="compareAtPrice"
              type="number"
              min="0"
              step="0.01"
              variant="addProducts"
              placeholder="0"
              leftIcon="$"
              value={form.compareAtPrice}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-3">
            <Input
              label="SKU (Stock Keeping Unit) "
              name="sku"
              type="text"
              variant="addProducts"
              placeholder="e.g APP-TSH-WHT-M"
              value={form.sku}
              onChange={handleChange}
            />
            <Input
              label="Quantity in Stock *"
              name="stock"
              type="number"
              min="0"
              step="1"
              variant="addProducts"
              placeholder="0"
              value={form.stock}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-3">
            <div className="w-full">
              <Select
                label="Status"
                name="status"
                options={[
                  { value: 'active', label: 'Active' },
                  { value: 'draft', label: 'Draft' },
                ]}
                value={form.status}
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
              <Select
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                options={categories.map((c) => ({
                  value: c._id,
                  label: c.name,
                }))}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Checkboxes
              id="isBestSeller"
              name="isBestSeller"
              label="Best Seller"
              checked={form.isBestSeller}
              onChange={handleChange}
            />
            <Checkboxes
              id="isSale"
              name="isSale"
              label="On Sale"
              checked={form.isSale}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <Input
              type="file"
              name="image"
              variant="addProducts"
              onChange={handleFileChange}
            />
            <Input
              type="file"
              variant="addProducts"
              name="hoverImage"
              onChange={handleFileChange}
            />
          </div>

          <Button type="submit" variant="admin" size="medium" fullWidth>
            Update Product
          </Button>
        </form>
      </div>
    </div>
  )
}

export default EditProduct
