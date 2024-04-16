import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

     
    <AuthProviders>
        <HelmetProvider><RouterProvider router={routes} /></HelmetProvider>
      
    </AuthProviders>
  </React.StrictMode>,
)
