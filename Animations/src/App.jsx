import React from 'react'
// import { motion } from 'framer-motion'

import "./App.css"
import {gsap} from "gsap";
import { useGSAP } from '@gsap/react'






function App() {
// 1. gsap.to

// useGSAP(() => {
//     gsap.to("#box-1", {
//       x: 100,
//       duration: 2,
//       repeat: -1,
//       yoyo:true,
//       rotation:360,
//       ease: 'elastic'
//     });
//   });

// 2. gsap.from

// useGSAP(()=>{
//   gsap.from("#box-1",{
//     x:200,
//     duration:2,
//     repeat:-1,
//     ease:"elastic",
//     rotation:180,
//     yoyo:true

//   })
// })

// 3. gsap.fromTo

// useGSAP(()=>{
// gsap.fromTo('#box-1',{

//   x:0,
//   rotation:0,
//   borderRadius:"0%",

// },{
// x:200,
// rotation:360,
// duration:2,
// borderRadius:"100%",
// ease:"bounce",
// yoyo:true,
// repeat:-1


// })
// },[])


// 4. gsap.timeline

const timeline = gsap.timeline(
{
  yoyo:true,
  repeat:-1,
  repeatDelay:1
}
)

useGSAP(()=>{
timeline.to('#box-1',{
  x:150,
  duration:1,
  borderRadius:"100%",
  ease:"back.inOut",
  rotation:"360"
}),


timeline.to('#box-1',{

  x:250,
  duration:1,
  borderRadius:"8%",
  rotation:"360",
  ease:"back.inOut"
  
})



},[])



  return (
    <div className="h-screen  ">

{/* <div  className="main">
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


<motion.div  className="myDiv2"

initial ={
  {
    scale : 0
  }

  
}

whileHover ={{
scale:3
  }}

  animate={{
    scale:2,
    transition:{
      duration:2
    }
  }}
>

  </motion.div>
</div> */}


{/* gsap animations */}

<div id="box-1" className="box w-[100px] h-[100px] flex justify-center items-center bg-blue-500 rounded-sm">
  hello
</div>

    </div>
  )
}

export default App