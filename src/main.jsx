import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import AuthProviders from './Providers/Authproviders.jsx'
import { router } from './Routes/Router.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer></ToastContainer>
    </AuthProviders>
  </React.StrictMode>
)
