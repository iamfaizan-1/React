import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

function Header() {
  return (
    <div className=" text-amber-500 sticky top-0 py-5 flex justify-between z-[20] px-4" >

<Logo/>
    <Navbar/>    
    </div>
  )
}  

export default Header  