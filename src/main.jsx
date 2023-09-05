import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/navmenu';
import LoginForm from './components/forms/loginForm';
import RegisterForm from './components/forms/registerForm';
import { Helmet } from 'react-helmet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavMenu />,
    children: [
      {
        path: '/login',
        element: <LoginForm/>
      },
      {
        path: '/registro',
        element: <RegisterForm/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin
      />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Roboto+Slab:wght@400;500;600;700&display=swap"
        rel="stylesheet" />
    </Helmet>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);