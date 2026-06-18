import { NavLink, useNavigate } from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useState } from 'react'
import { registerUser } from '../api/User/user'
import type { RegisterInput } from '../api/User/user.types'
import { toast } from 'react-toastify'

const initialForm: RegisterInput = {
  name: '',
  email: '',
  password: '',
}

const Register = () => {
  const [formData, setFormData] = useState(initialForm)

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await registerUser(formData)
      localStorage.setItem('token', response.token)
      console.log('User created:', response)
      toast.success('User register successfully!')

      navigate('/login')
      setFormData(initialForm)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9F9F9]">
      <div className="bg-white shadow-sm p-8 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-3 bg-gray-100 p-1 rounded-xs">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `font-medium text-[#1a1a1a] duration-300 px-6 py-2 text-sm ${
                  isActive ? 'bg-white' : 'bg-gray-100'
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `font-medium text-[#1a1a1a] duration-300 px-6 py-2 text-sm ${
                  isActive ? 'bg-white' : 'bg-gray-100'
                }`
              }
            >
              Register
            </NavLink>
          </div>
        </div>

        <h2 className="text-2xl font-playfair font-bold text-[#1a1a1a] mb-6 text-center">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            variant="login"
            inputSize="lg"
            type="text"
            label="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            variant="login"
            inputSize="lg"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            variant="login"
            inputSize="lg"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button type="submit" variant="default" size="medium" fullWidth>
            Create Account
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Register
