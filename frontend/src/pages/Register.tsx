import { NavLink } from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const Register = () => {
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
        <form action="" className="space-y-4">
          <Input variant="login" inputSize="lg" type="text" label="Full Name" />
          <Input
            variant="login"
            inputSize="lg"
            type="email"
            label="Email Address"
          />
          <Input
            variant="login"
            inputSize="lg"
            type="password"
            label="Password"
          />

          <Button variant="default" size="medium" fullWidth>
            Create Account
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Register
