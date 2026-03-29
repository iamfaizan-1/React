import React from 'react'
import { Link, Outlet } from 'react-router'
function Dashboard() {
  return (
    <div>Dashboard
<nav>

    <Link to="" >Home</Link>
    <Link to="" >About</Link>
    <Link to="" >Contact</Link>
  
</nav>



<Outlet/>
    </div>
  )
}

export default Dashboard