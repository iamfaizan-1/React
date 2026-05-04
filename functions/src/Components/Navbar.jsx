import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white relative">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">MySite</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Services</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <HiX/> : <HiMenu/>}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;