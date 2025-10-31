import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import App from './pages/App.jsx'
import CV from './pages/CV.jsx'
import Projects from './pages/Projects.jsx'
import Hockey from './pages/Hockey.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cv", element: <CV /> },
  { path: "/projets", element: <Projects /> },
  { path: "/hockey", element: <Hockey /> },
  { path: "*", element: <NotFound /> }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
