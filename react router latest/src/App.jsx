import React from 'react'
import { BrowserRouter, Routes, Route, Link,useParams } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Products from './Components/Products'
import Laptop from './Components/Laptop'
import Phone from './Components/Phone'

function App() {
  
  function User(){
    const {id} = useParams()

    return(
      <h2>The user is :{id}</h2>
    )
  }

  function NotFound(){
    return(
      <h1>404 page not found</h1>
    )
  }
  
  
  return (
    <BrowserRouter>
    

<nav>
  <Link to="/" >Home</Link>
  <Link to="/about" >About</Link>
  <Link to="/contact" >Contact</Link>
  <Link to="/user/10" >User</Link>
  <Link to="/products" >Products</Link>
</nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:id' element={<User/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/products' element={<Products/>} >

        <Route path='phone' element={<Phone/>} />
        <Route path='laptop' element={<Laptop/>} />

      </Route>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App