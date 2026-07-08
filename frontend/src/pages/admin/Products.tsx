import { Edit, Search, Trash } from 'lucide-react'
import Button from '../../components/ui/Button'

import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import { useProducts } from '../../hooks/useProducts'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const { products, loading, handlDelete } = useProducts()

  const navigate = useNavigate()

  if (loading) {
    return <p className="p-5">Loading products...</p>
  }

  return (
    <div className="mt-5">
      <div className="mb-9 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-2xl font-bold ">Products</h3>
          <p className="text-gray-500 mt-1">
            Manage your inventory and product catalog.
          </p>
        </div>
        <Button
          variant="next"
          size="small"
          onClick={() => navigate('/admin/add-product')}
        >
          Add Product
        </Button>
      </div>

      <div className="flex items-center gap-2 bg-white rounded-xl p-5 mb-9">
        <div className="flex-1 mt-1">
          <Input
            variant="addProducts"
            placeholder="Search products by name or SKU..."
            leftIcon={<Search size={18} />}
          />
        </div>
        <div className="flex gap-2 ">
          <Select
            label=""
            options={[
              { value: 'all', label: 'All' },
              { value: 'active', label: 'Active' },
              { value: 'draft', label: 'Draft' },
            ]}
            onChange={(value) => console.log(value)}
          />

          <Select
            label=""
            options={[
              { value: 'all', label: 'All' },
              { value: 'electronics', label: 'Electronics' },
              { value: 'clothing', label: 'Clothing' },

              { value: 'health&beauty', label: 'Health & Beauty' },
              { value: 'home&living', label: 'Home & Living' },
              { value: 'accessories', label: 'Accessories' },
            ]}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>

      <div className="bg-white overflow-auto md:overflow-hidden shadow-xs rounded-2xl">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
            <tr>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-5 py-4">Price</th>
              <th className="px-5 py-4">Inventory</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {products.map((prod) => (
              <tr key={prod._id} className="bg-white group hover:bg-gray-50">
                <td className="px-6 py-4  last:rounded-b-3xl">
                  <div className="flex items-center gap-3 ">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={`http://localhost:5000/uploads/${prod.image}`}
                        alt=""
                        className="rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">
                        {prod.title}
                      </span>
                      <span className="text-xs text-gray-500 uppercase">
                        {prod.sku}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {prod.category?.name}
                </td>
                <td className="px-6 py-4 text-gray-900">${prod.price}</td>

                <td className="px-6 py-4">{prod.stock} in stock</td>
                <td className="px-6 py-4">
                  {' '}
                  {prod.status === 'active' ? (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-600">
                      Draft
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3 text-gray-900 opacity-0 group-hover:opacity-100 transition">
                    <Button
                      variant="edit"
                      onClick={() =>
                        navigate(`/admin/edit-product/${prod._id}`)
                      }
                    >
                      <Edit size={15} />
                    </Button>
                    <Button
                      variant="delete"
                      onClick={() => handlDelete(prod._id)}
                    >
                      <Trash size={15} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between px-5 py-3 border border-gray-200">
          <p className="text-sm text-gray-500">
            Showing {products.length} products
          </p>
          <div className="flex gap-2">
            <Button variant="next" size="small">
              Previous
            </Button>
            <Button variant="next" size="small">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
