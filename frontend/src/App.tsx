import { ToastContainer } from 'react-toastify'

import { AuthProvider } from './lib/AuthContext'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
