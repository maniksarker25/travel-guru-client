import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route.jsx'
import StyleProvider from './Provider/StyleProvider/StyleProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <StyleProvider> <RouterProvider router={router} ></RouterProvider></StyleProvider>
  </React.StrictMode>,
)
