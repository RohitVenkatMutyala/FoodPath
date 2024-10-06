import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Heart from './heart';
import App from './App';
import Brain from './brain';
import Liver from './liver';
import Intestine from './intestine';
import Lungs from './lungs';
import Stomach from './stomach';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/heart",
    element: <div><Heart /></div>,
  },
  {
    path: "/br",
    element: <div><Brain /></div>,
  },
  {path:"/liver",
    element:<div><Liver/></div>,
  },
  {
    path:"/intestine",
    element:<div>< Intestine/></div>,
  },
  {
    path:"/lungs",
    element:<div>< Lungs/></div>,
  },
  {
    path:"/stomach",
    element:<div>< Stomach/></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);