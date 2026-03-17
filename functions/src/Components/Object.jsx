import React from 'react'

function Object() {
 
 const user ={
    firstName:"Muhammad",
    lastName:"Faizan",
    age:20
 }

const getName=(myUser)=>myUser.firstName+ " "+myUser.lastName  ;
 
    return (
    <div>

<p>username:{getName(user)}</p>


    </div>
  )
}

export default Object