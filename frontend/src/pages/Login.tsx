import { Link, NavLink } from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { loginUser } from '../api/User/user'
import { useEffect } from 'react'

// interface UserLoginData {
//   email: string
//   password: string
// }

const Login = () => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // })

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   try {
  //     const res = await loginUser(formData)
  //     console.log('Login success:', res)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  useEffect(() => {
    loginUser({
      email: 'mustafamirjeta11@gmail.com',
      password: '1234567889',
    })
      .then(console.log)
      .catch(console.error)
  }, [])

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
        <form action="" className="space-y-4">
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
          <div className="text-right text-xs cursor-pointer text-[#1a1a1a] hover:text-[#D4A853]">
            <Link to="">Forgot password?</Link>
          </div>
          <Button variant="default" size="medium" fullWidth>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
