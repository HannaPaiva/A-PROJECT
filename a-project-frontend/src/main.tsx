import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Cart } from './views/Cart';
import { Catalog } from './views/Catalog';
 
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App/>,
  },
 
]);
 
 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
 
