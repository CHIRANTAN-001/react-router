import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Profile from './components/Profile/Profile.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInforLoader } from './components/Github/Github.jsx'
import Shadcn from './components/Shadcn/Shadcn.jsx'
import Placeholder from './components/Placeholder/Placeholder.jsx'
import PlaceholderById from './components/PlaceholderById/PlaceholderById.jsx'


const GithubComponent = lazy(() => import('./components/Github/Github.jsx'))

const isAuthenticated = false

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
      <Route
        loader={githubInforLoader}
        path='github' 
        element={<GithubComponent />} />
      
      <Route path='profile' element={<Profile />} />

      <Route path='shadcn' element={<Shadcn />} />

      <Route path='placeholder' element={<Placeholder />} />
      
      <Route path='placeholder/:id' element={<PlaceholderById/>} />


      <Route path='*' element={<div>Not found</div>} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
