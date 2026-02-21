import Card from "./Component/Card"


const data = [

  {
    id: 1,
    title: "Title 1",
    description: "Description1",
    createdAt: "feb-2"
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description2",
    createdAt: "feb-2"
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description3",
    createdAt: "feb-2"
  }
  ,
  {
    id: 4,
    title: "Title 4",
    description: "Description4",
    createdAt: "feb-2"
  }


]
const obj ={
  firstName:"Muhammad",
  lastName:"Faizan"

}



const fruits=["apple","mango","banana"];

function App() {
  return (
    <div>


      {/* {

        data.map((item, index) => (

          <div key={index}>

            <Card id={item.id} title={item.title} description={item.description} createdAt={item.createdAt} deleteItem={deleteItem} />

          </div>


        )




        )
      } */}
{/* mapping */}

<ul>
  {

fruits.map((fruit,index)=>(

<li>{fruit}</li>  

)




)
  }
</ul>

{/* objects */}


<p>First Name: {obj.firstName}</p>
<p>Last Name: {obj.lastName}</p>




    </div>
  )
}

export default App