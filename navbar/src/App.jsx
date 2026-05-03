import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Layout from './Layout'

function App() {
  return (
  
<BrowserRouter>
<Routes>
  <Route element={<Layout/>} >
<Route path='/'  element = {<Home/>} />
<Route path='/about'  element = {<About/>} />
<Route path='/contact'  element = {<Contact/>} />

</Route>
</Routes>
</BrowserRouter>


  )
}

export default App