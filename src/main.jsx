import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <AuthProviders>
      <RouterProvider router={routes} />
    </AuthProviders>
  </React.StrictMode>,
)
