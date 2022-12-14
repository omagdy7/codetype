import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import AboutPage from './pages/AboutPage'
import './index.css'

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
    path: "/profile",
    element: <ProfilePage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
