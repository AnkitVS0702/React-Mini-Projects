import React from 'react'
import { useState } from 'react'
import Layout from './Layout.jsx'
import './App.css'
import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

function App() {

  // 
  
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route 
      loader={githubInfoLoader}
      path='github/:myId' 
      element={<Github />}
       />
    </Route>
  )
)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
