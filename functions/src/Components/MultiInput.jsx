import React from 'react'
import {useState} from 'react'
function MultiInput() {
  
   
    const[formData,setFormData] = useState({
            email:"",
            password:""
    })
  

    const handleSubmit = (e)=>{
e.preventDefault()
console.log(formData.email)
console.log(formData.password)
    }


    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormData((prev) =>({
            ...prev,
            [name]:value
        }

        ) )
    }
    return (
   
    <div>
<h1>Multi Input form</h1>

        <form onSubmit={handleSubmit}>

<label htmlFor="">Email</label>
<input type="text" name="email"  value={formData.email} onChange={handleChange} />
<br />

<label htmlFor="">Password</label>
<input type="text" name="password"  value={formData.password} onChange={handleChange}/>
<br />
<button type='submit'>Submit</button>
</form>
    </div>
  )
}

export default MultiInput