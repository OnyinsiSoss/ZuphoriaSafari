import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Contacts from './routes/contacts.jsx'
import Abouut from './routes/abouut.jsx'
import Services from './routes/services.jsx'
import Gallery from './routes/gallery.jsx'

const router = createBrowserRouter([
  {path: '/', element:< App />},
  {path: '/abouut', element:< Abouut />},
  {path: '/contacts', element:< Contacts />},
  {path: '/services', element:< Services />},
  {path: '/gallery', element:< Gallery />},


]);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
