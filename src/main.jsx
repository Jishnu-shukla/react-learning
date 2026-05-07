import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Children } from 'react'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter } from 'react-router-dom'  
import Layout from './Layout.jsx'
import ReactDOM from 'react-dom/client'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/user/user.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path="github" element={<Github />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
