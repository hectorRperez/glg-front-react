import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Custom components
import Home from './pages/Home'
import Carriers from "./pages/Carriers";
import Shippers from './pages/Shippers';
import AboutUs from "./pages/AboutUs";
import Jobs from './pages/Jobs';


/**
* Custom Button
* @param {Object} router it is an object for configured the router of the page
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/carriers",
    element: <Carriers />
  },
  {
    path: "/shippers",
    element: <Shippers />
  },
  {
    path: "/aboutUs",
    element: <AboutUs />
  },
  {
    path: "jobs",
    element: <Jobs />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
