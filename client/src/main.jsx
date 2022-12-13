import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

const AboutPage = () => {
  return (<h1>About</h1>)
}

const SettingsPage = () => {
  return (<h1>Settings</h1>)
}

const ProfilePage = () => {
  return (<h1>Profile</h1>)
}

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
