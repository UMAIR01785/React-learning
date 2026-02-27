import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Github, { githubFunction } from './components/Github/github.jsx'
import User from './components/User/User.jsx'


// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
     
     <Route
     loader={githubFunction}
      path='github' 
      element={<Github/>}/>
      <Route path='user/:id' element={<User/>}/>



    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

  </StrictMode>,
)
