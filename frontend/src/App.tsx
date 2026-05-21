import Input from './components/ui/Input'
import { Search } from 'lucide-react'
import Textarea from './components/ui/Textarea'
import Button from './components/ui/Button'
import Select from './components/ui/Select'

const App = () => {
  return (
    <form className="w-full">
      <div className="grid grid-cols-1 gap-5 p-5">
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
        <Select
          label="Country"
          options={[
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'uk', label: 'United Kingdom' },
          ]}
          onChange={() => {}}
        />
        <Textarea
          label="Description"
          placeholder="Enter a description"
          rows={6}
        />
      </div>
      <div className="flex justify-center p-5">
        <Button variant="primary" type="submit" size="large">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default App
