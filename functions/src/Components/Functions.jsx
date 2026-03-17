import React from 'react'

function Functions() {
  
  const getName=()=> "faraz";
  
  const getValue=(event)=>{
console.clear()
console.log(event.target.value);


  }



    return (
    <div>
        Hello {getName()}

       <div> 
        <input type="text" onChange={getValue} />
       </div>
    </div>
  )
}

export default Functions