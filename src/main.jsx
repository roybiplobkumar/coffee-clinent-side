import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/MainLayOut/Layout.jsx';
import Addcoffe from './Components/Pages/Addcoffe.jsx';
import Showcoffe from './Components/Pages/Showcoffe.jsx';
import Update from './Components/Pages/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children: [
      {
        path: "/addcoffee",
        element: <Addcoffe />,
      },
      {
        path: "/showcoffe",
        element: <Showcoffe />,
        loader: ()=> fetch("http://localhost:5000/addcoffee")
      },{
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({params})=>fetch(`http://localhost:5000/addcoffee/${params.id}`)
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,      
)
