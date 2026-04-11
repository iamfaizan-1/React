import React from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {
const navigate = useNavigate()
const gotoabout=()=>{
  navigate('/about')
}
 
  return (
    <div>Home page

<button onClick={gotoabout} >About page</button>

    </div>
  )
}

export default Home