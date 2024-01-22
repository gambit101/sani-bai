import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Home from './Home/Home';
import About from './Home/About';
import App from './App';
// import About from './Home/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: 'about',
    element: <About></About>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
