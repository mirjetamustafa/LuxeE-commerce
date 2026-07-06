import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'

const ProfileSettings = () => {
  return (
    <div className="bg-white p-6 shadow-xs my-20">
      <h2 className="text-xl md:text-2xl font-bold font-playfair mb-4">
        Profile Settings
      </h2>

      <form className="max-w-md space-y-4">
        <Input label="Full Name" variant="login" />
        <Input label="Email Address" type="email" variant="login" />
        <div className="border-t border-gray-200 pt-4 space-y-4">
          <h4 className="text-sm font-medium font-playfair mb-4">
            Change Password
          </h4>
          <Input
            type="password"
            placeholder="Current Password"
            variant="login"
          />
          <Input type="password" placeholder="New Password" variant="login" />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  )
}

export default ProfileSettings
