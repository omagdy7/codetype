import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import './index.css'
import SignupForm from './pages/SignUpPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/settings",
    element: <SettingsPage />
  },
  {
    path: "/signup",
    element: <SignupForm />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
