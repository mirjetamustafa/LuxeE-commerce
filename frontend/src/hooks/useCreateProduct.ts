import { useEffect, useState } from 'react'
import type React from 'react'
import { toast } from 'react-toastify'
import { createProduct, updateProduct } from '../api/products/product'
import type { CreateProductInput, Product } from '../api/products/product.types'

type CategoryInput = string | { _id: string } | null | undefined

const initialForm: CreateProductInput = {
  title: '',
  description: '',
  price: 0,
  compareAtPrice: 0,
  sku: '',
  status: 'draft',
  image: null,
  hoverImage: null,
  category: '',
  stock: 0,
  isBestSeller: false,
  isSale: false,
}

export const useCreateProduct = (initialProduct?: Product | null) => {
  const [form, setForm] = useState<CreateProductInput>(initialForm)

  const getCategoryId = (category: CategoryInput): string => {
    if (!category) return ''
    if (typeof category === 'object' && '_id' in category) {
      return category._id
    }
    return category
  }

  useEffect(() => {
    if (initialProduct) {
      setForm({
        title: initialProduct.title || '',
        description: initialProduct.description || '',
        price: initialProduct.price || 0,
        compareAtPrice: initialProduct.compareAtPrice || 0,
        sku: initialProduct.sku || '',
        status: initialProduct.status || 'draft',
        category: getCategoryId(initialProduct.category),
        stock: initialProduct.stock || 0,
        isBestSeller: initialProduct.isBestSeller || false,
        isSale: initialProduct.isSale || false,
        image: null,
        hoverImage: null,
      } as CreateProductInput)
    } else {
      setForm(initialForm)
    }
  }, [initialProduct])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = e.target as HTMLInputElement
    const { name, value, type, checked } = target

    setForm((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : name === 'price' || name === 'compareAtPrice' || name === 'stock'
            ? Number(value)
            : value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target

    if (!files || files.length === 0) return

    setForm((prev) => ({
      ...prev,
      [name]: files[0],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      Object.entries(form).forEach(([key, value]) => {
        if (value === null || value === undefined) return

        if (value instanceof File) {
          formData.append(key, value)
        } else {
          formData.append(key, String(value))
        }
      })

      if (initialProduct) {
        await updateProduct(initialProduct._id, formData)
        toast.success('Product updated successfully')
      } else {
        await createProduct(formData)
        toast.success('Product added succesfully!')
      }
      setForm(initialForm)
    } catch (error) {
      console.error('Error creating product:', error)
      toast.error('Failed to create product')
    }
  }

  return {
    form,
    setForm,
    handleSubmit,
    handleChange,
    handleFileChange,
  }
}
