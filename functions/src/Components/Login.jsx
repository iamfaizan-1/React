import React, { useState } from 'react'

function Login() {


const[emailValue,setEmailValue] = useState("")
const [passwordValue,setPasswordValue] = useState("")

  const handleEmail = (e)=>{
setEmailValue(e.target.value)

  }

  const handlePassword=(e)=>{
setPasswordValue(e.target.value)
  }
  
  const getValues = (e)=>{
    e.preventDefault()
    console.log(emailValue)
    console.log(passwordValue)

    setEmailValue("")
    setPasswordValue("")
  }
 
  
    return (
    <div>
<form onSubmit={getValues}>

    <h1>This is a login page</h1>

<input type="text" value={emailValue} placeholder='Enter email' onChange={handleEmail} />
<input type="text" value = {passwordValue} placeholder='Enter Password' onChange={handlePassword} />

<button
    type="submit"
    
    onClick={getValues}
>
    Button
</button>
</form>

    </div>
  )
}

export default Login