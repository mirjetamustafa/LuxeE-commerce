import Input from './components/ui/Input'
import { Search } from 'lucide-react'

const App = () => {
  return (
    <div className="grid grid-cols-2 gap-5 p-5">
      <Input label="Email" type="email" placeholder="Enter your email" />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <Input
        type="search"
        placeholder="Search products..."
        leftIcon={<Search size={18} />}
      />

      <Input label="City" type="name" placeholder="Enter your city" />
    </div>
  )
}

export default App
