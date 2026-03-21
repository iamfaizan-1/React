import React from 'react'

function ArrayOfObject() {
 
 const arr=[


{
    name:"faizan",
    age:21
}
,{
    name:"Abdul Rehman",
    age:21
},
{
    name:"unknown",
    age:22
}

 ]
 
 function getInfo(user)
{
return user.name +" is "+user.age+" years old"
}


    return (
    <div>

<ul>
    {
        arr.map((user,index)=>(

            <li>{getInfo(user)}</li>

        )
        )
    }
</ul>


    </div>
  )
}

export default ArrayOfObject