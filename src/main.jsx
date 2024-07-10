import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'
import './index.css'
import Sllaybus from './Routes/syllabus';
import Cho from './Routes/cho';
import Impq from './Routes/impq';
import Notes from './Routes/notes';
import Resource from './Routes/resource';
import Updates from './Routes/updates';

const mainPage = createBrowserRouter([
  {
    
    children:[{
      path: "/",
      element: <Home/>,
      },{
        path:"/sllaybus",
        element : <Sllaybus/>
      },
      {
        path:"/impq",
        element : <Impq/>
      },
      {
        path:"/notes",
        element : <Notes/>
      },
      {
        path:"/cho",
        element : <Cho/>
      },
      {
        path:"/resource",
        element : <Resource/>
      },
      {
        path:"/updates",
        element : <Updates/>
      },
      {
        path:"/:Random",
        element : <Home/>
      }]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Home/>
  </React.StrictMode>
)
