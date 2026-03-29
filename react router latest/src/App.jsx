import React from 'react'
import { BrowserRouter, Routes, Route, Link,useParams } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {
  
  function User(){
    const {id} = useParams()

    return(
      <h2>The user is :{id}</h2>
    )
  }
  
  
  return (
    <BrowserRouter>
    

<nav>
  <Link to="/" >Home</Link>
  <Link to="/about" >About</Link>
  <Link to="/contact" >Contact</Link>
  <Link to="/user/10" >User</Link>
</nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:id' element={<User/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App