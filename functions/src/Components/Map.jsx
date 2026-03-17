import React from 'react'

function Map() {
 
 const fruits = ['Apple',"Mango","Banana","PineApple"]

    return (
    <div>


<ul>
    {
        fruits.map(
            (fruit,index)=>(
<li>{index}-{fruit}</li>
            )
        )
    }
</ul>

    </div>
  )
}

export default Map