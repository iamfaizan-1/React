import {useEffect, useState} from 'react'

function First() {

const[count, setCount] = useState(0)

// useEffect(()=>{
// console.log("use effect is running")
// })


// useEffect(()=>{
// console.log("use Effect is running")
// },[])


// useEffect(()=>{
// console.log("use Effect is running")
// },[count])




useEffect(()=>{

document.title = `Count: ${count}`
    console.log("use Effect is running")


}, [count])

  return (
    <div>
<h2>Count:{count}</h2>
<button onClick={()=> setCount(count+1)} >Increment</button>

    </div>
  )
}

export default First