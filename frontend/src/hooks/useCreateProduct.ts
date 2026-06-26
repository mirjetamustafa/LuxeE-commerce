import { useState } from 'react'
import type React from 'react'
import { toast } from 'react-toastify'
import { createProduct } from '../api/products/product'
import type { CreateProductInput } from '../api/products/product.types'

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
}

export const useCreateProduct = () => {
  const [form, setForm] = useState<CreateProductInput>(initialForm)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]:
        name === 'price' || name === 'compareAtPrice' || name === 'stock'
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
      formData.append('title', form.title)
      formData.append('description', form.description)
      formData.append('price', String(form.price))
      formData.append('compareAtPrice', String(form.compareAtPrice))
      formData.append('sku', form.sku)
      formData.append('status', form.status)
      formData.append('category', form.category)
      formData.append('stock', String(form.stock))

      if (form.image) {
        formData.append('image', form.image)
      }

      if (form.hoverImage) {
        formData.append('hoverImage', form.hoverImage)
      }

      await createProduct(formData)
      toast.success('Product added succesfully!')
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
