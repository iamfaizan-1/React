import React from 'react'

function Card({id,title,description,CreatedAt}) {
  return (
    <div>


<h1>{title}</h1>
<span>{description}</span>
<span>{CreatedAt}</span>
<button onClick={() => deleteItem(id)}>Delete</button>

    </div>
  )
}

export default Card