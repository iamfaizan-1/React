import React from 'react'

function Arrayofobjects() {
  const users=[
{
    firstName:"Muhammad",
    lastName:"Faizan",
    age:20
},
{
    firstName:"Muhammad",
    lastName:"Faraz",
    age:23
}
,
{
    firstName:"ahmed",
    lastName:"raza",
    age:22
}


    
  ]

  function getInfo(user){
return user.firstName+" "+user.lastName+" is "+user.age+" years old"
  }
  
    return (
    <div>

<ul>
    {
    users.map((user,index)=>(
        <li>{getInfo(user)}</li>
    )

    )
}
</ul>


    </div>
  )
}

export default Arrayofobjects