import React from 'react'
import "../App.css"
function ConditionalRendering() {
 
// const isLoggedin = true;
// let message;
// if(isLoggedin){

//     message = <h1>welcome user</h1>

// }
// else{
    
//     message = <h1>Please Login</h1>
// }

// return <div>
//     {message}
// </div>





const isLoggedin= true;

return(
    <div>
        <h1 className={isLoggedin? "visible":"unvisible"}>Hello user</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a. Placeat provident dignissimos doloribus repellat perspiciatis error inventore, ipsa dolores!</p>
    </div>
)



}

export default ConditionalRendering