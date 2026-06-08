import React, { useRef } from 'react'
import {gsap} from "gsap"
import { useGSAP } from '@gsap/react'

function Timeline() {


    const titleRef = useRef()

    useGSAP(()=>{
gsap.from(titleRef.current,{
   x:-150,
   opacity:0,
  duration:2,
  ease:'power1.inOut'
})

gsap.from('.list',{
y:-50,
duration:2,
opacity:0,
stagger:0.4
})

    },[])



  return (
    <div className="">

<div className="text-center " ref={titleRef}>
    GSAP tutorial
</div>

      <ul className="flex gap-5">
        <li className="list" >contact</li>
        <li className="list" >about</li>
        <li className="list" >Home</li>
      </ul>


    </div>
  )
}

export default Timeline