import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'

const random = gsap.utils.random(-500,500,100,true)
const random2 = gsap.utils.random(-360,360,30,true)
function Button() {

const [move, setMove] = useState(0)
const [rotate,setRotate] = useState(0)

useGSAP(()=>{

gsap.to('.circle',{
    x:move,
    duration:2,
rotation:rotate
})

},[move,rotate])

  return (
    <div className="flex flex-col items-center justify-center ">

<button onClick={()=> {
    setMove(random)
   setRotate(random2)
}} className="bg-green-400 font-semibold rounded-sm " >
    Animate
</button>

<div className="circle rounded-sm bg-blue-400 h-30 w-30">

</div>

    </div>
  )
}

export default Button