import React from 'react'
import Header from './Components/Header'

function App() {
  
  //1st  method of styling
  const headingStyle = {
    color:"black",
    backgroundColor:"skyblue"
  }
  
  
  
  return (
    <div>
<h1 style={headingStyle} >My name is faizan</h1>
<Header/>



    </div>
  )
}

export default App