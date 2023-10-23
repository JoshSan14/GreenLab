import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/navmenu';
import LoginForm from './components/forms/loginForm';
import RegisterForm from './components/forms/registerForm';
import { Helmet } from 'react-helmet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnalisisSuelosQC from './pages/analisis/analisisSuelosQC';
import AnalisisSuelosQCTXT from './pages/analisis/analisisSuelosQC+TXT';
import AnalisisFoliarQC from './pages/analisis/analisisFoliarQC';
import AnalisisFoliarQCBS from './pages/analisis/analisisFoliarQC+B+S';
import AnalisisFoliarQCMO from './pages/analisis/analisisFoliarQC+MO';


const router = createBrowserRouter([
  {
    path: '/',
    element: <NavMenu />,
    children: [
      {
        path: '/login',
        element: <LoginForm />
      },
      {
        path: '/registro',
        element: <RegisterForm />
      },
      {
        path: '/analisis',
        children: [
          {
            path: '/analisis/suelos/qc',
            element: <AnalisisSuelosQC />
          },
          {
            path: '/analisis/suelos/qctxt',
            element: <AnalisisSuelosQCTXT />
          },
          {
            path: '/analisis/foliar/qc',
            element: <AnalisisFoliarQC />
          }
          ,
          {
            path: '/analisis/foliar/qcbs',
            element: <AnalisisFoliarQCBS />
          }
          ,
          {
            path: '/analisis/foliar/qcmo',
            element: <AnalisisFoliarQCMO />
          }
        ]
      }
    ]
  }
])

function Head() {
  return (
    <Helmet>
      <link rel="stylesheet" href="src/styles.css"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Roboto+Slab:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
      <link rel="stylesheet" href="src/styles.css"></link>
    </Helmet>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Head/>
    <RouterProvider router={router} />
  </React.StrictMode>
);