


import React, { useState } from 'react'

function SimpleForm() {
 
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
 

    const handleSubmit = (e)=>{
e.preventDefault()
setEmail("")
setPassword("")
console.log(email)
console.log(password)
    }
    return (
    <div>
<form onSubmit={handleSubmit}>

<label htmlFor="">Email</label>
<input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
<br />

<label htmlFor="">Password</label>
<input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}/>
<br />
<button type='submit'>Submit</button>
</form>



    </div>
  )
}

export default SimpleForm