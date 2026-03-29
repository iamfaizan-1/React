import React from 'react'
import Header from './Components/Header'
import Router from './Router/Router'
import { Provider } from 'react-redux'
import { store } from './app/store'
function App() {
  
  //1st  method of styling
  const headingStyle = {
    color:"black",
    backgroundColor:"skyblue"
  }
  
  
  
  return (
   <Provider store={store}>


   </Provider>
  )
}

export default App