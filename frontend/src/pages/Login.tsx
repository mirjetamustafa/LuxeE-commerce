import { Link, NavLink, useNavigate } from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import type { LoginInput } from '../api/User/user.types'
import { useState } from 'react'
import { loginUser } from '../api/User/user'
import { toast } from 'react-toastify'

const initialFormLogin: LoginInput = {
  email: '',
  password: '',
}

const Login = () => {
  const [formData, setFormData] = useState(initialFormLogin)
  const navigate = useNavigate()

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
      const response = await loginUser(formData)
      localStorage.setItem('token', `Bearer ${response.token}`)
      console.log('User Loged in:', response)
      toast.success('Login Successfully!')
      navigate('/user')
    } catch (error) {
      console.error(error)
      toast.error(error?.response?.data?.message || 'Login failed')
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
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="text-right text-xs cursor-pointer text-[#1a1a1a] hover:text-[#D4A853]">
            <Link to="">Forgot password?</Link>
          </div>
          <Button type="submit" variant="default" size="medium" fullWidth>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
