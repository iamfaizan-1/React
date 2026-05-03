import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom'


const Navlinks = ()=>{
    return(

        <>
<NavLink to={"/"} >Home</NavLink>
<NavLink to={"/about"} >About</NavLink>
<NavLink to={"/contact"} >Contact</NavLink>
        </>
    )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative">
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 items-center">
          <Navlinks />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center z-50">
          <button onClick={toggler} className="text-3xl focus:outline-none">
            {isOpen ? <RxCross2 className="text-amber-500" /> : <GiHamburgerMenu className="text-amber-500" />}
          </button>
        </div>
      </nav>

      {/* Professional Mobile Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-2xl font-semibold text-amber-500" onClick={toggler}>
          <Navlinks />
        </div>
      </div>
    </>
  );
}

export default Navbar