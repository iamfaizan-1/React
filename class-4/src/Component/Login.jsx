import React, { useState } from 'react'

function Login() {
  
  const [emailValue,setEmailValue] = useState("");
  const[passValue,setPassValue] = useState("")
  
  function handleEmailValue(e){

    setEmailValue(e.target.value)

  }
function handlePassValue(e){
    setPassValue(e.target.value)
}  
  

function handleSubmit(e){

    e.preventDefault()
console.log("email value ==>",emailValue)

console.log("password value ==>",passValue)

setEmailValue("")
setPassValue("")



}
    return (
    <div>

<form className='myForm' onSubmit={handleSubmit}>

<div className="myDiv">
    <div className='div1'>
    <label htmlFor="">Email</label>
    <input value={emailValue} type="text" className='input' onChange={handleEmailValue} />
</div>

<div className='div2'>
    <label htmlFor="">Password</label>
    <input  value={passValue} type="text" className='input' onChange={handlePassValue}/>
</div>


<button type='submit' >Register</button>

</div>

</form>


    </div>
  )
}

export default Login