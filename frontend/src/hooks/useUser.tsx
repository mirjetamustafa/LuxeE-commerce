import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import type { LoginInput } from '../api/User/user.types'
import { useAuth } from '../lib/AuthContext'
import type { AxiosError } from 'axios'

const initialFormLogin: LoginInput = {
  email: '',
  password: '',
}

export const useUser = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState<LoginInput>(initialFormLogin)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      toast.error('Please fill all fields')
      return
    }

    try {
      const response = await login(formData)
      toast.success('Login Successfully!')
      if (response.isAdmin) {
        navigate('/admin')
      } else {
        navigate('/user')
      }
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>
      toast.error(err?.response?.data?.message || 'Login failed')
    }
  }

  return { formData, handleChange, handleSubmit, setFormData }
}
