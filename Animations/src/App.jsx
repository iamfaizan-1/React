import React from 'react'
import { motion } from 'framer-motion'

import "./App.css"
function App() {
  return (
    <div>

<div  className="main">
  <motion.div className="myDiv" 
  
  initial={{
    scale:0
  }}

  whileHover={{
    scale:3,
    transition:{
      duration:1.5
    }
  }}
  
  animate={{
scale:2,
transition:{
  duration:2
}

  }}>
  
  
  </motion.div> 

</div>

    </div>
  )
}

export default App