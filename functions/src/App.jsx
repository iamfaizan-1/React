import React from 'react'
import Functions from '../src/Components/Functions'
import Login from "../src/Components/Login"
import Map from '../src/Components/Map'
import Object from "../src/Components/Object"
import Arrayofobjects from '../src/Components/Arrayofobjects'
import ConditionalRendering from '../src/Components/ConditionalRendering'
import SimpleForm from './Components/SimpleForm'
import MultiInput from './Components/MultiInput'
function App() {
  return (
    <div>


<Functions/>
      <Login/>
      <Map/>
      <Object/>
      <Arrayofobjects/>
      <ConditionalRendering/>
      <SimpleForm/>
      <MultiInput/>
    </div>
  )
}

export default App