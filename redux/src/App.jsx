import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import ReduxComponent from './Components/ReduxComponent'

function App() {
  return (
    <div>


  <Provider store={store}>

<ReduxComponent/>

   </Provider>


    </div>
  )
}

export default App