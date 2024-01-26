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
import AboutPage from './Home/AboutPage';
import Services from './Home/Services';
import Portfolio from './Home/Portfolio';
import SignIn from './Home/SignIn';
import PopUp from './Home/PopUp';
// import About from './Home/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: 'about',
    element: <About></About>
  },
  {
    path: 'aboutPage',
    element: <AboutPage></AboutPage>
  },
  {
    path: 'services',
    element: <Services></Services>
  },
  {
    path: 'portfolio',
    element: <Portfolio></Portfolio>
  },
  {
    path: 'signin',
    element: <SignIn></SignIn>
  },
  {
    path: 'popUp',
    element: <PopUp></PopUp>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
