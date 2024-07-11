import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import Home from './Home';
import './index.css';
import Sllaybus from '../src/Routes/syllabus';
import Cho from '../src/Routes/cho';
import Impq from '../src/Routes/impq';
import Notes from '../src/Routes/notes';
import Resource from '../src/Routes/resource';
import Updates from '../src/Routes/updates';

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
<RouterProvider router={mainPage} />
  </React.StrictMode>
)
