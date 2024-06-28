import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { About, Contact, Github, Home, User } from "./components/index.js";
import { githubLoader } from "./components/Github/Github.jsx";

/* // * Method 1 for routing elements by nesting method
const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact-us',
        element: <Contact />
      }
    ]
  }
])
*/

// * Method 2 for routing elements by nesting method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route 
        loader={githubLoader}
        path="github" 
        element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
