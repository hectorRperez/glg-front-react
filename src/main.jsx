import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Carriers from "./pages/Carriers";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shippers from './pages/Shippers';



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
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
